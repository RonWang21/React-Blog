import React, { Component } from 'react'

// 使用layout布局、Tabs标签页方法
import { Card, Button } from 'element-react'
import { connect } from 'react-redux'

import './articleList.less'

// 请求文章action
import { asyncArticle } from '../../../../redux/asyncActions'

// 格式化时间
import formatTime from '../../../../utils/setTime'
const { getTimeAgo } = formatTime

const { asyncGetArticle } = asyncArticle
@connect(
  state => ({
    articles: state.article
  }),
  { asyncGetArticle }
)
class ArticleList extends Component {
  // 点击阅读全文
  homeDetail = item => {
    this.props.history.push(`/welcome/${item.category}/${item._id}`, {
      item
    })
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
                style={{ minWidth: '180px', height: '150px' }}
              />
              <div style={{ padding: 14 }}>
                <div className="detailContent">
                  <span className="detailSpan">{item.title}</span>
                  <p className="detailp">{item.content}</p>
                </div>

                <div className="bottom clearfix">
            <time className="time">更新时间 :{getTimeAgo(item.lastModifiedTime)}</time>
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
