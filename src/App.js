import './App.css';
import AssaignmentMark from './components/AssaignmentMark/AssaignmentMark';
import Navbar from './components/Navbar/Navbar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssaignmentMark></AssaignmentMark>

      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
