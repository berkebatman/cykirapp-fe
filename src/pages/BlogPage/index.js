import useAPI from "../../effects/useAPI"
import { useParams } from "react-router-dom";
import getBlog from "../../services/Blogs/getBlog";
import formatDateRelativeOrAbsolute from "../../utils/formatDateRelativeOrAbsolute";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { slug } = useParams();
  
  const [loading, error, apiResponse] = useAPI(() => getBlog({ slug }), [slug]);
  const { blog } = apiResponse;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
    <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
    <div class="container">
        <div class="breadcrumb-content text-center">
            <ul>
                <li class="active">Blog Details </li>
            </ul>
        </div>
    </div>
</div>
<div class="Blog-area pt-100 pb-100">
    <div class="container">
        <div class="row flex-row-reverse">
            <div class="col-lg-9">
                <div class="blog-details-wrapper ml-20">
                    <div class="blog-details-top">
                        <div class="blog-details-img">
                            <img alt="" src="assets/img/blog/blog-5.jpg"/>
                        </div>
                        <div class="blog-details-content">
                            {blog.blogContent}
                            <div class="blog-meta-2">
                                <ul>
                                    <li>22 April, 2018</li>
                                    <li><a href="#">4 <i class="fa fa-comments-o"></i></a></li>
                                </ul>
                            </div>
                            <Link to="/blog/">{blog.blogTitle}</Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                             <blockquote>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.</blockquote> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div class="dec-img-wrapper">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="dec-img mb-50">
                                    <img alt="" src="assets/img/blog/blog-details.jpg"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="dec-img mb-50">
                                    <img alt="" src="assets/img/blog/blog-details-2.jpg"/>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div class="tag-share">
                        <div class="dec-tag">
                            <ul>
                                <li><a href="#">lifestyle ,</a></li>
                                <li><a href="#">interior ,</a></li>
                                <li><a href="#">outdoor</a></li>
                            </ul>
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
                    <div class="next-previous-post">
                        <a href="#"> <i class="fa fa-angle-left"></i> prev post</a>
                        <a href="#">next post <i class="fa fa-angle-right"></i></a>
                    </div>
                    <div class="blog-comment-wrapper mt-55">
                        <h4 class="blog-dec-title">comments : 02</h4>
                        <div class="single-comment-wrapper mt-35">
                            <div class="blog-comment-img">
                                <img src="assets/img/blog/comment-1.jpg" alt=""/>
                            </div>
                            <div class="blog-comment-content">
                                <h4>Anthony Stephens</h4>
                                <span>October 14, 2018 </span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, </p>
                                <div class="blog-details-btn">
                                    <a href="blog-details.html">read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="single-comment-wrapper mt-50 ml-120">
                            <div class="blog-comment-img">
                                <img src="assets/img/blog/comment-2.jpg" alt=""/>
                            </div>
                        </div>
                            <div class="blog-comment-content">
                                <h4>DX Joxova</h4>
                                <span>October 14, 2018 </span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, </p>
                                <div class="blog-details-btn">
                                    <a href="blog-details.html">read more</a>
                                </div>
                    </div>
                        </div>
                    </div>
                    <div class="sidebar-widget mt-50">
                        <h4 class="pro-sidebar-title">Tag </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default BlogPage;