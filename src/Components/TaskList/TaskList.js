import React, { useEffect, useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div className='container'>
            <h2 className="text-center">Task List</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tasks.map((task,index) =>
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default TaskList;