import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Hideobjects from './components/Hideobjects';

import './App.css';


function App() {
  return (
    <div className="App">
     
		<div className='background'></div>
		
		<Nav />
		<Sidebar />
		<Hideobjects />
		
		<h1 className='slogan'>THE BEST WORK-<br />
		LIFE BALANCED<br />
		PLACE IN LONDON</h1>
		
		<p className='article'>
		The serinity of Eastern worldview and the rythem of European life<br />
		merge harmoniously in the smooth flow of Thames. Making spaces <br />
		glowing, business better and commutes shorter</p>
		
    </div>
  );
}

export default App;
