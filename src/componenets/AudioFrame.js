import React from 'react'

export default function AudioFrame({ album }) {
    return (
        <div>
            <iframe title="Spotify Frame" src={album} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}
