import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();


  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
      // setTimerExpired(true);
      // dialog.current.showModal();
    }, 10);
    // setTimerStarted(true);

  }

  if(timeRemaining <= 0){
    clearInterval(timer.current)
    dialog.current.showModal()
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000)
  }

  function handleStop() {
    dialog.current.showModal()
    // clearTimeout(timer.current);
    clearInterval(timer.current)
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
