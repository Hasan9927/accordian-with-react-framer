import { useRef } from "react";
import { Questions } from "../api/api"
import AccoElement from "./AccoElement";

const Accordian = () => {
 const questions = Questions;
 const ref = useRef(null)  
//  console.log(questions)
  return (
    <>
      <div ref={ref} className="min-h-screen  max-w-screen mx-auto flex justify-center items-center transition ease-in-out duration-300">
        <div className="shadow-lg p-4 max-w-4xl bg-green-50 rounded-xl flex flex-col gap-3">
        {questions.map(ques =>(
         <AccoElement key={ques.id} ques={ques} referece={ref}/>
        ))}
        </div>
      </div>
    </>
  )
}

export default Accordian
