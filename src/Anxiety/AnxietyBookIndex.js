import { useState, useEffect } from 'react';

import '../output.css';

const AnxietyBookIndex = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState([]);

  // Fetch bookmarks on component mount
  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://your-backend-url/angerbook-get-bookmark', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBookmarks(data.bookmarks);
      } else {
        console.error('Failed to fetch bookmarks:', response.status);
      }
    } catch (error) {
      console.error('Failed to fetch bookmarks:', error);
    }
  };

  const deleteBookmark = async (worry, reply) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://your-backend-url/angerbook-delete-bookmark', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ worry, reply }),
      });

      if (response.ok) {
        setBookmarks((prevBookmarks) =>
          prevBookmarks.filter((bookmark) => !(bookmark.worry === worry && bookmark.reply === reply))
        );
      } else {
        console.error('Failed to delete bookmark:', response.status);
      }
    } catch (error) {
      console.error('Failed to delete bookmark:', error);
    }
  };

  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.worry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.reply.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center px-4 py-2">
      <div className="w-full flex justify-center items-center px-4 py-2 border-b">
        <span className="text-[20px] font-bold text-black font-['Pretendard_Variable']">
          불안의 책갈피
        </span>
      </div>

      <div className="w-full flex flex-col gap-4 p-4 mt-4 overflow-y-auto h-[620px] font-['Pretendard_Variable']">
        {filteredBookmarks.map((bookmark, index) => (
          <div
            key={index}
            className="w-full p-5 bg-white border border-[#FFD8B1] rounded-lg shadow-sm font-['Pretendard_Variable']"
          >
            <p className="text-base font-semibold text-[#4B4B4B] mb-2 whitespace-pre-wrap leading-relaxed" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              {bookmark.worry}
            </p>
            <p className="text-xs text-[#4B4B4B] bg-[#FFF7EB] p-2 rounded leading-relaxed whitespace-pre-wrap mt-1" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              {bookmark.reply}
            </p>
            <button
              onClick={() => deleteBookmark(bookmark.worry, bookmark.reply)}
              className="text-red-500 text-sm mt-2 underline"
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnxietyBookIndex;
