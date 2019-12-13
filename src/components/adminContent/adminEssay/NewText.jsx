import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 引入富文本编辑器
import { Richtext } from 'dhx-richtext'
import 'dhx-richtext/codebase/richtext.css'
class NewText extends Component {
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      toolbarBlocks: ['default', 'clear', 'fullscreen']
    })
    // this.richtext.toolbar.data.add({
    //   value: 'MyAction'
    // })
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
      <div
        ref={el => (this.el = el)}
        className="widget-box"
        style={{ width: '100%', height: '500px', padding: '20px' }}
        onChange={val => {
          this.textContent(val)
        }}
      ></div>
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
