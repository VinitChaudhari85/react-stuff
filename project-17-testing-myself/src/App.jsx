import Title from "./components/Title"
import Input from "./components/Input"
import Controls from "./components/Controls"
import Display from "./components/Display"

export default function Ap(){
  return(
    <div className="min-h-screen bg-gray-700 text-white flex flex-col gap-3">
      {/* Title section */}
      <header className="text-center pt-6">
        <Title heading="React Focus Timer"/>
      </header>

      <main className="flex flex-col gap-4 justify-center items-center bg-gray-800 w-1/3 rounded-lg p-6 mx-auto">
        {/* input section is here  */}
        <Input labelName="Enter the focus time" />
        {/* then display */}
        <Display/>
        {/* then input buttons */}
        <Controls/>
      </main>
    </div>
  )
}