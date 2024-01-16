import { useState } from "react";

type EmployeeProps = {
  name: string;
  role: string;
};

export const Employee = ({ name, role }: EmployeeProps) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="border-green-500 border-2 w-64 mb-8 text-center">
      <p>Employee Name: {name}</p>
      <p>Role: {role}</p>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>+</button>
      <br></br>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};
