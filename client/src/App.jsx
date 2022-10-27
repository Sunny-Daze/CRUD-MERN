import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import CodeForInterview from './components/CodeForInterview';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CodeForInterview />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
