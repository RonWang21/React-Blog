import React, { Component } from 'react'
import NewText from './NewText'
// 引入element-ui
import { Input, Select, Button, Layout } from 'element-react'
// redux
import { connect } from 'react-redux'
import { asyncEssay, asyncCategory } from '../../../redux/asyncActions'
import './adminEssay.less'
const { asyncAddEssay, asyncUpdateEssay } = asyncEssay
const { asyncGetCategories } = asyncCategory
@connect(state => ({ categories: state.categories }), {
  asyncAddEssay,
  asyncGetCategories,
  asyncUpdateEssay
})
class AdminEssay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: []
    }
  }
  async componentDidMount() {
    // 获取分类
    if (!this.props.categories.length) {
      this.props.asyncGetCategories()
    }
  }
  // 标题
  setTitle = title => {
    this.setState({
      title
    })
  }
  setTag = tag => {
    this.setState({
      tag
    })
  }
  // 获得富文本的内容
  textContent = val => {
    this.setState({
      value: val
    })
  }
  // 提交文章
  submitEssay = () => {
    let { value, title, tag } = this.state
    console.log('====================================')
    console.log(this.props.location.state)
    console.log('====================================')
    if (this.props.location.state) {
      this.props.asyncUpdateEssay({
        title,
        content: value,
        category: (tag = tag ? tag : this.props.location.state.essay.category),
        id: this.props.location.state.essay._id
      })
    } else {
      if (value && title && tag) {
        //   console.log('====================================')
        //   console.log(this.state)
        //   console.log('====================================')
        this.props.asyncAddEssay({
          title,
          content: value,
          author: 'admin',
          category: tag,
          isPublish: true
        })
        this.props.history.push('/admin/essaylist')
        //添加请求
      } else {
        console.log('文章内容不完整')
      }
    }
  }
  render() {
    const { categories, location } = this.props
    let essay = null
    if (location.state) {
      essay = location.state.essay
    }
    // console.log('====================================')
    // console.log(this.props.location.state)
    // console.log('====================================')
    return (
      <div>
        {/* value是插入文本的内容 */}
        <div className="essayIpt">
          <Layout.Row gutter="20">
            <Layout.Col span="12">
              <Input
                // placeholder="请输入标题"
                placeholder={essay ? essay.title : '请输入标题'}
                onChange={title => this.setTitle(title)}
              />
            </Layout.Col>
            <Layout.Col span="8">
              <Select
                value={categories}
                // placeholder={essay ? essay.categories : '请选择分类'}
                placeholder="请选择分类"
                onChange={tag => this.setTag(tag)}
              >
                {categories.map(el => {
                  return (
                    <Select.Option
                      key={el._id}
                      label={el.name}
                      value={el.name}
                    />
                  )
                })}
              </Select>
            </Layout.Col>
            <Layout.Col span="4">
              <Button onClick={this.submitEssay}>提交</Button>
            </Layout.Col>
          </Layout.Row>
        </div>
        <NewText
          onChange={this.textContent}
          value={essay ? essay.content : ''}
        />
      </div>
    )
  }
}

export default AdminEssay
