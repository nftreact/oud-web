'use client';

import useOnSelectTrackList from '@/hooks/useOnSelectTrackList';
import React from 'react';

const PlayList = ({ data }) => {
  const { setTrackList } = useOnSelectTrackList();
  return (
    <div className='flex gap-5'>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className='h-[150px] w-[150px] border rounded cursor-pointer'
            onClick={() => {
              setTrackList(item.trackList);
            }}
          >
            <p>{item.artist}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlayList;
