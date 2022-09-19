export interface GameParams {
    id: string;
    title: string;
    background: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            gameAds: {
                id: string;
                title: string;
                bannerUrl: string;
            };
        }
    }
}