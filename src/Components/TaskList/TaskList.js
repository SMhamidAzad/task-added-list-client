import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-meadow-63454.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

   
    
    return (
        <div className='container'>
            <h3 className="text-center text-primary mt-3 fw-bold">Task List</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Description</th>
                        <th scope="col">Edit Task</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tasks.map(task =>
                           <SingleTask key={task._id} task={task}></SingleTask>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default TaskList;