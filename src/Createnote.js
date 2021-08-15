import React, { useState } from "react";

const Createnote = (props)=>  {

  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note)
  };
  const addEvent = ()=>{
    props.passNote(note);
    setNote({
      title: "",
      content: "" 

    })
     


  };
        
  const expandIt = ()=>{
    setExpand(true)


  };
  const backtonormal =()=>{
    setExpand(false)
  };

  return (
    <div className="createnote"  onDoubleClick={backtonormal}>
      <form>
     {   expand?
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={inputEvent}
          placeholder="Title"
        /> : null}
        <br />
        <textarea
          cols=""
          rows=""
          name="content"
          value={note.content}
          onChange={inputEvent}
          placeholder="Create a note"
          onClick={expandIt}
         
        />
      </form> 
     { expand?
        <button onClick={addEvent}>+</button>
        : null}
    </div>
  );
}

export default Createnote;
