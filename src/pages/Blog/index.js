import React from "react";
import useAPI from "../../effects/useAPI";
import getBlogs from "../../services/Blogs/getBlogs";

const Blog = () => {
  const [loading, error, blogs] = useAPI(() => getBlogs(), []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
     
      <div class="Blog-area pt-15 pb-100 blog-no-sidebar">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                {blogs.blogs.map((blog) => {
                  return (
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <div class="blog-wrap-2 mb-30">
                        <div class="blog-img-2">
                          <a href="blog-details.html">
                            <img src="assets/img/blog/blog-5.jpg" alt="" />
                          </a>
                        </div>
                        <div class="blog-content-2">
                          <div class="blog-meta-2">
                            <ul>
                              <li>{blog.updatedAt}</li>
                              <li>
                                <a href="#">
                                  4 <i class="fa fa-comments-o"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <a href="blog-details.html">{blog.title}</a>
                          </h4>
                          <p>{blog.description}</p>
                          <div class="blog-share-comment">
                            <div class="blog-btn-2">
                              <a href="blog-details.html">read more</a>
                            </div>
                            <div class="blog-share">
                              <span>share :</span>
                              <div class="share-social">
                                <ul>
                                  <li>
                                    <a class="facebook" href="#">
                                      <i class="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="twitter" href="#">
                                      <i class="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a class="instagram" href="#">
                                      <i class="fa fa-instagram"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
