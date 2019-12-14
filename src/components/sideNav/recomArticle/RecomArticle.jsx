
import React, { Component } from "react";
import { Layout, Icon, Button, NavMenu } from "element-react";
import "./less/index.less"

class RecomArticle extends Component {
  render() {
    return (// 最外层
      <div id="app">
        {/* 側邊欄 */}
        <div
          id="nav_side"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        >
          <div className="ant_container" style={{ width: "100%" }}>
            <div
              className="ant_wrapper"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="ant_content"
              >
                博客-原帖-天河星空
              </div>
            </div>
            <div className="subtitle_warp" style={{ padding: "0 16px" }}>
              <div className="subtitle_head">
                <div className="subtitle_spin">
                  <div className="subtile_title">
                    <div className="title_one">
                      <div className="title_left">
                        <span>
                          <i className="el-icon-edit"></i>
                        </span>
                      </div>
                      <div className="title_right">
                        <h4>作者：程序汪</h4>
                        <div className="ellipsis">Redis 核心原理</div>
                      </div>
                    </div>
                  </div>
                  <div className="subtile_title">
                    <div className="title_one">
                      <div className="title_left">
                        <span>
                          <i className="el-icon-edit"></i>
                        </span>
                      </div>
                      <div className="title_right">
                        <h4>作者：程序猿</h4>
                        <div className="ellipsis">Redis 核心原理</div>
                      </div>
                    </div>
                  </div>
                  <div className="subtile_title">
                    <div className="title_one">
                      <div className="title_left">
                        <span>
                          <i className="el-icon-edit"></i>
                        </span>
                      </div>
                      <div className="title_right">
                        <h4>作者：程序羊</h4>
                        <div className="ellipsis">Redis 核心原理</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecomArticle;
