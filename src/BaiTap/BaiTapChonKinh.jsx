import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'

const arrGlasses = [
  { id: 1, name: 'v1', img: './glassesImage/v1.png' }, { id: 2, name: 'v2', img: './glassesImage/v2.png' }, { id: 3, name: 'v3', img: './glassesImage/v3.png' },
  { id: 4, name: 'v4', img: './glassesImage/v4.png' }, { id: 5, name: 'v5', img: './glassesImage/v5.png' }, { id: 6, name: 'v6', img: './glassesImage/v6.png' },
  { id: 7, name: 'v7', img: './glassesImage/v7.png' }, { id: 8, name: 'v8', img: './glassesImage/v8.png' }, { id: 9, name: 'v9', img: './glassesImage/v9.png' }
]



export default class BaiTapChonKinh extends Component {

  state = {
    glassCurrent: {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }

  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return <img onClick={()=>{this.changeGlasses(glassesItem)}} className='ml-2 p-2 boder boder-width-1' style={{ width: '120px', cursor: 'pointer' }} key={index} src={glassesItem.url}></img>
    })
  }

  changeGlasses = (newGlasses) => {
    this.setState({
      glassCurrent:newGlasses
    })
  }

  render() {

    const styleGlasses = {
      width: '150px',
      top: '75px',
      right: '94px',
      opacity: '0.7'
    }

    const infoGlasses = {
      width: '250px',
      top: '200px',
      left: '294px',
      paddingLeft: '15px',
      backgroundColor: 'rgba(255,127,0,.5)',
      textAlign: 'Left',
      height: '105px'
    }


    return (
      <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '1300px', minHeight: '2000px' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,.8)', backgroundSize: '1300px', minHeight: '2000px' }}>
          <h3 style={{ backgroundColor: 'rgba(0,0,0,.3)' }} className='text-center text-light p-5'>TRY GLASSES APP ONLINE</h3>
          <div className='container px-5'>
            <div className='row'>
              <div className='col-6'>
                <div className='position-relative'>
                  <img className='position-absolute' style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="" />
                  <img className='position-absolute' style={styleGlasses} src={this.state.glassCurrent.url} alt="" />
                  <div className='position-relative' style={infoGlasses}>
                    <span style={{ color: '#9933FF' }} className='font-weight-bold'>{this.state.glassCurrent.name}</span>  <br />
                    <span className='font-weight-bold text-light' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio.</span>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="" />
              </div>
            </div>
            <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>

              {this.renderGlassesList()}

            </div>
          </div>




        </div>
      </div>

    )
  }
}
