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

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }
  loadingImg = v => {
    let { imgNum } = this.state
    imgNum++
    // console.log('loading', imgNum)
    if (imgNum >= 5) {
      this.setState({
        isLoading: {
          falg: false
        }
      })
    } else {
      this.setState({
        imgNum
      })
    }
  }
  render() {
    return (
      <div className="demo-2 medium adminMain">
        <Loading loading={this.state.isLoading.falg}>
          <Carousel interval="4000" type="card" height="500px">
            {this.state.img.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>
                    <img
                      src={item}
                      alt=""
                      onLoad={val => this.loadingImg(val)}
                    />
                  </h3>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Loading>
      </div>
    )
  }
}

export default AdminMain
