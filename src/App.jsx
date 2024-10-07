import { useState, useEffect } from "react";
import TOdoInput from "./componants/input";
import TaskList from "./componants/taskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setInputArr(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(inputArr));
  }, [inputArr]);

  const addInputValue = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Task cannot be empty!");
    } else {
      const newTask = { text: inputValue, completed: false };
      setInputArr((prev) => [...prev, newTask]);
      setInputValue("");
      setErrorMessage("");
    }
  };

  const deleteValue = (input) => {
    setInputArr((prev) => prev.filter((value) => value.text !== input));
  };

  const complateTaskCheck = (e, index) => {
    const updatedTasks = inputArr.map((value, i) =>
      i === index ? { ...value, completed: e.target.checked } : value
    );
    setInputArr(updatedTasks);
  };

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-[#153677] to-[#4e085f] m-0 p-0">
        <h1 className="text-5xl text-center font-bold pt-5 text-red-200">
          TO-DO List In React
        </h1>

        <div className="bg-white w-full max-w-xl rounded-2xl mx-auto justify-center mt-16 p-5">
          <div className="flex justify-center">
            <h2 className="text-2xl font-semibold">TO-DO list</h2>
            <img className="w-8 ml-2" src="../public/img/book.png" alt="" />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}

          <TOdoInput
            addInputValue={addInputValue}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <TaskList
            inputArr={inputArr}
            deleteValue={deleteValue}
            complateTaskCheck={complateTaskCheck}
          />
        </div>
      </div>
    </>
  );
}
export default App;
