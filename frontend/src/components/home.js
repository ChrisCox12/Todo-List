import React from 'react';
import { Table } from 'react-bootstrap';

function Home() {
    return (
        <div>
            hello
            <Table>
                <thead>
                    <tr>
                        <th>All</th>
                        <th>Completed</th>
                        <th>Expired</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>y</td>
                        <td>x</td>
                        <td>z</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Home;
