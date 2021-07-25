import React, { useEffect, useState } from 'react'
import { Table, Button } from'react-bootstrap'

function TASK_LIST_ITEM(props) {
    const [task, setTask] = useState('');
/* 
    // taskData holds the localStorage data on the task
    const [taskData, setTaskData] = useState(
        localStorage.getItem('taskData') || ''
    );
    useEffect(() => {
        // checks if there's props data and that taskData has no cached data
        if(props !== '' && props !== undefined && taskData === ''){
            setTaskData(props.task);
        }
        else{
            // sets task to the localStorage data.
            // because the localStorage data is a String, have to parse it
            // into a JSON object
            let v = JSON.parse(taskData);
            console.log("V: ", v);
            setTask(v);
        }
    }, [props, taskData]);

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if(taskData !== '' && taskData !== undefined){
            setIsLoaded(true);
            // localStorage only holds Strings, so have to stringify the props data
            localStorage.setItem('taskData', JSON.stringify(props.task));
        }
    }, [props, taskData]);

    console.log('Task Data: ', taskData);
    console.log("Task: ", task);
    console.log("Loaded: ", isLoaded);
 */
    if(true){
        return(
            <div>
                Loading
            </div>
        )
    }
    else{
        return (
        <div>
            <li>
                {task.description}
            </li>
        </div>
    )
    }
    
    
}

export default TASK_LIST_ITEM
