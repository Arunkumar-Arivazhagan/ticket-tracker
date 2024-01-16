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
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <div className="border-green-500 border-2 p-2 w-32 m-auto mb-8 mt-4 text-center">
        <p>Counter: </p>
        <p>{counter}</p>
        <button className="mr-6" onClick={decrementCounter}>
          -
        </button>
        <button onClick={incrementCounter}> + </button>
      </div>
    </div>
  );
};
