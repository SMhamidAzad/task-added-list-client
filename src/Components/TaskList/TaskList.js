import React, { useEffect, useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [strikes, setStrikes] = useState(false)
    useEffect(() => {
        fetch('https://mysterious-meadow-63454.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://mysterious-meadow-63454.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining);
                })
        }
    }
    const handleComplete = () => {
        const proceed = window.confirm("Your task successfully completed")
        if (proceed) {
            setStrikes(true)
        }
    }
    return (
        <div className='container'>
            <h3 className="text-center text-primary mt-3 fw-bold">Task List</h3>
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
                        tasks.map((task, index) =>
                            <tr key={task._id}>
                                <th scope="row">{index}</th>
                                <td>{task.name}</td>
                                <td>
                                    {
                                        strikes ?
                                            <s>{task.description}</s>
                                            :
                                            <>{task.description}</>
                                    }

                                </td>
                                <td>
                                    <button className='border-0 btn-danger px-2 py-1' onClick={() => handleDelete(task._id)}>Delete</button>
                                </td>
                            </tr>)
                    }

                </tbody>
            </table>
            <div>
                <button onClick={() => handleComplete()} className='ms-2 btn-success border-0 px-3 py-1'>Complete</button>
            </div>
        </div>
    );
};

export default TaskList;