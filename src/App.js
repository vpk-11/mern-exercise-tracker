import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// importing all components
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    // Router reroutes the user to the page based on the URL
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Routes>
          <Route path='/' exact Component={ExercisesList} />
          <Route path='/edit/:id' Component={EditExercise} />
          <Route path='/create' Component={CreateExercise} />
          <Route path='/user' Component={CreateUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;