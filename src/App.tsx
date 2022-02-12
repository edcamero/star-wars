import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/HomeComponent/Home.component'
import PeopleList from './Components/PeopleListComponnet/PeopleList.component'

import './App.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './ApolloClient/client'

function App() {
  return (
    <HashRouter basename={'/'}>
      <ApolloProvider client={client}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="people/:id" element={<PeopleList />} />
            <Route path="people" element={<PeopleList />} />
          </Routes>
        </div>
      </ApolloProvider>
    </HashRouter>
  )
}

export default App
