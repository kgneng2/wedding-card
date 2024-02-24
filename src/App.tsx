import MapInstance from './component/Map';
import Intro from './component/Intro';
import Contact from './component/Contact';
import Calendar from './component/Calendar';
import Attendance from './component/Attendance';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Intro />
      <Contact />
      <Calendar />
      <MapInstance />
      <Attendance />
    </div>
  );
}

export default App;
