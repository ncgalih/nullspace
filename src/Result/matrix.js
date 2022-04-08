const Matrix = ({matrix}) => {
    return (
    <>
        {matrix?
        <div className="flex flex-row text-center">
            <div className="border-gray-800 border-y-2 border-l-2 w-2 mr-1"></div>
            <div className="flex flex-col justify-between mx-1">
                {matrix.map(row=>(
                    <div className="flex flex-row justify-between space-x-3">
                        {row.map(val=>(
                            <p>{val}</p>
                        ))}
                    </div>
                ))}    
            </div>
            <div className="border-r w-2 border-gray-800"></div>
            <div className="flex flex-col ml-2">
                {Object.keys(matrix).map(i=><p>0</p>)}
            </div>
            <div className="border-gray-800 border-y-2 border-r-2 w-2 ml-1"></div>
        </div>
        :''}
    </>
    )
}
export default Matrix