import React from 'react';
import transformer from '../../../../public/images/transformer.png'

const Banner = () => {
    return (
        <div>
            <div className='bg-dark row p-5 text-white text-center align-items-center g-0'>
                <div className='col-lg-5 p-1'>
                    <h1 className='text-warning'>Premium Toys For Kids</h1>
                    <p>The Best Action Figures Are The Ones That Make Your Kids Feel Like They're Getting The Real Deal</p>
                </div>
                <div className='col-lg-5 p-1'>
                    <img width={"100%"} src={transformer} />
                </div>
                <div className='col-lg-2 p-1'>
                    <div>
                        <h2 className='text-warning'>344</h2>
                        <p>New Product Arrival</p>
                    </div>
                    <div>
                        <h2 className='text-warning'>10%</h2>
                        <p>Discount On All Toys</p>
                    </div>
                    <div>
                        <h2 className='text-warning'>3k+</h2>
                        <p>Toys Available On Shop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;