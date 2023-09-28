import { useState } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import Phonebook from './Komponente/Phonebook/Phonebook'
import AddNewContact from './Komponente/NewContact/addNewContact'
import NotFound from './Komponente/Error page/ErrorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <nav>
        <ul>          
          <li>
            <Link to="/list-contacts">Phonebook</Link>
          </li>
          <li>
            <Link to="/add-new-contact">Add New Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
      <Routes>
        <Route path="/list-contacts" element={<Phonebook/>}/>
        <Route path='/add-new-contact' element={<AddNewContact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
