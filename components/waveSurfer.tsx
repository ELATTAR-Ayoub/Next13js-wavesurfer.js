import { useEffect, useRef, useState } from "react";
import SolidSvg from '@/components/SolidSVG';

// styles
import styles from '../styles';

const formWaveSurferOptions = (ref: HTMLDivElement) => ({
    container: ref,
    waveColor: "#BBD1EA",
    progressColor: "#507DBC",
    cursorColor: "#A1C6EA",
    barWidth: 4,
    barRadius: 3,
    responsive: true,
    height: 80,
    normalize: true,
    partialRender: true
  });

export default function WaveSurferComp() {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlaying] = useState(false);

    const url = "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

    useEffect(() => {
        create();
    
        return () => {
          if (wavesurfer.current) {
            wavesurfer.current.destroy();
          }
        };
      }, []);

    const create = async () => {
        const WaveSurfer = (await import("wavesurfer.js")).default;
    
        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);
    
        wavesurfer.current?.load(url);
    };

    const handlePlayPause = () => {
        setPlaying(!playing);
        wavesurfer.current?.playPause();
    };

  return (
    <div className={` ${styles.flexBetween} flex-col w-full h-full`}>
        <div className='w-full h-1/2'>
            <div className='w-full h-[90%]'>
                {/* This is the boy here ===> */}
                <div id="waveform" ref={waveformRef} />
            </div>
            <div className={` flex justify-between items-center w-full `}>
                <p>00:01</p>
                <p>03:23</p>
            </div>
        </div>
        <div className={`h-1/2 grid grid-cols-[24px_1fr_24px] gap-[30px] content-center relative sm:max-w-[550px] w-full`}>
            <div className='grid content-center'>
                <button aria-label="shuffle_button" className='disabled:opacity-50'>
                    <SolidSvg width={'24px'} height={'24px'} className={'SVGBlue2W'} color={'#507DBC'} path={'/shuffle.svg'} />
                </button>
            </div>
            <div className={` ${styles.flexCenter} relative gap-[24px] sm:gap-[46px] `}>
                <button aria-label="skip_to_previous_song" className=' scale-[-1] disabled:opacity-50 transition-all duration-300 cursor-pointer' >
                    <SolidSvg width={'24px'} height={'24px'} className={'SVGB2W'} path={'/next_song.svg'} />
                </button>
                <button onClick={handlePlayPause} aria-label="play/pause_song_button" className={` ${styles.flexCenter} transition-all hover:scale-110 focus:scale-90 w-[64px] h-[64px] sm:w-[75px] sm:h-[75px] rounded-full bg-primary-color-53 `}>
                    {(!playing) ? <SolidSvg width={'46px'} height={'46px'} className={'SVGB2W'} path={'/play.svg'} />
                    : <SolidSvg width={'46px'} height={'46px'} className={'SVGB2W'} path={'/pause.svg'} />}
                </button>
                <button aria-label="skip_to_next_song" className=' transition-all duration-300 disabled:opacity-50 cursor-pointer'>
                    <SolidSvg width={'24px'} height={'24px'} className={'SVGB2W'} path={'/next_song.svg'} />
                </button>
            </div>
            <div className='grid content-center'>
                <button aria-label="loop_song" className=' disabled:opacity-50 transition-all duration-300 hover:rotate-[360deg] focus:scale-90'>
                    <SolidSvg width={'24px'} height={'24px'} className={'SVGBlue2W'} color={'#507DBC'} path={'/loop.svg'} />
                </button>
            </div>
        </div>
    </div>
  );
};