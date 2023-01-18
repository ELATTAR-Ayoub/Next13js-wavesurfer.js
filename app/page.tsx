'use client';

import React, { useState, useEffect } from 'react'

// components
import WaveSurferComp from '../components/waveSurfer';
import SolidSvg from '@/components/SolidSVG';

// styles
import styles from '../styles/index';
import stylescss from '../styles/page.module.css';

// 
export default function Home() {
    // call redux states

  return (
    <div className={` ${styles.flexCenter} flex-col relative overflow-hidden w-full h-screen`} >
        <div id='player' className={` ${styles.flexBetween} lg:justify-end flex-col gap-[20px] relative bg-primary-color-4 dark:bg-secondary-color overflow-hidden  h-full w-full `}>
            <div className={`grid lg:hidden grid-cols-[25%_50%_25%] relative p-8 md:px-0 sm:max-w-[675px] lg:max-w-[800px] w-full`}>
                <div className='grid content-center'>
                    <button aria-label="open_music_list">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/list.svg'} />
                    </button>
                </div>
                <div className=' bg-primary-color-53 grid content-center text-center py-1 px-8 text-primary-color-83 dark:text-secondary-color rounded font-semibold'>
                    {'Now Playing'}
                </div>
                <div className={`flex items-center justify-end gap-6`}>
                    <button className='grid content-center' aria-label="share_this_song">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/share.svg'} />
                    </button>
                    <button className='grid content-center' aria-label="download_this_song">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/download.svg'} />
                    </button>
                </div>
            </div>

            <div className={` relative  px-8 md:px-0 h-64 min-h-64 max-h-64 lg:h-96 lg:min-h-96 lg:max-h-96 w-full sm:max-w-[675px] lg:max-w-[800px] xl:max-w-[1014px]`}>
            </div>

            <div className={` grid grid-cols-[24px_2fr_24px] sm:grid-cols-[2fr_24px_24px] lg:grid-cols-[2fr_24px_24px_24px_24px_24px] gap-10 relative  text-primary-color-83 dark:text-primary-color-4 p-8 md:px-0 sm:max-w-[675px] lg:max-w-[800px] xl:max-w-[1014px] w-full`}>
                <div className='grid content-center'>
                    <button aria-label="Add_to_my_favorite_list">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/heart_empty.svg'} />
                    </button>
                </div>

                <div className={` ${styles.flexBetween}  flex-col relative overflow-hidden text-center sm:text-left sm:order-first`}>
                    <div className={` text-[100%] lg:text- font-bold mb-2 w-full`}>{"Check ./components/waveSurfer.tsx"}</div>
                    <div className={` text-sm w-full`}>{'ELATTAR Ayub'}</div>
                </div>

                <div  className='grid content-center'>
                    <button aria-label="Add_to_my_list">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/plus.svg'} />
                    </button>
                </div>

                <div className='hidden lg:grid content-center'>
                    <button aria-label="open_music_list">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/list.svg'} />
                    </button>
                </div>

                <div  className='hidden lg:grid content-center'>
                    <button className='grid content-center' aria-label="share_this_song">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/share.svg'} />
                    </button>
                </div>

                <div  className='hidden lg:grid content-center'>
                    <button className='grid content-center' aria-label="download_this_song">
                        <SolidSvg width={'24px'} height={'24px'} color={'#A1C6EA'} className={'SVGBlue2DarkBlue'} path={'/download.svg'} />
                    </button>
                </div>
                
            </div>

            <div className={` ${styles.flexBetween} flex-col bg-secondary-color dark:bg-primary-color-4 p-8  rounded-t-[35px] w-full h-[333px]`}>
                <div className=' w-full sm:max-w-[675px] lg:max-w-[800px] xl:max-w-[1014px]'>
                    <WaveSurferComp />
                </div>
                <div className='w-full sm:max-w-[675px] lg:max-w-[800px] xl:max-w-[1014px]'>
                    <form className={` relative ${styles.flexBetween} flex-col w-full text-primary-color-4 dark:text-secondary-color `}>
                        <label className={` relative ${stylescss.label} w-full font-semibold text-base `}>
                            <span className='relative top-[38px] left-4 transition-all duration-300'>Music name/URL:</span>
                            <input required type="text" className='transition-all rounded-md overflow-hidden w-full p-3 border-primary-color-77 border-2 focus:outline-primary-color-53 focus:outline-2 dark:bg-primary-color-4'  />
                        </label>
                        
                        <button aria-label="search_music" type="button" className='absolute right-2 top-[30px] rounded-full bg-primary-color-77 dark:bg-primary-color-53 hover:bg-primary-color-53 dark:hover:bg-primary-color-77 transition-all flex justify-center items-center overflow-hidden w-10 h-10' >
                            <SolidSvg width={'24px'} height={'24px'} className={'SVGB2W'} path={'/search.svg'} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}
