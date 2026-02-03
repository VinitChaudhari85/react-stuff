import { useRef } from "react";
import { useState } from "react";

export default function Input({ labelName }) {
  const timer_input = useRef();
  const [timer, setTimer] = useState()
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <label className="text-lg">{labelName}</label>
      <div className="flex gap-2">
        <input
          ref={timer_input}
          type="text"
          className="border border-white rounded w-20"
        />
        <button className="w-16 border border-white p-1 bg-cyan-400 rounded-lg hover:bg-cyan-500 cursor-pointer hover:scale-105 transition">
          Set
        </button>
      </div>
    </div>
  );
}