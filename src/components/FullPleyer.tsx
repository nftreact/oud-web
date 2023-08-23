'use client';
import useOnSelectTrackList from '@/hooks/useOnSelectTrackList';
import React from 'react';

const FullPleyer = ({ onPlay }) => {
  const playerStore = useOnSelectTrackList();
  return (
    <section className=' relative w-screen h-screen flex justify-center items-center '>
      <div
        className=' absolute w-screen h-screen bg-slate-500 blur-lg inset-0'
        onClick={() => {
          localStorage.setItem('isShowFullPlayer', 'false');
          playerStore.setIsShowFullPlayer(false);
        }}
      >
        FullPleyer
      </div>

      <button className=' text-black z-50 absolute ' onClick={() => onPlay()}>
      pause player
      </button>
    </section>
  );
};

export default FullPleyer;
