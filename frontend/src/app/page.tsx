import "./global.css";
import PerfectComp from './perfectComp/page';

export default function Home() {
  // Rendering PerfectComp directly on the home page
  return <PerfectComp />;
  
  // Original code is commented out
  /*
  return (
    <div className="app">
      <h1>Sangam Educatum</h1>
      <button> Educational Services</button>
      <button> IT Services</button>
    </div>
  );
  */
}
