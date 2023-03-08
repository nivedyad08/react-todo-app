import Input from "../components/Input";
import Button from "../components/Button";
import ListTask from "../components/ListTask";
import React, { useEffect, useState } from "react";

let selectedTask;
function AddTask() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [count, setcount] = useState(0);

  useEffect(() => {
    setcount(tasks.length);
  }, [tasks]);

  const update = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id == selectedTask) {
          item.title = value;
        }
        item.checked = false;
        item.disabled_status = false;
        return item;
      })
    );
    setValue("");
    selectedTask = "";
  };
  const addItem = () => {
    if (value) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: value,
          disabled_status: false,
          checked: false,
        },
      ]);
      setValue("");
    }
  };

  const deleteItem = ({ id }) =>
    setTasks(tasks.filter((item) => item.id != id));

  const checkHandler = (task, checked) => {
    if (checked) {
      setValue(task.title);
      selectedTask = task.id;
    } else {
      selectedTask = "";
      setValue("");
    }
    setTasks(
      tasks.map((item) => {
        if (item.id != task.id) {
          item.disabled_status = checked;
        } else item.checked = checked;
        return item;
      })
    );
  };
  return (
    <div className="todo-container">
      <div className="header">TODO App {count}</div>
      <div className="add-task">
        <Input
          placeholder="Add a new task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button
          btnText="Submit"
          textClass="add-btn"
          onClick={!selectedTask ? addItem : update}
        />
      </div>
      <div className="task">
        {tasks.map((item, i) => (
          <ListTask
            item={item}
            key={item.id}
            onClick={() => {
              deleteItem(item);
            }}
            onChange={(e) => {
              checkHandler(item, e.target.checked);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AddTask;
