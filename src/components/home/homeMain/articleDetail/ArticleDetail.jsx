import React, { Component } from 'react'

// 使用layout布局、Card卡片、Button按钮方法
import { Card, Button } from 'element-react'
import { connect } from 'react-redux'
import './articleDetail.less'
@connect(
  state => ({
    articles: state.articles
  }),
  null
)
class HomeDetail extends Component {
  render() {
    console.log(this.props)

    return (
      <Card
        bodyStyle={{
          padding: '10px',
          display: 'flex ',
          marginTop: '10px'
        }}
      >
        {/* <img src="holder.js/200x150" className="image" /> */}
        <div style={{ padding: 14 }}>
          <div className="detailContent">
            <span className="detailSpan">今天天气很好</span>
            <div className="bottom clearfix">
              <time className="time">2016-10-21 16:19</time>
              <Button plain={true} type="success" size="small">
                关注我
              </Button>
            </div>
            <p className="detailContentp">
              这是学习源码整体架构系列第六篇。整体架构这词语好像有点大，姑且就算是源码整体结构吧，主要就是学习是代码整体结构，不深究其他不是主线的具体函数的实现。本篇文章学习的是实际仓库的代码。
            </p>
          </div>
        </div>
      </Card>
    )
  }
}

export default HomeDetail
