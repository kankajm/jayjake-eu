import React from 'react';
import DiscordRPC from './DiscordRPC';
import SpotifyRPC from './SpotifyRPC';

export default function Footer(status) {
  let discordData = status.data.activities.find((activity) => activity.type === 0);
  let spotifyData = status.data.spotify;

  return (
    <footer className="flex justify-center flex-wrap gap-4">
        {status.data.activities.find((activity) => activity.type === 0) && <DiscordRPC data={discordData} />}
        {status.data.listening_to_spotify && <SpotifyRPC data={spotifyData} />}
  </footer>
  );
}
