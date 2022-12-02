import { useState,useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Addcontact from './components/Addcontact'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"


function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contact")) ?? []
  );
  const deleted =(id)=>{
   const newContact =contacts.filter((contact)=>{
   if(contact.id !==id) 
   {
    return contact
   }
   })
   setContacts(newContact)
  }
  const adder = (name,email) => {
    console.log(name,email)
    setContacts([...contacts,{"id":Date.now(),name:name,email:email}])

  }
  useEffect(() => {
    localStorage.setItem("contact",JSON.stringify(contacts))
  }, [contacts])
  // useEffect(() => {
  //  const receive = JSON.parse(localStorage.getItem("contact"))
  //  setContacts(receive)
  // }, [])
  
  
  return (
    <div className="App">
       <Router>
        <Header/>
        
        <Routes >
        <Route path="/addContact" element={<Addcontact adder={adder}/>}/>

        
        
        <Route path='/' element={<Contact ar={contacts} deleted={deleted}/>}/>

        
       
        </Routes>
       </Router>
    </div>
  )
}

export default App;
