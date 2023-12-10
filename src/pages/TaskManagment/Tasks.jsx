import { useState } from "react";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState();

    const handleChange = (event) => {
        setNewTaskText(event.target.value);
    };

    const createTask = () => {
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    };

    const deleteTask = (indexToDelete) => {
        setTasks([...tasks.slice(0, indexToDelete), ...tasks.slice(indexToDelete + 1)]);
    }

    const uuidv4 = () => {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }

    const handleChangeTaskStatus = (myobj) => {
        const indexOftaskToDelete = parseInt(myobj.target.name);
        console.log('to delete',indexOftaskToDelete);
        setTimeout(() => {deleteTask(indexOftaskToDelete);}, 500);
        
    }

    return ( 
    <div style={{width : '100%'}}>
        {
            tasks.length ? 
            <div style={{marginBottom : '10px'}}>
                {
                    tasks.map((data,index) => 
                    <div key={uuidv4()} className="" >
                        <input type="checkbox" name={index} value={data} onChange={handleChangeTaskStatus}/>
                        {data}
                    </div>)
                }
            </div> : 
            <div style={{marginBottom : '10px'}}>
                No tasks
            </div>
            
        }
        <div style={{width : '100%', display : 'flex'}}>
            <input name="newtask" onChange={handleChange} value={newTaskText} style={{flexGrow : '1'}}/>
            <button onClick={createTask}>Create!</button>
        </div>
        
    </div> 
    );
}

export default Tasks;