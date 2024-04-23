import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const BreadCrumb = () => {
  const location = useLocation();
  let BreadCrumdpathName = location.pathname.split("/").filter((x) => x);
  let BreadCrumdList = "";

  return (
    <>
      <div>
        <ul className="flex items-center gap-x-3">
          <li>
            <Link
              className="text-sm font-Latofont font-normal text-footer_text_color"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <IoIosArrowForward />
          {BreadCrumdpathName.map((path, index) => {
            const isLast = index === BreadCrumdpathName.length - 1;
            BreadCrumdList += path;
            return (
              <li key={path}>
                {isLast ? (
                  <Link
                    className={`${
                      isLast
                        ? "text-base font-Latofont font-normal text-secondary_font_color"
                        : "text-base font-Latofont font-normal text-footer_text_color"
                    }`}
                  >
                    {path}
                  </Link>
                ) : (
                  <Link
                    to={`/${BreadCrumdList}`}
                    className={`${
                      isLast
                        ? "text-base font-Latofont font-normal secondary_font_color"
                        : "text-base font-Latofont font-normal text-footer_text_color"
                    }`}
                  >
                    {path}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
