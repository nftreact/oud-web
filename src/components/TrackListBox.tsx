'use client';
import useOnSelectTrackList from '@/hooks/useOnSelectTrackList';
import React from 'react';

type TrackListBox = {
  data: any;
};

const TrackListBox = () => {
  const { setSingleTrack ,trackList } = useOnSelectTrackList();
  return (
    <div>
      {trackList?.map((item, index) => {
        return (
          <div onClick={() => setSingleTrack(item)} key={index}>
            {item?.name}
          </div>
        );
      })}
    </div>
  );
};

export default TrackListBox;
