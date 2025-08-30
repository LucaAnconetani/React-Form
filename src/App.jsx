import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeworkContainer from './components/HomeworkContainer'
import Form from './components/Form'
import { useEffect } from 'react'

//guardado local
const initialHomework = localStorage.getItem('homework')
? JSON.parse(localStorage.getItem('homework')):[]


function App () {
  const [homework, setHomework] = useState(initialHomework)
  
  //Busqueda en los datos locales
  useEffect(() =>{
    localStorage.setItem('homework', JSON.stringify(homework))
  },[homework])

  //agregar tareas
  const addHomework = (newHomework) =>{
    setHomework([...homework,newHomework])
  }
 
  //quitar tareas
 const quitHomework =(id)=>{
  const arrFilter = homework.filter((item) => item.id !== id)
  setHomework(arrFilter)
 }
 
 //editar tareas
 const editHomework =(id) =>{
   const arrEdit = homework.map (item =>{
    if(item.id === id){
      item.state = !item.state
        
  }
  return item;
   });
   setHomework(arrEdit)

 }
  return (
    //estructura
    <div className='container my-2 ' >
     <h2 className='text-primary '>Form</h2>
    <Form addHomework={addHomework}/>
     <h2 className='text-primary text-center'>Homework</h2>
     <HomeworkContainer quitHomework={quitHomework} homework={homework} editHomework={editHomework}/>
    </div>
  )
}

export default App
