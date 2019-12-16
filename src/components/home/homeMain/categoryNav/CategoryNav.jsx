import React, { Component } from 'react'

// 引入样式
import './categoryNav.less'

// 引入connect高阶
import { connect } from 'react-redux'

// 引入action
import { asyncCategory } from '../../../../redux/asyncActions'
const { asyncGetCategories } = asyncCategory

@connect(
  state => ({
    categories: state.categories
  }),
  {
    asyncGetCategories
  }
)
class CategoryNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTag: '前端'
    }
  }

  // 获取分类
  async componentDidMount() {
    await this.props.asyncGetCategories()
  }

  // tagNav切换事件
  onTagChange = currentTag => {
    this.setState({
      currentTag
    })
  }

  render() {
    const categories = this.props.categories
    return (
      // 分类导航栏
      <div className="home-category-nav">
        <ul className="category-nav-list">
          {categories.map((item, index) => {
            const itemStyle =
              item.name === this.state.currentTag
                ? 'category-nav-item active'
                : 'category-nav-item'
            return (
              <li
                key={index}
                onClick={this.onTagChange.bind(this, item.name)}
                className={itemStyle}
              >
                <a href key={index}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CategoryNav
