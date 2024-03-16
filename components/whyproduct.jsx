import React from 'react'
import '../components/whyproduct.scss'; // Import your SCSS file

import { FaCheckCircle, FaLightbulb, FaSmile } from 'react-icons/fa';

const whyproduct = () => {
  return (
    <>
    <div className='shiriti'>
        <h3 className='whytext'>Why Our Products?</h3>
        <div className='whyicons'>
        <ul class="listdjathtas">
            <li>
            <FaCheckCircle className='fa' size={43} />
         <p>Quality Assurance: Our products undergo rigorous testing and quality control measures to ensure reliability and durability.</p>
         </li>
            <li >
                <FaLightbulb className='fa' size={43}/>
                <p>Innovation: We embrace the latest tech and trends to deliver cutting-edge solutions for our clients.</p>
            </li>
            <li >
                <FaSmile className='fa' size={43} />

                <p>Customer Satisfaction: We prioritize understanding and meeting customer needs, exceeding expectations to build lasting satisfaction and loyalty.</p>
            </li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default whyproduct