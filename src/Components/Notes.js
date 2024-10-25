import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import Noteitem from "./Noteitem";


const Notes = () => {
    const context = useContext(noteContext);
    const {notes,setNotes} = context;
  return (
    <div className="row">
      <h2>Your Notes</h2>

      {notes.map((note)=> {
        return <Noteitem key={note.id} note={note}/>;
      }) }
      </div>
  )
}

export default Notes
