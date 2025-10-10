import React from "react";
import StudentInfoCard from "./components/StudentInfoCard";

export default function App() {
  const students = [
    { name: "Aditi Arya", rollNo: "23BCS11535", course: "Computer Science" },
    { name: "Daksh Thakran", rollNo: "23BCS11440", course: "Computer Science" },
    {
      name: "Purvisha",
      rollNo: "23BCS11976",
      course: "Electrical Engineering",
    },
    { name: "Mohit", rollNo: "23BCS11994", course: "Civil Engineering" },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Student Information
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {students.map((student, index) => (
          <StudentInfoCard
            key={index}
            name={student.name}
            rollNo={student.rollNo}
            course={student.course}
          />
        ))}
      </div>
    </div>
  );
}
