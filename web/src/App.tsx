import { useState, useEffect } from 'react';
import { MagnifyingGlassPlus } from 'phosphor-react';

import LogoImage from './assets/images/Logo.svg'
import game1 from './assets/images/CapaJogo1.png'
import game2 from './assets/images/CapaJogo2.png'
import game3 from './assets/images/CapaJogo3.png'

import './styles/main.css';
import { GameBanner } from './components/GameBanner';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const url = 'http://localhost:3333';
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch(`${url}/games`)
      .then(response => response.json())
      .then(data => {
        setGames(data)
      }) 

  }, [])
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={LogoImage} alt="Logo nlw esports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Find your <span className='text-transparent bg-nlw-gradient bg-clip-text'>DUO</span> here!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map(game => {
            return (
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl} 
                title={game.title} 
                ads={game._count.ads} />
            )
          })
        }
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button 
            className='py-3 px-4 bg-violet-500 hover:bg-violet-800 text-white rounded flex items-center gap-3'
          >
            <MagnifyingGlassPlus size={24} />
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
