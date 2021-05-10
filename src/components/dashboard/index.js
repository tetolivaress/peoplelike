import { PlusCircleIcon } from "@heroicons/react/outline"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PeopleList from '@components/people/PeopleList'
import { isLoaded } from "react-redux-firebase"

const Dashboard = () => {

  const people = useSelector(({ firestore }) => firestore.ordered.people)

  return (
    <div>
      <div className="flex justify-end text-2xl font-bold items-center">
        <p className="text-center flex-grow justify-self-start">Personas</p>
        <Link
          to="/people/add"
          className="p-4 bg-green-300 mr-2 text-gray-900 font-semibold rounded-md grow"
        >
          <PlusCircleIcon className="w-4 h-4 inline" />
          <span>Agregar</span>
        </Link>
      </div>
      {isLoaded(people) && <PeopleList people={people} />}

    </div>
  )
}
export default Dashboard