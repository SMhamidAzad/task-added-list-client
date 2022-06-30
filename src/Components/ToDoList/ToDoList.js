import { indexedDBLocalPersistence } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-meadow-63454.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
       <div className="container mt-5">
        <h3 className='text-center text-primary'>My Task List</h3>
         <table class="table w-50 mx-auto">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Task Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task,index) => <tr key={task._id}>
                         <td className='fw-bold'>{index+ 1}</td>
                         <td className='fw-bold text-success'>{task.description}</td>
                    </tr>)
                }
                
            </tbody>
        </table>
       </div>
    );
};

export default ToDoList;