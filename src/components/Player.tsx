'use client';
import useOnSelectTrackList from '@/hooks/useOnSelectTrackList';
import { useGetSingleTrack } from '@/hooks/useGetSingleTrack';
import PlayerProvider from './playerProvider';

const Player = () => {
  const { singleTrack } = useOnSelectTrackList();

  const song = useGetSingleTrack(singleTrack);
  console.log(song, 'songgggggg');

  return <section className='border border-cyan-600'>{singleTrack && <PlayerProvider song={song} />}</section>;
};

export default Player;
