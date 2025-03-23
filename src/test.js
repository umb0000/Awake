import React from 'react';
import "./output.css";

function ActivityTable() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-6">2024년도 1학기 동아리 활동 내역</h2>
        <table className="w-full border border-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-2 text-center">순서</th>
              <th className="border border-black p-2 text-center">일시</th>
              <th className="border border-black p-2 text-center">행사명</th>
              <th className="border border-black p-2 text-center">활동내용</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, i) => (
              <tr key={i}>
                <td className="border border-black p-2 text-center">{i + 1}</td>
                <td className="border border-black p-2 text-center"></td>
                <td className="border border-black p-2 text-center"></td>
                <td className="border border-black p-2 text-center"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;
