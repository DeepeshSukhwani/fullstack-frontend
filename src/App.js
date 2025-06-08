
import './App.css';
import Navbar from './layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import AddUsers from './users/AddUsers';
import EditUser from './users/EditUsers';
import ViewUser from './users/ViewUser';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
           <Route exact path="/adduser" element={<AddUsers />} />
           <Route exact path="/edituser/:id" element={<EditUser />} />
           <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
