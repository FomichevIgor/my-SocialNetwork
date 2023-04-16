
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/Nav';

import Welcome from './Components/Welcome.jsx/Welcome';

import DialogsConteiner from'./Components/Dialogs/DialogsConteiner';
import UsersConteiner from './Components/Users/UsersConteiner';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import NewsContainer from './Components/News/NewsContainer';
import MusicContainer from './Components/Music/MusicContainer';
function App(props) {
  return (
    <div className="App-wrapper ">
      <HeaderContainer />
      <Nav />
      <div className='App-wrapper-content'>
        <Routes>
        <Route path='/' element={<Welcome />} />
          <Route path='/Profile' element={<ProfileContainer />} />
        
          <Route path='/Profile/:userId' element={<ProfileContainer />} />
          <Route path='/Dialogs' element={<DialogsConteiner />} />
          <Route path='/News' element={<NewsContainer />} />
          <Route path='/Music' element={<MusicContainer />} />
          
          <Route path='/Users' element={<div><UsersConteiner/></div>} />
          <Route path='/Login' element={<Login/>} />
         
        </Routes>
      </div>

    </div>
  );
}

export default App;
