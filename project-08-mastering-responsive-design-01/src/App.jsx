import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#0f141e] p-6">
      <div className="text-white">flex-1 makes them take remaining space</div>
      <div className="flex gap-4 border border-white rounded-lg">
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-1">
          Box 1
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-1">
          Box 2
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-1">
          Box 3
        </div>
      </div>

      <div className="text-white pt-10">flex-none won't shrink or grow</div>
      <div className="flex gap-4 border border-white rounded-lg">
        <div className="rounded-lg bg-red-500 flex justify-center items-center w-64 flex-none">
          Box 1
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-1">
          Box 2
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-1">
          Box 3
        </div>
      </div>
      <div className="text-white pt-10">flex-initial allows them to shrink but not grow</div>
      <div className="flex gap-4 border border-white rounded-lg">
        <div className="rounded-lg bg-red-500 flex justify-center items-center w-32 flex-none">
          Box 1
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center w-68 flex-initial">
          Box 2
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center w-96 flex-initial">
          Box 3
        </div>
      </div>

      <div className="text-white pt-10">flex-auto allows them to grow and shrink</div>
      <div className="flex gap-4 border border-white rounded-lg">
        <div className="rounded-lg bg-red-500 flex justify-center items-center w-28 flex-auto">
          Box 1
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center w-48 flex-auto">
          Box 2
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center w-72 flex-auto">
          Box 3
        </div>
      </div>

      <div className="text-white pt-10">flex-fraction/total allows them to adjust according to the size defined</div>
      <div className="flex gap-4 border border-white rounded-lg">
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-1/4">
          Box 1
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-2/4">
          Box 2
        </div>
        <div className="rounded-lg bg-red-500 flex justify-center items-center flex-1/4">
          Box 3
        </div>
      </div>
    </div>
  );
}

export default App;
