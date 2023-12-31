import { useState } from 'react'
import ListGroup from './components/ListGroup'

function App() {
  const handleSelectItem = (item:string)=>{
    console.log("Selected item",item)
  }
  const items = ["Islamabad", "Lahore", "Karachi", "Quetta"];
  return <div><ListGroup heading="Capital Cities of Pakistan" items={items} onSelectItem={handleSelectItem}/></div>
}

export default App
