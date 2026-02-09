import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Auth from "./pages/Auth";


function App() {
  return ( 

    
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
   
  );
  
}


export default App;
