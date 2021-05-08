import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline"

const Person = ({ person }) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center justify-center">
      <img src={person.image} alt={person.name} className="rounded-md max-h-24" />
      <div className="col-span-3">
        <h1 className="font-bold">{person.name}</h1>
        <h1><ThumbUpIcon className="w-4 h-4 inline" /> {person.like}</h1>
        <h1><ThumbDownIcon className="w-4 h-4 inline" /> {person.dislike}</h1>
      </div>
    </div>
  )
}

export default Person