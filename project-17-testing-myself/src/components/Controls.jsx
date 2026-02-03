import ControlButton from "./ControlButton"
export default function Controls(){
    return <div className="w-96 flex justify-evenly">
        <ControlButton buttonName="Start"/>
        <ControlButton buttonName="Pause"/>
        <ControlButton buttonName="Reset"/>
    </div>
}