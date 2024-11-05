import React, { useState } from 'react';
import './output.css';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-8  font-['Pretendard_Variable']" >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">날짜 선택</h2>
      <input
        type="date"
        className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      {selectedDate && (
        <p className="mt-4 text-gray-700">
          선택된 날짜: <span className="font-medium" >{selectedDate}</span>
        </p>
      )}
    </div>
  );
}

export default DatePicker;
