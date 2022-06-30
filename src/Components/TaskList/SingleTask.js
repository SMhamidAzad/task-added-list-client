import React from 'react';
import { useState } from 'react';

const SingleTask = ({ task }) => {
    const [completed,setCompleted]= useState(false)
    const [reload, setReload] = useState(false)
    console.log(completed);
    const handleEditTask = e => {
        e.preventDefault();
        const newTask = e.target.task.value;
        

        const url = `https://mysterious-meadow-63454.herokuapp.com/task/${task._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newTask })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
   
    const handleValue=e=>{
        if(e.target.checked){
            const proceed = window.confirm('Are you want to complete this task?');
        if (proceed) {
            const url = `https://mysterious-meadow-63454.herokuapp.com/task/${task._id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setReload(!reload)
                })
        }
        }
    }
    return (
        <>
            <tr key={task._id}>
                <th scope="row"><input class="form-check-input mt-0" type="checkbox"onChange={handleValue} aria-label="Checkbox for following text input" /></th>
                <td>{task.description}</td>
                <td>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>
                </td>
            </tr>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit this task</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleEditTask}>
                                <input name='task' className='w-100' type="text" />
                                <input className='btn btn-primary mt-1' type="submit" value="Edit Task" />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleTask;