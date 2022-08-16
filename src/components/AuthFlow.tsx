import React from 'react';
import {AppStateContext} from "../context";
// @ts-ignore
import { SpotifyApiContext } from 'react-spotify-api';
// @ts-ignore
import { SpotifyAuth, Scopes } from 'react-spotify-auth'

const AuthFlow = (): JSX.Element => {

    const {token, setToken} = React.useContext(AppStateContext);

    return (
        <div className='auth-flow'>
            {token ? (
                    <p>You are authorized with token: {token}</p>
            ) : (
                // Display the login page
                <SpotifyAuth
                    redirectUri={process.env.REACT_APP_REDIRECT_URI}
                    clientID={process.env.REACT_APP_CLIENT_ID}
                    clientSecret={process.env.REACT_APP_CLIENT_SECRET}
                    scopes={[Scopes.userReadPrivate, Scopes.userLibraryRead]}
                    onAccessToken={(token: string) => setToken(token)}
                />
            )}
        </div>

    );
}

export default AuthFlow;
