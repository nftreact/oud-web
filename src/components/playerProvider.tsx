'use client';
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import AudioBar from './AudioBar';
import FullPleyer from './FullPleyer';
import useOnSelectTrackList from '@/hooks/useOnSelectTrackList';

const ParentPlayer = ({ song }) => {
  const { isShowFullPlayer, singleTrack } = useOnSelectTrackList();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log(song, 'song in player provider');
  console.log(isPlaying, 'isPlaying');

  const [play, { pause, sound }] = useSound(song ? song.url : '', {
    onload: () => setIsLoading(false),
    onplay: () => setIsPlaying(true),
    onend: () => {
      setIsPlaying(false);
    },
    onpause: () => setIsPlaying(false),
    format: ['mp3'],
  });

  useEffect(() => {
    if (song === undefined) {
      console.log('if run');
      return;
    } else {
      console.log('else run');
      sound?.play();
    }
    return () => {
      sound?.unload();
    };
  }, [sound, song]);

  const handlePlayer = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };
  return (
    <section className='border border-cyan-800 py-8'>
      {<AudioBar onPlay={() => handlePlayer()} />}
      {isShowFullPlayer && <FullPleyer onPlay={() => handlePlayer()} />}
    </section>
  );
};

export default ParentPlayer;
