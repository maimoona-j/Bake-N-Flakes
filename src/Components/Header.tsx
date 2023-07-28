import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Components/Spinner";
import Search from "../Components/Search";
import Profile from "../Components/Profile";

library.add(fas);

const Header = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State to control profile visibility

  const instagramUrl = "https://www.instagram.com/";
  const facebookUrl = "https://www.facebook.com/";
  const twitterUrl = "https://www.twitter.com/";

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavigate = (path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = path; // Using window.location.href to simulate navigation
    }, 1000); // Delay for 1 second to simulate loading
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-end bg-black">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-xl mx-2"
          />
        </a>
        <a href={facebookUrl} target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-white text-xl mx-2"
          />
        </a>

        <a href={twitterUrl} target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white text-xl mx-2"
          />
        </a>
      </div>

      <div className="bg-pink-200 h-24 flex items-center justify-between cursor-pointer">
        <div className="mx-auto flex items-center">
          {isSearchOpen ? (
            <Search onClose={toggleSearch} />
          ) : (
            <FontAwesomeIcon
              icon={faSearch}
              className="text-2xl mr-2 sm:mr-12 cursor-pointer"
              onClick={toggleSearch}
            />
          )}
          <div className="relative">
            <FontAwesomeIcon
              icon="user"
              className="text-2xl mr-2 sm:mr-12 cursor-pointer"
              onClick={toggleProfile}
            />
          </div>

          <h1 className="text-xl whitespace-nowrap sm:whitespace-normal">
            Bake n' Flakes
          </h1>
          <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
          <FontAwesomeIcon
            icon="shopping-cart"
            className="text-2xl ml-2 sm:ml-12"
            onClick={() => handleNavigate("/cart")}
          />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl sm:hidden mb-2 mr-4"
          onClick={toggleNav}
        />
      </div>

      <div
        className={`h-16 flex justify-center items-center bg-blue-200 ${
          isNavOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <ul className="flex space-x-2 sm:space-x-12 cursor-pointer">
          <li onClick={() => handleNavigate("/")}>
            {isLoading ? <Spinner /> : null}
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleNavigate("/cookies")}>
            {isLoading ? <Spinner /> : null}
            <Link to="/cookies">Cookies</Link>
          </li>
          <li onClick={() => handleNavigate("/cakes")}>
            {isLoading ? <Spinner /> : null}
            <Link to="/cakes">Cakes</Link>
          </li>
          <li onClick={() => handleNavigate("/blog")}>
            {isLoading ? <Spinner /> : null}
            <Link to="/blog">Recipe</Link>
          </li>
        </ul>
      </div>

      {isProfileOpen && (
        <div className="bg-white mt-8 p-2 absolute top-16 right-[60%] shadow">
          <Profile onClose={toggleProfile} />
        </div>
      )}
    </div>
  );
};

export default Header;
