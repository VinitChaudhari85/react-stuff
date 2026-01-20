import { useState } from "react";

function App() {
  const [color, setColor] = useState('bg-blue-300')
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-400 ">
      <div className={`${color} w-[600px] min-h-[200px] py-6
 flex flex-col items-center justify-center rounded-2xl gap-10`}>

        <p className="text-white text-3xl">Change the color</p>

        <div className="flex gap-20">
          <button onClick={()=> setColor('bg-red-500')} className="w-[70px] bg-blue-400 rounded-2xl hover:bg-blue-200">
            Red
          </button>
          <button onClick={()=> setColor('bg-green-500')} className="w-[70px] bg-blue-400 rounded-2xl hover:bg-blue-200">
            Green
          </button>
          <button onClick={()=> setColor('bg-yellow-500')} className="w-[70px] bg-blue-400 rounded-2xl hover:bg-blue-200">
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;