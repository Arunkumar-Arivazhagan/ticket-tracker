import { Employee } from "./components/Employee";
import employees from "./data/employees.ts";

const App = () => (
  <>
    <h1 className="text-3xl text-center mb-4 mt-4">Tracker</h1>
    <div className="grid grid-cols-3 gap-8">
      {employees.map(({ id, name, role }) => (
        <Employee key={id} name={name} role={role} />
      ))}
    </div>
  </>
);

export default App;
