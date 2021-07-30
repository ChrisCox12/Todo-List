import React, { useEffect, useState } from 'react';
import { Table, Button } from'react-bootstrap';

function TASK_LIST_ITEM(props) {
    const [task, setTask] = useState(props.task);

    console.log('Props: ', props);
    console.log('Task: ', task);

    
    return (
        <div>
            <li key={props.key}>
                <div>
                    {task.description}
                </div>
                <div className='d-flex justify-content-end'>
                    <Button>Completed</Button>
                    <Button>Cancel</Button> 
                </div>
            </li>
            <hr />
        </div>
    );
    
    
}

export default TASK_LIST_ITEM;
