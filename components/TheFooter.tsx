import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="sigma_footer style-6 sigma_footer-dark"
      style={{ backgroundImage: `url("/images/footer.jpg")` }}
    >
      <div className="sigma_footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sigma_footer-widget">
                <div className="sigma_footer-logo mb-4">
                  <img src="/images/logo-light.png" alt="logo" />
                </div>

                <div className="row">
                  <div className="col-sm-9">
                    <p className="mb-0">
                      چرم گردو با استفاده از بهترین متریال کالای دلخواه شما را
                      تولید و با ارسال رایگان به تمامی نقاط اهواز ارسال میکند
                    </p>
                  </div>
                </div>

                <div className="sigma-call mt-5">
                  <i className="flaticon-telephone is_flaticon" />

                  <div>
                    <h5 dir="ltr">+98 938 702 2102</h5>
                    <p>واتس‌اپ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-3">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">Solutions</h5>

                <ul className="sigma_footer-links">
                  <li>
                    <a href="login.html">Account</a>
                  </li>

                  <li>
                    <a href="signup.html">Register</a>
                  </li>

                  <li>
                    <a href="shop.html">Ecommerce</a>
                  </li>

                  <li>
                    <a href="contact-us.html">Help</a>
                  </li>

                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-3">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">Company</h5>
                <ul className="sigma_footer-links">
                  <li>
                    <a href="index.html">Home</a>
                  </li>

                  <li>
                    <a href="about-us.html">About</a>
                  </li>

                  <li>
                    <a href="blog.html">Blog</a>
                  </li>

                  <li>
                    <a href="contact-us.html">Contacts</a>
                  </li>

                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="sigma_footer-widget">
                <h5 className="widget-title">ارتباط با ما</h5>
                <ul className="sigma_footer-contact">
                  {/* <li>
                    <i className="fal fa-map-marker-alt"/>
                    <p>60 Grant Ave. Central new Road</p>
                  </li> */}

                  <li>
                    <i className="fal fa-phone" />
                    <p dir="ltr">+98 938 702 2102</p>
                  </li>

                  <li>
                    <i className="fal fa-envelope" />
                    <p>example@email.com</p>
                  </li>
                </ul>

                <ul className="sigma_social-icons mt-4 justify-content-start">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sigma_footer-bottom mt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="sigma_footer-copyright text-sm-left mt-0 mb-3 mb-sm-0">
                <p className="mb-0">
                  © CharmeGerdoo - <a href="#">2021</a>
                </p>
              </div>
            </div>

            <div className="col-sm-8">
              <ul className="sigma_footer-links justify-content-sm-end">
                <li>
                  <a href="about-us.html">About Us</a>
                </li>

                <li>
                  <a href="signup.html">Signup</a>
                </li>

                <li>
                  <a href="login.html">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
