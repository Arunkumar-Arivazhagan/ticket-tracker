import { Employee } from "./components/Employee";
import employees from "./data/employees.ts";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center mb-4 mt-4">Tracker</h1>
      <div className="flex flex-wrap gap-8">
        {employees.map((employee) => {
          return <Employee name={employee.name} role={employee.role} />;
        })}
      </div>
    </>
  );
}

export default App;
