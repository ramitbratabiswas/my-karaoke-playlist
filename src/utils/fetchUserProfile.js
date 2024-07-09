import { useState, useEffect } from "react";

export const useFetchUserProfile = () => {

  const [userProfile, setUserProfile] = useState({
    imgUrl: "",
    name: ""
  });
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchUserProfile = async () => {
      
      if (!token) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const jsonified = await res.json();
        const name = jsonified.display_name;
        const imgUrl = jsonified.images[0].url;

        console.log("name: " + name + " imgUrl: " + imgUrl);

        setUserProfile({
          imgUrl: imgUrl,
          name: name
        });

      } catch (error) {
        console.error(`catch clause error in fetchUserImage: ${error}`);
      }
    }
    fetchUserProfile();
  },[token]);

  return userProfile;
}