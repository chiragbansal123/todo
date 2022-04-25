import React from 'react'
import '../App.css';
function TodoItem(props) {
    //displaying list items present in array
    return (
        <div className="list_style">           
            <li> {props.todo} </li> <div className="edit-delete-btns"><img className="fa-times" onClick={() => props.onSelectedit(props.id)} alt ="edit" src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/> <img alt = "delete" className="fa-times" onClick={() => props.onSelectdelete(props.id)} src="https://img.icons8.com/color/48/000000/filled-trash.png"/> </div>
        </div>
    )
}

export default TodoItem