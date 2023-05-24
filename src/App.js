import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Payment from "./component/Payment";
import Login from "./component/Login";
import Card from "./component/Card";
import Program from "./component/page/Program";
import About from "./component/page/About";
import TeacherList from "./component/page/TeacherList";
import Contactus from "./component/page/Contactus";
import TeacherBio from "./teacher/TeacherBio";
import TeacherSample from "./teacher/TeacherSample";
function App() {
  return (
    <div>
  
      <Layout />

        <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/program-fee' element={<Program />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contactus />} />
            <Route path='/teacher' element={<TeacherList/>} />
            <Route path=":teacherId" element={<TeacherBio />} />
            <Route path="/sample" element={<TeacherSample/>} />
           
        </Routes>
    </div>


  );
}

export default App;
