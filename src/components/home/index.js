import { isLoaded, useFirestoreConnect } from "react-redux-firebase"
import Carousel from '@components/carousel'
import { useSelector } from "react-redux"

const Home = () => {
  useFirestoreConnect([
    { collection: 'people' } // or 'todos'
  ])
  const people = useSelector(({ firestore }) => firestore.ordered.people)
  return (
    <div className="w-full">
      { isLoaded(people) && <Carousel cards={people} cardsAmount={1} />}
    </div>
  )
}
export default Home