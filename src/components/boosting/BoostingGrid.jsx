import React from "react";
import Button from "../ui/Button";

function BoostingGrid() {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-4 mt-20 md:gap-6 px-4 lg:px-24 relative z-20">
      {/* First Card: Simple Analytics */}
      <div
        data-aos="fade-right"
        className="bg-white flex flex-col justify-between dark:bg-dark-priceCardBg col-span-12 lg:col-span-3 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-center text-black dark:text-white p-6"
      >
        <h4 className="text-lg lg:text-xl">Simple Analytics</h4>
        <p className="text-sm lg:text-base font-extralight text-neutral-400 mb-6">
          Make informed decisions backed by data through our analytics tools.
        </p>
        <div className="p-0 dark:bg-dark-pageBg bg-light-pageBg rounded-xl border-[1px] dark:border-neutral-800 border-neutral-300 ">
          <p className="text-dark-analyticNumberColor text-left pt-6 pl-4 flex gap-1 text-sm lg:text-base">
            <img src="upSign.svg" alt="up sign" /> 14.12%
          </p>
          <img
            src="/analyticeOne.svg"
            alt="analytics one"
            className="mx-auto my-4 mt-6 w-full"
          />
        </div>
      </div>

      {/* Second Card: Boosting Business */}
      <div
        data-aos="zoom-in"
        className="bg-white dark:bg-dark-priceCardBg col-span-12 lg:col-span-6 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-center text-black dark:text-white p-6"
      >
        <h4 className="text-lg lg:text-xl mb-2">
          Boosting Business. Today and Tomorrow.
        </h4>
        <p className="pb-6 font-extralight text-sm lg:text-lg text-neutral-400">
          Bring harmony to team expenses with budget limits and real-time
          monitoring.
        </p>
        <div className="flex justify-center p-4 dark:bg-dark-pageBg bg-light-pageBg rounded-xl border-[1px] dark:border-neutral-800 border-neutral-300 ">
          <img
            src="/analyticeTwo.svg"
            alt="analytics two"
            className="mx-auto my-4 mt-6 w-full"
          />
        </div>
      </div>

      {/*  Third Card: Easy Collaboration */}
      <div
        data-aos="fade-left"
        className="bg-white dark:bg-dark-priceCardBg col-span-12 lg:col-span-3 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-center text-black dark:text-white p-6"
      >
        <h4 className="text-lg lg:text-xl mb-2">Easy Collaboration</h4>
        <p className="text-sm lg:text-base font-extralight text-neutral-400 mb-4">
          Seamlessly collaborate with your team members like never before.
        </p>
        <figure className="dark:bg-dark-pageBg bg-light-analyticsBg w-36 h-36 lg:w-48 lg:h-48 max-h-full max-w-full m-auto flex justify-center rounded-full mt-10">
          <img src="usersForAnalyticsThree.svg" />
        </figure>
      </div>

      {/* Fourth Card: Real-time Accounting */}
      <div
        data-aos="fade-right"
        className="bg-white lg:block hidden dark:bg-dark-priceCardBg col-span-12 lg:col-span-6 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-start text-black dark:text-white p-6"
      >
        <h4 className="mb-2 text-lg lg:text-xl">
          Real-time accounting at your fingertips.
        </h4>
        <p className="pb-6 font-extralight text-sm lg:text-lg text-neutral-400">
          Take the pain out of bookkeeping! Wave goodbye to mountains of
          paperwork.
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-8 items-end">
          {/* Left Section */}
          <div className="flex-shrink-0 mb-4 lg:mb-0">
            <h4 className="text-lg lg:text-xl font-semibold">$3453.00</h4>
            <img src="/groupOfParagraph.svg" alt="paragraph illustration" />
          </div>

          {/* Right Section (Invoices) */}
          <div className="flex-grow border-2 dark:border-neutral-800 border-neutral-300  rounded-lg p-4 bg-light-pageBg dark:bg-dark-pageBg">
            <h4 className="font-semibold text-sm lg:text-base mb-4">
              Monthly Invoice
            </h4>

            <article className="flex items-center justify-between mb-4">
              <img
                src="/iconPink.svg"
                alt="icon pink"
                className="flex-shrink-0 w-6 lg:w-8"
              />
              <div className="flex-grow ml-3">
                <p className="font-light mb-1 text-xs lg:text-sm text-neutral-400 truncate">
                  John Client_download.Pdf
                </p>
                <img src="/RectangleBig.svg" alt="progress bar" />
              </div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </article>

            <article className="flex items-center justify-between mb-4">
              <img
                src="/iconBlue.svg"
                alt="icon blue"
                className="flex-shrink-0 w-6 lg:w-8"
              />
              <div className="flex-grow ml-3">
                <p className="font-light mb-1 text-xs lg:text-sm text-neutral-400 truncate">
                  Michele Leos_download.Pdf
                </p>
                <img src="/RectangleBig.svg" alt="progress bar" />
              </div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </article>

            <article className="flex items-center justify-between">
              <img
                src="/iconLemon.svg"
                alt="icon lemon"
                className="flex-shrink-0 w-6 lg:w-8"
              />
              <div className="flex-grow ml-3">
                <p className="font-light mb-1 text-xs lg:text-sm text-neutral-400 truncate">
                  John Smith_download.Pdf
                </p>
                <img src="/RectangleSmall.svg" alt="progress bar" />
              </div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </article>
          </div>
        </div>
      </div>

      {/* Fifth Card: Optimist Expense Management */}
      <div
        data-aos="fade-left"
        className="bg-white flex flex-col justify-between text-center dark:bg-dark-priceCardBg col-span-12 lg:col-span-6 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  lg:text-start text-black dark:text-white p-6"
      >
        <h4 className="lg:text-4xl text-2xl lg:leading-snug leading-tight font-semibold mt-4">
          Optimist expense Management as a team
        </h4>
        <p className="pb-6 font-extralight text-sm lg:text-lg text-neutral-400 pt-6 lg:leading-snug leading-tight">
          Bring harmony to team expenses with budget limits and real-time
          monitoring.
        </p>
        <Button
          text="Explore more"
          className="p-3 w-40 block lg:mx-0 mx-auto bg-black text-white rounded-3xl dark:bg-white dark:text-black"
        />
      </div>
    </section>
  );
}

export default BoostingGrid;
