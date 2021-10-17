import {useSelector, useDispatch} from 'react-redux';
import {addTask, removeTask, updateTask} from './actions';
import {useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './app.css';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.list);

  const [taskName, setTaskName] = useState('');

  const handleSUbmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskName));
    setTaskName("");
  };

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId));
  }

  const handleUpdate = (taskId) => {
    dispatch(updateTask(taskId, 'newTitle'));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">        
              <h1>Hello World</h1>
              <form onSubmit={handleSUbmit}>
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <button type='submit'>Submit</button>
              </form>
              {tasks.map(task => (
                <div className="task" key={task.id}>
                  <h1>{task.name}</h1>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
              ))}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;