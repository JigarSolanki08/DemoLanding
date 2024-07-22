import React, { useState } from "react";
import circle from "../images/check-circle 1.png";
import "./Main.css";
import demoimg from "../images/img.png";
import demolanding from "../images/weblogo.png"
import feutures from "../images/abel.png";
import icon1 from "../images/Icon.png";
import icon2 from "../images/Icon2.png";
import icon3 from "../images/Icon3.png";
import icon4 from "../images/Icon4.png";
import checkIcon from "../images/check 1.png";
import clients from "../images/clients.png";
import amazon from "../images/amazon.png";
import google from "../images/google.png";
import paypal from "../images/paypal.png";
import spotify from "../images/spotify.png";
import shopify from "../images/shopify.png";
import feedback from "../images/feedback.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import review from "../images/Review.png";
import review2 from "../images/review2.jpg";
import review3 from "../images/review3.jpg";
import plans from "../images/plans.png";
import { MdOutlineDone } from "react-icons/md";
import faqs from "../images/faqs.png";
import { Link } from "react-router-dom";

function Main() {
  const reviewarr = [review, review2, review3];

  const [reviewimg, setReviewimg] = useState(review);

  const handleRightArrow = () => {
    if (reviewimg === reviewarr[0]) {
      setReviewimg(reviewarr[1]);
    } else if (reviewimg === reviewarr[1]) {
      setReviewimg(reviewarr[2]);
    } else if (reviewimg === reviewarr[2]) {
      setReviewimg(reviewarr[0]);
    }
  };

  const handleLeftArrow = () => {
    if (reviewimg === reviewarr[0]) {
      setReviewimg(reviewarr[2]);
    } else if (reviewimg === reviewarr[1]) {
      setReviewimg(reviewarr[0]);
    } else if (reviewimg === reviewarr[2]) {
      setReviewimg(reviewarr[1]);
    }
  };

  const checkContent = [
    "Hire and Retain Top Talent",
    "Stay Compliant",
    "Self-service Time Tracking",
    "New Hire Checklist",
    "Team Management",
    "Improve Productivity",
    "Performance Management",
    "Tax Calculator",
    "Improve Experience",
    "Expert HR",
  ];

  const mncImg = [amazon, google, paypal, spotify, shopify];

  const doneiconcontent = [
    "Free to reach",
    "No credit card needed",
    "No Tension",
  ];

  const allcards = [
    {
      title: "Normal",
      price: 49,
      content: [
        "Lorem, ipsum dolor",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem, ipsum dolor",
        "Lorem ipsum dolor sit amet consectetur",
      ],
    },
    {
      title: "Pro",
      price: 99,
      content: [
        "Lorem, ipsum dolor",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem, ipsum dolor",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem, ipsum dolor",
      ],
    },
    {
      title: "Pro+",
      price: 599,
      content: [
        "Lorem, ipsum dolor",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem, ipsum dolor",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem, ipsum dolor",
        
      ],
    },
  ];

  return (
    <div className="container imgcheck bevietfont flex-column justify-content-center">
      <div className="mt-5 d-flex flex-column justify-content-center gap-3 lyu imgcheck">
        <h1 className="mx-auto">Unlock new possibilities for your business</h1>
        <p className="mx-auto opacity-50">
          Make your Website stand out with high-quality landing page
          designed and developed by ME
        </p>
        <div className="d-flex gap-3 mx-auto flex-column flex-md-row">
          <input
            type="text"
            className="form-control w-100 w-md-50"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            className="form-control w-100 w-md-50"
            placeholder="Enter Your Email"
          />
          <button className="btn btn-primary w-50">Sign Up</button>
        </div>

        <div className="d-flex gap-2 align-items-center flex-column flex-md-row mx-auto">
          {doneiconcontent.map((item, index) => {
            return (
              <div className="d-flex gap-1" key={index}>
                <img src={circle} alt="done img" className="" />
                <p className="my-auto opacity-50">{item}</p>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <img
            src={demoimg}
            alt="demo img"
            className="h-100 w-100 object-fit-cover"
          />
        </div>
      </div>
      <div className="container d-flex justify-content-center flex-column gap-3">
        <div className="d-flex justify-content-center">
          <img src={feutures} alt="..." />
        </div>
        <h1 className="text-center">Innovative Management. Enhanced Outcomes</h1>
        <p className="text-center">
          Start working with <span className="text-primary">Landing Demo</span> to
          showcase your app to thousands of people.
        </p>
        <div className="d-flex flex-md-row flex-column">
          <div>
            <img
              src={demoimg}
              className="h-100 w-100 object-fit-cover"
              alt="..."
            />
          </div>
          <div className="ms-md-5 w-100 my-auto">
            <div
              className="accordion accordion-flush d-flex flex-column w-100"
              id="accordionFlushExample"
            >
              <div className="accordion-item w-100">
                <h2 className="accordion-header w-100">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <img src={icon1} alt="..." className="me-1" />
                    Improve Workforce Experience
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body opacity-50">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum recusandae ducimus, non omnis harum dolor aliquid eius est esse odio.
                    <br />
                    <p className="text-primary opacity-50">Learn More {"->"}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <img src={icon2} alt="..." className="me-1" />
                    Hiring & Orientation
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body opacity-50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum recusandae ducimus, non omnis harum dolor aliquid eius est esse odio.
                    <br />
                    <p className="text-primary">Learn More {"->"}</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <img src={icon3} alt="..." className="me-1" />
                    Data & Analytics
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body opacity-50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum recusandae ducimus, non omnis harum dolor aliquid eius est esse odio.
                    <br />
                    <p className="text-primary">Learn More {"->"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column mt-3">
          <div className="d-flex flex-column p-5">
            <div>
              <img src={icon4} alt="..." />
            </div>

            <h1>Effortless Payroll. Simplified Employee Payments </h1>
            <p className="opacity-50">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est nisi porro delectus dolor numquam ab, fuga nam animi corporis ducimus.
            </p>
            <p className="text-primary">
              <a href="/">Learn more {"->"}</a>
            </p>
          </div>
          <div>
            <img
              src={demoimg}
              className="h-100 w-100 object-fit-cover"
              alt="..."
            />
          </div>
        </div>
        <div className="d-flex align-items-center flex-column mt-3 justify-content-center">
          <h3>Along with numerous powerful features</h3>
          <div className="d-flex flex-wrap w-75 mx-auto mt-4 justify-content-center align-items-center">
            {checkContent.map((item, index) => {
              return (
                <div
                  className="d-flex align-items-center mx-auto my-auto"
                  key={index}
                >
                  <img src={checkIcon} alt="..." />
                  <div className="opacity-50">{item}</div>
                </div>
              );
            })}
          </div>
          <button className="btn btn-primary w-25 d-none d-md-block mt-5">
           <Link to="/signup" className="text-white text-decoration-none"> Sign Up Now {"->"}</Link>
          </button>
          <button className="btn btn-primary w-50 d-block d-md-none mt-3">
            Sign Up Now
          </button>
        </div>
        <div className="d-flex lyuu p-5 lyuu align-items-center flex-column mt-3 gap-3 justify-content-center">
          <div>
            <img src={clients} alt="..." />
          </div>
          <h3>The savvy workforce management you deserve</h3>
          <p className="opacity-50">
            10+ organizations trust Demo Landing to drive performance & engagement
          </p>
          <div className="d-flex gap-5 flex-md-row flex-column">
            {mncImg.map((mnc, index) => {
              return <img src={mnc} alt="..." key={index} />;
            })}
          </div>
        </div>
        <div className="d-flex align-items-center flex-column justify-content-center mt-5">
          <div className="d-flex flex-wrap align-items-center">
            <div className="d-flex flex-column gap-4 mq1 justify-content-center align-items-center align-items-md-start">
              <div>
                <img src={feedback} alt="..." />
              </div>
              <h1>What people say</h1>
              <p className="opacity-50">
                Few valuables words from our customers
              </p>
              <div>
                <GoArrowLeft onClick={handleLeftArrow} />{" "}
                <GoArrowRight onClick={handleRightArrow} />
              </div>
            </div>

            <div className="mq2">
              <img
                src={reviewimg}
                alt="..."
                className="h-50 w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center lyuu gap-3 flex-column justify-content-center mt-5">
          <div>
            <img src={plans} alt="..." />
          </div>
          <h3>Pricing Plans</h3>
          <p className="opacity-50">Pricing that works for everyone</p>
          <div className="d-flex ms-auto me-auto gap-5 flex-wrap justify-content-center">
            {allcards.map((card) => {
              return (
                <>
                  <div
                    key={card.title}
                    class="card text-bg-light mb-3"
                    style={{ maxwidth: "18rem" }}
                  >
                    <div class="card-header text-center text-primary">
                      <b>{card.title}</b>
                      <h3 className="text-dark">
                        <sup>$</sup>
                        {card.price}/<span className="opacity-25">month</span>
                      </h3>
                    </div>

                    <div class="card-body d-flex flex-column  justify-content-center ">
                      {card.content.map((content, index) => {
                        return (
                          <div className="d-flex gap-2">
                            <MdOutlineDone className="text-success" />
                            <p key={index} class="card-text">
                              {content}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <button className="btn btn-primary w-75 mx-auto">
                      Sign Up Now
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 flex-column justify-content-center mt-5">
          <div>
            <img src={faqs} alt="..." />
          </div>
          <h3>Frequently Asked Questions</h3>
          <p className="opacity-50">
            Here are some of the basic types of questions for our customers.
          </p>
          <div
            className="accordion accordion-flush d-flex gap-2 flex-column w-100"
            id="accordionFlushExample"
          >
            <div className="accordion-item w-100">
              <h2 className="accordion-header w-100">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <b>Can i get this ReactJS Code?</b>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body opacity-50">
                please DM ME
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <b>its responsive for mobile?</b>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body opacity-50">
                yes
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <b>How do I get help from You?</b>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aliquam cupiditate placeat alias, veniam aut! Maxime, reprehenderit sit nostrum eveniet temporibus distinctio corporis asperiores.
                  <br />
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-secondary">
            Still have unanswered?Contact
          </button>
        </div>
        <div className="d-flex align-items-center w-100 justify-content-center mt-5">
          <footer class="pt-4 my-md-5 pt-md-5 border-top w-100 lyuu">
            <div class="row">
              <div class="col-12 col-md">
                <img class="mb-2" src={demolanding} alt="..." width="24" height="19" />
                <small class="d-block mb-3 text-body-secondary">
                  &copy; jigar solanki
                </small>
              </div>
              <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Cool stuff
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Random feature
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Team feature
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Stuff for developers
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Another one
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Last time
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Resource
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Resource name
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Another resource
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Final resource
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Team
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Locations
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Privacy
                    </a>
                  </li>
                  <li class="mb-1">
                    <a class="link-secondary text-decoration-none" href="/">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Main;
