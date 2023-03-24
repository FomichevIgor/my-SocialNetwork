
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsConteiner from'./Components/Dialogs/DialogsConteiner';
import UsersConteiner from './Components/Users/UsersConteiner';
function App(props) {
  return (
    <div className="App-wrapper ">
      <Header />
      <Nav />
      <div className='App-wrapper-content'>
        <Routes>
        
          <Route index path='/Profile' element={<Profile />} />
          <Route path='/Dialogs' element={<DialogsConteiner />} />
          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Users' element={<div><UsersConteiner/></div>} />
         
        </Routes>
      </div>

    </div>
  );
}

export default App;
