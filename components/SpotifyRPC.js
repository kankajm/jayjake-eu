import React from 'react';

export default function SpotifyRPC(spotifyData) {
  return (
    <div className="flex bg-[#38393e] w-[20rem] h-[8rem] border-solid border-2 border-[#e4003F] rounded-lg">
      <img className="mt-4 mb-4 ml-4 mr-4" src={spotifyData.data.album_art_url} alt={spotifyData.data.song}/>
      <div className="flex flex-col justify-center mr-1">
        <h1 className="text-white text-xl">{spotifyData.data.song}</h1>
        <h2 className="text-white text-sm">By: {spotifyData.data.artist}</h2>
      </div>
    </div>
  );
}

/*
{
  "data": {
    "track_id": "4ptSL1o2pRgNvrC4wsN1Pl",
    "timestamps": {
      "start": 1665864359389,
      "end": 1665864577189
    },
    "song": "No Rain - Remastered 2002",
    "artist": "Blind Melon",
    "album_art_url": "https://i.scdn.co/image/ab67616d0000b273eaac35c468ad5034241c86ad",
    "album": "Best Of Blind Melon"
  }
}
*/