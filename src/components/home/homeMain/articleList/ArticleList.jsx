import React, { Component } from 'react'

// 使用layout布局、Tabs标签页方法
import { Card, Button, Loading } from 'element-react'
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
  constructor(props) {
    super(props)

    // 初始化一个对象
    let myState = {}
    // 遍历所有redux中的文章
    this.props.articles.forEach(item => {
      // 结构出来文章的id作为不同imgLoadingState的唯一标识
      const { _id } = item
      // 初始化loading状态为true(loading)
      myState[`loading${_id}`] = true
    })
    // 设置state
    this.state = myState
  }

  // 图片加载完成
  changeLoadStatu = (needChange, error) => {
    this.setState({
      // 设置加载完成图片的loading状态为false
      [needChange]: false
    })
    // 图片加载失败
    if (error === 'error') {
      this.refs[
        needChange
        // 直接给路径是不行的，和vue一样需要require
      ].src = require('../../../../assets/images/logo.png')
    }
  }

  // 点击阅读全文
  homeDetail = item => {
    const { scrollY } = window
    this.props.history.push(`/welcome/${item.category}/${item._id}`, {
      // 传入当前文章和当前scrollTop
      item,
      scrollY
    })
  }

  /**
   * 在articledetail使用goBack返回不生效，所以改用push
   * 但是push会让当前页面回到顶部，而我们需要保存阅读文章详情时当前页
   * 面的位置，所以在点击阅读全文跳转时获取到当前页面的scrollTop交给
   * articledetail保存起来，返回时再将scrollTop交给当前页面用来回到
   * 阅读文章详情时的位置
   *  */
  componentDidMount() {
    if (this.props.location.state) {
      const { scrollY } = this.props.location.state
      window.scrollTo(0, scrollY)
    }
  }

  // 点击分类重新获取数据是页面还是会停留在当前位置，需要重新回到顶部
  componentWillReceiveProps() {
    window.scrollTo(0, 0)
  }

  render() {
    const { articles } = this.props
    return (
      <div className="articleOuter">
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
              className="detailCard"
            >
              <Loading
                text="玩命加载中..."
                loading={this.state[`loading${item._id}`]}
              >
                <img
                  onError={this.changeLoadStatu.bind(
                    this,
                    `loading${item._id}`,
                    'error'
                  )}
                  alt="文章图片"
                  ref={`loading${item._id}`}
                  onLoad={this.changeLoadStatu.bind(this, `loading${item._id}`)}
                  src={`https://api.ixiaowai.cn/api/api.php?time=${index}`}
                  className="image"
                  // alt="加载失败哦"
                  style={{ minWidth: '180px', height: '150px' }}
                />
              </Loading>
              <div style={{ padding: 14 }}>
                <div className="detailContent">
                  <span className="detailSpan">{item.title}</span>
                  <p
                    className="detailp"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>

                <div className="bottom clearfix">
                  <time className="time">
                    更新时间 :{getTimeAgo(item.lastModifiedTime)}
                  </time>
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
