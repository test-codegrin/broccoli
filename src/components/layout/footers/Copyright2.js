import { useFooterContex } from "@/providers/FooterContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fssaiLogo = "/img/FSSAI_logo.png";

const Copyright2 = () => {
  const { footerBg } = useFooterContex();
  return (
    <div
      className={`ltn__copyright-area ltn__copyright-2 ${footerBg === "light" ? "section-bg-1 border-top" : "section-bg-2"
        } ${footerBg === "dark" ? "ltn__border-top-2" : ""}  plr--5 `}
    >
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="ltn__copyright-design clearfix">
              <p>
                All Rights Reserved @ Orbitto International{" "}
                <span className="current-year"></span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 align-self-center">
            <div className="footer-compliance text-end">
              <div className="footer-fssai-logo">
                <Image
                  src={fssaiLogo}
                  alt="FSSAI"
                  width={92}
                  height={56}
                />
              </div>
              <div className="ltn__copyright-menu">
                <ul>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>{" "}
                  <li>
                    <Link href="#">Claim</Link>
                  </li>{" "}
                  <li>
                    <Link href="#">Privacy & Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="footer-attribution">
              Developed and maintained by{" "}
              <Link
                className="text-black"
                href="https://codegrin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codegrin Technologies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright2;
