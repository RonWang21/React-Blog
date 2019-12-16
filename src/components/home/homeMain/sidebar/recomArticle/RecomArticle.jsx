import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./less/index.less";
import { Button, Dialog } from "element-react";
class RecomArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false
    };
  }
  render() {
    const arr = ["1", "2", "3"];
    return (
      <div className="recomWrapper">
        <div className="recomTile">
          <span>博客-原帖-大白归来</span>
        </div>
        {/* 使用map遍历 */}
        {arr.map((item, index) => {
          return (
            <div className="recomContentWrapper" key={index}>
              <div className="recomContent">
                <div className="recomContentImg">
                  <img
                    alt="img"
                    id="schoolIcon"
                    src={require("./images/portrait.png")}
                  />
                </div>
                <div className="recomContentDetail">
                  <span>作者：程序汪</span>
                  <Link to="/">Echarts纵坐标显示为整数小数。</Link>
                </div>
              </div>
            </div>
          );
        })}
        {/* 引入elment组件Dialog */}{" "}
        <div className="recomMore">
          <div className="recomBorder">
            <Button
              type="text"
              onClick={() => this.setState({ dialogVisible: true })}
            >
              更多信息 >
            </Button>
            <Dialog
              title="提示"
              size="tiny"
              visible={this.state.dialogVisible}
              onCancel={() => this.setState({ dialogVisible: false })}
              lockScroll={false}
            >
              <Dialog.Body>
                <span>当前最新咨询</span>
              </Dialog.Body>
              <Dialog.Footer className="dialog-footer">
                <Button onClick={() => this.setState({ dialogVisible: false })}>
                  取消
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.setState({ dialogVisible: false })}
                >
                  确定
                </Button>
              </Dialog.Footer>
            </Dialog>
          </div>
        </div>
        <div className="download">
          <div className="downloadQr">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/yhhwd01.png")}
            />
          </div>
          <div className="downloadResource">
            <span>下载：银河护卫队</span>
            <Link to="/">一个帮助开发者成长的社区</Link>
          </div>
        </div>
        <div className="recomMore">
          <div className="recomBorder"></div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>     
          <header style={{padding:10, color:'#909090'}}>关于我们</header>
          <div className="recomWx">
          <img
              alt="wx"
              id="schoolIcon"
              src={require("./images/wx.png")}
            />
             <img
              alt="wx"
              id="schoolIcon"
              src={require("./images/wx.png")}
            />    
             <img
              alt="wx"
              id="schoolIcon"
              src={require("./images/wx.png")}
            />     <img
            alt="wx"
            id="schoolIcon"
            src={require("./images/wx.png")}
          />        
          </div>
          <div className="recomTile">
          <span>博客-原帖-大白归来</span>
        </div>
        {/* 使用map遍历 */}
        {arr.map((item, index) => {
          return (
            <div className="recomContentWrapper" key={index}>
              <div className="recomContent">
                <div className="recomContentImg">
                  <img
                    alt="img"
                    id="schoolIcon"
                    src={require("./images/portrait.png")}
                  />
                </div>
                <div className="recomContentDetail">
                  <span>作者：程序汪</span>
                  <Link to="/">Echarts纵坐标显示为整数小数。</Link>
                </div>
              </div>
            </div>
          );
        })}
        {/* 引入elment组件Dialog */}{" "}
        <div className="recomMore">
          <div className="recomBorder">
            <Button
              type="text"
              onClick={() => this.setState({ dialogVisible: true })}
            >
              更多信息 >
            </Button>
            <Dialog
              title="提示"
              size="tiny"
              visible={this.state.dialogVisible}
              onCancel={() => this.setState({ dialogVisible: false })}
              lockScroll={false}
            >
              <Dialog.Body>
                <span>当前最新咨询</span>
              </Dialog.Body>
              <Dialog.Footer className="dialog-footer">
                <Button onClick={() => this.setState({ dialogVisible: false })}>
                  取消
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.setState({ dialogVisible: false })}
                >
                  确定
                </Button>
              </Dialog.Footer>
            </Dialog>
          </div>
        </div>
        <div className="download">
          <div className="downloadQr">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/yhhwd01.png")}
            />
          </div>
          <div className="downloadResource">
            <span>下载：银河护卫队</span>
            <Link to="/">一个帮助开发者成长的社区</Link>
          </div>
        </div>
        <div className="recomMore">
          <div className="recomBorder"></div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>
        <div className="recomResource">
          <div className="recomBook">
            <img
              alt="yhhwd"
              id="schoolIcon"
              src={require("./images/book.png")}
            />
          </div>
          <div className="recomIcon">
            <Link to="/">收藏夹</Link>
          </div>
        </div>     
          <header style={{padding:10, color:'#909090'}}>关于我们</header>
          <div className="recomWx">
          <img
              alt="wx"
              id="schoolIcon"
              src={require("./images/wx.png")}
            />
             <img
              alt="wx"
              id="schoolIcon"
              src={require("./images/wx.png")}
            />    
             <img
              alt="wx"
              id="schoolIcon"
              src={require("./images/wx.png")}
            />     <img
            alt="wx"
            id="schoolIcon"
            src={require("./images/wx.png")}
          />        
          </div>
      </div>
    );
  }
}

export default RecomArticle;
