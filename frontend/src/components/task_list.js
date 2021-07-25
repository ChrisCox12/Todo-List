import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import TASK_LIST_ITEM from './task_list_item';


function Task_list() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
          let results = await axios.get('http://localhost:8080/api/tasks');

          setData(results.data);
        };

        fetchData();
    }, []);
    
    return(
      <div>
        <ul>
            <TASK_LIST_ITEM task={data[0]} />
            <TASK_LIST_ITEM task={data[1]} />
        </ul>
      </div>
    )
    /* return (
        <div>
          <ul>
            {data.map(item => (
              <li>
                {item.description}
              </li>
            ))}
          </ul>
        </div>
    ) */
}

export default Task_list
