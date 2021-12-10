export default function header() {
  return (
    <header className="sigma_header style-1 can-sticky">
      <div className="sigma_header-top">
        <div className="container">
          <div className="sigma_header-top-inner">
            <div className="sigma_header-top-contacts">
              <ul className="sigma_header-top-nav">
                <li>
                  <a title="Call Us" href="tel:+008392037">
                    <i className="fa fa-phone" />
                  </a>
                </li>

                <li>
                  <a title="Email Us" href="mailto:example@example.com">
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="sigma_header-top-nav sigma_header-top-cta">
              <li>
                <a href="about-us.html">درباره ما</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sigma_header-middle">
        <div className="container">
          <div className="navbar">
            <div className="sigma_logo-wrapper">
              <a className="sigma_logo" href="index.html">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </div>

            <ul className="navbar-nav">
              <li className="menu-item menu-item-has-children">
                <a href="#">صفحه اصلی</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="index.html">Home 1</a>
                  </li>
                  <li className="menu-item">
                    <a href="home-2.html">Home 2</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <a href="#">صفحه ها</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="about-us.html">درباره ما</a>
                  </li>
                  <li className="menu-item">
                    <a href="login.html">ورود حساب کاربری</a>
                  </li>
                  <li className="menu-item">
                    <a href="signup.html">ساخت حساب کاربری</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <a href="#">فروشگاه</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="shop.html">خرید</a>
                  </li>
                  <li className="menu-item">
                    <a href="product-details.html">جزئیات محصول</a>
                  </li>
                  <li className="menu-item">
                    <a href="cart.html">سبد خرید</a>
                  </li>
                  <li className="menu-item">
                    <a href="wishlist.html">کالا های مورد علاقه</a>
                  </li>
                  <li className="menu-item">
                    <a href="checkout.html">نهایی کردن خرید</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item menu-item-has-children">
                <a href="blog.html">وبلاگ</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="blog-details.html">جزئیات وبلاگ</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <a href="contact-us.html">تماس با ما</a>
              </li>
            </ul>

            <div className="sigma_header-controls style-1">
              <ul className="sigma_header-controls-inner">
                <li className="search-trigger header-controls-item d-none d-sm-block">
                  <a
                    className="sigma_header-control-search"
                    title="Search"
                    href="#"
                  >
                    <i className="far fa-search" />
                  </a>
                </li>

                <li className="cart-trigger header-controls-item d-none d-sm-block">
                  <a
                    className="sigma_header-control-cart"
                    title="Your Cart"
                    href="cart.html"
                  >
                    <i className="far fa-shopping-basket" />
                    <div className="sigma_header-control-cart-inner">
                      <span>3 کالا</span>
                      <p id="total-price">129.99$</p>
                    </div>
                  </a>
                </li>

                <li className="aside-toggle aside-trigger">
                  <span />
                  <span />
                  <span />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
