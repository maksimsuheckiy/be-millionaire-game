import React from "react";
import Game from "../containers/Game/Game";
import GameStart from "../containers/GameStart/GameStart";
import GameOver from "../containers/GameOver/GameOver";
import NotFound from "../containers/NotFound/NotFound";

const Routes = [
    {
        path: '/',
        exact: true,
        component: () => <GameStart/>
    },
    {
        path: '/game',
        component: () => <Game/>
    },
    {
        path: '/game-over',
        component: () => <GameOver/>
    },
    {
        path: "*",
        component: () => <NotFound />
    }
]

export default Routes