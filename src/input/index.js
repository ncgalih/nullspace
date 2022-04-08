import { useEffect, useState } from "react"

const Input = ({matrix, setM}) => {
    const [size, setSize] = useState({col: 3, row: 3})
    const onSizeChange = e =>{
        if(e.target.value<0) return
        const s = {...size}
        s[e.target.name] = e.target.value
        setSize(s) }
    const onMatrixChange = (row, col) => (e) => {
        const m = [...matrix]
        m[row][col] = e.target.value
        setM(m)
    } 
    useEffect(()=>{
        const arr = new Array(Number(size.row)).fill([])
        setM(arr.map(()=>Array(Number(size.col)).fill('')))
    }, [size])
    return (
        <div className="">
            <div className="w-fit mx-auto p-4">
                <form className="flex flex-row items-center space-x-4 mx-auto w-fit">
                    <label>Row :</label>
                    <input value={size.row} onChange={onSizeChange} name='row' type='number' className="pl-3 pr-1 rounded bg-gray-100 w-12 py-1" />
                    <label>Col :</label>
                    <input value={size.col} onChange={onSizeChange} name='col' type='number' className="pl-3 pr-1 rounded bg-gray-100 w-12 py-1" />
                </form>
                <form className="flex flex-col space-y-3 mt-8">
                    {matrix.map((row, r)=>(
                        <div className="flex flex-row space-x-3">
                            {row.map((val, c)=>(
                                <>
                                <input type='number' value={val} onChange={onMatrixChange(r, c)} className="w-16 pl-3 py-2 rounded bg-gray-100" />
                                </>
                            ))}
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}
export default Input