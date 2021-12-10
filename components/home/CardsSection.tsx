export default function CardsSection() {
  return (
    <div className="section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="sigma_info style-2">
              <div className="sigma_info-title">
                <span className="sigma_info-icon bg-primary-light primary-color">
                  <i className="flaticon-delivery-truck is_flaticon" />
                </span>
                <h5>ارسال رایگان</h5>
              </div>

              <div className="sigma_info-description">
                <p>
                  ارسال رایگان با پیک به تمام نقاط اهواز و ارسال با پست به تمامی
                  شهر های ایران
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="sigma_info style-2">
              <div className="sigma_info-title">
                <span className="sigma_info-icon bg-primary-light primary-color">
                  <i className="flaticon-money-back is_flaticon" />
                </span>
                <h5>تضمین اصالت</h5>
              </div>

              <div className="sigma_info-description">
                <p>تمامی محصولات از چرم طبیعی و باکیفیت تری متریال ساخته شده</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="sigma_info style-2">
              <div className="sigma_info-title">
                <span className="sigma_info-icon bg-primary-light primary-color">
                  <i className="flaticon-customer-service is_flaticon" />
                </span>
                <h5>سفارش به سلیقه شما</h5>
              </div>

              <div className="sigma_info-description">
                <p>شما میتوانید رنگ طرح و الگو و ... محصول خود را تعیین کنید</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
