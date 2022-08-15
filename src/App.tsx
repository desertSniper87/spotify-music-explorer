import React from 'react';
import './App.css';
import AuthFlow from "./components/AuthFlow";
import {AppStateContext} from './context';
import useStorage, {STORAGE_KEY} from "./hooks/useStorage";

function App() {

    const [token, setToken, deleteToken] = useStorage(STORAGE_KEY.SPOTIFY_AUTH_KEY, '');

    const stateValue = React.useMemo(
        () => ({token, setToken}),
        [token]
    );

    return (
        <AppStateContext.Provider value={stateValue}>
            <div className="App">
                <AuthFlow/>
            </div>
        </AppStateContext.Provider>
    );
}

export default App;
