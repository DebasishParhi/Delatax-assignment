import "./homepage.css";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

import Header from "../Header";
import Songs from "../Songs";
import SubHeading1 from "../Heading1";
import Song from "../Song";
import Artists from "../Artists";
import SubHeading2 from "../Heading2";
import Artist from "../Artist";
import AddNewSong from "../../pages/AddNewSong";
import { Route, Switch } from "react-router-dom";
export const HOMEPAGE = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Songs />
        <div id="design1">
          <SubHeading1 />
          
          <Song
            Artwork={img2}
            song="Phir Mohabbat"
            dateOfRelease=" 8 July 2011"
            Artist="Arjit Sing"
          />
          
          <Song
            Artwork={img1}
            song="Teri Mitti"
            dateOfRelease=" March 15, 2019"
            Artist="Arko Pravo Mukherjee, B Praak"
          />
          <Song
            Artwork={img3}
            song="Teri Meri"
            dateOfRelease="11 September 2019"
            Artist="Himesh Reshammiya "
          />
       
        </div>
        <Artists />
        <div id="design2">
          <SubHeading2 />
          
          <Artist
            name="Himesh Reshammiya "
            dob="5 april 1980"
            songslist="Teri Meri"
          />
          <Artist
            name="B.arak"
            dob="14 August 1797"
            songslist="Teri Mitti"
          />
          <Artist
            name="Arjit Sing"
            dob="8 jan 2011"
            songslist="Phir Mohabbat"
          />
        </div>
      </Route>
      <Route exact path="/AddNewSong">
        <AddNewSong />
      </Route>
     
    </Switch>
  );
};
