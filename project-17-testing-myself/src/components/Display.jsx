export default function Display(){
    return <div className="w-96 border border-white p-5 flex flex-col gap-3 justify-center items-center">
        <p>Timer for Y minutes</p>
        <p className=" w-56">Time Remaining: X Minutes</p>
        <p className=" w-56">Status: Idle</p>
    </div>
}