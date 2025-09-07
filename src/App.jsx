import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyDocument from './MyDocument.jsx'
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  const [count, setCount] = useState("")

  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <input type="date" onChange={(e)=> {setCount(e.currentTarget.value) ; console.log(count)} }/>

      
      <button onClick={()=>setIsActive(true)}> acc </button>
      <Modal active={isActive} close={()=>setIsActive(false)}>
        Marlon es el Packy

      </Modal>
    </>
  )
}




export function Modal({active, close, children}){
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current){
      if (active){
        ref.current.showModal()
      } else {
        ref.current.close()
      }
    }

    const clickHandler = (e)=>{
      if (e.target === ref.current) {
        console.log(e.target)
        console.log(ref.current)
        close()
      }
    }

    addEventListener('click', clickHandler)

    return () => {
      removeEventListener('click', clickHandler)
    }
  }, [active, close])

  

  return <dialog ref={ref} onClose={close}>
      <div>

    <button onClick={close}> X </button>

      <div>
      {children} </div></div> 
  </dialog>
}




export default App
