import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BlogCard() {

    const location = useLocation()

    return ( 
        <div className={`mb-4 ${location.pathname === '/' ? 'col-3':'col-6'}`}>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src='images/blog-1.jpg' alt='blog'
                        className='img-fluid w-100'
                    />
                </div>
                <div className='blog-content'>
                    <p className='date'>3 Feb 2023</p>
                    <h5 className='title'>A beautifull sunday morning renaissance</h5>
                    <p className='description'>Lorem ipsum dolor sit amet, deserunt eligendi harum blanditiis eius, minima nemo pariatur!</p>
                    <Link className='button' to='/blog/:id'>Read More</Link>
                </div>
            </div>
        </div>
     );
}

export default BlogCard;