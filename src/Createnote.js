import React, { useState } from "react";

function Createnote() {

    const [note, setNote]= useState({
        title : "",
        content : "",
    });
    const inputEvent = (event) =>{
        const {name, value} = event.target.value;
        setNote((prevData)=>{
          return{
            ...prevData,
            [name] : value
          }
        })

    }

  return (
    <>
      <div className="createnote">
      <form action="">
      <input type="text" value={note.title}  onChange={inputEvent} placeholder="Title"/>
      <br />
      <textarea  id="" cols="" rows="" value={note.content} onChange={inputEvent} placeholder="Create a note"/>
      <button>+</button>

      </form>
      
      </div>
    </>
  );
};

export default Createnote;
