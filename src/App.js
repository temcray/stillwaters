import React, { useState } from "react";
import ResidentCard from "./components/ResidentCard";


function App() {
  const [residents, setResidents] = useState([
    { id: 1, nmae: "john doe", age: 30, status: "Checked In" },
    { id: 2, name: "jane smith", age: 25, status: "Checked Out"},
    { id: 3, name: "bob johnson", age: 40, status: "Checked In" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Still Waters Shelter Residents</h1>
      {residents.map((resident) => 
      (
        <ResidentCard 
        key={resident.id} 
        name={resident.name} 
        age={resident.age} 
        status={resident.status} 
        />
      ))}

      <button onClick={() =>
      setResidents([
        ...residents,
        { id: residents.length + 1, 
          name: "new resident", 
          age: 35, status: "Checked In" },
      ])

      }>
        Add Resident

      </button>

      <button onClick={() =>
      setResidents([])}>
        Clear Residents
        </button>
    </div>
  );
}

export default App;

