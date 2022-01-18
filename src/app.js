
import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import Search from "./components/search";
import Header from "./components/Header";
const App= ()=>{
    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: "This is my first Notes",
        date: "15/01.2021"
    }, 
    {
        id: nanoid(),
        text: "This is my second Notes",
        date: "16/01.2021"
    },
    {
        id: nanoid(),
        text: "This is my third Notes",
        date: "17/01.2021"
    },
    {
        id: nanoid(),
        text: "This is my new Note",
        date: "15/01.2021"
    }
    
]);
const [searchText, setsearchText] = useState('');
const [darkMode, setDarkMode] = useState(false);

const addNote=(text)=>{
  const date=new Date();
  const newNote={
   id: nanoid(),
   text: text,
   date: date.toLocaleDateString(),
  }
  const newNotes = [...notes,newNote];
  setNotes(newNotes);
};
const deleteNote =(id)=>{
    const newNotes=notes.filter((note)=>note.id !== id);
    setNotes(newNotes);

}
    return (<div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
    

        <Search handleSearchNote={setsearchText}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
    </div>
    </div>)
}

export default App;