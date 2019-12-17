import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './less/index.less'
import { Button, Dialog } from 'element-react'
import { StickyContainer, Sticky } from 'react-sticky'
class RecomArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dialogVisible: false,
      topOffset: 0
    }
  }
  componentDidMount() {
    const topOffset = this.refs.stickyWrapper.getBoundingClientRect().y - 106
    this.setState({
      topOffset
    })
  }
  handleClick = () => {
    console.log(this.refs.stickyWrapper.getBoundingClientRect())
  }
  render() {
    const arr = ['1', '2', '3']
    return (
      <div className="stickyWrapper" ref="stickyWrapper">
        <Sticky topOffset={417} relative={false}>
          {({ style = {} }) => (
            <div className="recomWrapper" style={style}>
              <div className="recomTile">
                <span>博客-原帖-大白归来</span>
              </div>
              <div className="app">
                {/* 使用map遍历 */}
                {arr.map((item, index) => {
                  // console.log(arr)
                  return (
                    <div className="recomContentWrapper" key={index}>
                      <div className="recomContent">
                        <div className="recomContentImg">
                          <img
                            alt="img"
                            id="schoolIcon"
                            src={require('./images/portrait.png')}
                          />
                        </div>
                        <div className="recomContentDetail">
                          <span>作者：程序汪</span>
                          <Link to="/">Echarts纵坐标显示为整数小数。</Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* 引入elment组件Dialog */}{' '}
              </div>
              <div className="recomAboutUs">
                <img
                  alt="wx"
                  id="schoolIcon"
                  src={require('./images/wx.png')}
                />
                <img
                  alt="xl"
                  id="schoolIcon"
                  src={require('./images/xl.png')}
                />
                <img
                  alt="zh"
                  id="schoolIcon"
                  src={require('./images/zhihu.png')}
                />{' '}
                <img
                  alt="js"
                  id="schoolIcon"
                  src={require('./images/js.png')}
                />
              </div>
            </div>
          )}
        </Sticky>
      </div>
    )
  }
}

export default RecomArticle
