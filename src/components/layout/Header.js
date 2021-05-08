import { Link } from "react-router-dom"
import { ChartBarIcon } from '@heroicons/react/solid'

const Header = () => (
  <nav className="flex justify-between fixed text-center font-bold top-0 bg-pink-100 text-green-700 p-4 w-full">
    <Link to={"/"}>
      <p>People Like</p>
    </Link>
    <div className="inline-flex space-x-8">
      <Link to="/dashboard" className="h-5 w-5 text-blue-500">
        <ChartBarIcon className="h-5 w-5 text-blue-500"/>
      </Link>
    </div>
  </nav>
)

export default Header