import { useState } from "react";

function Calculator() {
  const [value, setValue] = useState(5);
  const [person, setPerson] = useState(1);
  const [bill, setBill] = useState(5);
  function updateValue(e) {
    let x = parseInt(e.target.value);
    console.log(x);
    setValue(() => {
      return x;
    });
  }
  function updateBill(e) {
    let x = e.target.value;

    setBill(() => {
      return x;
    });
  }

  function decPerson(e) {
    e.preventDefault();
    setPerson((x) => (x > 1 ? x - 1 : x));
  }
  function incPerson(e) {
    e.preventDefault();
    setPerson((x) => x + 1);
  }
  return (
    <>
      <div className="sm:container mx-auto h-screen items-center flex bg-black">
        <div className="card rounded-3xl flex flex-col w-full p-4  sm:w-96 mx-auto  bg-gray-800 text-white">
          <h1 className="px-4 text-3xl border-b-4 border-gray-500 pb-3 font-semibold">
            Tips
          </h1>
          <form className="flex justify-between p-4 flex-col gap-6 border-b-4 border-gray-500">
            <div className="total flex justify-between items-center">
              <label className="uppercase">Enter Total :</label>
              <input
                type="number"
                className="text-black p-1 bg-gray-100 rounded-lg text-center font-semibold text-md"
                onChange={updateBill}
                value={bill}
              />
            </div>
            <div className="howmuch flex">
              <input
                type="range"
                className="flex-1 "
                value={value}
                onChange={updateValue}
              />
              <div className="percentage p-2 mx-3 rounded-lg bg-white text-black font-semibold">
                {value}
              </div>
            </div>

            <div className="persons flex justify-between items-center">
              <span className="uppercase">Number Of Person:</span>
              <div className="buttons">
                <button
                  className="px-2 mx-2  bg-red-600 aspect-square text-2xl rounded-full"
                  onClick={decPerson}
                >
                  -
                </button>
                <span className="text-3xl mx-5 ">{person}</span>
                <button
                  className="px-2 mx-2 bg-green-600 aspect-square text-2xl rounded-full"
                  onClick={incPerson}
                >
                  +
                </button>
              </div>
            </div>
          </form>
          <div className="calculated p-4 flex justify-between">
            <div className="individual flex flex-col gap-4 items-center uppercase">
              <h1>Per Person ($)</h1>
              <p className="percentage p-2 mx-3 rounded-lg bg-white text-black font-semibold text-center">
                {((bill / person / 100) * value).toFixed(2)}
              </p>
            </div>
            <div className="total flex flex-col gap-4 items-center uppercase">
              <h1>Total Tip($)</h1>
              <p className="percentage p-2 mx-3 rounded-lg bg-white text-black font-semibold text-center">
                {((bill / 100) * value).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
