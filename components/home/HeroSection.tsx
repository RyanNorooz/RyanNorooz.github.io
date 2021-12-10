import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="sigma_banner style-7">
      <div
        className="bg-center bg-cover banner-slider-inner"
        style={{ backgroundImage: `url("/images/home-2/1920x900.jpg")` }}
      >
        <div className="sigma_banner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 filter drop-shadow-md">
                <p className=" !mb-12 inline bg-black">محصولات چرمی</p>

                <h1 className="title !font-black ">
                  <span className="primary-color">چرم</span> گردو
                </h1>
              </div>
            </div>

            <div className="row d-none d-md-flex">
              <div className="col-lg-3 col-md-4">
                <div className="sigma_category style-3">
                  <a href="shop.html">
                    <img src="/images/home-2/500.jpg" alt="category" />

                    <div className="sigma_category-content filter drop-shadow-sm">
                      <h6>Leather Jacket</h6>
                      <span>345 Items</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="sigma_category style-3">
                  <a href="shop.html">
                    <img src="/images/home-2/500-0.jpg" alt="category" />

                    <div className="sigma_category-content filter drop-shadow-sm">
                      <h6>Leather Wallet</h6>
                      <span>229 Items</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="sigma_category style-3">
                  <a href="shop.html">
                    <img src="/images/home-2/500-1.jpg" alt="category" />

                    <div className="sigma_category-content filter drop-shadow-sm">
                      <h6>Leather Shoes</h6>
                      <span>141 Items</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="sigma_category style-3">
                  <a href="shop.html">
                    <img src="/images/home-2/500-2.jpg" alt="category" />

                    <div className="sigma_category-content filter drop-shadow-sm">
                      <h6>Leather Bags</h6>
                      <span>428 Items</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
