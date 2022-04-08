import { useState } from "react"
import nullspace from "../function/nullspace"
import Matrix from "./matrix"
import Vector from "./vector"

const Result = ({matrix}) => {
    const [Nullspace, setNS] = useState()
    const [step, setStep] = useState()
    const calculate = e => {
        const {result, step} = nullspace([...matrix])
        setNS(result)
        setStep(step)
    }
    return (
        <div className="flex flex-col p-6">
            <button onClick={calculate} className="py-3 px-8 mx-auto rounded bg-red-500 text-white text-lg font-medium w-fit hover:bg-red-600">
                Submit
            </button>
            {Nullspace?(
            <div>
                <div className="flex flex-row mt-8 text-xl w-fit mx-auto items-center">
                    <p className="mr-4">Nullspace =</p>
                    {Nullspace.lenght===0? '0': 
                        Nullspace.map((v, i)=>(
                            <>
                            {i!==0?<div className="text-3xl mr-1">+</div>:''}
                            <p className="mr-1">C<sub>{i+1}</sub></p>
                            <Vector element={v} />
                            </>
                        ))
                    }
                </div>
                
                <div className="mt-6 mx-auto max-w-xl text-lg">
                    <h1 className="text-lg">Step</h1>
                    {step?step.map(s=>(
                        <>
                        <p className="mt-4 mb-2">{s.name}</p>
                        <Matrix matrix={JSON.parse(s.M)} />
                        </>
                    )):''}
                </div>
            </div>
            ):''}
            
        </div>
    )
}
export default Result