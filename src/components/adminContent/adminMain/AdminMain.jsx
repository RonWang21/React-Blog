import React, { Component } from 'react'
import { Carousel } from 'element-react'

//引入样式
import './adminMain.less'
class AdminMain extends Component {
  state = {
    img: [
      'https://i.loli.net/2019/10/15/aui38IU2VvegC6m.jpg',
      `http://lorempixel.com/1600/900?time=${Date.now()}`,
      `http://lorempixel.com/1600/900?time=${Date.now()}`,
      `http://lorempixel.com/1600/900?time=${Date.now()}`,
      'https://i.loli.net/2019/10/15/aui38IU2VvegC6m.jpg',
      'https://s2.ax1x.com/2019/10/15/KCESZ4.jpg'
    ]
  }
  render() {
    return (
      <div className="demo-2 medium adminMain">
        <Carousel interval="4000" type="card" height="500px">
          {this.state.img.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>
                  <img src={item} alt="" />
                </h3>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default AdminMain
