import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ronaldo - Free Bootstrap 4 Template by Colorlib</title>
      </Head>
      <main>
        <section className="hero-wrap js-fullheight">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
              <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
                <div className="text text-center">
                  <span className="subheading">Hey! I am</span>
                  <h1>Ronaldo Fredrickson</h1>
                  <h2>
                    I'm a
                    <span
                      className="txt-rotate"
                      data-period="2000"
                      data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'
                    ></span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="mouse">
            <a href="#" className="mouse-icon">
              <div className="mouse-wheel">
                <span className="ion-ios-arrow-round-down"></span>
              </div>
            </a>
          </div>
        </section>

        <section
          className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
          id="about-section"
        >
          <div className="container">
            <div className="row d-flex no-gutters">
              <div className="col-md-6 col-lg-6 d-flex">
                <div className="img-about img d-flex align-items-stretch">
                  <div className="overlay"></div>
                  <div
                    className="img d-flex align-self-stretch align-items-center"
                    style={{
                      backgroundImage: `url('images/about.jpg')`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ftco-animate">
                    <h1 className="big">About</h1>
                    <h2 className="mb-4">About Me</h2>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex">
                        <span>Name:</span> <span>Ronaldo Fredrickson</span>
                      </li>
                      <li className="d-flex">
                        <span>Date of birth:</span>{" "}
                        <span>November 28, 1989</span>
                      </li>
                      <li className="d-flex">
                        <span>Address:</span>{" "}
                        <span>San Francisco CA 97987 USA</span>
                      </li>
                      <li className="d-flex">
                        <span>Zip code:</span> <span>1000</span>
                      </li>
                      <li className="d-flex">
                        <span>Email:</span> <span>ronaldo@gmail.com</span>
                      </li>
                      <li className="d-flex">
                        <span>Phone: </span> <span>+1-2234-5678-9-0</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="counter-wrap ftco-animate d-flex mt-md-3">
                  <div className="text">
                    <p className="mb-4">
                      <span className="number" data-number="120">
                        0
                      </span>
                      <span>Project complete</span>
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary py-3 px-3">
                        Download CV
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm ftco-animate">
                <a href="#" className="partner">
                  <img
                    src="images/partner-1.png"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner">
                  <img
                    src="images/partner-2.png"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner">
                  <img
                    src="images/partner-3.png"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner">
                  <img
                    src="images/partner-4.png"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner">
                  <img
                    src="images/partner-5.png"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftco-section ftco-no-pb goto-here"
          id="resume-section"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <nav id="navi">
                  <ul>
                    <li>
                      <a href="#page-1">Education</a>
                    </li>
                    <li>
                      <a href="#page-2">Experience</a>
                    </li>
                    <li>
                      <a href="#page-3">Skills</a>
                    </li>
                    <li>
                      <a href="#page-4">Awards</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-9">
                <div id="page-1" className="page one">
                  <h2 className="heading">Education</h2>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Bachelor of Science in Computer Science</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Computer Processing Systems/Computer Software</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Diploma in Computer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Art &amp; Creative Director</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="page-2" className="page two">
                  <h2 className="heading">Experience</h2>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Software Developer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Web Designer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Web Marketing</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Art &amp; Creative Director</h2>
                      <span className="position">Side Tech</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Wordpress Developer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2017-2018</span>
                      <h2>UI/UX Designer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="page-3" className="page three">
                  <h2 className="heading">Skills</h2>
                  <div className="row progress-circle mb-5">
                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          CSS
                        </h2>

                        {/* <!-- Progress bar 1 --> */}
                        <div className="progress mx-auto" data-value="90">
                          <span className="progress-left">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              90<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>
                        {/* <!-- END --> */}

                        {/* <!-- Demo info --> */}
                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                        {/* <!-- END --> */}
                      </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          HTML
                        </h2>

                        {/* <!-- Progress bar 1 --> */}
                        <div className="progress mx-auto" data-value="80">
                          <span className="progress-left">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              80<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>
                        {/* <!-- END --> */}

                        {/* <!-- Demo info --> */}
                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                        {/* <!-- END --> */}
                      </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                      <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="h5 font-weight-bold text-center mb-4">
                          jQuery
                        </h2>

                        {/* <!-- Progress bar 1 --> */}
                        <div className="progress mx-auto" data-value="75">
                          <span className="progress-left">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <span className="progress-right">
                            <span className="progress-bar border-primary"></span>
                          </span>
                          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                            <div className="h2 font-weight-bold">
                              75<sup className="small">%</sup>
                            </div>
                          </div>
                        </div>
                        {/* <!-- END -->

									<!-- Demo info --> */}
                        <div className="row text-center mt-4">
                          <div className="col-6 border-right">
                            <div className="h4 font-weight-bold mb-0">28%</div>
                            <span className="small text-gray">Last week</span>
                          </div>
                          <div className="col-6">
                            <div className="h4 font-weight-bold mb-0">60%</div>
                            <span className="small text-gray">Last month</span>
                          </div>
                        </div>
                        {/* <!-- END --> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>Photoshop</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-1"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "90%" }}
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>jQuery</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-2"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "85%" }}
                          >
                            <span>85%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>HTML5</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-3"
                            role="progressbar"
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "95%" }}
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>CSS3</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-4"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "90%" }}
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>WordPress</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-5"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "70%" }}
                          >
                            <span>70%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 animate-box">
                      <div className="progress-wrap ftco-animate">
                        <h3>SEO</h3>
                        <div className="progress">
                          <div
                            className="progress-bar color-6"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          >
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="page-4" className="page four">
                  <h2 className="heading">Awards</h2>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Top 10 Web Developer</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Top 5 LeaderShip Exellence Winner</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Top 4 Web Tester</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                  <div className="resume-wrap d-flex ftco-animate">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ideas"></span>
                    </div>
                    <div className="text pl-3">
                      <span className="date">2014-2015</span>
                      <h2>Art &amp; Creative Director</h2>
                      <span className="position">Cambridge University</span>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section" id="services-section">
          <div className="container-fluid px-md-5">
            <div className="row justify-content-center py-5 mt-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Services</h1>
                <h2 className="mb-4">Services</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1 shadow">
                  <span className="icon">
                    <i className="flaticon-analysis"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Web Design</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1 shadow">
                  <span className="icon">
                    <i className="flaticon-flasks"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Phtography</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1 shadow">
                  <span className="icon">
                    <i className="flaticon-ideas"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Web Developer</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1 shadow">
                  <span className="icon">
                    <i className="flaticon-innovation"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">App Developing</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1 shadow">
                  <span className="icon">
                    <i className="flaticon-ux-design"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Branding</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 text-center d-flex ftco-animate">
                <a href="#" className="services-1 shadow">
                  <span className="icon">
                    <i className="flaticon-idea"></i>
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">Product Strategy</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section ftco-project" id="projects-section">
          <div className="container-fluid px-md-0">
            <div className="row no-gutters justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Projects</h1>
                <h2 className="mb-4">Our Projects</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url('images/work-1.jpg')` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url('images/work-2.jpg')` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url('images/work-3.jpg')` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url('images/work-4.jpg')` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url('images/work-5.jpg')` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="project img ftco-animate d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url('images/work-1.jpg')` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
          id="section-counter"
        >
          <div className="container-fluid px-md-5">
            <div className="row d-md-flex align-items-center">
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 shadow">
                  <div className="text">
                    <strong className="number" data-number="100">
                      0
                    </strong>
                    <span>Awards</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 shadow">
                  <div className="text">
                    <strong className="number" data-number="1200">
                      0
                    </strong>
                    <span>Complete Projects</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 shadow">
                  <div className="text">
                    <strong className="number" data-number="1200">
                      0
                    </strong>
                    <span>Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 shadow">
                  <div className="text">
                    <strong className="number" data-number="500">
                      0
                    </strong>
                    <span>Cups of coffee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section" id="blog-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h1 className="big big-2">Blog</h1>
                <h2 className="mb-4">Our Blog</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <a
                    href="single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url('images/image_1.jpg')`,
                    }}
                  ></a>
                  <div className="text mt-3 float-right d-block">
                    <h3 className="heading">
                      <a href="single.html">
                        Why Lead Generation is Key for Business Growth
                      </a>
                    </h3>
                    <div className="d-flex align-items-center mb-3 meta">
                      <p className="mb-0">
                        <span className="mr-2">Sept. 12, 2019</span>
                        <a href="#" className="mr-2">
                          Admin
                        </a>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat"></span> 3
                        </a>
                      </p>
                    </div>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry justify-content-end">
                  <a
                    href="single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url('images/image_2.jpg')`,
                    }}
                  ></a>
                  <div className="text mt-3 float-right d-block">
                    <h3 className="heading">
                      <a href="single.html">
                        Why Lead Generation is Key for Business Growth
                      </a>
                    </h3>
                    <div className="d-flex align-items-center mb-3 meta">
                      <p className="mb-0">
                        <span className="mr-2">Sept. 12, 2019</span>
                        <a href="#" className="mr-2">
                          Admin
                        </a>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat"></span> 3
                        </a>
                      </p>
                    </div>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry">
                  <a
                    href="single.html"
                    className="block-20"
                    style={{
                      backgroundImage: `url('images/image_3.jpg')`,
                    }}
                  ></a>
                  <div className="text mt-3 float-right d-block">
                    <h3 className="heading">
                      <a href="single.html">
                        Why Lead Generation is Key for Business Growth
                      </a>
                    </h3>
                    <div className="d-flex align-items-center mb-3 meta">
                      <p className="mb-0">
                        <span className="mr-2">Sept. 12, 2019</span>
                        <a href="#" className="mr-2">
                          Admin
                        </a>
                        <a href="#" className="meta-chat">
                          <span className="icon-chat"></span> 3
                        </a>
                      </p>
                    </div>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftco-section ftco-hireme img"
          style={{ backgroundImage: `url('images/bg_1.jpg')` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 ftco-animate text-center">
                <h2>
                  I'm <span>Available</span> for freelancing
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p className="mb-0">
                  <a href="#" className="btn btn-primary py-3 px-5">
                    Hire me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftco-section contact-section ftco-no-pb"
          id="contact-section"
        >
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h1 className="big big-2">Contact</h1>
                <h2 className="mb-4">Contact Me</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
              </div>
            </div>

            <div className="row d-flex contact-info mb-5">
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-map-signs"></span>
                  </div>
                  <div>
                    <h3 className="mb-4">Address</h3>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <div>
                    <h3 className="mb-4">Contact Number</h3>
                    <p>
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <div>
                    <h3 className="mb-4">Email Address</h3>
                    <p>
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-globe"></span>
                  </div>
                  <div>
                    <h3 className="mb-4">Website</h3>
                    <p>
                      <a href="#">yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutters block-9">
              <div className="col-md-6 order-md-last d-flex">
                <form action="#" className="bg-light p-4 p-md-5 contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>

              <div className="col-md-6 d-flex">
                <div
                  className="img"
                  style={{ backgroundImage: `url('images/about.jpg')` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
