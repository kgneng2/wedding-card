import MapInstance from './component/Map';
import Intro from './component/Intro';
import Contact from './component/Contact';
import Calendar from './component/Calendar';
import Attendance from './component/Attendance';

import './App.scss';
import Greeting from './component/Greeting';
import Blank from './component/Blank';
import Dday from './component/Dday';
import Gallery from './component/Gallery';

function App() {
  return (
    <div className='app'>
      <Intro />
      <Blank />
      <Greeting />
      <Contact />
      <Gallery />
      <Calendar />
      <Dday />
      <MapInstance />
      <Attendance />
    </div>
  );
}

export default App;
