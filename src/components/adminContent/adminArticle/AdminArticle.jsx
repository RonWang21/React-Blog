import React, { Component } from 'react'
import NewText from './NewText'
// 引入element-ui
import {
  Input,
  Select,
  Button,
  Layout,
  Switch,
  MessageBox,
  Message
} from 'element-react'
// redux
import { connect } from 'react-redux'
import { asyncArticle, asyncCategory } from '../../../redux/asyncActions'
import './adminArticle.less'
const { asyncAddArticle, asyncUpdateArticle } = asyncArticle
const { asyncGetCategories } = asyncCategory
@connect(state => ({ categories: state.categories }), {
  asyncAddArticle,
  asyncGetCategories,
  asyncUpdateArticle
})
class AdminArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      isPublish: true
    }
  }
  async componentDidMount() {
    // 获取分类
    if (!this.props.categories.length) {
      this.props.asyncGetCategories()
    }
    if (this.props.location.state) {
      this.setState({
        isPublish: this.props.location.state.article.isPublish
      })
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
  submitArticle = () => {
    let { value, title, tag, isPublish } = this.state
    if (this.props.location.state) {
      this.props.asyncUpdateArticle({
        title,
        content: value,
        category: (tag = tag
          ? tag
          : this.props.location.state.article.category),
        id: this.props.location.state.article._id,
        isPublish: isPublish
      })
      this.props.history.push('/admin/articlelist')
    } else {
      if (value && title && tag) {
        MessageBox.confirm('将要提交文章, 是否继续?', '提示', {
          type: 'warning'
        })
          .then(() => {
            this.props.asyncAddArticle({
              title,
              content: value,
              author: JSON.parse(window.localStorage.user).username,
              category: tag,
              isPublish: `${isPublish}`
            })
            this.props.history.push('/admin/articlelist')
            //添加请求
            Message({
              type: 'success',
              message: '添加成功!'
            })
          })
          .catch(() => {
            Message({
              type: 'info',
              message: '已取消'
            })
          })
      } else {
        console.log('文章内容不完整')
      }
    }
  }
  publish = val => {
    this.setState({
      isPublish: val
    })
  }
  render() {
    const { categories, location } = this.props
    let article = null
    if (location.state) {
      article = location.state.article
    }
    return (
      <div>
        {/* value是插入文本的内容 */}
        <div className="articleIpt">
          <Layout.Row gutter="20">
            <Layout.Col span="8">
              <Input
                // placeholder="请输入标题"
                placeholder={article ? article.title : '请输入标题'}
                onChange={title => this.setTitle(title)}
              />
            </Layout.Col>
            <Layout.Col span="8">
              <Select
                value={categories}
                // placeholder={article ? article.categories : '请选择分类'}
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
            <Layout.Col span="4" style={{ lineHeight: '35px' }}>
              <span>
                是否直接发布？
                <Switch
                  value={this.state.isPublish}
                  onColor="#13ce66"
                  offColor="#ff4949"
                  onChange={v => this.publish(v)}
                ></Switch>
              </span>
            </Layout.Col>
            <Layout.Col span="4">
              <Button onClick={this.submitArticle}>提交</Button>
            </Layout.Col>
          </Layout.Row>
        </div>
        <NewText
          onChange={this.textContent}
          value={article ? article.content : ''}
        />
      </div>
    )
  }
}

export default AdminArticle
