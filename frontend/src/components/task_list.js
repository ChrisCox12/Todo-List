import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TASK_LIST_ITEM from './task_list_item';
import { Spinner } from 'react-bootstrap';
import NEW_TASK_FORM from './new_task_form';

function Task_list() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(() => {
      async function fetchData(){
        await axios.get('http://localhost:8080/api/tasks')
          .then(response => {
            setData(response.data);
            setIsLoaded(true);
          })
          .catch(error => {
            console.log(error);
          });

        //localStorage.setItem('localData', JSON.stringify(results.data));

      };

      fetchData();
      
      //let localData = JSON.parse(localStorage.getItem('localData'));
      //setData(localData);
    
  }, []);
  
  if(!isLoaded){
    return(
      <div>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }
  else{
    return(
      <div>
        <div>
          <NEW_TASK_FORM />
        </div>
        <div>
          <ul>
            {data.map(item => (
              <TASK_LIST_ITEM task={item} key={item._id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Task_list;
