import { useState, useEffect } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const tokenUrl = "https://accounts.spotify.com/api/token";

export const useFetchRefreshToken = (code, state) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state
  const [fetching, setFetching] = useState(false); // Add fetching state

  const authParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:5173/callback",
    }),
  };

  const fetchToken = async () => {
    try {
      setFetching(true);
      const res = await fetch(tokenUrl, authParams);
      const data = await res.json();
      console.log("data: \n", data);

      if (data.error) {
        throw new Error(data.error_description);
      }

      setAccessToken(data.access_token);
      setRefreshToken(data.refresh_token);
      setExpiresIn(data.expires_in);
    } catch (error) {
      console.error(`Error in fetchToken: ${error}`);
      setError(error.message); // Set error message
    } finally {
      setLoading(false);
      setFetching(false);
    }
  };

  useEffect(() => {
    if (code && state && !fetching) {
      fetchToken();
    }
  }, [code, state]);

  return { accessToken, refreshToken, expiresIn, loading, error }; // Return error state
};
