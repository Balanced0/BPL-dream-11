import './App.css'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
import { Suspense } from 'react';

const fetchPlayers = async()=>{
  const res = await fetch('/data.json');
  return res.json();
}
function App() {
  const playersPromise = fetchPlayers();
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </div>
  )
}

export default App
