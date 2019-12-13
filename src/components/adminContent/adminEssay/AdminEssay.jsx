import React, { Component } from 'react'
import NewText from './NewText'
class AdminEssay extends Component {
  textContent(val) {
    console.log(val)
    console.log(this)
  }
  render() {
    return (
      <div>
        <NewText onChange={this.textContent} />
      </div>
    )
  }
}

export default AdminEssay
