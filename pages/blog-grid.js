import React from 'react'
import NavbarStyleThree from '@/components/_App/NavbarStyleThree'
import PageBannerStyle3 from '@/components/Common/PageBannerStyle3'
import FooterStyleOne from '@/components/_App/FooterStyleOne'
import Link from 'next/link'
 
const BlogGrid = () => {
    return (
        <>
            <NavbarStyleThree /> 

            <PageBannerStyle3 
                pageTitle="Our Blog"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Our Blog"
            />

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog1.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Branding</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> April 14, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i>
                                            <Link href="/blog-details"><a>(0) Comment</a></Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Branding involves developing strategy to create a point of differentiation</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog2.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Agency</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 13, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(4) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Design is a plan or specification for the construction of an object</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog3.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Marketing</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 12, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(2) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The new minimum is a digital magazine with a header featuring a thin</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog4.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Branding</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 14, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(0) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>WordPress is open source software you can use to create a beautiful</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog5.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Agency</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 13, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(4) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Bootstrap 5 is open source software you can use to create a beautiful</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog6.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Marketing</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 12, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(2) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Beautiful designs, powerful features, and the freedom to build anything you</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog7.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Branding</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 14, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(0) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Branding involves developing strategy to create a point of differentiation</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog8.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Agency</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 13, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(4) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Most designs, powerful features, and the freedom to build anything you</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog9.jpg" alt="blog" />
                                        </a>
                                    </Link>
                                    <Link href="/blog-grid">
                                        <a className="tag">Marketing</a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="meta">
                                        <li>
                                            <i className="ri-time-line"></i> 
                                            April 12, 2021
                                        </li>
                                        <li>
                                            <i className="ri-message-2-line"></i> 
                                            <Link href="/blog-details">
                                                <a>(2) Comment</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Branding involves developing strategy to create a point</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <div className="nav-links">
                                    <a href="/blog-grid" className="page-numbers current">1</a>
                                    <a href="/blog-grid" className="page-numbers">2</a>
                                    <a href="/blog-grid" className="page-numbers">3</a>
                                    <a href="/blog-grid" className="next page-numbers" title="Next Page">
                                        <i className="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            <FooterStyleOne />
        </>
    )
}

export default BlogGrid;