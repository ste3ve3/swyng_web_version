import { Button, Img, Input, Line, SelectBox, Text } from "components";

const About = () => {
  return (
    <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 sm:mt-0 -mt-7 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-between max-w-7xl mx-auto w-full">
            <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
              <Img
                className="h-[410px] md:h-auto object-cover w-[510px]"
                src="images/aboutcompany.png"  
                alt="image_One"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] mb-3 md:text-[28px] text-gray-900 w-full"
                  size="txtInterSemiBold30Gray900"
                >
                  About Our Company
                </Text>
                <Text
                  className="leading-[30.00px] max-w-[584px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  We are Swyng an ultimate travel agency designed to elevate your wanderlust experience! Swyng is not just an app; it's your passport to a world of seamless exploration and adventure. Immerse yourself in a user-friendly interface that effortlessly connects you to a universe of destinations, unique experiences, and fellow travelers.
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-red-300 w-auto"
                      size="txtInterMedium16Red300"
                    >
                      Our Values and Objectives
                    </Text>
                    <Line className="bg-red-300 h-px shadow-bs2 w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      Accountability in Action
                    </Text>
                  </div>
                  
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      Boundary-Pushing Creativity
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      Unwavering Ethical Standards
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red-300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 text-base text-gray-900 w-auto"
                      size="txtInterRegular16Gray900"
                    >
                      Commitment to Continuous Improvement
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-red-300 cursor-pointer font-medium min-w-[143px] py-[17px] rounded-[10px] text-base text-center text-white-A700">
                View more
              </Button>
            </div>
          </div>
        </div>
  )
}

export default About