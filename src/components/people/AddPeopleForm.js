import { PhotographIcon } from "@heroicons/react/outline"

const AddPeopleForm = ({ form: { image, name }, onChange, onSubmit }) => {

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Nueva Persona</h1>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 m-12">
        <div>
          <input
            type="file"
            name="image"
            placeholder="image"
            onChange={onChange}
            className="block bg-gray-300 p-2 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={onChange}
            className="block bg-gray-300 p-2 my-2 rounded-md w-full"
            required
          />
          <button className="bg-green-500 p-2 rounded-md font-bold w-full grow">Guardar</button>
        </div>
        <div className="px-12 my-4 md:my-0 flex justify-center flex-col items-center">
          {
            image
              ? <img src={image} alt="new people" className="rounded-md" />
              : <PhotographIcon className="w-48 h-48 text-gray-300" />
          }
          <p className="text-center font-bold mt-2">{name || 'Nombre'}</p>
        </div>
      </form>
    </div>
  )
}

export default AddPeopleForm