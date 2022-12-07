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

import { AppContext, AppContextProvider } from './store/appContext';
import { useContext } from 'react';

function App() {
  const context = useContext(AppContext);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="/list-trainee" element={<ListTrainee/>}/>
          <Route path='/create-new' element={<CreateNew/>}/>
          {console.log('abs')}
          {context.role === '0' && (
            <Route path='/login' element={<Login/>}/>
          )}

          {context.role === '1' && (
            <>
              <Route path="/list-trainee" element={<ListTrainee/>}/>
              <Route path='/create-new' element={<CreateNew/>}/>
            </>
          )}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
