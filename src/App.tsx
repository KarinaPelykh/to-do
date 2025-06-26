import { StatusFilter } from "./components/filter/StatusFilter";
import { Form } from "./components/form/From";
import { ItemList } from "./components/list/ItemList";
import { TaskCounter } from "./components/TaskCounter";

function App() {
  return (
    <>
      <StatusFilter />
      <TaskCounter />
      <Form />
      <ItemList />
    </>
  );
}

export default App;
