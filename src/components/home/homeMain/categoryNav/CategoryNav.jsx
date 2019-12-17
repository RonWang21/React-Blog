import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

// 引入样式
import './categoryNav.less'

// 引入connect高阶
import { connect } from 'react-redux'

// 引入action
import { asyncCategory, asyncArticle } from '../../../../redux/asyncActions'
const { asyncGetCategories } = asyncCategory
const { asyncGetArticle } = asyncArticle

@withRouter
@connect(
  state => ({
    categories: state.categories
  }),
  {
    asyncGetCategories,
    asyncGetArticle
  }
)
class CategoryNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // 匹配当前分类名来显示高亮
      currentCategory: ''
    }
  }

  // 获取分类
  async componentDidMount() {
    // 通过路径获取当前需要高亮的分类
    await this.props.asyncGetCategories()
    // 默认将路径对应的分类设为高亮
    this.setState({
      currentCategory: this.props.location.pathname.slice(9) || '推荐'
    })
    // 从当前state中拿到当前分类
    const category = this.state.currentCategory
    this.getArticles(category)
  }

  // 获取文章方法
  getArticles = category => {
    // 推荐的数据还未建立
    if (category && category !== '推荐') {
      //请求articles 传入分类
      this.props.asyncGetArticle({ category })
    } else {
      this.props.asyncGetArticle()
    }
  }

  // tagNav切换事件
  onTagChange = currentCategory => {
    // 改变高亮分类
    this.setState({
      currentCategory
    })
    const category = currentCategory
    this.getArticles(category)
    // 跳转
    setTimeout(() => {
      this.props.history.push(`/welcome/${currentCategory}`)
      // 从当前state中拿到当前分类
    }, 1000)
  }

  render() {
    const categories = this.props.categories
    return (
      // 分类导航栏
      <div className="home-category-nav">
        <ul className="category-nav-list">
          {categories.map((item, index) => {
            const itemStyle =
              item.name === this.state.currentCategory
                ? 'category-nav-item active'
                : 'category-nav-item'
            return (
              <li
                key={index}
                onClick={this.onTagChange.bind(this, item.name)}
                className={itemStyle}
              >
                <a key={index}>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CategoryNav
