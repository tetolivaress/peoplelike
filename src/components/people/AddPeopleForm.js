const AddPeopleForm = ({ form: { image, name }, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} className="flex flex-col m-12">
      <input
        type="file"
        name="image"
        placeholder="image"
        onChange={onChange}
        className="block bg-gray-300 p-2 rounded-md"
      />
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={onChange}
        className="block bg-gray-300 p-2 my-2 rounded-md"
      />
      <button className="bg-green-500 p-2 rounded-md font-bold">Guardar</button>
    </form>
  )
}

export default AddPeopleForm