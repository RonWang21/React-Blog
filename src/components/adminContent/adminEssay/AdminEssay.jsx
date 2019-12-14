import React, { Component } from 'react'
import NewText from './NewText'
// 引入element-ui
import { Input, Select, Button, Layout } from 'element-react'
import './adminEssay.less'
class AdminEssay extends Component {
  textContent(val) {
    // console.log(val)
    // console.log(this)
  }
  constructor(props) {
    super(props)

    this.state = {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: []
    }
  }
  render() {
    return (
      <div>
        {/* value是插入文本的内容 */}
        <div className="essayIpt">
          <Layout.Row gutter="20">
            <Layout.Col span="12">
              <Input placeholder="请输入标题" />
            </Layout.Col>
            <Layout.Col span="8">
              <Select value={this.state.options}>
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
              <Button>提交</Button>
            </Layout.Col>
          </Layout.Row>
        </div>
        <NewText onChange={this.textContent} value={''} />
      </div>
    )
  }
}

export default AdminEssay
