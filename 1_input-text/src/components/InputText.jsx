import { useRef, useState } from "react";

const InputText = () => {
  const [text, setText] = useState("");
  const ref = useRef();
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <div className="h-[32px] w-[25%] rounded border">
          <input
            ref={ref}
            type="text"
            className="h-full w-full px-2 py-1 outline-none"
            placeholder="Nhập đoạn văn vào đây..."
          />
        </div>
        <button
          className="cursor-pointer rounded bg-slate-500 px-2 py-1 font-[700] text-white"
          onClick={() => {
            setText(ref.current.value);
          }}
        >
          Xác nhận
        </button>
      </div>
      <div className="text-center">
        <p className="text-[32px] font-[700]">
          Kết quả: <span className="font-[400] text-red-500">{text}</span>
        </p>
      </div>
    </>
  );
};
export default InputText;
