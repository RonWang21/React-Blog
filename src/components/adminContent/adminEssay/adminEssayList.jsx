import React, { Component } from 'react'
import { Table, Tag, Button } from 'element-react'
// 引入connect
import { connect } from 'react-redux'
// 引入action-creatar
import { asyncEssay } from '../../../redux/asyncActions'
//route

//引入时间修改函数
import setTime from '../../../utils/setTime'
// import {} from 'react-router-dom'
const { asyncGetEssay, asyncDelEssay } = asyncEssay
const formateDate = setTime.formateDate
@connect(state => ({ essay: state.essay }), { asyncGetEssay, asyncDelEssay })
class AdminEssayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [
        {
          label: '标题',
          prop: 'title',
          width: 180
        },
        {
          label: '时间',
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
          prop: 'tag',
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
                  onClick={() => this.delEssay(val)}
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
  componentDidMount() {
    //请求userList
    this.props.asyncGetEssay()
  }
  //查看
  delEssay = v => {
    console.log('删除', v)
    this.props.asyncDelEssay(v._id)
  }
  // 编辑
  compile = v => {
    console.log('编辑', this.props)
    this.props.history.push('/admin/essay', { essay: v })
  }

  render() {
    const { essay } = this.props
    essay.forEach(item => {
      item.time = formateDate(item.createTime)
    })
    console.log('====================================')
    console.log(essay)
    console.log('====================================')
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
          data={this.props.essay}
          border={true}
        />
      </div>
    )
  }
}

export default AdminEssayList
