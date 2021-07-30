import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Task_list from './components/task_list';
import CustNavbar from './components/navbar';
import NEW_TASK_FORM from './components/new_task_form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustNavbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/task-list' component={Task_list} />
          <Route path='/create-task' component={NEW_TASK_FORM} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
