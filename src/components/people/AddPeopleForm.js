const AddPeopleForm = ({ form: { image, name }, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 m-12">
      <div>
        <input
          type="file"
          name="image"
          placeholder="image"
          onChange={onChange}
          className="block bg-gray-300 p-2 rounded-md w-full"
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={onChange}
          className="block bg-gray-300 p-2 my-2 rounded-md w-full"
        />
        <button className="bg-green-500 p-2 rounded-md font-bold w-full">Guardar</button>
      </div>
    </form>
  )
}

export default AddPeopleForm