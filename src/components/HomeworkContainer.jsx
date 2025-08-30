import React from 'react'
import Homework from './Homework'
 
const HomeworkContainer = ({homework, quitHomework, editHomework}) => {
    //Cards
    
  return (
    <ul>
      {homework.length === 0?(
        <div className=' d-flex justify-content-center border p-3'>No Homework</div>
      ):( 
        homework.map((item) =>(
         <Homework key={item.id} item={item} quitHomework={quitHomework} editHomework={editHomework}/>
        )))}
    
       
    </ul>
    )
}

export default HomeworkContainer
