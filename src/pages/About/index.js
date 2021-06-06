import React from "react";

const About = () => {
  return (
    <>
      <div class="welcome-area pt-15 pb-95">
        <div class="container">
          <div class="welcome-content text-center">
            <h5>Who Are We</h5>
            <h1>Welcome To kirapp.</h1>
            <p>
            kirapp. is a peer-to-peer rental platform where you can rent almost anything. There are no limitations in the range of products that you can rent and list as long as they are legally approved within the territory you're based in.
            </p>
          </div>
        </div>
      </div>
      <div class="about-mission-area pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="single-mission mb-30">
                <h3>Our vision</h3>
                <p>
               If it'll be used a few times and then abondoned, it's best rented on kirapp than bought.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="single-mission mb-30">
                <h3>Our mission </h3>
                <p>
                To enable people to share and monetise their unused possessions, increasing the efficiency of both the consumer and the planet's resources.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="single-mission mb-30">
                <h3>Our goal</h3>
                <p>
                The idea behind kirapp. is to reduce financial waste as well as environmental impact by reusing and sharing the products that we occasionally need. After all, why buy a speedboat if you'll use it for only 3 months a year?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="funfact-area bg-gray-3 pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-count text-center mb-30">
                <div class="count-icon">
                  <i class="pe-7s-portfolio"></i>
                </div>
                <h2 class="count">2500+</h2>
                <span>Products</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-count text-center mb-30">
                <div class="count-icon">
                  <i class="pe-7s-cup"></i>
                </div>
                <h2 class="count">85</h2>
                <span>corporate partners</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-count text-center mb-30">
                <div class="count-icon">
                  <i class="pe-7s-light"></i>
                </div>
                <h2 class="count">9000+</h2>
                <span>transactions to date</span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-count text-center mb-30 mrgn-none">
                <div class="count-icon">
                  <i class="pe-7s-smile"></i>
                </div>
                <h2 class="count">10000+</h2>
                <span>happy users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team-area pt-95 pb-70">
        <div class="container">
          <div class="section-title-2 text-center mb-60">
            <h2>Team Members</h2>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team-wrapper mb-30">
                <div class="team-img">
                  <a href="#">
                    <img src="assets/images/BerkeBatman.png" alt="" />
                  </a>
                </div>
                <div class="team-content text-center">
                  <h4>Berke Batman</h4>
                  <span>Sr. Frontend Developer </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team-wrapper mb-30">
                <div class="team-img">
                  <a href="#">
                    <img src="assets/images/RahmiAtalay.png" alt="" />
                  </a>
                </div>
                <div class="team-content text-center">
                  <h4>Rahmi Atalay</h4>
                  <span>Sr. Backend Developer </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team-wrapper mb-30">
                <div class="team-img">
                  <a href="#">
                    <img src="assets/images/NiyaziCoban.png" alt="" />
                  </a>
                </div>
                <div class="team-content text-center">
                  <h4>Niyazi Çoban</h4>
                  <span>Full Stack Magician </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
