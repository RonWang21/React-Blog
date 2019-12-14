import React, { Component } from "react";
import RecomArticle from '../../components/sideNav/recomArticle/RecomArticle'

class SideNav extends Component {
  render() {
    return (
      <div className="home-sidebar-contanier">
            <RecomArticle />
        </div>
      );
  }
}

export default SideNav;
