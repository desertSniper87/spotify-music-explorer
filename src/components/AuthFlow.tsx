import React from 'react';
import {AppStateContext} from "../context";
// @ts-ignore
import { SpotifyApiContext } from 'react-spotify-api';
// @ts-ignore
import { SpotifyAuth, Scopes } from 'react-spotify-auth'

const AuthFlow = (): JSX.Element => {

    const {token, setToken} = React.useContext(AppStateContext);

    return (
        <div className='app'>
            {token ? (
                <SpotifyApiContext.Provider value={token}>
                    {/* Your Spotify Code here */}
                    <p>You are authorized with token: {token}</p>
                </SpotifyApiContext.Provider>
            ) : (
                // Display the login page
                <SpotifyAuth
                    redirectUri='http://localhost:3000/callback'
                    clientID='1a70ba777fec4ffd9633c0c418bdcf39'
                    scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
                    onAccessToken={(token: string) => setToken(token)}
                />
            )}
        </div>

    );
}

export default AuthFlow;
