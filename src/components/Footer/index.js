import react from "react";

const Footer = () => {
   
return (
<footer class="footer-area ml-70 mr-70 footer-white">

<div class="footer-top pt-80 pb-60 text-center bg-gray-2">
    <div class="container">
        <div class="footer-logo">
            <a href="index.html">
                <img alt="" src="assets/img/logo/logo.png"/>
            </a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
        <div class="footer-social">
            <ul>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
</div>
<div class="footer-bottom text-center">
    <div class="container">
        <div class="copyright-2 copyright-gray">
            <p>© 2020 <a href="#">Flone</a> .All Rights Reserved.</p>
        </div>
    </div>
</div>
</footer>
)
}

export default Footer;