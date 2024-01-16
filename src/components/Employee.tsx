type EmployeeProps = {
  name: string;
  role: string;
};

export const Employee = (props: EmployeeProps) => {
  return (
    <div className="border-green-500 border-2 w-64 mb-8 text-center">
      <p>Employee Name: {props.name}</p>
      <p>Role: {props.role}</p>
    </div>
  );
};
