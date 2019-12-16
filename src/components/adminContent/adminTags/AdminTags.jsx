import React, { Component } from 'react'
import {
  Table,
  Button,
  MessageBox,
  Message,
  Icon,
  Layout,
  Tag,
  Input
} from 'element-react'
import { connect } from 'react-redux'
import { asyncCategory } from '../../../redux/asyncActions'
import './adminTags.less'

// 结构异步action对象
const {
  asyncGetCategories,
  asyncDelCategory,
  asyncAddCategory,
  asyncUpdateCategory
} = asyncCategory

@connect(state => ({ categories: state.categories }), {
  asyncGetCategories,
  asyncDelCategory,
  asyncAddCategory,
  asyncUpdateCategory
})
class AdminTags extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      tags: [
        { key: 1, name: '标签一', type: '' },
        { key: 2, name: '标签二', type: 'gray' },
        { key: 5, name: '标签三', type: 'primary' },
        { key: 3, name: '标签四', type: 'success' },
        { key: 4, name: '标签五', type: 'warning' },
        { key: 6, name: '标签六', type: 'danger' }
      ],
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
          prop: 'tags',
          render: val => {
            return (
              <div>
                {val.tags.map((tag, index) => {
                  return (
                    <span style={{ margin: '0 10px' }} key={index}>
                      <Tag
                        key={tag}
                        closable={true}
                        type={'success'}
                        closeTransition={true}
                        onClose={this.handleClose.bind(this, tag)}
                      >
                        &nbsp;{tag}&nbsp;
                      </Tag>
                    </span>
                  )
                })}
              </div>
            )
          }
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
  handleClose(tag) {
    const { tags } = this.state

    tags.splice(tags.map(el => el.key).indexOf(tag.key), 1)

    this.setState({ tag })
  }
  async componentDidMount() {
    // 获取分类
    if (!this.props.categories.length) {
      this.props.asyncGetCategories()
    }
  }
  delTag = val => {
    MessageBox.confirm(`此操作将永久删除“${val.name}”分类, 是否继续?`, '提示', {
      type: 'warning'
    })
      .then(() => {
        this.props.asyncDelCategory(val._id)
        // this.props.asyncGetCategories()
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
      .then(({ value }) => {
        // 修改分类请求
        this.props.asyncUpdateCategory({ id: val._id, categoryname: value })
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
        this.props.asyncAddCategory({ categoryname: value })
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
