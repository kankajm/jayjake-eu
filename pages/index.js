import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitch, faSteam, faSpotify, faInstagram, faYoutube, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons'
import { useLanyard } from "react-use-lanyard";
import Footer from "../components/Footer";

export default function Home() {
  const { loading, status /*, websocket */ } = useLanyard({
		userId: "310360857366233099",
		socket: true,
	});

  return (
    <div>
      <Head>
        <title>JayJake - Jakub Knot</title>
        <meta name="description" content="Jay's personal website." />
        <meta charSet="UTF-8" />
        <meta name="author" content="Jaroslav Kaňka" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=K2D:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <main className="font-['K2D'] text-white flex flex-col h-screen justify-center">
          <div className="text-center">
            <h1 className="text-[6vh] text-bold"><span className="special-red">JAY</span>JAKE</h1>
            <h3 className="text-[2vh] text-bold">Jakub<span className="special-red"> Knot</span></h3>
          </div>

          <div className="w-[100%] mt-10">
            <ul className="list-none text-center">
              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://discord.gg/n5tTgjh" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://twitch.tv/jayjake" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitch} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://steamcommunity.com/id/jayjake" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faSteam} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://open.spotify.com/user/pixling" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://www.last.fm/user/jayjakee" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faMusic} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://www.instagram.com/jayjake.k/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://youtube.com/c/jayjake" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="https://www.snapchat.com/add/jayjake.k" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faSnapchatGhost} />
                </a>
              </li>

              <li className="inline-block ml-4 mr-4 mt-4 mb-4">
                <a className="text-[#d2dae2] text-[3vh] ease-in duration-300 hover:text-[#e4003F]" href="mailto:jakubknot@email.cz" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
          {!loading && <Footer data={status}/>}
      </main>
    </div>
  )
}
