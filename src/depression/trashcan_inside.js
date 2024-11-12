import React, { useState, useEffect } from 'react';
import '../output.css';

const TrashCan_i = () => {
  const [memoItems, setMemoItems] = useState([]);

  useEffect(() => {
    // Fetch trash items from the backend when the component loads
    const fetchTrashItems = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage
      try {
        const response = await fetch('http://your-backend-url/emobin-get', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMemoItems(data.trash_items);
        } else {
          console.error("Failed to fetch trash items:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching trash items:", error);
      }
    };

    fetchTrashItems();
  }, []);

  // Delete all trash items
  const handleDeleteAll = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://your-backend-url/emobin-dump', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert("모든 감정 쓰레기가 성공적으로 삭제되었습니다");
        setMemoItems([]); // Clear the state
      } else {
        console.error("Failed to delete trash items:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting trash items:", error);
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-start items-center">
      {/* Title Section */}
      <div className="w-full text-left px-10 mb-10">
        <h1 className="text-black text-xl font-extrabold font-['Pretendard_Variable'] leading-tight tracking-tight">내려 놓은 생각들</h1>
      </div>

      {/* Trash Items List */}
      <div className="w-full max-w-[1200px] h-full overflow-y-scroll px-5 gap-4 columns-2 md:columns-3 lg:columns-4 space-y-4">
        {memoItems.length > 0 ? (
          memoItems.map((item) => (
            <div key={item.id} className="break-inside-avoid p-4 bg-gray-200 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <div className="text-gray-800 text-[14px] font-medium leading-[22px] font-['Pretendard_Variable'] tracking-tight text-left">
                {item.item}
              </div>
              <div className="text-gray-500 text-[10px] font-normal leading-tight tracking-tight mt-2 text-right">
                {item.do_when}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">저장된 감정 쓰레기가 없습니다.</p>
        )}
      </div>

      {/* Delete All Button */}
      {memoItems.length > 0 && (
        <button
          onClick={handleDeleteAll}
          className="mt-10 p-2 px-6 bg-red-500 text-white rounded-full font-semibold shadow-md hover:bg-red-600 transition duration-300"
        >
          모든 감정 쓰레기 삭제
        </button>
      )}
    </div>
  );
};

export default TrashCan_i;
