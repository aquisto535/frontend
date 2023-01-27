import React from "react";

function Event() {
  const [amount, setamount] = React.useState(); //setState는
  const [flipped, setflipped] = React.useState(false);

  const onChange = (event) => {
    setamount(event.target.value);
  };

  const reset = () => setamount(0);

  const onflip = () => {
    reset();
    setflipped((current) => !current);
  };

  return (
    <div>
      <h1 className="">Super Converter</h1>
      <div>
        {/* jsx에선 for를 htmlFor로 써야함. class도 className으로 써야 */}
        <label htmlFor="Minutes">Minutes</label>
        <input
          placeholder="Minutes"
          type="number"
          id="Minutes"
          value={flipped ? amount * 60 : amount}
          onChange={onChange}
          disabled={flipped}
        ></input>
      </div>

      <div>
        <label htmlFor="Hours">Hours 안녕하세요</label>
        <input
          placeholder="Hours"
          type="number"
          id="Hours"
          value={flipped ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!flipped}
        ></input>
        <button onClick={reset}>Reset</button>
        <button onClick={onflip}>Flip</button>
      </div>
    </div>
  );
}

export default Event;
