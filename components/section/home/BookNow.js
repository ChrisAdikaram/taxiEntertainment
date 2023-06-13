import Image from "next/image";
import Link from "next/link";
import React from "react";

function BookNow() {
  return (
    <div
      className="grid h-full grid-cols-1 px-16 sm:h-screen sm:grid-cols-2 bg-lightgray"
      id="booknow"
    >
      <div className="relative w-full h-full pt-10 pb-10 overflow-hidden sm:py-0">
        <div className="relative z-10 flex items-center justify-end w-full h-full">
          <div className="w-5/6">
            <Image
              src={"/images/image01.png"}
              alt="description"
              width={1920}
              height={1282}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute w-5/6  border-[10px] border-appyellow left-4 sm:left-16 bottom-3 sm:bottom-20 right-6 sm:right-20 top-16 sm:top-52 lg:top-64 lg:bottom-28"></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full mt-10 mb-16 sm:mt-0 ">
        <div className="px-3 sm:px-10">
          <p className="text-2xl text-center text-darkgray">
            “ Unleash the Rhythm!
          </p>
          <p className="text-2xl text-center text-darkgray">
            Book us now for an Unforgettable Musical Experience! ”
          </p>
          <p className="pt-3 text-xs font-semibold leading-loose text-center text-darkgray">
            Booking us has never been easier with our efficient and
            user-friendly booking system. With just a few clicks, you can secure
            a thrilling live performance for your event or venue. Our booking
            system provides a seamless experience, allowing you to select the
            date and time of the performance, as well as any specific
            requirements or preferences. Whether it&apos;s a corporate event,
            wedding, or music festival, our band is ready to bring our dynamic
            energy and diverse repertoire to elevate the atmosphere and create
            an unforgettable musical experience. Don&apos;t miss out on the
            opportunity to book the Taxi Entertainment Band and witness our
            electrifying performance firsthand.
          </p>
          <div className="flex items-center justify-center my-6">
            <Link href={"https://reserve.taxientertainment.lk/"} target="_newpage">
              <button className="px-8 py-2 font-semibold text-white uppercase transition-all duration-100 delay-75 rounded-lg bg-appyellow hover:bg-darkgray hover:text-appyellow">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
