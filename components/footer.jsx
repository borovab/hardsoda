import React from 'react';

export default function App() {
  return (
    <footer className='bg-light'>
      <section className='d-flex justify-content-center '>

        <div>
          <a href='/' className='me-4 text-reset'>
          </a>
          <a href='/' className='me-4 text-reset'>
          </a>
          <a href='/' className='me-4 text-reset'>
          </a>
          <a href='/' className='me-4 text-reset'>
          </a>
          <a href='/' className='me-4 text-reset'>
          </a>
          <a href='/' className='me-4 text-reset'>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3  mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                HardSoda
              </h6>
              <p>
              Trendy and stylish apparel curated for fashion-forward individuals of all ages.

              </p>
            </div>

            <div className='col-md-2 col-lg-4 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Customer Service</h6>
              <p>
                <a href='/contact' className='text-reset'>
                Contact Us
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                FAQs
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                Shipping Info
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                Returns & Exchanges
                </a>
              </p>
            </div>


            <div className='col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              Gostivar, Kichevo and Ohrid
              </p>
              <p>
                info@hardsoda.com
              </p>
              <p>
              </p>
              <p>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright 
        <a className='text-reset fw-bold' href='https://hardsoda.com/'>
          <br></br> All rights are reserved.
        </a>
      </div>
    </footer>
  );
}
