import { useState } from "react";
import TOdoInput from "./componants/input";
import TaskList from "./componants/taskList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputArr, setInputArr] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addInputValue = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Task cannot be empty!");
    } else {
      setInputArr((prev) => [...prev, inputValue]);
      setInputValue("");
      setErrorMessage(""); // Clear error message
    }
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
          <TaskList inputArr={inputArr} />
        </div>
      </div>
    </>
  );
}
export default App;
