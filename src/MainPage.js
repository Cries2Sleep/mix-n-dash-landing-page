// REACT
// ICONS
// import SearchIcon from '@mui/icons-material/Search';
// IMAGES
import m from "./assets/img/testimonials-1.jpg";
import a from "./assets/img/testimonials-2.jpg";
import b from "./assets/img/testimonials-3.jpg";
import COCK from "./assets/img/cocktail1.jpg";
// import ABOUT1 from "./assets/img/bartender2.jpg";
import ABOUT2 from "./assets/img/RandomCocktailImage.jpg";
import ABOUT3 from "./assets/img/ladieshangingout.jpg";

// idk if this came with the template
import React from "react";
import { Link } from "react-router-dom";


function MainPage() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        rel="stylesheet"
        type="text/css"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />

      <link href="css/styles.css" rel="stylesheet" />

      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div
              className="col-xl-6"
              style={{
                width: "100%",

              }}
            >
              <div className="mb-6 text-center text-white">
                {/* <!-- Page heading--> */}
                <h1 className="mb-6 content1 text-outline">
                  Welcome to Mix'n Dash!
                </h1>
                <h1 className="mb-6 content2 text-outline">
                  Book a bartender for your event today!
                </h1>
                <div className="row">
                  <div className="col">
                    <Link
                      className="btn btn-primary btn-md"
                      // used to include disabled in className
                      id="submitButton"
                      type="submit"
                      style={{ width: "300px" }}
                      to="https://google.com"
                      disable
                    >
                      Start your Search
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Icons Grid--> */}
      <section className="features-icons bg-black text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi bi-cup-straw m-auto text-primary" />
                  {/* <LocalBarRoundedIcon fontSize="large" color="secondary" /> */}
                </div>
                <h3 style={{ color: "#E0AA3E" }}>Party Up</h3>
                <p style={{ color: "#F4EBD0" }} className="lead mb-0">
                  Connecting with bartenders is easier than ever!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi bi-currency-dollar m-auto text-primary"></i>
                </div>
                <h3 style={{ color: "#B88A44" }}>Competitive Rates</h3>
                <p style={{ color: "#F4EBD0" }} className="lead mb-0">
                  Find the best value for your next event!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-emoji-sunglasses m-auto text-primary"></i>
                </div>
                <h3 style={{ color: "#926F34" }}>Many Options</h3>
                <p className="lead mb-0" style={{ color: "#F4EBD0" }}>
                  Choose from several professionals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Image Showcases--> */}
      <section className="showcase" style={{ backgroundColor: "black" }}>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div />
            <img
              className="col-lg-6 order-lg-2 text-white showcase-img attachment"
              src={COCK}
              width="100"
              alt="Logo"
              style={{ objectFit: "cover", overflow: "hidden" }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2 style={{ color: "#E0AA3E" }}>
                Sit Back, Relax And Be A Guest At Your Own Party!
              </h2>
              <p className="lead mb-0" style={{ color: "#F4EBD0" }}>
                Since 2022, Mix'n Dash has revolutionized the industry in
                bartending and event services. We provide expert bartenders and
                bar service for parties of any size. Our professionals are fully
                trained and certified, with the mission to make your next event
                an unforgettable one.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <img
              className="col-lg-6 order-lg-6 text-white showcase-img attachment"
              src={ABOUT2}
              width="100"
              alt="Logo"
              style={{
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
            {/*This is where we add the image I think ^^^ */}
            <div className="col-lg-6 my-auto showcase-text">
              <h2 style={{ color: "#B88A44" }}>
                The Ultimate Platform for Event Hosts and Bartenders
              </h2>
              <p className="lead mb-0" style={{ color: "#F4EBD0" }}>
                Mix'n Dash is the solution – whether you’re hosting an upcoming
                event and need bartending service, or if you wish to provide
                your services as a bartender, our platform accommodates for
                both. Once you sign up and have an account with us, you can book
                someone from our list of professionals, or choose to become a
                bartender and offer your services.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <img
              className="col-lg-6 order-lg-2 text-white showcase-img attachment"
              src={ABOUT3}
              width="100"
              alt="Logo"
              style={{ objectFit: "cover", overflow: "hidden" }}
            />
            {/* This is where we add the image I think ^^^ */}
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2 style={{ color: "#926F34" }}>Next Steps & Expansion</h2>
              <p className="lead mb-0" style={{ color: "#F4EBD0" }}>
                Currently, Mix'n Dash is operating in the state of Texas. With
                the rapid growth we are experiencing, our platform will soon
                serve multiple states and eventually become nationwide. We
                encourage you to check our website regularly as we are
                constantly updating and expanding!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials--> */}
      <section className="testimonials text-center bg-black">
        <div className="container">
          <h2 className="mb-5" style={{ color: "white" }}>
            What people are saying about our service!
          </h2>

          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={m}
                  alt="..."
                />
                <h5 style={{ color: "#E0AA3E" }}>Margaret E.</h5>
                <p
                  style={{ color: "#F4EBD0" }}
                  className="font-weight-light mb-0"
                >
                  "This is fantastic! Thanks so much guys:"
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={a}
                  alt="..."
                />
                <h5 style={{ color: "#B88A44" }}>Fred S.</h5>
                <p
                  style={{ color: "#F4EBD0" }}
                  className="font-weight-light mb-0"
                >
                  "Mix'n Dash is amazing! I've been using it to connect
                  thoroughly with bartenders nearby 😏."
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={b}
                  alt="..."
                />
                <h5 style={{ color: "#926F34" }}>Sarah W.</h5>
                <p
                  style={{ color: "#F4EBD0" }}
                  className="font-weight-light mb-0"
                >
                  "Thanks so much for making these free resources available to
                  us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      <script src="js/scripts.js" />
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js" />
    </>
  );
}

export default MainPage;
