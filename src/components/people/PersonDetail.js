import { HeartIcon, XIcon } from "@heroicons/react/outline"
import { useRef, useState } from "react"
import { useSwipeable } from "react-swipeable"

const PersonDetail = ({ person, onLike }) => {

  const [ready, setReady] = useState(false)

  const handleSwipe = useSwipeable({
    onSwipedUp: ()=>onLike(person, true),
    onSwipedDown: ()=>onLike(person, false)
  })

  let image = useRef(null)

  const refPassthrough = (el) => {
    handleSwipe.ref(el)
    image.current = el
  }

  const handleClick = (person, like) => {
    onLike(person, like)
    setReady(true)
  }

  return (
    <div className="relative flex flex-col text-white font-semibold mx-0 md:mx-96">
      <img
        src={person.image} alt={person.name}
        className="mx-12 md:mx-44 shadow rounded object-contain  max-h-96"
        {...handleSwipe}
        ref={refPassthrough}
        />
      <p className="text-gray-900 font-bold pt-2 text-center">{person.name}</p>
      <div className="grid grid-cols-2 gap-1 justify-center mx-12 md:mx-44 my-2">
        <div
          className="bg-red-600 px-3 py-2 rounded-l-md flex items-center justify-evenly"
          onClick={()=>handleClick(person, false)}
        >
          <XIcon className="w-4 h-4 inline" />
          <span>No!</span>
        </div>
        <div
          className="bg-green-600 px-3 py-2 rounded-r-md flex items-center justify-evenly"
          onClick={()=>handleClick(person, true)}
        >
          <HeartIcon className="w-4 h-4 inline" />
          <span>Me Gusta</span>
        </div>
      </div>
      {ready && <div className="absolute bg-black opacity-70 top-0 right-0 left-0 bottom-0 flex items-center justify-center">
        <h1>Ya votaste por {person.name}</h1>
      </div>}
    </div>
  )
}

export default PersonDetail