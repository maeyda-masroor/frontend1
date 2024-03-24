import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Error from './pages/Error';
import homecheck from './pages/homecheck';
import Login from './pages/Login';
import AuthState from "./context/AuthContext";
import Shared_Layout from './pages/Dashboard/Shared_Layout';
import All_job from './pages/Dashboard/All_Job';
import  AddJob  from './pages/Dashboard/AddJob';
import Profile from './pages/Dashboard/Profile';
import  Stat  from './pages/Dashboard/Stat';
import AddCompany from './pages/Dashboard/AddCompany';
import AddCategory from './pages/Dashboard/AddCategory';
import AllCatgories from './pages/Dashboard/AllCategories';
import Update_Category from './pages/Dashboard/Update_Category';
import DetailsCategory from './pages/Dashboard/DetailsCategory';
import Companies from './pages/CompanyPage';
import About from './pages/About';
import Job_Alert from './pages/JobAlert';
import EmployerLogin from './pages/EmployerLogin';
import EmployerRegistration from './pages/EmployerRegistration';
import Admin_Login from './pages/Admin_Login';
import Post_Job from './pages/Employers/PostJob';
import Shared from './pages/Dashboard-Employee/Shared';
import NavigationBar from './components/navigationbar';
import Footer from './components/footersection';
import AddArticle from './pages/Add_Article';
import Sponsorship from './pages/Sponsership';
import Articles from './pages/Articles';
function App() {
  return (
  
    <BrowserRouter>
      <AuthState>
      <NavigationBar/>
      <Routes>
          <Route path='/' element={<Shared_Layout/>}>
            <Route path='/all-jobs' element={<All_job/>}/>
            <Route path='/stat' element={<Stat/>}/>
            <Route path='/job' element={<AddJob/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/company' element={<AddCompany/>}/>
            <Route path='/category' element={<AddCategory/>}/>
            <Route path='/categories' element={<AllCatgories/>}/>
            <Route path='/update/:id' element={<Update_Category/>}/>
            <Route path='/read/:id' element={<DetailsCategory/>}/>
          </Route>
          <Route path='/dashboard' element={<Shared/>}>
          </Route>
          <Route path="/home" element={<Home/>} />
          <Route path='/jobs'element={<Companies/>}/>
          <Route path='/job_alert' element={<Job_Alert/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<Error/>} />
          <Route path = "/login" element={<Login/>}/>
          <Route path='/EmployerSignUp' element={<EmployerLogin/>}/>
          <Route path='/EmployerRegistration' element={<EmployerRegistration/>}/>
          <Route path='/AdminSignUp' element={<Admin_Login/>}/>
          <Route path='/Post_Job' element={<Post_Job/>}/>
          <Route path='/Add_Article' element={<AddArticle/>}/>
          <Route path='/sponsership' element={<Sponsorship/>}/>
          <Route path='/articles' element={<Articles/>}/>
      </Routes>
      <Footer/>
      </AuthState>
    </BrowserRouter>
    );
}

export default App;
