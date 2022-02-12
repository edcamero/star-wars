import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/HomeComponent/Home.component'
import PeopleList from './Components/PeopleListComponnet/PeopleList.component'
import PeopleDetail from './Components/PeopleDetailComponet/PeopleDetail.component'

import './App.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './ApolloClient/client'

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="people/:id" element={<PeopleList />} />
            <Route path="people" element={<PeopleList />} />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
