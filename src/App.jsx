import './App.css'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players'
import { Suspense, useState } from 'react';

const fetchPlayers = async()=>{
  const res = await fetch('/data.json');
  return res.json();
}
const playersPromise = fetchPlayers();
function App() {
  const[coins, setCoins] = useState(1500000);
  return (
    <div>
      <Navbar coins={coins}></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoins={setCoins} coins={coins}></Players>
      </Suspense>
    </div>
  )
}

export default App
