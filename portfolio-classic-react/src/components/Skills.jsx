import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section id='skills' className='skill'>
      <Container>

        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, labore?<br></br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, quia?</p>
              <Carousel 
                className='skill-slider'
                responsive={responsive}
                infinite={true}
              >
                <div className='item'>
                  <img src={meter1} alt='pic here' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='pic here' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='pic here' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='pic here' />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>

      </Container>
      <img className='background-image-left' src={colorSharp} alt='skills-bg' />
    </section>
  )
}

