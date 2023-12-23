import React from 'react'
import './style.scss'
import { bannerData } from './data'


function Banner() {

  // let cssStyle = {
  //   backgroundImage: `url(${bannerData[0].image})`
  // }

  return (
    <>
    {
        bannerData.map((item, index) => {

          let backgroundImage = {backgroundImage: `${item.image}`}
          return     <section key={index} className="banner" style={backgroundImage}>
                <div className="container">
                <h1 className="text-center">{item.title}</h1>
                </div>
            </section>
        })
    }
    </>
  )
}

export default Banner
