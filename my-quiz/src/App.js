import {
  BrowserRouter as Router,
   Route,
  Routes,

} from 'react-router-dom'
import Setting from './pages/Setting';
import Question from './pages/Question';
import FinalScreen from './pages/FinalScreen';
// import { Container} from "@mui/material";
import {Box} from "@mui/system";

function App() {
  return (
    <Box mt={3}  >
    <Routes>
    
    
    <Route path="/" element = {<Setting />} /> 
    <Route path="/question" element = {<Question />} /> 
    <Route path="/score" element = {<FinalScreen />} /> 
   
    </Routes>
    </Box>
  );
}

export default App;
