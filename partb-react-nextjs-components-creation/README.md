
# 🌐 React Web App — Components Activity

This is a **web-based React application** that demonstrates how to build and use reusable components. The project is built with React and uses functional components, props, and the `useState` hook to manage state and user input.

---

## 📸 UI Overview

The app displays the following components on one page:

- 🪪 Welcome Card (custom greeting)
- 🔢 Counter with Increment/Decrement buttons
- 🧑‍🎓 Student Info Form with Submit functionality

---

## 🧩 Components Overview

### 1. `WelcomeCard.js`

Displays a greeting using a prop called `name`.

**Code:**
```jsx
import React from 'react';

const WelcomeCard = ({ name }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>Welcome, {name}!</h2>
      <p>We're glad you're here. Enjoy exploring React and Next.js!</p>
    </div>
  );
};

export default WelcomeCard;
```

**Usage:**
```jsx
<WelcomeCard name="Student" />
```

---

### 2. `Counter.js`

A stateful component that increases or decreases a number.

**Code:**
```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '1rem' }}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
```

**Behavior:**
- Starts at 0
- Increases or decreases when buttons are clicked

---

### 3. `StudentInfo.js`

A form component that captures a student's name and ID.

**Code:**
```jsx
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
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="text"
          name="id"
          placeholder="Student ID"
          value={student.id}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentInfo;
```

**Behavior:**
- Form inputs update state as you type
- On submit, shows alert with name and ID

---

## 🧪 Sample Inputs

### Counter

| Action             | Result      |
|--------------------|-------------|
| Click "Increment"  | Counter: 1  |
| Click again        | Counter: 2  |
| Click "Decrement"  | Counter: 1  |
| Click again        | Counter: 0  |
| Click again        | Counter: -1 |

---

### Student Info Form

| Name             | Student ID    |
|------------------|---------------|
| Roch Balberona   | 23-3328-996   |
| Ana Cruz         | 21-4455-008   |
| *(empty fields)* | ❌ Submit blocked by `required` attribute |

---

need some practice for using launch.json, just do this manually by going to integrated terminal in part b and using "npm run dev"