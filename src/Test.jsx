import React, { useState, useEffect } from 'react';
import "./Test.css";
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import {db} from './firebase';
const Todo = () => {
    const [todo, setTodo] = useState("")
    const collectionRef = collection(db, "todo");
    const addTodo = async(e) => {
      e.preventDefault();
      try {
        await addDoc(collectionRef, {
          todo: todo,
          isChecked: false,
          timestamp: serverTimestamp()
        })
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
 

    const [todos, setTodos] = useState([]);
 
    const fetchPost = async () => {
       
        await getDocs(collection(db, "PortfolioArt"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                console.log(todos, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])


    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>
   
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            onChange={(e)=>setTodo(e.target.value)}
                        />
                    </div>
   
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>
   
                </div>
   
                <div className="todo-content">
                {
                  todos?.map((todo,i)=>(
                      <p key={i}>
                          <img src={todo.URL}/>
                      </p>
                  ))
              }
                </div>
            </div>
        </section>
    )
}
 
export default Todo