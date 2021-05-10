import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline"

const Person = ({ person }) => {
  const { name, image, like, dislike } = person

  return (
    <div className="grid grid-cols-4 gap-4 items-center justify-center capitalize">
      <div className="flex justify-center">
        <img src={image} alt={name} className="rounded-md max-h-36" />
      </div>
      <div className="col-span-3">
        <h1 className="font-bold">{name}</h1>
        <h1><ThumbUpIcon className="w-4 h-4 inline" /> {like}</h1>
        <h1><ThumbDownIcon className="w-4 h-4 inline" /> {dislike}</h1>
      </div>
    </div>
  )
}

export default Person