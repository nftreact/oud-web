import { create } from 'zustand';

interface PlayerStore {
  isShowFullPlayer: boolean;
  trackList: object[];
  singleTrack?: object | undefined;
  setSingleTrack: (track: object) => void;
  setTrackList: (tracks: object[]) => void;
  setIsShowFullPlayer: (val: boolean) => void;
}

const useOnSelectTrackList = create<PlayerStore>((set) => ({
  isShowFullPlayer: localStorage.getItem('isShowFullPlayer') === 'true' ? true : false,
  trackList: [],
  singleTrack: undefined,
  setSingleTrack: (track: object) => set({ singleTrack: track }),
  setTrackList: (tracks: object[]) => set({ trackList: tracks }),
  setIsShowFullPlayer: (val: boolean) => set({ isShowFullPlayer: val }),
}));

export default useOnSelectTrackList;
