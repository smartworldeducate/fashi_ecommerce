import React from "react";
import {Link} from 'react-router-dom'

const BlogeDetail = () => {
  return (
    <>
      <div className="breacrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <Link to="/">
              <i className="fa fa-home" /> Home
            </Link>
            <span>Shop</span>
          </div>
        </div>
      </div>
    </div>
  </div>
      {/* Breadcrumb Section Begin */}
      {/* Blog Section Begin */}
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1">
              <div className="blog-sidebar">
                <div className="search-form">
                  <h4>Search</h4>
                  <form action="#">
                    <input type="text" placeholder="Search . . .  " />
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <div className="blog-catagory">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <Link to="/">Fashion</Link>
                    </li>
                    <li>
                      <Link to="/">Travel</Link>
                    </li>
                    <li>
                      <Link to="/">Picnic</Link>
                    </li>
                    <li>
                      <Link to="/">Model</Link>
                    </li>
                  </ul>
                </div>
                <div className="recent-post">
                  <h4>Recent Post</h4>
                  <div className="recent-blog">
                    <a href="/" className="rb-item">
                      <div className="rb-pic">
                        <img src="./images/recent-1.jpg" alt="" />
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>
                          Fashion <span>- May 19, 2019</span>
                        </p>
                      </div>
                    </a>
                    <a href="/" className="rb-item">
                      <div className="rb-pic">
                        <img src="./images/recent-2.jpg" alt="" />
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>
                          Fashion <span>- May 19, 2019</span>
                        </p>
                      </div>
                    </a>
                    <a href="/" className="rb-item">
                      <div className="rb-pic">
                        <img src="./images/recent-3.jpg" alt="" />
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>
                          Fashion <span>- May 19, 2019</span>
                        </p>
                      </div>
                    </a>
                    <a href="/" className="rb-item">
                      <div className="rb-pic">
                        <img src="./images/recent-4.jpg" alt="" />
                      </div>
                      <div className="rb-text">
                        <h6>The Personality Trait That Makes...</h6>
                        <p>
                          Fashion <span>- May 19, 2019</span>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="blog-tags">
                  <h4>Product Tags</h4>
                  <div className="tag-item">
                    <Link to="/">Towel</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Coat</Link>
                    <Link to="/">Dresses</Link>
                    <Link to="/">Trousers</Link>
                    <Link to="/">Men's hats</Link>
                    <Link to="/">Backpack</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="./images/blog-1.jpg" alt="" />
                    </div>
                    <div className="bi-text">
                      <a href="./blog-details.html">
                        <h4>The Personality Trait That Makes People Happier</h4>
                      </a>
                      <p>
                        travel <span>- May 19, 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="./images/blog-2.jpg" alt="" />
                    </div>
                    <div className="bi-text">
                      <a href="./blog-details.html">
                        <h4>
                          This was one of our first days in Hawaii last week.
                        </h4>
                      </a>
                      <p>
                        Fashion <span>- May 19, 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="./images/blog-3.jpg" alt="" />
                    </div>
                    <div className="bi-text">
                      <a href="./blog-details.html">
                        <h4>
                          Last week I had my first work trip of the year to
                          Sonoma Valley
                        </h4>
                      </a>
                      <p>
                        travel <span>- May 19, 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="./images/blog-4.jpg" alt="" />
                    </div>
                    <div className="bi-text">
                      <a href="./blog-details.html">
                        <h4>
                          Happppppy New Year! I know I am a little late on this
                          post
                        </h4>
                      </a>
                      <p>
                        Fashion <span>- May 19, 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="./images/blog-5.jpg" alt="" />
                    </div>
                    <div className="bi-text">
                      <a href="./BlogeDetail">
                        <h4>
                          Absolue collection. The Lancome team has been one…
                        </h4>
                      </a>
                      <p>
                        Model <span>- May 19, 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="blog-item">
                    <div className="bi-pic">
                      <img src="./images/blog-6.jpg" alt="" />
                    </div>
                    <div className="bi-text">
                      <a href="./blog-details.html">
                        <h4>
                          Writing has always been kind of therapeutic for me
                        </h4>
                      </a>
                      <p>
                        Fashion <span>- May 19, 2019</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="loading-more">
                    <i className="icon_loading" />
                    <a href="/">Loading More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default BlogeDetail;
