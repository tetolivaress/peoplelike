const AddPeopleForm = ({ form: { image, name }, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        name="image"
        placeholder="image"
        onChange={onChange}
        className="Image"
      />
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={onChange}
        className="name"
      />
      <button>Guardar</button>
    </form>
  )
}

export default AddPeopleForm