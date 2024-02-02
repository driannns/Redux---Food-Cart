const Counter = ({ inc, dec }) => {
  if (inc) {
    return (
      <button
        className="bg-primary d-flex align-items-center justify-content-center rounded-circle p-1"
        style={{
          cursor: "pointer",
          width: "",
          heigth: "fit-content",
        }}
        onClick={inc}
      >
        +
      </button>
    );
  } else {
    return (
      <button
        className="bg-primary d-flex align-items-center justify-content-center rounded-circle p-1"
        style={{
          cursor: "pointer",
          width: "",
          heigth: "fit-content",
        }}
        onClick={dec}
      >
        -
      </button>
    );
  }
};

export default Counter;
