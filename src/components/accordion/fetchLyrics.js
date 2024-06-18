export default function fetchLyrics(song, artist) {
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  let songArtist = artist.join('_').split(" ").join("_");
  let songName = song;
  const apiKey = "c0f3ccbe5f459a1591ccb611de159680";
  const apiUrl = `${corsProxy}https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${songName}&q_artist=${songArtist}&apikey=${apiKey}`;

  fetch(apiUrl).then(res => {
    return res.json()
  }).then(data => {
    let returned = data.message.body.lyrics.lyrics_body.split("***")[0];
    console.log(returned);
    return returned;
  }).catch(error => error);
}