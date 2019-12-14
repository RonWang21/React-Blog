import React, { Component } from 'react'
// 使用layout布局、Card卡片、Button按钮方法
import { Layout, Card, Button } from 'element-react'
class HomeDetail extends Component {
  render() {
    return (
      <div>
        <Layout.Col span={16} offset={0} style={{ padding: '10px' }}>
          <Card bodyStyle={{ padding: '10px', display: 'flex ' }}>
            <img src="holder.js/200x200" className="image" alt="" />
            <div style={{ padding: 14 }}>
              <div>
                <span>好吃的汉堡</span>
                <p>有时候你不努力一下，就不知道什么叫绝望。</p>
              </div>

              <div className="bottom clearfix">
                <time className="time">2016-10-21 16:19</time>
                <Button type="text" className="button">
                  操作按钮
                </Button>
              </div>
            </div>
          </Card>
        </Layout.Col>
      </div>
    )
  }
}

export default HomeDetail
