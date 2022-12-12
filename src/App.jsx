import {
  AddTodoAPI,
  CheckTodoAPI,
  DeleteTodoApi,
  FilterTodoAPI,
  GetAllTodosAPI,
} from "apis";
import { Button, Input, Loading, Todo } from "components";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/App.scss";

function App() {
  const getAllData = () => {
    GetAllTodosAPI()
      .then((response) => {
        setTodos(response);
        successGetData();
      })
      .catch((error) => {
        failed();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addTodo = (data) => {
    setLoading(true);
    AddTodoAPI({ title: data, checked: false })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        getAllData();
      });
  };

  const todoChecker = (data) => {
    CheckTodoAPI(data)
      .then((response) => {
        actionTodo();
      })
      .catch((error) => {
        failed();
      })
      .finally(() => {
        setTodoValue(" ");
        getAllData();
      });
  };
  const todoDeleter = (id) => {
    setLoading(true);
    DeleteTodoApi(id)
      .then((response) => {
        actionTodo();
      })
      .catch((error) => {
        failed();
      })
      .finally(() => {
        getAllData();
      });
  };

  const filterData = (status) => {
    setLoading(true);
    FilterTodoAPI(status)
      .then((response) => {
        setTodos(response);
        successGetData();
      })
      .catch((error) => {
        failed();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const successGetData = () => toast.success("اطلاعات با موفقیت بارگذاری شد");
  const failed = () => toast.error("خطایی رخ داده است");
  const actionTodo = () => toast.success("عملیات با موفقیت انجام شد");

  useEffect(() => {
    getAllData();
  }, []);

  const [todoValue, setTodoValue] = useState(" ");
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");

  return (
    <div className="App">
      <ToastContainer />
      <header className="App__header">
        <h3>Tasks</h3>
      </header>
      {loading ? (
        <Loading type="grid" />
      ) : (
        <>
          <div className="App__body">
            <div className="App__body__search-box">
              <Input
                type="text"
                holder="todo.."
                value={todoValue}
                onChange={(e) => {
                  setTodoValue(e.target.value);
                }}
              />
              <Button
                text={"+"}
                type={"warning"}
                size={"medium"}
                Click={() => {
                  addTodo(todoValue);
                }}
              />
            </div>
            <div className="App__body__filter">
              <select value={filterStatus }
                onChange={(e) => {
                  filterData(e.target.value);
                  setFilterStatus(e.target.value)
                }}
              >
                <option value="">All</option>
                <option value="true">Completed</option>
                <option value="false">Uncompleted</option>
              </select>
            </div>
          </div>
          <footer className="App__footer">
            {todos.length < 0
              ? "No Todos Found"
              : todos.map((todo, index) => (
                  <Todo
                    key={index}
                    data={todo}
                    checkTodo={(data) => todoChecker(data)}
                    deleteTodo={(id) => todoDeleter(id)}
                  />
                ))}
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
