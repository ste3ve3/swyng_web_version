import { Text, SelectBox, Img } from 'components'

const upcomingTripsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

const MobileMenu = ({ close }) => {
  return (
    <>
        <div className="fixed mr-5 top-[70px] right-5 shadow-2xl border bg-white-A700 p-7 rounded-md flex justify-center items-center flex-col gap-5 z-50">
            <div className="flex flex-row gap-1.5 items-start justify-start">
            <Text
                className="text-base text-gray-900 w-auto border-b-2 border-red-300 cursor-pointer"
                onClick={close}
            >
                Home
            </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start">
            <Text
                className="text-base text-gray-900 w-auto"
                onClick={close}
            >
                About Us
            </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start">
            <SelectBox
                className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray-900 text-right w-[22%] sm:w-full"
                placeholderClassName="text-gray-900"
                indicator={
                <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrow_down"
                />
                }
                isMulti={false}
                name="upcomingTrips"
                options={upcomingTripsList}
                isSearchable={false}
                placeholder="Upcoming Trips"
            />
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start">
            <Text
                className="text-base text-gray-900 w-auto"
                onClick={close}
            >
                FAQs
            </Text>
            </div>
        
        </div>
        
    </>
  )
}

export default MobileMenu