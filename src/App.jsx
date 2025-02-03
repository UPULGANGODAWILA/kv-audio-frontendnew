
import AdminPage from "./components/adminPage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
   
      <BrowserRouter> 
      <Routes path="/*">
        <Route path="admin" element={<AdminPage/>}/>
        <Route path="/" element={<h1>home Page</h1>}/>
        <Route path="/*" element={<h1>Not fount Page Error 500</h1>}/>
      </Routes>
           

      </BrowserRouter>
   

);
}

export default App
                 
