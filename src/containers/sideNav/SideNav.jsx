import React, { Component } from "react";
import { Breadcrumb, Dropdown,} from "element-react";
import "./index.css";

class SideNav extends Component {
  render() {
    return (
      // 最外成
      <div id="app">
        {/* 側邊欄 */}
        <div id="nav_side">
          <div className="ant_container">
            <h3 className="ant_head">掘金-优秀-作者:123</h3>
            
          </div>
        </div>
       </div>
    );
  }
}

export default SideNav;
