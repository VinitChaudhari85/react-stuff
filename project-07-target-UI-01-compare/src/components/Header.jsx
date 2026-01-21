import logo from "../assets/react-logo.png"
import Button from "./Button";

function Header(){
    return(
        <header className="flex justify-between px-7 items-center">
            <img src={logo} className=" object-cover h-12 rounded-full"/>
            <Button name="Login"/>
        </header>
    )
}
export default  Header;