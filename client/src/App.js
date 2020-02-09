import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import { Col, Row, Container } from "../src/components/Grid";
import "./App.css";
import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API";
import { set } from "mongoose";
import { PageItem } from "react-bootstrap";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignInBTN from "./components/SignInBTN";
// import RegisterBTN from "./components/RegisterBTN";

import 'bootstrap/dist/css/bootstrap.min.css';

// Create an array to hold all slider Images
const sliderImages = [
  {
    name: "Image 1",
    url: "https://wallpaperfm.com/img/original/3/6/a/49159.jpg"
  },
  {
    name: "Image 2",
    url:
      "https://images.wallpaperscraft.com/image/paul_pierce_washington_wizards_basketball_nba_103099_1280x720.jpg"
  }
];


// Create an array of NavLinks
const navLinks = [
  {
    label: "Home",
    link: "#",
    hasList: false,
    active: true
  },
  {
    label: "All Teams",
    link: "#",
    hasList: true,
    teamList: [],
    active: false
  },
  {
    label: "Favorite Teams",
    link: "favorites",
    hasList: true,
    list: [],
    active: false
  },
  {
    label: "Calendar",
    link: "#",
    hasList: false,
    active: false
  }
];


class App extends Component {
  componentDidMount() {
    API.intializeTeamData();
  }

  handleTestEvent = event => {
    //test get all team api
    switch (event.target.value) {
      case "getallteam":
        API.getAllTeam().then(data => {
          console.log(data);
        });
        break;
      case "saveteamtofav":
        API.updateTeamFavorite(36, true).then(data => {
          console.log(data);
        });
        break;
      case "getallgame":
        API.getAllGames(40).then(data => {
          console.log(data);
        });
        break;
      case "getfavgame":
        API.getAllFavoriteGames(console.log);
        break;
      case "favoritegame":
        API.addGameToFavorite({ gameId: 1005 }).then(data => {
          console.log(data);
        });
        break;
      case "unfavoritegame":
        API.removeGameFromFavorite(1001).then(data => {
          console.log("APPJS - removegamefromfavorite")
          console.log(data);
        });
        break;
    }

  }

  render() {
    return (
      <Router>
        <Container fluid>
          <div>
            <button onClick={this.handleTestEvent} value="getallteam">Get All Teams</button>
            <button onClick={this.handleTestEvent} value="saveteamtofav">Save Team To Favorite</button>
            <button onClick={this.handleTestEvent} value="getallgame">Get All Games</button>
            <button onClick={this.handleTestEvent} value="getfavgame">Get All Favorite Games</button>
            <button onClick={this.handleTestEvent} value="favoritegame">Save Game To Favorite</button>
            <button onClick={this.handleTestEvent} value="unfavoritegame">Remove Game From Favorite</button>
          </div>

          <br />
          <Nav logo={logo} links={navLinks} />

          <br />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Container>
      </Router>
    );
  }
}
export default App;


