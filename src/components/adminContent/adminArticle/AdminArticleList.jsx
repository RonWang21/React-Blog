import React, { Component } from 'react'
import { Table, Button, MessageBox, Message } from 'element-react'
// 引入connect
import { connect } from 'react-redux'
// 引入action-creatar
import { asyncArticle } from '../../../redux/asyncActions'
//route

//引入时间修改函数
import setTime from '../../../utils/setTime'
// import {} from 'react-router-dom'
const { asyncGetArticle, asyncDelArticle, asyncUpdateArticle } = asyncArticle
const formateDate = setTime.formateDate
@connect(state => ({ article: state.article }), {
  asyncGetArticle,
  asyncDelArticle,
  asyncUpdateArticle
})
class AdminArticleList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPublish: false,
      columns: [
        {
          label: '标题',
          prop: 'title',
          width: 180
        },
        {
          label: '创建时间',
          prop: 'time',
          width: 180
        },
        {
          label: '作者',
          prop: 'author',
          width: 180
        },
        {
          label: '分类',
          prop: 'category',
          width: 180
        },
        {
          label: '标签',
          prop: 'tag'
          // filters: [
          //   { text: '家', value: '家' },
          //   { text: '公司', value: '公司' }
          // ],
          // filterMethod(value, row) {
          //   return row.tag === value
          // },
          // render: (data, column) => {
          //   if (data['tag'] === '家') {
          //     return <Tag type="primary">{data['tag']}</Tag>
          //   } else if (data['tag'] === '公司') {
          //     return <Tag type="success">{data['tag']}</Tag>
          //   }
          // }
        },
        {
          label: '发布状态',
          prop: 'isPublish',
          render: val => {
            return (
              <div>
                {/* <Switch
                  value={this.state.isPublish}
                  onColor="#13ce66"
                  offColor="#ff4949"
                  onChange={v => this.isPublish(v, val)}
                ></Switch> */}
                {val.isPublish ? '已发布' : '未发布'}
              </div>
            )
          }
        },
        {
          label: '操作',
          prop: 'address',
          width: 180,
          render: val => {
            return (
              <span>
                <Button
                  plain={true}
                  type="info"
                  size="small"
                  onClick={() => this.compile(val)}
                >
                  编辑
                </Button>
                <Button
                  type="danger"
                  size="small"
                  onClick={() => this.delArticle(val)}
                >
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
  isPublish = (val, a) => {
    const isPublish = !val
    this.setState({
      isPublish
    })
    this.props.asyncUpdateArticle({ id: a._id, isPublish })
  }
  componentDidMount() {
    //请求userList
    this.props.asyncGetArticle()
  }
  //查看
  delArticle = v => {
    console.log('删除', v)
    MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      type: 'warning'
    })
      .then(() => {
        this.props.asyncDelArticle(v._id)
        Message({
          type: 'success',
          message: '删除成功!'
        })
      })
      .catch(() => {
        Message({
          type: 'info',
          message: '已取消删除'
        })
      })
  }
  // 编辑
  compile = v => {
    console.log('编辑', this.props)
    this.props.history.push('/admin/article', { article: v })
  }

  render() {
    const { article } = this.props

    article.forEach(item => {
      item.time = formateDate(item.createTime)
    })
    return (
      <div className="tagBox">
        <h2
          style={{
            fontSize: '20px',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          文章列表
        </h2>
        <Table
          style={{ width: '100%' }}
          columns={this.state.columns}
          data={this.props.article}
          border={true}
        />
      </div>
    )
  }
}

export default AdminArticleList
