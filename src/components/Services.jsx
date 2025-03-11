import { BsAwardFill } from "react-icons/bs";

function Services() {
  return (
    <div className="container px-4 py-5" id="hanging-icons">
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 feature-icons">
            <svg className="bi" width="1em" height="1em">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Fast and Free Delivary</h3>
            <p>Get your products delivary in no time with free shipping.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 feature-icons">
            <svg className="bi" width="1em" height="1em">
              <BsAwardFill />
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">Quality Guarantee.</h3>
            <p>
              We guarantee the highest quality of all our electronics or your
              money back!
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3 feature-icons">
            <svg className="bi" width="1em" height="1em">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-file-earmark-lock2"
                viewBox="0 0 16 16"
              >
                <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0M7 7v1h2V7a1 1 0 0 0-2 0" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </svg>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">100% Secure Payments</h3>
            <p>
              We provide safe and secure payment methods to protect your
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
