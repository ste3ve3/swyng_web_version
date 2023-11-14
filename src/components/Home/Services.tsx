import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto sm:px-5 px-20 sm:mt-0 -mt-5 w-full">
          <div className="flex flex-col gap-[52px] items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 w-full"
                size="txtMetropolisBold45"
              >
                Our Services
              </Text>
              <Text
                className="leading-[30.00px] text-base text-center text-gray-700"
                size="txtInterRegular16"
              >
                <>
                Personalize your journey with Swyng's intuitive features. Create custom itineraries, discover local hotspots, and access insider tips from a community of passionate globetrotters. Your adventure, your way!
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_download.svg"
                      alt="download"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Explore Beyond Boundaries
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Swyng opens the door to a myriad of destinations, from hidden gems to iconic landmarks. Whether you're a solo adventurer...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Service Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_download_gray_800.svg"
                      alt="download"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Tailored Travel Experiences
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Swyng opens the door to a myriad of destinations, from hidden gems to iconic landmarks. Whether you're a solo adventurer...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Service Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_whatsapp.svg"
                      alt="whatsapp"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Connect with Like-Minded Travelers
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Swyng opens the door to a myriad of destinations, from hidden gems to iconic landmarks. Whether you're a solo adventurer...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Service Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Capture Every Moment
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Swyng opens the door to a myriad of destinations, from hidden gems to iconic landmarks. Whether you're a solo adventurer...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Service Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_music.svg"
                      alt="music"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Real-Time Travel Insights
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Swyng opens the door to a myriad of destinations, from hidden gems to iconic landmarks. Whether you're a solo adventurer...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Service Details
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_volume_deep_orange_500.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-full"
                        size="txtInterSemiBold25Gray900"
                      >
                        Explore Beyond Boundaries
                      </Text>
                      <Text
                        className="leading-[30.00px] max-w-[260px] md:max-w-full text-base text-center text-gray-700"
                        size="txtInterRegular16"
                      >
                        Swyng opens the door to a myriad of destinations, from hidden gems to iconic landmarks. Whether you're a solo adventurer...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red-300 border-solid cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-red-300">
                    Service Details
                  </Button>
                </div>
                
              </div>
            </div>
            <Button
              className="common-pointer bg-red-300 cursor-pointer font-medium min-w-[202px] py-5 rounded-[10px] text-base text-center text-white-A700"
              
            >
              View More Services
            </Button>
          </div>
        </div>
  )
}

export default Services