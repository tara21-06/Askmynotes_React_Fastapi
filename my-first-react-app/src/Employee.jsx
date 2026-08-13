function Employee(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Employee ID: {props.id}</p>
      <p>Department: {props.department}</p>
      <p>Designation: {props.designation}</p>
      <p>Salary: {props.salary}</p>
    </div>
  );
}

export default Employee;