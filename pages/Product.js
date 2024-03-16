import React from 'react'
import Card from '../components/cards'
import { Carousel } from 'react-bootstrap'
import '../scss/Product.scss'
import Footer from '../components/footer'


const Product = () => {
  return (
    <>
    <Carousel controls={false} data-bs-theme="white">
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="fotorotullim"
            src="https://scontent.cdninstagram.com/v/t39.30808-6/404367583_18239791234241053_1730409855007764700_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=kllet3f1mYQAX_yzp54&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI0MjUwMjUwNDc2MjYwNjA0Mw%3D%3D.2-ccb7-5&oh=00_AfARi_IfD_VvaDQqXwQGZe_6kNychdpyRlasVjB_GG_58Q&oe=65F84107&_nc_sid=10d13b"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="fotorotullim"
            src="https://scontent.cdninstagram.com/v/t39.30808-6/395743800_18235604323241053_9107634347280424148_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzEuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=aVYY7Fu59LkAX-GVKKL&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIyMTUwNzA1MzQzOTc1NTkwMg%3D%3D.2-ccb7-5&oh=00_AfD39L5iIStydoVzoFSD5zSVB3IhHkYMUZfYMsS1RRFxmg&oe=65F77E40&_nc_sid=10d13b"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="fotorotullim"
            src="https://scontent.cdninstagram.com/v/t39.30808-6/397447828_18236549008241053_7446630073968547974_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3Nzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=wkVGTHgKqLoAX9t5Esy&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIyNjUyNDg5NjgyNDc5MjU0Mg%3D%3D.2-ccb7-5&oh=00_AfAlqhMkM34RhJ-viAdVRH3SV9P80FaW61qNhOxWzMgMkg&oe=65F87508&_nc_sid=10d13b"
            alt="Second slide"
          />

        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="fotorotullim"
            src="https://scontent.cdninstagram.com/v/t39.30808-6/420169927_18247218649241053_8157275659633574573_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=jGxmMvt7pGAAX_g-lBB&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI4Mjg3OTkyOTY4NTk5OTYyMA%3D%3D.2-ccb7-5&oh=00_AfAgF-L4i9nFFF9NQ0TNvEMRJYfyTpOrafWUKzrHYlqC-g&oe=65F86A2C&_nc_sid=10d13b"
            alt="Third slide"
          />

        </div>
      </Carousel.Item>
    </Carousel>
    <div className='py-5'>
    <Card/>
    </div>
    <Footer/>

    </>
  )
}

export default Product