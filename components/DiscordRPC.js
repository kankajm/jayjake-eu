import React from 'react';
import Image from 'next/image';
//import { useTime } from '../hooks/useTime';

export default function DiscordRPC(discordData) {
  return (
    <div className="flex bg-[#38393e] w-[20rem] h-[8rem] border-solid border-2 border-[#e4003F] rounded-lg">
      <img className="mt-4 mb-4 ml-4 mr-4" src={`https://dcdn.dstn.to/app-icons/${discordData.data.application_id}.webp?size=512px`} alt={discordData.data.name} />
      <div className="flex flex-col justify-center mr-1">
        <h1 className="text-white text-xl">{discordData.data.name}</h1>
        <h2 className="text-white text-sm">{discordData.data.details}</h2>
        <h2 className="text-white text-sm ">{discordData.data.state}</h2>
      </div>
    </div>
  );
}

/*
{"type":0,"timestamps":{"start":1665856224314},"state":"Workspace: jayjake-eu","session_id":"049a68a9e8a283f77ffb34f5afb18628","name":"Visual Studio Code","id":"affcaf0d01038057","details":"Editing DiscordRPC.js","created_at":1665857484163,"buttons":["View Repository"],"assets":{"small_text":"Visual Studio Code - Insiders","small_image":"565949878820405299","large_text":"Editing a JAVASCRIPT file","large_image":"808841241142755358"},"application_id":"383226320970055681"}
*/