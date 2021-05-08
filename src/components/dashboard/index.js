import { PlusCircleIcon } from "@heroicons/react/outline"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PeopleList from '@components/people/PeopleList'
import { isLoaded } from "react-redux-firebase"

const Dashboard = () => {

  const people = useSelector(({ firestore }) => firestore.ordered.people)

  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="/people/add"
          className="p-4 bg-green-300 mr-2 text-gray-900 font-semibold rounded-md"
        >
          <PlusCircleIcon className="w-4 h-4" />
          <span>Add Person</span>
        </Link>
      </div>
      {isLoaded(people) && <PeopleList people={people} />}

    </div>
  )
}
export default Dashboard