import crypto from 'crypto-browserify';

export const createAuthLink = () => {

  const client_id = import.meta.env.VITE_CLIENT_ID;
  const redirect_uri = 'http://localhost:5173/callback';

  const state = generateRandomString(16);
  const scope = `playlist-read-private
    playlist-read-collaborative
    user-library-read
    user-read-playback-state
    user-read-currently-playing
    user-read-recently-played
    user-top-read`;

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state
  });

  const link = `https://accounts.spotify.com/authorize?${params.toString()}`;

  return link;
}

const generateRandomString = (length) => {
  return crypto
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}