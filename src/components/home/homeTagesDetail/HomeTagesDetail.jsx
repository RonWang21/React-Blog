import React, { Component } from 'react'
// 使用layout布局、Tabs标签页方法
import { Card, Button } from 'element-react'
import { Link } from 'react-router-dom'
class HomeTagesDetail extends Component {
  render() {
    return (
      <div>
        <Card
          bodyStyle={{
            padding: '10px',
            display: 'flex ',
            marginTop: '10px'
          }}
        >
          <img src="holder.js/200x150" className="image" alt="holder"/>
          <div style={{ padding: 14 }}>
            <div className="detailContent">
              <span className="detailSpan">好吃的汉堡</span>
              <p className="detailp">
                这是学习源码整体架构系列第六篇。整体架构这词语好像有点大，姑且就算是源码整体结构吧，主要就是学习是代码整体结构，不深究其他不是主线的具体函数的实现。本篇文章学习的是实际仓库的代码。
              </p>
            </div>

            <div className="bottom clearfix">
              <time className="time">2016-10-21 16:19</time>
              <Button type="text" className="button" onClick={this.homeDetail}>
                <Link to="/detail">全文阅读</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default HomeTagesDetail
