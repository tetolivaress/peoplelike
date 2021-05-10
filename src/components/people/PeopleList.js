import Person from './Person'

const PeopleList = ({ people }) => (
  <div className="md:mx-96">
    {
      people.map((person, i) => (
        <div className="mx-4 my-2 grow" key={i}>
          <Person person={person} />
        </div>
      ))
    }
    <div></div>
  </div>
)

export default PeopleList