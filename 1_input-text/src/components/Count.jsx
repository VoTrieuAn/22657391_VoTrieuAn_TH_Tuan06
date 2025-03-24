import { useReducer } from "react";

const ButtonCalc = [
  {
    id: 1,
    opera: "+",
    type: "counter/add",
  },
  {
    id: 2,
    opera: "-",
    type: "counter/minus",
  },
];

const initial = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "counter/add": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "counter/minus": {
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }
    }
    default: {
      return state;
    }
  }
};

const Count = () => {
  const [counter, dispatch] = useReducer(counterReducer, initial);
  const handleClickButton = (type) => {
    dispatch({
      type,
    });
  };
  return (
    <>
      <div className="">
        <div className="mb-2 text-center text-[48px] font-[500]">
          {counter.count}
        </div>
        <div className="flex items-center justify-center gap-2">
          {ButtonCalc.map((button) => (
            <button
              key={button.id}
              className="w-[64px] cursor-pointer rounded bg-slate-500 px-2 py-1 font-[700] text-white"
              onClick={() => handleClickButton(button.type)}
            >
              {button.opera}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Count;
