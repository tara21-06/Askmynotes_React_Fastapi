import Employee from "./Employee";

function App() {
  return (
    <div>
      <h1>Employee Profile Cards</h1>

      <Employee
        name="Ramesh"
        id="EMP101"
        department="HR"
        designation="Manager"
        salary="50000"
      />

      <Employee
        name="Kavya"
        id="EMP102"
        department="IT"
        designation="Developer"
        salary="60000"
      />

      <Employee
        name="Rahul"
        id="EMP103"
        department="Finance"
        designation="Accountant"
        salary="45000"
      />

      <Employee
        name="Sneha"
        id="EMP104"
        department="Marketing"
        designation="Executive"
        salary="40000"
      />
    </div>
  );
}

export default App;