import React, { Component } from 'react'

// 使用layout布局、Card卡片、Button按钮方法
import { Card, Button, Tag } from 'element-react'
import { connect } from 'react-redux'
import { asyncArticle } from '../../../../redux/asyncActions'
import './articleDetail.less'
import detailImg from './images/Vue.js 2.0 快速上手精华梳理 - 掘金.webp'
const { asyncGetArticle } = asyncArticle
@connect(
  state => ({
    articles: state.article
  }),
  { asyncGetArticle }
)
class ArticleDetail extends Component {
  // 界面渲染之前请求获取文章
  componentDidMount() {
    //请求获取文章
    this.props.asyncGetArticle()
  }
  homrDetailBack = () => {
    this.props.history.goBack('/')
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
              <div>
                <Tag>{item.author || 'admin'}</Tag>
                {item.category ? (
                  <Tag type="gray" style={{ margin: '0px 10px' }}>
                    {item.category}
                  </Tag>
                ) : null}
                {item.tag ? (
                  <Tag type="primary" style={{ margin: '0px 10px' }}>
                    {item.tag}
                  </Tag>
                ) : null}
              </div>
              <Button type="text" onClick={this.homrDetailBack}>
                戳我回到上一层
              </Button>
            </div>

            <div className="bottom1 clearfix">
              <time className="time">2016-10-21 16:19</time>
              <Button plain={true} type="success" size="small">
                关注我
              </Button>
            </div>
            <div className="detailContent">
              <Tag
                type="success"
                style={{ fontSize: '12px', marginBottom: '10px' }}
              >
                本文为博主原创文章，遵循 CC 4.0 BY-SA
                版权协议，转载请附上原文出处链接和本声明。
              </Tag>
              <img src={detailImg} alt="" />
              <p className="detailContentp">{item.content}</p>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default ArticleDetail
