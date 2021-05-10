const addPeople = (payload, firestore) => {
  return async dispatch => {
    dispatch(showLoading())
    await firestore 
      .collection('people')
      .add({...payload, like: 0, dislike: 0})
    dispatch(hideLoading())
  }
}

const addLike = (person, like, firestore) => {
  return async dispatch => {
    dispatch(showLoading())
    const increment = firestore.FieldValue.increment(1)
    const field = like ? {like: increment} : {dislike: increment} 
    await firestore.collection('people')
      .doc(person.id)
      .update(field, {merge: true}
      )
    dispatch(hideLoading())
  }
}

const showLoading = () => ({
  type: 'SHOW_LOADING'
})

const hideLoading = () => ({
  type: 'HIDE_LOADING'
})

export {
  showLoading,
  hideLoading,
  addPeople,
  addLike
}
