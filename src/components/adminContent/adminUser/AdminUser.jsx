import React, { Component } from 'react'
import { Table, Tag, Button } from 'element-react'
// 引入connect
import { connect } from 'react-redux'
// 引入action-creatar
import { getUserList } from '../../../redux/action-creator'
import './adminUser.less'

@connect(null, { getUserList })
class AdminUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [
        {
          label: '日期',
          prop: 'date',
          width: 180
        },
        {
          label: '姓名',
          prop: 'name',
          width: 180
        },
        {
          label: '地址',
          prop: 'address'
        },
        {
          label: '标签',
          prop: 'tag',
          width: 100,
          filters: [
            { text: '家', value: '家' },
            { text: '公司', value: '公司' }
          ],
          filterMethod(value, row) {
            return row.tag === value
          },
          render: (data, column) => {
            if (data['tag'] === '家') {
              return <Tag type="primary">{data['tag']}</Tag>
            } else if (data['tag'] === '公司') {
              return <Tag type="success">{data['tag']}</Tag>
            }
          }
        },
        {
          label: '操作',
          prop: 'address',
          render: function() {
            return (
              <span>
                <Button plain={true} type="info" size="small">
                  编辑
                </Button>
                <Button type="danger" size="small">
                  删除
                </Button>
              </span>
            )
          }
        }
      ],
      data: []
    }
  }
  componentDidMount() {
    //请求userList
    this.props.getUserList()
  }
  //查看
  examine = v => {
    console.log('查看', v, this)
  }
  // 编辑
  compile = v => {
    console.log('编辑', v)
  }
  render() {
    return (
      <div className="tagBox">
        <h2
          style={{
            fontSize: '20px',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          读者列表
        </h2>
        <Table
          style={{ width: '100%' }}
          columns={this.state.columns}
          data={this.state.data}
          border={true}
        />
      </div>
    )
  }
}

export default AdminUser
