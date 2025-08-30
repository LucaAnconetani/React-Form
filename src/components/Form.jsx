import React, { useState } from 'react'
import Swal from 'sweetalert2';

//Formulario
const Form = ({addHomework} ) => {


  const [tareaForm,setTareaForm] = useState({
    title:'',
    description:'',
    state:'completado',
    priority: true,
  });

  const {title,description,state,priority} = tareaForm
  const enviarFormulario =(e)=>{
    e.preventDefault();
    if(!title.trim ()||!description.trim ()){
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Pending field",
      
  });
  return;


  
    }
      
    addHomework({ 
    title: title,
    description: description,
    state: state === "completado" ? true : false,
    priority: priority,
    id: Date.now()
    });

    Swal.fire({
    title: "Added Task!!",
    icon: "success",
    

    
});
  }
  return (
   <>
       <form onSubmit={(e)=> enviarFormulario(e)}>
        <input type="text" 
        placeholder='Enter Task' 
        className='form-control mb-2 ' 
        name="title" 
        value={tareaForm.title} 
        onChange={(e)=> setTareaForm({...tareaForm,title:(e.target.value)})} />

       <textarea 
       name="description" 
       className='form-control mb-2' 
       placeholder='Enter Description' 
       value={tareaForm.description} 
       onChange={(e)=> setTareaForm({...tareaForm,description:(e.target.value)})} >
       </textarea>

       <select 
       name="state" 
       className='form-select mb-2' 
       value={tareaForm.state} 
       onChange={(e)=> setTareaForm({...tareaForm,state:(e.target.value  )})} >
          <option value="pendiente">Earring</option>
          <option value="completado">Complete</option>
       </select>

       <div className='form-check mb-2'>

        <input type="checkbox" 
        name='priority' 
        className='form-check-input' 
        checked={tareaForm.priority} 
        value={tareaForm.priority} 
        onChange={(e)=> setTareaForm({...tareaForm,priority:(e.target.checked)})} />

        <label className='form-check-label'>Priority</label>
       </div>
       <button type='submit' className='btn btn-primary'>Send</button>
       </form>
   </>
  )
}

export default Form
