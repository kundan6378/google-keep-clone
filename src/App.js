import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea'

import './App.css';

function App(){
      const [notes, setNotes] = useState([]);

      function addNote(newNote){
        setNotes((prevNotes) =>{
          return [...prevNotes, newNote];
        });
      }

      function deleteNode(id){
        setNotes((prevNotes) =>{
          return prevNotes.filter((noteItem,index) =>{
            return index !== id;
          });
        });
      }

      return (
        <div>
          <Header />
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem,index) =>{
            return  (
              <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNode} />
            );
          })
          }
          <Footer />
        </div>
      );
}

export default App;
