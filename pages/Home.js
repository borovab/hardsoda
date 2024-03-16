import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Home.scss';
import Section1 from '../components/section1';
import Button from 'react-bootstrap/Button';
import Whyproduct from '../components/whyproduct';
import Container from 'react-bootstrap/esm/Container';
import { PiShoppingCartFill } from "react-icons/pi";
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Footer from '../components/footer'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='home-container'>
      <div className='texthome'>
      <h1>Welcome to Our Clothing Store</h1>
      <p>Explore our wide range of clothing options for men, women, and children.
      From casual wear to formal attire, we have something for every occasion.</p>
       <hr/>
       <div className='butonat'>
       <Button target='_blank' href='https://maps.app.goo.gl/9yE7qdpmKYN5hYL67' className='btn-lg' variant="dark">Ohrid</Button>
       <Button target='_blank' href='https://maps.app.goo.gl/i8oFvg92Y198erXRA' className='btn-lg' variant="dark">Gostivar</Button>
    </div>
    </div>
    </div>
   <Section1/>
  <Whyproduct/>
  <Container>
        <Row className='py-5'>
          <Col md={3} lg={3}> {/* Adjust column sizes based on your layout requirements */}
            <Card>
              <Card.Img variant="top" src="https://scontent.cdninstagram.com/v/t39.30808-6/424737491_18248924170241053_8869109227394102766_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=AiJOd6PZIMIAX_SRYqL&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5MzA0NzQyMDMyODQ1MTUwOA%3D%3D.2-ccb7-5&oh=00_AfBObD6HcsJkZ8DhV8nY2OXpqcVWRSc1RBENXfugZBWgXw&oe=65F754C5&_nc_sid=10d13b" />
              <Card.Body>
                <Card.Title>Classic Blue Denim Jeans</Card.Title>
                <Card.Text>Elevate casual style with these classic blue denim jeans, charm with modern comfort for versatile wear.</Card.Text>
                <Link to='/product'><Button className='btn' variant="outline-dark" size="sm">Buy Now</Button></Link>
                <PiShoppingCartFill className='iconshopping'/>
              </Card.Body>
            </Card>
          </Col>

          {/* Add other cards similarly */}
          <Col md={3} lg={3}> {/* Adjust column sizes based on your layout requirements */}
            <Card>
            <Card.Img variant="top" src="https://scontent.cdninstagram.com/v/t39.30808-6/386089978_18233376214241053_8850675060845902724_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=mv3_Ni5N6IIAX9OJA9h&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIwOTgzMjQ5MzUxODc2MjY2NQ%3D%3D.2-ccb7-5&oh=00_AfA4vNuAOfpXAtBczziOQED06qs9s4BlrtXjWlHP9azfmQ&oe=65F63879&_nc_sid=10d13b" />
              <Card.Body>
                <Card.Title>Slim Fit Distressed Jeans</Card.Title>
                <Card.Text>        Exude effortless cool in these slim fit distressed jeans, combining sleekness with a hint of edge for standout style and s.</Card.Text>
                <Link to='/product'><Button className='btn' variant="outline-dark" size="sm">Buy Now</Button></Link>
                <PiShoppingCartFill className='iconshopping'/>
              </Card.Body>
            </Card>
          </Col>
          {/* Add other cards similarly */}
          <Col md={3} lg={3}> {/* Adjust column sizes based on your layout requirements */}
            <Card>
            <Card.Img variant="top" src="https://scontent.cdninstagram.com/v/t39.30808-6/347238590_18218872984241053_8796419982990928336_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Mdi6AeyeSscAX8BMJAD&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzEzNjAzNzc1MzkyMTQxMzg5NA%3D%3D.2-ccb7-5&oh=00_AfBUJF_bVkmlJpllE4ve2kp_HLwe1gRMVgWemhrHCN5r5Q&oe=65F79773&_nc_sid=10d13b" />
              <Card.Body>
                <Card.Title>High Skinny Jeans</Card.Title>
                <Card.Text>Elevate casual style with these classic blue denim jeans, charm with modern comfort for versatile wear.</Card.Text>
                <Link to='/product'><Button className='btn' variant="outline-dark" size="sm">Buy Now</Button></Link>
                <PiShoppingCartFill className='iconshopping'/>
              </Card.Body>
            </Card>
          </Col>
          {/* Add other cards similarly */}
          <Col md={3} lg={3}> {/* Adjust column sizes based on your layout requirements */}
            <Card>
            <Card.Img variant="top" src="https://scontent.cdninstagram.com/v/t39.30808-6/420996647_18247369483241053_8363643285264384614_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NjEuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=NKHjouL3asAAX9Mj1yY&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI4Mzc0MjY1MzY3NjUzNDA4NA%3D%3D.2-ccb7-5&oh=00_AfCH0UDU5z6WTMXoyN8ebeGB06WguFeinYiCw2A6ZH4jbA&oe=65F63A12&_nc_sid=10d13b" />
              <Card.Body>
                <Card.Title>Vintage Denim Jeans</Card.Title>
                <Card.Text>Elevate casual style with these classic blue denim jeans, charm with modern comfort for versatile wear.</Card.Text>
                <Link to='/product'><Button className='btn' variant="outline-dark" size="sm">Buy Now</Button></Link>
                <PiShoppingCartFill className='iconshopping'/>
              </Card.Body>
            </Card>
          </Col>
          {/* Add other cards similarly */}
        </Row>
      </Container>
      <Footer/>
      
   </>
 )
}

export default Home