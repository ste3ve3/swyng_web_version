import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const upcomingTripOptionList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

const Header = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 py-[40px] w-full">
            <div className="flex md:flex-col flex-row gap-[42px] items-center justify-start max-w-7xl mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                
                <div className="flex sm:flex-col sm:gap-10 items-center justify-start w-full">
                    <div className="flex flex-col justify-start items-start gap-8">
                        <Button className="bg-white-A700 cursor-pointer font-medium leading-[normal] py-2.5 px-5 rounded-[10px] text-center text-deep_orange-400 text-lg italic">
                            Swyng: Making Carpooling Easy
                        </Button>
                        <Text
                        className="leading-[80.00px] md:text-5xl text-[65px] text-gray-900"
                        size="txtInterBold65"
                        >
                        <>
                            Save Money,
                            <br />
                            reduce traffic &
                            <br />
                            make new friends.
                        </>
                        </Text>
                        <Text className=" text-gray-600">
                            Swyng is your ultimate travel companion designed to elevate your wanderlust experience! Swyng is not just an app; it's your passport to a world of seamless exploration and adventure.
                        </Text>
                    </div>
                    <Img
                        className="flex-1 md:flex-none object-cover sm:hidden"
                        src="images/header_background.png"   
                        alt="image" 
                    />
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start pl-4 pr-2 py-2 rounded-[10px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-10 sm:items-start sm:gap-3 items-center justify-start w-full">
                      <Input
                        className="text-gray-700_99 w-auto text-[15px]"
                        placeholder="Where from?"
                      >
                        Where from
                      </Input>
                      <Line className="bg-bluegray-100 h-[30px] w-px sm:hidden" />
                      <Input
                        className=" text-gray-700_99 w-auto text-[15px]"
                        placeholder="Going to?"
                      >
                        Where to
                      </Input>
                      <Line className="bg-bluegray-100 h-[30px] w-px sm:hidden" />
                      <Input
                        className=" text-gray-700_99 w-auto text-[15px]"
                        placeholder="Number of passengers"
                      >
                        No. of passengers
                      </Input>

                    </div>
                    <Button
                      className="bg-red-300 cursor-pointer flex items-center justify-center sm:w-full min-w-[143px] px-[30px] py-[13px] rounded-[10px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-[5px]"
                          src="images/img_search_white_a700.svg"
                          alt="search"
                        />
                      }
                    >
                      <div className="font-medium sm:px-5 text-base text-center text-white-A700">
                        Search
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Header