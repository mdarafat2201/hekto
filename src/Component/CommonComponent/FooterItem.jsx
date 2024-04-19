import React from "react";

const FooterItem = ({ allitem = ["one", "two", "thwee"], title }) => {
  return (
    <>
      <div>
        <h2 className="f font-JosefinSans font-bold my-5 sm:my-10 text-md text-[#000]">
          {title ? title : "Catagories"}
        </h2>
        <ul>
          {allitem?.map((item) => (
            <li className="font-Latofont text-sm text-main_font_color mb-5 font-normal  opacity-60">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterItem;
