import React, { Component } from 'react'

// 使用layout布局、Card卡片、Button按钮方法
import { Card, Button, Tag } from 'element-react'
import { connect } from 'react-redux'
import { asyncArticle } from '../../../../redux/asyncActions'
import './articleDetail.less'
const { asyncGetArticle } = asyncArticle
@connect(
  state => ({
    articles: state.article
  }),
  { asyncGetArticle }
)
class ArticleDetail extends Component {
  componentDidMount() {
    //请求获取文章
    this.props.asyncGetArticle()
  }
  render() {
    const item = this.props.location.state.item || ''
    return (
      <Card
        bodyStyle={{
          padding: '10px',
          display: 'flex ',
          marginTop: '10px'
        }}
      >
        {/* <img src="holder.js/200x150" className="image" /> */}
        <div style={{ padding: 14, width: '100%' }}>
          <div className="detailContent">
            <span className="detailSpan">{item.title}</span>
            <div className="detailTags">
              <Tag>{item.author}</Tag>
              <Tag type="gray" style={{ margin: '0px 10px' }}>
                {item.category}
              </Tag>
              <Tag type="primary" style={{ margin: '0px 10px' }}>
                {item.tag}
              </Tag>
            </div>

            <div className="bottom1 clearfix">
              <time className="time">2016-10-21 16:19</time>
              <Button plain={true} type="success" size="small">
                关注我
              </Button>
            </div>
            <p className="detailContentp">{item.content}</p>
          </div>
        </div>
      </Card>
    )
  }
}

export default ArticleDetail
