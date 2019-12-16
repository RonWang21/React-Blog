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
  }
  componentDidMount() {
    console.log(this.props.asyncGetCategories)
  }
  render() {
    console.log(this.props.categories)
    return (
      // 分类导航栏
      <div className="home-category-nav">
        <ul className="category-nav-list">
          <li className="category-nav-item">java</li>
        </ul>
      </div>
    )
  }
}

export default CategoryNav
