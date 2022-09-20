import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from '../Input';

export default function ModalCreateAd() {
  return (
    

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">Publique um Anúncio</Dialog.Title>


            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <Input
                  id="game"
                  placeholder="Selecione o jogo que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Nome ou nickname</label>
                <Input id="name" placeholder="nickgame no jogo" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quanto tempo?</label>
                  <Input type="number" id="yearsPlaying" placeholder="Tudo bem ser 0" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Discord</label>
                  <Input id="discord" placeholder="Usuário#0000" />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Dias disponíveis para jogar</label>

                  <div className="grid grid-cols-4 gap-2">
                    <button className="w-8 h-8 rounded bg-zinc-900" title="domingo">D</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" title="segunda">S</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" title="terça">T</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" title="quarta">Q</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" title="quinta">Q</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" title="sexta">S</button>
                    <button className="w-8 h-8 rounded bg-zinc-900" title="sábado">S</button>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Horário Disponível</label>

                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" id="voiceChannel" />
                Costumo me conectar no chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close 
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-6 font-semibold hover:bg-zinc-700"
                >
                  Cancelar
                </Dialog.Close>
                <button 
                  className="bg-violet-500 px-5 h-12 rounded-6 font-semibold flex items-center gap-3 hover:bg-violet-700" type='submit'
                >
                  <GameController size={24}/>
                  Encontrar Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>

  )
}