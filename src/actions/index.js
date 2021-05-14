const addPeople = (payload) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    
    await getFirebase()
      .firestore()
      .collection('people')
      .add({...payload, like: 0, dislike: 0})
    dispatch(hideLoading())
  }
}

const addLike = (person, like) => {
  return async (dispatch, getState, getFirebase) => {
    dispatch(showLoading())
    const increment = getFirebase().firestore.FieldValue.increment(1)
    const field = like ? {like: increment} : {dislike: increment} 
    await getFirebase().firestore().collection('people')
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
