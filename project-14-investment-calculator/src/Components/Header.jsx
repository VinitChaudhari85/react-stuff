import logo from "../assets/rupee-logo.png"

export default function Header(){
    return <header className="flex flex-col items-center pt-6">
        <img src={logo} alt="logo" className="h-32 rounded-full object-cover"/>
        <h1 className="text-white text-3xl">Investment Calculator</h1>
    </header>
}