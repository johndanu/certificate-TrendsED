import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function CertificatePage() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <>
      <Helmet>
        <title>React Page</title>
        <meta
          property="og:title"
          content="Certificate Provided for John Danushan"
        />
        <meta
          property="og:description"
          content="Certificate of completing Fundamentals of Python. it is a Certificate provided by TrendsED."
        />
        <meta property="og:image" content="./certificate.png" />
        <meta property="og:url" content="https://certificate.trendsed.lk/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="d-flex justify-content-center col-12 col-md-6">
            <img src="./certificate.png" alt="Certificate" className="w-100" />
          </div>
          <div className="col-12 col-md-6">
            <div className="card-body">
              <h5 className="card-title">Fundamentals Of Python</h5>
              <p className="card-text text-muted">by TrendsED</p>
              {/* <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-light me-2">SHARE</button>
            <button className="btn btn-light me-2">EMBED</button>
            <button className="btn btn-light me-2">VIEW OPEN BADGE</button>
            <button className="btn btn-light">DOWNLOAD</button>
          </div> */}
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/Logo.png"
                  alt="Profile"
                  className="rounded-circle me-2"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">TrendsED</h6>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>ISSUED ON</span>
                  <span>VALIDITY</span>
                </div>
                <div className="d-flex justify-content-between text-muted">
                  <span>21 July 2024</span>
                  <span>This Credential does not expire</span>
                </div>
              </div>
              <div>
                <h6>Acquired Skills / Knowledge</h6>
                <span className="badge bg-secondary me-2">Python</span>
                <span className="badge bg-secondary">Programming</span>
              </div>
              <div>
                <h6 className="mt-3">Assignments</h6>
                <span
                  className="badge bg-secondary me-2 css-point"
                  onClick={() => {
                    handleNavigation("code");
                  }}
                >
                  View Assignment 1
                </span>
                <span
                  className="badge bg-secondary css-point"
                  onClick={() => {
                    handleNavigation("code");
                  }}
                >
                  View Assignement 2
                </span>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%" }} className="my-3" />
        </div>
      </div>
    </>
  );
}
