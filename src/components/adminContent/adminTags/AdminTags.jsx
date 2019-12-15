import React, { Component } from 'react'
import { Table, Button, MessageBox, Message, Icon, Layout } from 'element-react'
import { connect } from 'react-redux'
import { asyncHandleTag } from '../../../redux/asyncActions'
import './adminTags.less'

// 结构异步action对象
const { asyncGetTags } = asyncHandleTag

@connect(state => ({ categories: state.categories }), {
  asyncGetTags
})
class AdminTags extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      columns: [
        // {
        //   type: 'expand',
        //   expandPannel: function(data) {
        //     return (
        //       <Form
        //         labelPosition="left"
        //         inline={true}
        //         className="demo-table-expand"
        //       >
        //         <Form.Item label="文章列表">
        //           <span>荷兰优质淡奶，奶香浓而不腻</span>
        //         </Form.Item>
        //       </Form>
        //     )
        //   }
        // },
        {
          label: '分类',
          prop: 'name',
          width: 160
        },
        {
          label: '标签',
          prop: 'tags'
        },
        {
          label: '操作',
          prop: 'take',
          width: 160,
          render: val => {
            return (
              <span>
                <Button
                  plain={true}
                  type="info"
                  size="small"
                  onClick={() => {
                    this.updateTag(val)
                  }}
                >
                  编辑
                </Button>
                <Button
                  type="danger"
                  size="small"
                  onClick={() => {
                    this.delTag(val)
                  }}
                >
                  删除
                </Button>
              </span>
            )
          }
        }
      ]
      // data: [
      //   {
      //     id: '12987122',
      //     name: '好滋好味鸡蛋仔',
      //     category: '江浙小吃、小吃零食',
      //     desc: '荷兰优质淡奶，奶香浓而不腻',
      //     address: '上海市普陀区真北路',
      //     shop: '王小虎夫妻店',
      //     shopId: '10333'
      //   }
      // ]
    }
  }
  async componentDidMount() {
    this.props.getCategories()
  }
  delTag = val => {
    MessageBox.confirm(`此操作将永久删除“${val.name}”分类, 是否继续?`, '提示', {
      type: 'warning'
    })
      .then(() => {
        console.log('====================================')
        console.log('del:', val._id)
        console.log('====================================')
        this.props.delCategory(val._id)
        // if (result.status === 0) {
        //   this.setState({
        //     data: result.data.tags
        //   })
        // }
        Message({
          type: 'success',
          message: '删除“' + val.name + '”分类成功!'
        })
      })
      .catch(() => {
        Message({
          type: 'info',
          message: '已取消删除' + val.name + '分类'
        })
      })
  }
  //删除的确认弹窗
  onDismiss() {
    this.setState({
      visible: this.state.visible
    })
  }
  //更新分类
  updateTag = val => {
    MessageBox.prompt('请输入分类名称', '提示', {
      inputPlaceholder: val.name,
      inputValue: val.name,
      inputValidator: v => v !== val.name,
      inputErrorMessage: '分类名称与原来的一致'
    })
      .then(async ({ value }) => {
        // 修改分类请求
        // const result = await requpdateTag({ tagname: val.name, newname: value })
        this.props.updateCategory({ id: value })
        // this.setState({
        //   data: result.data.tags
        // })
        Message({
          type: 'success',
          message: val.name + '分类名称已修改为' + value
        })
      })
      .catch(() => {
        Message({
          type: 'info',
          message: '取消修改'
        })
      })
  }
  //添加分类
  addTag = val => {
    MessageBox.prompt('请输入分类名称', '提示', {
      inputValidator: v => v !== 'asd',
      inputErrorMessage: '分类名称格式不正确'
    })
      .then(({ value }) => {
        //添加分类请求
        // const result = await reqAddTag({ tagname: value })
        this.props.addCategory({ categoryname: value })
        // this.setState({
        //   data: result.data.tags
        // })
        Message({
          type: 'success',
          message: '已添加“' + value + '”分类'
        })
      })
      .catch(() => {
        Message({
          type: 'info',
          message: '取消添加'
        })
      })
  }
  render() {
    const { columns } = this.state
    const { categories } = this.props
    console.log('====================================')
    console.log(this.props)
    console.log('====================================')
    return (
      <div className="adminTags">
        <Layout.Row gutter="24">
          <Layout.Col span="6" offset="22">
            <div className="grid-content bg-purple">
              <Button
                className="addBtn"
                plain={true}
                type="info"
                size="small"
                loading={this.state.isUpdateLoading}
                onClick={() => {
                  this.addTag()
                }}
              >
                <Icon name={'plus'} />
                &nbsp;添加分类
              </Button>
            </div>
          </Layout.Col>
        </Layout.Row>
        <Table
          style={{ width: '100%' }}
          columns={columns}
          data={categories}
          border={true}
          onCurrentChange={item => {
            console.log(item)
          }}
        />
      </div>
    )
  }
}

export default AdminTags
