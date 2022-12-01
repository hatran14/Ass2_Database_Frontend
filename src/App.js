import './App.css';
import Layout from './defaultLayout/Layout/index'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';
import ListTrainee from './pages/ListTrainee/index'
import CreateNew from './pages/CreateNew/index'
import Login from './pages/Login/index';
import Signup from './pages/Signup/index';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/list-trainee" element={<ListTrainee/>}/>
          <Route path='/create-new' element={<CreateNew/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
