import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import TrainerLayout from "./dashboards/trainer/TrainerLayout";
import TrainerDashboard from "./dashboards/trainer/TrainerDashboard";

// jhkljhlkjh




function App() {
  return ( 
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/trainer" element={<TrainerLayout />}>
      <Route index element={<TrainerDashboard />} />
            </Route>

    </Routes>
   
  );
  
}


export default App;
