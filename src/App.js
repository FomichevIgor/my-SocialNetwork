
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings'

function App() {
  return (
    <div className="App-wrapper ">

      <Header />
      <Nav />
      <div className='App-wrapper-content'>
        <Routes>
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Dialogs' element={<Dialogs />} />
          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Settings' element={<Settings />} />



        </Routes>
      </div>




    </div>
  );
}

export default App;
