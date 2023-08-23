import TrackListBox from '../../../components/TrackListBox';
import React from 'react';
import PlayList from '@/components/PlayList';

const Page = ({ params: { category } }: { params: { category: string } }) => {
  const data = [
    {
      artist: 'sirvan',
      id: 1,
      trackList: [
        {
          id: 1,
          name: 'Ghabe Akse Khali',
        },
        {
          id: 2,
          name: 'Ghabe Akse Khali',
        },
        {
          id: 3,
          name: 'Ghabe Akse Khali',
        },
      ],
    },
  ];

  return (
    <>
      <div> {category} category</div>
      <div className='w-fullflex items-center justify-center p-10'>
        <PlayList data={data} />
        <TrackListBox />
      </div>
    </>
  );
};

export default Page;
