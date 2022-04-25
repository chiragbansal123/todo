import React from 'react'
import TodoItem from './TodoItem'


// component for todo-list 

class TodoMain extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    //fetching array from dummy server api call.
    componentDidMount() {
      fetch("https://my-json-server.typicode.com/chiragbansal123/todo/db")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
         //handling errors in components || in fetch
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
     
    render (){
      const { items,error, isLoaded } = this.state;
      //method for adding task in array... made dummy api call for it
      const addTask = () => {
        console.log("Dummy Add task method");
        fetch('https://my-json-server.typicode.com/chiragbansal123/todo/items', {
                method: 'POST',
                body: JSON.stringify({
                 id: 4,
                 task: 'Host project on heroku',
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
              .then((response) => response.json())
              .then((json) => console.log("Request Sucessfull ",json));
    }
    //method for deleting task from array... made dummy api call for it
      const deleteItem = (id) => {
        console.log("Dummy delete task method");
        fetch('https://my-json-server.typicode.com/chiragbansal123/todo/items/'+id, {
            method: 'DELETE',
          }).then(console.log('request succesfull deleted id: ', id));
       }
    //method for editing task of array... made dummy api call for it
    const editItem = (id) => {
       console.log("Dummy edit task method");
       console.log('edit id: ', id);
       fetch('https://my-json-server.typicode.com/chiragbansal123/todo/items/'+id, {
        method: 'PUT',
        body: JSON.stringify({
         id: id,
         task: 'create good readme file',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log("Request Sucessfull ",json));
     }
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      }else{
        return (
          <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add your task"/>
            <button className="newBtn" onClick={addTask}>Add Task</button>
           {console.log(items)}
           <ul>
            {
              items.map((todo) => {
                return <TodoItem  todo={todo.task} key={todo.id} id={todo.id} onSelectdelete={deleteItem} onSelectedit={editItem}/>
              })
            }
            </ul>
          </div>
        );
      }
    }
  }

export default TodoMain