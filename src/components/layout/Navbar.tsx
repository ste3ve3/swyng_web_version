import React, { useState, useEffect } from "react";
import { 
  IconMenu2, 
  IconX,
} from "@tabler/icons-react"
import MobileMenu from "./MobileMenu";

import { Img, SelectBox, Text } from "components";

const upcomingTripsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="sticky top-0 bg-white-A700">
        <header className="flex flex-col gap-2 md:h-auto items-center justify-between px-20 md:px-5 py-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
                <div className="header-row">
                    <Img
                        className="w-[173px]"
                        src="images/swyng_logo.png"
                        alt="logo"
                    />
                    <div className="mobile-menu mr-3" onClick={() => setShowMenu(!showMenu)}>
                        {showMenu ? (
                            <IconX />
                        ) : (
                            <IconMenu2 />
                        )}
                    </div>
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-16 sm:hidden items-center justify-center max-w-[730px] w-full">
                    <Text
                        className="text-base text-gray-900 w-auto border-b-2 border-red-300 cursor-pointer"
                        size="txtInterMedium16Gray900"
                    >
                        Home
                    </Text>
                    <Text
                        className="text-base text-gray-900 w-auto cursor-pointer"
                        size="txtInterMedium16Gray900"
                    >
                        About Us
                    </Text>
                    <SelectBox
                        className="sm:flex-1 font-inter font-medium cursor-pointer leading-[normal] text-base text-gray-900 text-right w-[22%] sm:w-full"
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
                    <Text
                        className="text-base text-gray-900 w-auto cursor-pointer"
                        size="txtInterMedium16Gray900"
                    >
                        FAQs
                    </Text>
                </div>
                <div className="flex flex-row gap-8 sm:hidden items-start justify-start">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                        <Text
                        className="text-md px-5 py-2 rounded-full border border-red-300 text-red-300 hover:text-white-A700 cursor-pointer hover:bg-red-300 text-right w-auto"
                        size="txtInterMedium16Gray900"
                        >
                            Login / Sign Up
                        </Text>
                    </div>
                </div>
            </div>
            {
            showMenu && (
                <MobileMenu close={() => setShowMenu(false)}/>
            )
            }
        </header>
    </div>
  );
};

Navbar.defaultProps = {};

export default Navbar;
