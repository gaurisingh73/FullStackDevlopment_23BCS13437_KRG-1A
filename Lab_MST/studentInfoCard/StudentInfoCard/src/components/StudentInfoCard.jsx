import React from "react";

export default function StudentInfoCard({ name, rollNo, course }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300 text-left">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        Roll No: <span className="font-medium">{rollNo}</span>
      </p>
      <p className="text-blue-600 font-semibold">{course}</p>
    </div>
  );
}
