'use client';
import useOnSelectTrackList from '@/hooks/useOnSelectTrackList';
import React from 'react';

const AudioBar = ({ onPlay }) => {
  const playerStore = useOnSelectTrackList();
  return (
    <section className='flex justify-between px-7'>
      <button onClick={() => onPlay()}>play track</button>
      <button
        onClick={() => {
          playerStore.setIsShowFullPlayer(true), localStorage.setItem('isShowFullPlayer', 'true');
        }}
      >
        show full player
      </button>
    </section>
  );
};

export default AudioBar;
