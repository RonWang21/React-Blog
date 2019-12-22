import React, { Component } from 'react'
import { Carousel, Loading } from 'element-react'

//引入样式
import './adminMain.less'
class AdminMain extends Component {
  constructor(props) {
    super(props)
    let imgs = []
    for (let index = 0; index < 5; index++) {
      const img = `http://pic.tsmp4.net/api/fengjing/img.php?time=${index}`
      imgs.push(img)
    }
    this.state = {
      img: imgs,
      isLoading: true,
      imgNum: 0
    }
  }
  loadingImg = v => {
    let { imgNum } = this.state
    imgNum++
    if (imgNum >= 5) {
      this.setState({
        isLoading: false
      })
    } else {
      this.setState({
        imgNum
      })
    }
  }

  componentWillUnmount() {
    this.setState({
      loading: null
    })
  }
  render() {
    return (
      <div className="demo-2 medium adminMain">
        <Carousel interval="4000" type="card" height="500px">
          {this.state.img.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>
                  <Loading loading={this.state.isLoading}>
                    <img
                      src={item}
                      alt=""
                      onLoad={val => this.loadingImg(val)}
                    />
                  </Loading>
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
