export default function TaskList({ inputArr }) {
  return (
    <>
      <div>
        {inputArr.length > 0 ? (
          inputArr.map((input, index) => (
            <li
              key={index}
              className="list-none font-medium text-2xl ps-4 pt-4">
              {input}
            </li>
          ))
        ) : (
          <p className="ps-4 pt-4 text-lg text-gray-500">No tasks available</p>
        )}
      </div>
    </>
  );
}
