import React, { Component } from 'react'
import { Table, Button } from 'element-react'
class AdminUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [
        {
          label: '日期',
          prop: 'date',
          width: 150,
          fixed: 'left'
        },
        {
          label: '姓名',
          prop: 'name',
          width: 160
        },
        {
          label: '省份',
          prop: 'province',
          width: 160
        },
        {
          label: '地址',
          prop: 'address',
          width: 400
        },
        {
          label: '邮编',
          prop: 'zip',
          width: 120
        },
        {
          label: '操作',
          prop: 'zip',
          fixed: 'right',
          width: 100,
          render: () => {
            return (
              <span>
                <Button type="text" size="small" onClick={() => this.examine}>
                  查看
                </Button>
                <Button type="text" size="small" onClick={this.compile}>
                  编辑
                </Button>
              </span>
            )
          }
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  }
  // //查看
  // examine = () => {
  //   console.log('查看')
  // }
  // // 编辑
  // compile = () => {
  //   console.log('编辑')
  // }
  render() {
    return (
      <Table
        style={{ width: '100%' }}
        columns={this.state.columns}
        data={this.state.data}
        border={true}
      />
    )
  }
}

export default AdminUser
