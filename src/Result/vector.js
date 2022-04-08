const Vector = ({element}) => (
    <div className="flex flex-row text-center">
        <div className="border-gray-800 border-y-2 border-l-2 w-2"></div>
        <div className="flex flex-col mr-1">
            {element? element.map(v=><p>{v}</p>) : ''}
        </div>
        <div className="border-gray-800 border-y-2 border-r-2 w-2"></div>
    </div>            
)
export default Vector