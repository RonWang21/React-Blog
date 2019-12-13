import React, { Component } from 'react'
import { Carousel } from 'element-react'

class AdminMain extends Component {
  render() {
    return (
      <div className="demo-2 medium">
        <Carousel interval="4000" type="card" height="600px">
          {[
            'https://i.loli.net/2019/10/15/aui38IU2VvegC6m.jpg',
            'https://s2.ax1x.com/2019/10/15/KCESZ4.jpg',
            'https://i.loli.net/2019/10/15/aui38IU2VvegC6m.jpg',
            'https://s2.ax1x.com/2019/10/15/KCESZ4.jpg'
          ].map((item, index) => {
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
