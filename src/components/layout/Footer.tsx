import React from "react";

import { Button, Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<
  FooterProps
> = (props) => {
  return (
    <>
      <footer className="bg-gray-100 flex gap-2 items-center justify-center p-20 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex flex-col gap-10 items-start justify-start sm:w-full sm:justify-center w-[180px]">
            <div className="flex flex-col gap-[22px] items-center justify-start sm:justify-center sm:w-full w-auto">
              <Img
                className="w-[173px]"
                src="images/swyng_logo.png"
                alt="logo_One"
              />
              <div className="flex flex-row gap-[15px] items-center justify-start  w-auto">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Button className="bg-deep_orange-400 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                  <Img
                    className="h-[18px]"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
                <Img
                  className="h-[17px] w-[22px]"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-[18px] w-[22px]"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full"> 
              <Text
                className="text-center text-lg font-bold text-gray-700"
                size="txtInterRegular16"
              >
                Save Money, reduce traffic & make new friends.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start sm:justify-center sm:items-center sm:w-full w-72">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
              size="txtInterSemiBold22"
            >
              Our Services
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Explore Beyond Boundaries
              </Text>
              <Text
                className="max-w-[176px] md:max-w-full text-base text-gray-700"
                size="txtInterRegular16"
              >
                Tailored Travel Experiences
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Connect with Like-Minded Travelers
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Capture Every Moment
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Real-Time Travel Insights
              </Text>
            </div>
          </div>
          
          <div className="flex flex-col gap-5 items-start justify-start w-44">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
              size="txtInterSemiBold22"
            >
              Quick links
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Home
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                About Us
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Upcoming Trips
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                FAQs
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-44">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
              size="txtInterSemiBold22"
            >
              More
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Terms
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Privacy
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Help
              </Text>
              <Text
                className="text-base text-gray-700 w-full"
                size="txtInterRegular16"
              >
                Contact
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
