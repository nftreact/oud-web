const trackList = {
  artist: 'sirvan',
  id: 1,
  list: [
    {
      id: 1,
      url: '/Ghabe Akse Khali.mp3',
      name: 'Ghabe Akse Khali',
    },
    {
      id: 2,
      url: '/Mohsen Chavoshi - Man Bayad Miraftam (320).mp3',
      name: 'Ghabe Akse Khali',
    },
    {
      id: 3,
      url: '/MohsenChavoshi-ShabiKeMahKamelShod-320(www.Next1.ir).mp3',
      name: 'Ghabe Akse Khali',
    },
  ],
};

export const useGetSingleTrack = (activeTrack: any) => {
  if (activeTrack == undefined) {
    return;
  } else {
    return trackList.list.find((item: any) => item.id === activeTrack.id);
  }
};
