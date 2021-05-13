import { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import AddPeopleForm from './AddPeopleForm'

import readFileAsync from '@utils/FileReader'
import resizeImage from '@utils/ImageReader'
import { useHistory } from 'react-router'

import { addPeople } from '@actions'
import { useDispatch } from 'react-redux'

const AddPeople = () => {

  const dispatch = useDispatch()

  const firestore = useFirestore()
  const history = useHistory()

  const [form, setForm] = useState({
    image: '',
    name: ''
  })

  const handleChange = async ({target: { name, value, type, files }}) => {
    const fieldValue = type === 'file'
      ? await handleImage(files[0])
      : value
    
    setForm({...form, [name]: fieldValue})
  }
    

  const handleImage = async (file) => {
    try{
      const fileB64 = await readFileAsync(file)
      const image = await resizeImage(fileB64)
      return image
    }catch (error) {
      alert('Los archivos solo pueden ser tipo JPEG, JPG ó PNG')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await dispatch(addPeople({...form, like: 0, dislike: 0}))
    return history.push('/dashboard')
  }

  return <AddPeopleForm form={form} onChange={handleChange} onSubmit={handleSubmit}/>
}

export default AddPeople