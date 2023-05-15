const AddTask = (props) => {
    const doAddTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
        <div>
            <h2>Add Task</h2>
            <div className="form-control">
                <label htmlFor="task_desc">Add your Task  </label>
                <input type="text" name="task_desc" id="task_desc" />
            </div>
            <div className="form-control">
                <button onClick={doAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default AddTask;