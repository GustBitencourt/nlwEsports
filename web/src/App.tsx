import { useState, useEffect } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from './components/GameBanner';
import ModalCreateAd from './components/ModalCreateAd';

import LogoImage from './assets/images/Logo.svg'
import './styles/main.css';
import { CreateAdPostBanner } from './components/CreateAdPostBanner';


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

      <Dialog.Root>
        <CreateAdPostBanner />

        <ModalCreateAd />
      </Dialog.Root>
    </div>
  )
}

export default App
