import { ReactComponent as Github} from '../aset/github.svg'

const Header = () => {
    return (
        <div className="h-20 text-gray-700 flex flex-row items-center justify-between px-6">
            <h1 className="text-2xl">Nullspace Calculator</h1>
            <a href='https://github.com/ncgalih/nullspace'>
                <Github width={26} height={26} />
            </a>
        </div>
    )
}
export default Header