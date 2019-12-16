import React, { Component } from 'react'
// 使用layout布局、Tabs标签页方法
import { Card, Button } from 'element-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { asyncEssay } from '../../../../redux/asyncActions'
import './articleList.less'
const { asyncGetEssay } = asyncEssay
@connect(
  state => ({
    articles: state.essay
  }),
  { asyncGetEssay }
)
class ArticleList extends Component {
  componentDidMount() {
    //请求userList
    this.props.asyncGetEssay()
  }
  homeDetail = item => {
    this.props.history.push('/articledetail', { item })
  }
  render() {
    const { articles } = this.props
    return (
      <div>
        {articles.map((item, index) => {
          return (
            // 对map 循环出来的每个属性插入标签元素
            <Card
              bodyStyle={{
                padding: '10px',
                display: 'flex ',
                marginTop: '10px'
              }}
              key={index}
            >
              <img
                src={`https://api.ixiaowai.cn/api/api.php?time=${Date.now()}`}
                className="image"
                style={{ width: '200px', height: '150px' }}
              />
              <div style={{ padding: 14 }}>
                <div className="detailContent">
                  <span className="detailSpan">{item.title}</span>
                  <p className="detailp">{item.content}</p>
                </div>

                <div className="bottom clearfix">
                  <time className="time">2016-10-21 16:19</time>
                  <div className="bottomRight">
                    <i className="el-icon-star-off"></i>
                    <i className="el-icon-share"></i>
                    <Button
                      type="text"
                      className="button"
                      onClick={() => this.homeDetail(item)}
                    >
                      全文阅读
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default ArticleList
