import { StatusFilter } from "./components/filter/StatusFilter";
import { Form } from "./components/form/From";
import { ListToDo } from "./components/list/components/ListToDo";
import { TaskCounter } from "./components/TaskCounter";

function App() {
  return (
    <>
      <StatusFilter />
      <TaskCounter />
      <Form />
      <ListToDo />
    </>
  );
}

export default App;
