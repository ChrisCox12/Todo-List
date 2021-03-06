import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

function New_task_form() {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    console.log('description: ', description)
    console.log('date: ', date);
    console.log('time: ', time)

    function handleSubmit(event){
        event.preventDefault();

        let toSubmit = {
            'description': description,
            'expiration': date + 'T' + time
        }

        console.log('toSubmit: ', toSubmit)

        axios.post('http://localhost:8080/api/tasks', toSubmit)
            .then(function(response){
                console.log('Response: ', response)
            })
            .catch(function(error){
                console.log('Error: ', error)
            })
    }

    return (
        <div>
            create task
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formGroupDescription'>
                    <Form.Label>Enter a description for the task</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter a description' 
                        onChange={event => setDescription(event.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId='formGroupDate'>
                    <Form.Label>Expiration date</Form.Label>
                    <Form.Control 
                        type='date'
                        onChange={event => setDate(event.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId='formGroupTime'>
                    <Form.Label>Expiration Time</Form.Label>
                    <Form.Control 
                        type='time' 
                        onChange={event => setTime(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='formGroupSubmit'>
                    <Button type='submit'>Create Task</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default New_task_form
