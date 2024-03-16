import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { PiShoppingCartFill } from "react-icons/pi";
import './cards.scss';
import { MdClose } from "react-icons/md";


const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="product-detail">
      <button className="close-button" onClick={onClose}><MdClose />
</button>
      <img className="product-image" src={product.image} alt={product.title} />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.content}</p>
      <Button size='sm'variant="outline-dark"onClick={() => window.location.href = 'https://www.instagram.com/hardsoda.boutique'}>Buy Now</Button>    </div>
  );
};

const Cards = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = [
    {
      id: 1,
      title: "Classic Blue Denim Jeans",
      content: "Elevate your casual style with these timeless blue denim jeans. Crafted from high-quality denim fabric, these jeans offer both comfort and durability",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/424982799_18249086401241053_6372242297201802341_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=BkXxfDY244gAX8JJHsg&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5NDAwMDA4NzM5MjcwNjkyNw%3D%3D.2-ccb7-5&oh=00_AfBVcnbqzhEIBEEU0oakk0STljOuipGF8uATXzNpLjGO2w&oe=65F92447&_nc_sid=10d13b"
    },
    {
      id: 2,
      title: "Cozy Pullover Hoodie",
      content: "Stay warm and comfortable in this classic pullover hoodie. Made from soft and cozy fabric, this hoodie is perfect for lounging at home or running errands on chilly days.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/420169927_18247218649241053_8157275659633574573_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=jGxmMvt7pGAAX_g-lBB&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI4Mjg3OTkyOTY4NTk5OTYyMA%3D%3D.2-ccb7-5&oh=00_AfAgF-L4i9nFFF9NQ0TNvEMRJYfyTpOrafWUKzrHYlqC-g&oe=65F86A2C&_nc_sid=10d13b"
    },
    {
      id: 3,
      title: "Skinny Fit Black Jeans",
      content: "Make a statement with these sleek and stylish skinny fit black jeans. Designed to flatter your figure, these jeans are perfect for both casual outings and evening events.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/414896917_18244771549241053_582326781812156903_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=IyAPGpqKucwAX9zU81d&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2OTIzNjk0MTA4ODk2NjkxMQ%3D%3D.2-ccb7-5&oh=00_AfCW2KZg8A3hJF_ju8UzjrYHdGTU_8sKo0b0YDaRjUXvmw&oe=65F83843&_nc_sid=10d13b"
    },
    {
      id: 4,
      title: "Graphic Print Hoodie",
      content: "Add a pop of personality to your wardrobe with this stylish graphic print hoodie. Featuring a bold design and relaxed fit, this hoodie is sure to turn heads wherever you go.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/404367583_18239791234241053_1730409855007764700_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=kllet3f1mYQAX_yzp54&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI0MjUwMjUwNDc2MjYwNjA0Mw%3D%3D.2-ccb7-5&oh=00_AfARi_IfD_VvaDQqXwQGZe_6kNychdpyRlasVjB_GG_58Q&oe=65F84107&_nc_sid=10d13b"
    },
    {
      id: 5,
      title: "Distressed Boyfriend Jeans",
      content: "Embrace a relaxed yet chic look with these distressed boyfriend jeans. Featuring a comfortable loose fit and trendy distressed detailing, these jeans add a touch of edge to any outfit.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/401786252_18239222455241053_987830866841687525_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=tPhWwNWjygMAX9TkfTW&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIzOTU2MjMwMTc1MjM0MTc5NQ%3D%3D.2-ccb7-5&oh=00_AfD007K2a5WjDa7A9TmqSJDyvmpFG9INfWEpjxhhh7oxqA&oe=65F89666&_nc_sid=10d13b"
    },
    {
      id: 6,
      title: "Unisex Zip-Up Hoodie Jacket",
      content: "Stay stylish and snug in this versatile zip-up hoodie jacket. With its convenient zip closure and hooded design, this jacket is ideal for layering during transitional seasons.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/397447828_18236549008241053_7446630073968547974_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3Nzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=wkVGTHgKqLoAX9t5Esy&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIyNjUyNDg5NjgyNDc5MjU0Mg%3D%3D.2-ccb7-5&oh=00_AfAlqhMkM34RhJ-viAdVRH3SV9P80FaW61qNhOxWzMgMkg&oe=65F87508&_nc_sid=10d13b"
    },
    {
      id: 7,
      title: "High-Waisted Skinny Jeans",
      content: "Achieve a sleek and flattering silhouette with these high-waisted skinny jeans. Crafted from stretch denim for maximum comfort, these jeans are a versatile addition to your wardrobe.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/395743800_18235604323241053_9107634347280424148_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzEuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=aVYY7Fu59LkAX-GVKKL&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIyMTUwNzA1MzQzOTc1NTkwMg%3D%3D.2-ccb7-5&oh=00_AfD39L5iIStydoVzoFSD5zSVB3IhHkYMUZfYMsS1RRFxmg&oe=65F77E40&_nc_sid=10d13b"
    },
    {
      id: 8,
      title: "Fleece-Lined Hooded Sweatshirt",
      content: "Beat the cold in style with fleece-lined hooded sweatshirt. Designed for warmth and comfort, this sweatshirt features a soft fleece lining and a drawstring hood.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/394550810_18235324441241053_6124801286076392937_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3Njkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=RAq-xbiLLYcAX_EvYMS&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIxOTk4MzgxMjc1Mzc2NjQwNg%3D%3D.2-ccb7-5&oh=00_AfCzDLItHP4FGQ13ZBK6lMyK5mxB6jPWw2IgesCTXmGRQw&oe=65F7AA9E&_nc_sid=10d13b"
    },
    {
      id: 9,
      title: "Hooded Sweatshirt",
      content: "Beat the cold in style with this hooded sweatshirt. Designed for maximum warmth and comfort, this sweatshirt features a cozy fleece lining and adjustable drawstring hood.",
      image: "https://scontent.cdninstagram.com/v/t39.30808-6/399932205_18237449176241053_1897917097795548776_n.jpg?stp=dst-jpg_e15_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=43Bwzf_X-HIAX_ctB0q&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIzMDg4MTA1MjIzODE2MDI1OQ%3D%3D.2-ccb7-5&oh=00_AfD2hoLrTVWL4MPhWHfRpd8k-74DDGPfacGHwOT8EetbHw&oe=65F8E6A6&_nc_sid=10d13b"
    },
    // Add more data objects as needed
  ];
  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {data.map(item => (
          <Col key={item.id} xs={12} md={3} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
                <Button size='sm' variant="outline-dark" onClick={() => openProductDetail(item)}>Buy Now</Button>
                <PiShoppingCartFill className='iconshopping'/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
      )}
    </Container>
  );
};

export default Cards;
