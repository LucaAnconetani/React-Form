import React from 'react'

//Tareas
const Homework = ({item, quitHomework, editHomework}) => {
    
   const {title,description,priority,state,id} = item
  return (
       <li className='list-group-item d-flex justify-content-between align-items-start mt-2 border p-2' >
            <div className='ms-2 me-auto '>
                <div className='fw-bold'>{title}
                     {state ? (<span className='bg-success text-light badge '>Complete</span>) :(<span className='bg-warning text-light badge '>Earring</span>)}
                </div>
                <p>{description}</p>
                <div>
                    <button className='btn btn-sm btn-danger me-1' onClick={() =>quitHomework(id)} >Quit</button>
                    <button className='btn btn-sm btn-warning me-1'onClick={()=>editHomework(id)}>Edit</button>
                </div>
            </div>
            {priority === true ?(<span className='badge bg-primary  rounded-pill'>Priority</span>) :(<span className='badge bg-warning rounded-pill'>Unpriority</span>) }
        </li>
  )
}

export default Homework
