import { RxCross1 } from "react-icons/rx";
import InputGroup from "react-bootstrap/InputGroup";

export default function TaskList({ inputArr, deleteValue, complateTaskCheck }) {
  return (
    <>
      <div>
        {inputArr.length > 0 ? (
          inputArr.map((input, index) => (
            <div
              key={index}
              className="flex items-center justify-between ps-2 pt-3">
              <div className="flex items-center gap-3">
                <InputGroup.Checkbox
                  checked={input.completed}
                  onChange={(e) => complateTaskCheck(e, index)}
                  className="border-2 border-black "
                />
                <li
                  className={`list-none font-medium text-2xl ${
                    input.completed ? "line-through text-gray-400" : ""
                  }`}>
                  {input.text}
                </li>
              </div>
              <button onClick={() => deleteValue(input.text)}>
                <RxCross1 />
              </button>
            </div>
          ))
        ) : (
          <p className="ps-4 pt-4 text-lg text-gray-500">No tasks available</p>
        )}
      </div>
    </>
  );
}
