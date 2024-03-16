import React from 'react';
import sec1 from '../Assets/sec1.jpg'; // Import your background image
import '../components/section1.scss'; // Import your SCSS file
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const section1 = () => {
  return (
    <>
      <Container>
      <hr/>
      <Row>
      <Col xs={12} md={5}>
      <div className="fotomajtas py-5">
            <img className='foto' src={sec1} alt="sec" />

        </div>
        </Col>
        <Col>
        <div className="textdjathtas py-5">
            <h3>Hardsoda Boutique</h3>
        <p>At our clothing store, we pride ourselves on offering premium-quality jeans imported directly from Turkey to Macedonia. Our extensive collection features a wide range of styles, fits, and washes, ensuring that you'll find the perfect pair of jeans to suit your taste and preferences.</p>
      <p>Whether you're looking for classic denim, trendy distressed jeans, or stylish skinny jeans, we have something for everyone. Our jeans are crafted from high-quality materials, providing comfort, durability, and style.</p>
      <p>In addition to our impressive selection of jeans, we also offer a variety of other clothing items, including tops, jackets, and accessories. Explore our store to discover the latest fashion trends and must-have wardrobe essentials.</p>
      <p>Visit us today to experience the unparalleled quality and craftsmanship of our Turkish jeans. Our friendly and knowledgeable staff are here to assist you and ensure that you find the perfect pieces to elevate your wardrobe.</p>
      <p>Don't forget to sign up for our newsletter to stay updated on new arrivals, exclusive promotions, and special events. Follow us on social media for style inspiration, outfit ideas, and more!</p>
        </div>
        </Col>
      </Row>
    </Container>
    </>
    
  )
}

export default section1