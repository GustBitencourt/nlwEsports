import { useState, useEffect, FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { Input } from "../Input";
import axios from "axios";

interface Game {
    id: string;
    title: string;
}

export default function ModalCreateAd() {
    const url = "http://localhost:3333";
    const [games, setGames] = useState<Game[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

    async function handleCreateAd(event: FormEvent) {        
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if(!data.name) {
            return
        }

        try {
            await axios.post(`${url}/games/${data.game}/ads`, {
                name: data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
            })

            alert('Anuncio criado com sucesso')

        } catch (error) {
            console.log(error);
            alert('Error, não foi possivel publicar anúncio');            
        }
    }

    useEffect(() => {
        axios(`${url}/games`)
            .then((response) => {
                setGames(response.data);
            });
    }, []);

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-3xl text-white font-black">
                    Publique um Anúncio
                </Dialog.Title>

                <form 
                    className="mt-8 flex flex-col gap-4"
                    onSubmit={handleCreateAd}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">
                            Qual o game?
                        </label>
                        <select
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                            id="game"
                            name="game"
                            defaultValue=""
                        >
                            <option disabled>
                                Selecione o game que quer jogar
                            </option>
                            {games.map((game) => {
                                return (
                                    <option key={game.id} value={game.id}>
                                        {game.title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nome ou nickname</label>
                        <Input id="name" name="name" placeholder="nickgame no jogo" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga há quanto tempo?</label>
                            <Input
                                type="number"
                                id="yearsPlaying"
                                name="yearsPlaying"
                                placeholder="Tudo bem ser 0"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Discord</label>
                            <Input id="discord" name="discord" placeholder="Usuário#0000" />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays">Dias disponíveis para jogar</label>

                            <ToggleGroup.Root 
                                type="multiple" 
                                className="grid grid-cols-4 gap-2"
                                value={weekDays}
                                onValueChange={setWeekDays}
                            >
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="domingo"
                                    value={"0"}
                                >
                                    D
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="segunda"
                                    value={"1"}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="terça"
                                    value={"2"}
                                >
                                    T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="quarta"
                                    value={"3"}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="quinta"
                                    value={"4"}
                                >
                                    Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="sexta"
                                    value={"5"}
                                >
                                    S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    className={`w-8 h-8 rounded  ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    title="sábado"
                                    value={"6"}
                                >
                                    S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Horário Disponível</label>

                            <div className="grid grid-cols-2 gap-2">
                                <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                                <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
                            </div>
                        </div>
                    </div>

                    <label className="mt-2 flex gap-2 text-sm items-center">
                        <Checkbox.Root 
                            className="w-6 h-6 p-1 rounded bg-zinc-900"
                            checked={useVoiceChannel}
                            onCheckedChange={(checked) => {
                                if(checked === true) {
                                    setUseVoiceChannel(true)

                                } else {
                                    setUseVoiceChannel(false)
                                }
                            }}
                        >
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar no chat de voz
                    </label>

                    <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close
                            type="button"
                            className="bg-zinc-500 px-5 h-12 rounded-6 font-semibold hover:bg-zinc-700"
                        >
                            Cancelar
                        </Dialog.Close>
                        <button
                            className="bg-violet-500 px-5 h-12 rounded-6 font-semibold flex items-center gap-3 hover:bg-violet-700"
                            type="submit"
                        >
                            <GameController size={24} />
                            Encontrar Duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
