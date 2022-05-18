import React from 'react';

const ToDo = () => {
    return (
        <div>
            <h2 className='text-center my-5'>Add Your To Do List Here</h2>
            <div className='w-50 mx-auto'>
                <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="Enter your name here" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="form-floating mt-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Description</label>
                </div>
                <div className='mt-3'>
                    <button type="button" class="btn btn-success me-3">Add Task</button>
                    <button type="button" class="btn btn-info">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default ToDo;