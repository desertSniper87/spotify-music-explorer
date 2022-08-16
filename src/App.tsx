import React from 'react';
import './App.css';
import AuthFlow from "./components/AuthFlow";
import {AppStateContext} from './context';
import useStorage, {STORAGE_KEY} from "./hooks/useStorage";
// @ts-ignore
import {SpotifyApiContext} from 'react-spotify-api';
import MostLikedSongs from "./components/MostLikedSongs";


function App() {

    const [token, setToken, deleteToken] = useStorage(STORAGE_KEY.SPOTIFY_AUTH_KEY, '');

    const stateValue = React.useMemo(
        () => ({token, setToken}),
        [token]
    );

    return (
        <AppStateContext.Provider value={stateValue}>
            <SpotifyApiContext.Provider value={token}>
                {token && <MostLikedSongs/>}
                <div className="App">
                    <AuthFlow/>
                </div>
            </SpotifyApiContext.Provider>
        </AppStateContext.Provider>
    );
}

export default App;
