export default function TOdoInput({
  inputValue,
  setInputValue,
  addInputValue,
}) {
  return (
    <>
      <div className="bg-[#edeef0] flex justify-between items-center rounded-[40px] mt-9">
        <input
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="outline-none p-3 bg-transparent ps-7 text-xl"
          type="text"
          placeholder="Enter your task here"
        />
        <button
          onClick={addInputValue}
          className="py-4 px-12 bg-[#ff5945] text-white rounded-[40px] text-xl font-semibold">
          Add
        </button>
      </div>
    </>
  );
}
