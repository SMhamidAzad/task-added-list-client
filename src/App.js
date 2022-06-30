import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ToDo from './Components/ToDo/ToDo';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ToDoList from './Components/ToDoList/ToDoList';
import Calender from './Components/Calender/Calender';
// import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <ToDo></ToDo>
          </RequireAuth>
        }></Route>
        <Route path='/todo' element={<ToDoList></ToDoList>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
