import Image from "next/image";
import Link from "next/link";
import React from "react";

const HotDeal3 = () => {
  return (
    <div className="ltn__call-to-action-area ltn__call-to-action-4 section-bg-1 pt-110 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <Image
              src="/img/banner/HoneyJar.webp"
              height={1000}
              width={500}
              alt="Export-quality pure honey from Orbitto International, Gujarat, India"
            />
          </div>
          <div className="col-lg-7">
            <div className="call-to-action-inner call-to-action-inner-4 text-color-white--- text-center---">
              <div className="section-title-area ltn__section-title-2 text-center---">
                <p className="ltn__secondary-color">Featured Export Ingredient</p>
                <h2 className="section-title">
                  Export-Ready Pure Honey <br /> for Global Buyers
                </h2>
              </div>
              <div
                className="ltn__countdown ltn__countdown-3 bg-white--"
                data-countdown="2026/12/28"
              ></div>
              <div className="btn-wrapper animated">
                <Link
                  href="/contact"
                  className="theme-btn-1 btn btn-effect-1 text-uppercase"
                >
                  Request MOQ &amp; Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeal3;
