import React, { useEffect, useState } from "react";
import Navbars from "../../layouts/Navbars";
import backgroundImage from "./../../assets/favouritevents.png";
import axios from "axios";
import FooterPage from "../../pages/footer/FooterPage";
import { Card } from "react-bootstrap";
import FavouriteEvents from "./FavouriteEvents";

const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  useEffect(() => {
    document.title = "Events";
  }, []);

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(
        `http://localhost:8088/wishlist/viewFavourite/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setWishlists(response.data)
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, [token, userId]);

  return (
    <div>
      <Navbars />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          padding: "20px",
        }}
      >
        <div>
          <Card>
            {wishlists.length > 0 ? (
              wishlists.map((wishlist) => (
                <div key={wishlist.wishlistId}>
                  <FavouriteEvents wishlist={wishlist} />
                </div>
              ))
            ) : (
              <p>No Events</p>
            )}
          </Card>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default Wishlist;
