import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 引入富文本编辑器
import { Richtext } from 'dhx-richtext'
import 'dhx-richtext/codebase/richtext.css'
class NewText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      html: '',
      markdown: ``
    }
  }
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      toolbarBlocks: ['default', 'clear', 'fullscreen']
    })
    // 自定义属性
    // this.richtext.toolbar.data.add({
    //   value: 'MyAction'
    // })
    // console.log(this.props.value)

    if (this.props.value) {
      this.richtext.setValue(this.props.value, this.props.dataType)
    }
    if (this.props.onChange) {
      this.richtext.events.on('change', () => {
        this.props.onChange(this.richtext.getValue(this.props.dataType))
      })
    }
  }

  render() {
    return (
      <div>
        <div
          ref={el => (this.el = el)}
          className="widget-box"
          style={{
            width: '83%',
            height: '500px',
            padding: '20px',
            margin: '0 auto'
          }}
          value={this.state.html}
          onChange={val => {
            this.textContent(val)
          }}
        ></div>
      </div>
    )
  }
}
NewText.propTypes = {
  mode: PropTypes.string,
  value: PropTypes.string,
  dataType: PropTypes.string,
  onChange: PropTypes.func
}
NewText.defaultProps = {
  mode: 'classic',
  dataType: 'html'
}
export default NewText
