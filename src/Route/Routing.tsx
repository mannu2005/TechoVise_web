import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../Component/Landing_page/Index'
import Login from '../Component/shared/Loginpage/Login';

function Routing() {
  return (
   <>
   <Router>
    <Routes>
 
      <Route path="/" element={<Index/>} />
      <Route path='/Login'element={<Login/>}/>
     
    </Routes>
  </Router>
   </>
  )
}

export default Routing