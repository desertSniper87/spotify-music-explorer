// @ts-nocheck

import React from 'react';

import {UserTracks} from 'react-spotify-api';

const MostLikedSongs = (): JSX.Element => {


    return (

        <div className='most-liked-songs'>

            <UserTracks>
                {(tracks, loading, error) => {
                    if (tracks.data) {
                            tracks.items.map(track => (
                                <h1 key={track.track.id}>{track.track.name}</h1>
                            )
                        )
                    }
                }}
            </UserTracks>

        </div>


    );
}

export default MostLikedSongs;
