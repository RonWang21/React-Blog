import React, { Component } from 'react'
import NewText from './NewText'
// 引入element-ui
import { Input, Select, Button, Layout } from 'element-react'
import { reqGetTags } from '../../../api'
import './adminEssay.less'
class AdminEssay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: []
    }
  }
  async componentDidMount() {
    // 获取分类
    const result = await reqGetTags()
    if (result.status === 0) {
      let options = []
      result.data.tags.map((item, index) => {
        let obj = {}
        // 设置分类的value、label、index
        obj.index = index
        obj.value = item.name
        obj.label = item.name
        options.push(obj)
        return options
      })
      // 设置state的options
      this.setState({
        options
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
  submitEssay = () => {
    const { value, title, tag } = this.state
    if (value && title && tag) {
      console.log('====================================')
      console.log(this.state)
      console.log('====================================')
      //添加请求
    } else {
      console.log('文章内容不完整')
    }
  }
  render() {
    return (
      <div>
        {/* value是插入文本的内容 */}
        <div className="essayIpt">
          <Layout.Row gutter="20">
            <Layout.Col span="12">
              <Input
                placeholder="请输入标题"
                onChange={title => this.setTitle(title)}
              />
            </Layout.Col>
            <Layout.Col span="8">
              <Select
                value={this.state.options}
                onChange={tag => this.setTag(tag)}
              >
                {this.state.options.map(el => {
                  return (
                    <Select.Option
                      key={el.value}
                      label={el.label}
                      value={el.value}
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
        <NewText onChange={this.textContent} value={''} />
      </div>
    )
  }
}

export default AdminEssay
