import React, { Component } from 'react'
import './less/index.less'

class RecomArticle extends Component {
  render() {
    const arr = ['1', '2', '3']
    return (
      <div className="recomWrapper">
        <div className="recomTile">
          <span>博客-原帖-天河星空</span>
        </div>
        {arr.map((item, index) => {
          console.log(arr)
          return (
            <div className="recomContentWrapper" key={index}>
              <div className="recomContent">
                <div className="recomContentImg">
                  <img
                    alt="img"
                    id="schoolIcon"
                    src="
              https://i.loli.net/2019/10/15/aui38IU2VvegC6m.jpg"
                  />
                </div>
                <div className="recomContentDetail">
                  <span>123</span>
                  <span>213</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RecomArticle
