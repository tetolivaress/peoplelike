import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '@components/layout'

import { useSelector } from 'react-redux'
import { isLoaded, useFirestoreConnect } from 'react-redux-firebase'

import Loading from '@components/Loading'
import Home from '@pages'
import Dashboard from '@pages/dashboard'
import AddPeople from '@pages/dashboard/AddPeople'

function App() {

  useFirestoreConnect([
    { collection: 'people' }
  ])

  const people = useSelector(({ firestore }) => firestore.ordered.people)
  const loading = useSelector(({ loading }) => loading)

  return (
    <>
      <Loading isOpen={!isLoaded(people) || loading} />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/people/add" component={AddPeople}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
