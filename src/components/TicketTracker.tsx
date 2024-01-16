import { Employee } from "../components/Employee";
import employees from "../data/employees.ts";

const TicketTracker = () => (
  <>
    <h1 className="text-3xl text-center mb-4 mt-4">Tracker</h1>
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {employees.map(({ id, name, role }) => (
        <Employee key={id} name={name} role={role} />
      ))}
    </div>
  </>
);

export default TicketTracker;
