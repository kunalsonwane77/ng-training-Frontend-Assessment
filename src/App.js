import logo from './logo.svg';
import './App.css';
import Allroutes from './components/Allroutes';
import TaskBar from './components/TaskBar';

function App() {
  return (
    <div className="text-center w-[1000px] mx-auto border-2 border-gray-300 h-[500px] my-3 relative">

      <Allroutes/>
      <TaskBar/>
      
    </div>
  );
}

export default App;
