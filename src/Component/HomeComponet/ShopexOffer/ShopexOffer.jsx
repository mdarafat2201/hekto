import React from "react";
import freeDeliveryImg from "../../../assets/freeDeliveryImg.png";
import maniImg from "../../../assets/maniImg.png";
import GroupImg from "../../../assets/GroupImg.png";
import collImg from "../../../assets/collimgs.png";
import OfferCort from "../../CommonComponent/OfferCort";
import Flex from "../../CommonComponent/Flex";
const ShopexOffer = () => {
  const offerdata = [
    {
      id: 1,
      imgs: freeDeliveryImg,
      title: "24/7 Support1",
      ditles:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida",
    },
    {
      id: 2,
      imgs: maniImg,
      title: "24/7 Support1",
      ditles:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida",
    },
    {
      id: 3,
      imgs: GroupImg,
      title: "24/7 Support2",
      ditles:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida",
    },
    {
      id: 4,
      imgs: collImg,
      title: "24/7 Support3",
      ditles:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida",
    },
  ];

  return (
    <>
      <div>
        <div className="container">
          <div>
            <div>
              <h2 className="text-center font-JosefinSans mb-12 text-4xl text-main_font_color font-bold">
                What Shopex Offer!
              </h2>
            </div>
            <Flex className="items-center justify-between">
              {offerdata?.map((item) => (
                <OfferCort
                  key={item.id}
                  img={item.imgs}
                  title={item.title}
                  ditles={item.ditles}
                />
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopexOffer;
