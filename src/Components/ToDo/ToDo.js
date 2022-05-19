import React from 'react';
import TaskList from '../TaskList/TaskList';

const ToDo = () => {
    const handleAddTask = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
         console.log(name,description);
        const task = {name, description}
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Added New task ", data);
                alert('successfully new task added in to do list')
                e.target.reset()
            })

    }
    return (
        <div>
            <h2 className='text-center my-5'>Add Your To Do List Here</h2>
            <form onSubmit={handleAddTask}>
                <div className='w-50 mx-auto'>
                    <div class="input-group flex-nowrap">
                        <input name="name" type="text" class="form-control" placeholder="Enter your name here" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="form-floating mt-3">
                        <textarea name="description" class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Description</label>
                    </div>
                    <input type="submit" value="Add Task" />
                </div>
            </form>
            {/* <button type="button" class="btn btn-info">Complete</button> */}
            <TaskList></TaskList>
        </div>
    );
};

export default ToDo;