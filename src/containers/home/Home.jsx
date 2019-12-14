import React, { Component } from "react";
import "./Home.less";
// 引入header组件
import Header from "../../components/header/Header.jsx";
// 引入sideNev组件
import SideNav from "../../containers/sideNav/SideNav";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-contanier">
          <div className="home-main-contanier" />
          <SideNav />
        </div>
      </div>
    );
  }
}

export default Home;
