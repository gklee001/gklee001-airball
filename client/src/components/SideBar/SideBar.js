import React from "react";
import { Container } from "../Grid";
import "../SideBar/SideBar.css";
import FavoriteTeamBtn from "../FavoriteTeamBtn";

function SideBar(props) {
  // Function to render all of the teams from allTeamsFiltered
  let renderAllTeams = props.teams
    .filter(team => {
      return team.favorite === false;
    })
    .map((team, index) => {
      return (
        <li className="sideBarTeamItem">
          <a className="sideBarTeamLink" eventKey={index} href="#">
            <span>{team.fullName}</span>
            <FavoriteTeamBtn />
          </a>
        </li>
      );
    });

  // Function to render all the favorite teams from faveTeamsFiltered
  let renderFaveTeams = props.teams
    .filter(team => {
      return team.favorite === true;
    })
    .map((team, index) => {
      return (
        <li>
          <a eventKey={index} href="#">
            {team.fullName}
            <FavoriteTeamBtn />
          </a>
        </li>
      );
    });

  return (
    <Container>
      <div className="wrapper">
        <nav id="sidebar">
          <ul class="list-unstyled components">
            <li className="sideBarMainItem">
              <a href="#">
                <span className="sideBarMainItemText">Home</span>
              </a>
            </li>

            <li className="sideBarMainItem">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <span className="sideBarMainItemText">All Teams</span>
              </a>
              <ul class="collapse list-unstyled" id="homeSubmenu">
                {renderAllTeams}
              </ul>
            </li>

            <li className="sideBarMainItem">
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <span className="sideBarMainItemText">Favorite Teams</span>
              </a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                {renderFaveTeams}
              </ul>
            </li>

            <li className="sideBarMainItem">
              <a href="#">
                <span className="sideBarMainItemText">Calendar</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export default SideBar;