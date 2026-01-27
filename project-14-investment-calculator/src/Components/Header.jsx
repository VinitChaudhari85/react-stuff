import logo from "../assets/investment-calculator-logo.png"

export default function Header(){
    return <header className="flex flex-col items-center pt-6">
        <img src={logo} alt="logo" className="h-32"/>
        <h1 className="text-white text-3xl">Investment Calculator</h1>
    </header>
}