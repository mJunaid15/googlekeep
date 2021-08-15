import React, { useState } from "react";
import Header from "./Header";
import Createnote from "./Createnote";
import Note from "./Note";

const App = () => {
  const [additem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("click");
    setAddItem((prevdata) => {
      return [...prevdata, note];
    });
  console.log(note);
  };

  const onDelete=(id)=>{

    setAddItem((oldData)=>{
      console.log(oldData);

      return oldData.filter((currData,indx)=>{
        return indx !== id
        
      })
    })

  }

  return (
    <>
      <Header />
      <Createnote passNote={addNote} />

      {additem.map((val, index) => {
        return (
          <>
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
          </>
        );
      })}
      


      

      
    </>
  );
};

export default App;
