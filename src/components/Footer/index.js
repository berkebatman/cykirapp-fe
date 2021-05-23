import react from "react";

const Footer = () => {
   
return (
<footer class="footer-area ml-70 mr-70 footer-white">

<div class="footer-top pt-80 pb-60 text-center bg-gray-2">
    <div class="container">
        <div class="footer-logo">
            <a href="/about">
            <h2 style={{color:"#a749ff", marginBottom: "50px"}} >kirapp.</h2>
            </a>
        </div>
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
            <p>© 2021 <a href="#">kirapp.</a> All Rights Reserved.</p>
        </div>
    </div>
</div>
</footer>
)
}

export default Footer;