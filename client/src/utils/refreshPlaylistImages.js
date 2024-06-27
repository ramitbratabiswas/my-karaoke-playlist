import { playlists } from "../data/playlists"
import { useFetchPlaylistImage } from "./fetchPlaylistImage"

export const useRefreshImages = () => {
  playlists[0].image = useFetchPlaylistImage(playlists[0].id);
  playlists[1].image = useFetchPlaylistImage(playlists[1].id);
  playlists[2].image = useFetchPlaylistImage(playlists[2].id);
  playlists[3].image = useFetchPlaylistImage(playlists[3].id);
  playlists[4].image = useFetchPlaylistImage(playlists[4].id);
  playlists[5].image = useFetchPlaylistImage(playlists[5].id);
  playlists[6].image = useFetchPlaylistImage(playlists[6].id);
  playlists[7].image = useFetchPlaylistImage(playlists[7].id);
  playlists[8].image = useFetchPlaylistImage(playlists[8].id);
  playlists[9].image = useFetchPlaylistImage(playlists[9].id);
}