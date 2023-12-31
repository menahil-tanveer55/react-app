import { useState } from 'react'
import ListGroup from './components/ListGroup'
import Button  from './components/Button'
import Alert from "./components/Alert"

function App() {
  const [showAlert, setShowAlert]= useState(false)
  const handleSelectItem = (item:string)=>{
    console.log("Selected item",item)
  }
  const handleClick = ()=>{
    setShowAlert(true)
  }
  const handleDismiss=()=>{
    setShowAlert(false)
  }
  const items = ["Islamabad", "Lahore", "Karachi", "Quetta"];
  return <>
  <Button text='Save' onClick={handleClick}></Button>
  <ListGroup heading="Capital Cities of Pakistan" items={items} onSelectItem={handleSelectItem}/>
  {showAlert && <Alert children="Changes Saved!" color="success" onDismiss={handleDismiss}/>}
  </>
}

export default App
