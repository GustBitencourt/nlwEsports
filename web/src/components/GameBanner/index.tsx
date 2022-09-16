interface GameBannerProps {
    bannerUrl: string;
    title: string;
    ads?: number;
}


export const GameBanner = (props: GameBannerProps) => {
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={props.bannerUrl} alt="capa jogo" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block">{props.title}</strong>
            <span className="text-zinc-300 text-sm block">{props.ads} Anuncio(s)</span>
          </div>
        </a>
    )
}