import React, { useState } from 'react';

const StudentInfo = () => {
  const [student, setStudent] = useState({ name: '', id: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${student.name} (ID: ${student.id})`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>Student Info</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
        <br /><br />
        <input type="text" name="id" placeholder="Student ID" value={student.id} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentInfo;
