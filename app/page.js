"use client";

import Prize from "@/components/Prize";
import Testimonial from "@/components/Testimonial";

import client from "../apolloClient";
import { gql } from "@apollo/client";
import { Inter } from "next/font/google";
import { Russo_One } from "next/font/google";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";


// ICONS
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoTwitter } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

// const inter = Inter({ subsets: ['latin'] })
// const russo = Russo_One({ subsets: ['sans-serif'] })

export default function Home() {

  // * --------------- DEFINITION OF STATES AND REQUEST OF INFO FROM API --------------------------------
  const [homeInfo, setHomeInfo] = useState(null);
  const [prizesInfo, setPrizesInfo] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const response = getInitialProps();
    response
      .then((result) => {
        
        setHomeInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
    // const fetchData =  async () => {

    const prizes = getStaticPrizes();
    prizes
      .then((result) => {
        setPrizesInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });

    const testimonails = getStaticTestimonials();

    testimonails
      .then((result) => {
        setTestimonials(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // * ------------------ REACT HTML RETURN -----------------------------
  return (
    <main>
      {/* ------------- NAV BAR  --------------------- */}

      <Navbar></Navbar>

      {/* -------------- Hero section ---------------------- */}
      <section
        id="hero"
        className="flex flex-col w-full items-center pt-24 mb-10 bg-lightningBG bg-contain bg-center bg-no-repeat md:bg-cover md:bg-center "
      >
        {/* Main Text */}
        <div className="font-russo text-4xl md:text-6xl">WE{"'"}RE BACK.</div>

        {/* Clock */}
        <div className="flex justify-center items-center border rounded-xl w-2/3 border-t-4 py-8 border-grey md:border-t-4 md:border-r-2 md:h-20 md:p-16">
          <div className="mr-4 text-orange font-clock text-4xl md:text-6xl">
            24:00
          </div>
          <div className="font-russo text-2xl md:text-4xl">
            HOUR <br></br> WAKE
          </div>
        </div>

        {/* Subtext and buttons */}
        <div className="flex flex-col-reverse text-center w-2/3 md:flex-col">
          {/* Text */}
          <div className="flex justify-center items-center text-base font-lexend my-10 md:text-xl">
            Every hour awake is a moment to commemorate.
          </div>

          {/* Buttons */}
          <div className="space-x-4 mt-10 md:mt-2 md:space-x-6">
            <a
              href="#"
              className="text-white text-sm font-lexend bg-orange p-2 px-4 md:text-base"
            >
              Join the Wake
            </a>
            <a
              href="#"
              className="text-white text-sm font-lexend border-white border p-2 px-4 md:text-base"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* --------------- About the wake (Home page) Section ---------------------- */}

      <section id="aboutTheWake" className="mt-18 mb-10">
        {/* Division Line */}
        <div className="hidden md:block md:border md:w-3/4 border-grey mb-10"></div>

        <div id="time1" className="font-clock text-2xl mb-10 pl-10 text-orange">
          01:00
        </div>

        {/* INFO + PICTURE */}
        <div className="flex flex-col md:flex-row ">
          {/* Information */}
          <div className="px-10 md:w-1/2">
            <div className="font-lexend font-bold text-3xl md:text-5xl">
              ABOUT THE WAKE
            </div>
            <div className="font-lexend text-base pt-12 md:text-sm xl:text-xl">
              {homeInfo ? (
                <>
                  <p className="mb-10">{homeInfo.homeAbout}</p>
                  <a href="#" className="p-4 border">
                    Learn More
                  </a>
                </>
              ) : (
                <h3>Loading</h3>
              )}
            </div>
          </div>

          {/* Image (hidden in mobile version) */}
          <div className="hidden md:flex w-1/2 md:justify-end">
            <div>
              {homeInfo ? (
                <img src={homeInfo.homePicture.url} />
              ) : (
                <h1>loading</h1>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --------------- Get Involved Section ---------------------- */}

      <section id="getInvolved" className="mt-16 mb-20">
        {/* Division Line */}
        <div className="hidden md:block md:border md:w-3/4 border-grey mb-10 ml-auto"></div>

        <div id="time1" className="font-clock text-2xl mb-10 pl-10 text-orange">
          06:00
        </div>

        <div id="containerGetInvolved" className="flex flex-col">
          {/* GET INVOLVED TITLE AND TEXT */}
          <div className="w-full mb-20 md:w-1/2 px-10">
            <div className="font-lexend font-bold text-3xl md:text-5xl">
              GET INVOLVED!
            </div>
            <div className="font-lexend text-base pt-12 md:text-sm xl:text-xl">
              You can be part of the Wake in many ways! Whether with a team or
              alone, spreading the word or donating, what matters is helping
              raise awareness about this cause. <br />
              <br />
              If you are interested and want to know more about organizing your
              event, we leave you{" "}
              <a href="#" className="text-orange">
                this guide{" "}
              </a>
              with suggestions!
            </div>
          </div>

          {/* ICONS */}
          <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-center md:space-x-5">
            {/* item # 1 */}
            <div className="flex flex-col items-center font-lexend w-3/4 md:w-1/4">
              <div className="mb-4">
                <img src="pencil.svg" alt="24HLogo"></img>
              </div>
              <div className="text-lg font-bold mb-6">Individual</div>
              <div>
                Want to stay awake alone and fundraise? <br />
                Sure! Your courageous move is inspiring and we are here to
                support you.
              </div>
            </div>

            {/* Item # 2 */}
            <div className="flex flex-col items-center font-lexend w-3/4 md:w-1/4">
              <div className="mb-4">
                <img src="palette.svg" alt="24HLogo"></img>
              </div>
              <div className="text-lg font-bold mb-6">Create a Team</div>
              <div>
                Would love to lead a team instead? <br />
                Get your friends and family together, you can do this!
              </div>
            </div>

            {/* Item # 3 */}
            <div className="flex flex-col items-center font-lexend w-3/4 md:w-1/4">
              <div className="mb-4">
                <img src="pencils.svg" alt="24HLogo"></img>
              </div>
              <div className="text-lg font-bold mb-6">Support a Team</div>
              <div>
                You can also be part of the wake by sharing or donating to a
                team or solo participant! The intention to help is what it
                counts!
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <a href="#" className="p-2 w-32 border text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------- SECTION OUR PURPOSE ---------------------------------- */}

      <section className="mb-16 bg-black text-white md:bg-white md:text-black font-lexend pt-10">
        <div className="w-full mb-52  md:w-1/2 px-10">
          <div className="font-lexend font-bold text-3xl md:text-5xl">
            OUR PURPOSE
          </div>
          <div className="font-lexend text-base pt-12 md:text-sm xl:text-xl">
            {homeInfo ? homeInfo.ourPurpose : <h1>Loading</h1>}
          </div>
        </div>

        {/* Reach your goal */}
        <div className="flex flex-col items-baseline md:flex-row md:ml-9">
          <div id="time3" className="font-clock text-2xl p-0 mb-4 text-orange">
            12:00
          </div>
          <div className="font-lexend font-bold ml-8 text-3xl md:text-5xl md:ml-2">
            REACH YOUR GOAL!
          </div>
        </div>
        <div className="w-full px-8 mt-2 md:w-1/2 md:ml-28 md:px-0">
          You can still get awesome merch while being part of a great cause and
          having fun
        </div>

        {prizesInfo ? (
          <>
            <div className="flex flex-row flex-wrap justify-center items-center md:justify-around">
              {prizesInfo.map((prize) => (
                <div key={prize.prizeName}>
                  <Prize
                    prizeName={prize.prizeName}
                    prizeAmount={prize.prizeAmount}
                  ></Prize>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1>Loading</h1>
        )}

        {/* ----------------- SUBSECTION TESTIMONIALS -------------------- */}
        <section>
          <div className="flex flex-col bg-black text-white md:bg-white md:text-black font-lexend mt-20">
            <div className="hidden md:flex md:flex-row md:items-baseline">
              <div
                id="time1"
                className="font-clock text-2xl mb-10 pl-10 text-orange"
              >
                18:00
              </div>
              <div className="font-lexend font-bold ml-8 text-3xl md:text-5xl md:ml-2">
                WHAT OTHERS ARE SAYING
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {testimonials ? (
                testimonials.map((t) => (
                  <Testimonial
                    key={t.userName}
                    userName={t.userName}
                    description={t.description}
                    organization={t.userOrganization}
                    position={t.userPosition}
                    userPhoto={t.userPhoto.url}
                  ></Testimonial>
                ))
              ) : (
                <h2>Loading</h2>
              )}
            </div>
          </div>
        </section>
      </section>

      {/* -------------- JOIN THE WAKE --------------- */}
      <section className="mb-24 ml-8 md:ml-16">
        <div className="font-lexend font-bold text-4xl py-6 md:text-8xl">
          Join the Wake!!
        </div>
        <div className="mb-4 pb-6 pr-8 md:mb-8">
          Don{"'"}t wait any more time! Show your advocacy and be part of this great
          initiative!
        </div>
        <div className="mb-16">
          <a
            href="#"
            className="text-white bg-orange px-6 py-4 hover:text-grey font-lexend"
          >
            Join the Wake
          </a>
        </div>

        <div className="hidden md:block md:border md:w-11/12 border-grey mb-10"></div>
      </section>

      {/* -------  FOOTER -------------- */}
      <footer className="font-lexend bg-black text-white ml-8 mb-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Address and contact */}
          <div className="flex flex-col">
            <div className="mb-10">
              <img src="Logo.svg"></img>
            </div>
            <div className="mb-6">
              <h2 className="text-orange">Address:</h2>
              <h3 className="pr-8"> 160 John St, Suite 200 Toronto, ON M5V 2E5</h3>
            </div>

            <div className="mb-6">
              <h2 className="text-orange">Contact:</h2>
              <h3>
                <a className="underline" href="#">
                  www.LestStopAIDS.org
                </a>
              </h3>
              <h3>
                <a className="underline" href="#">
                  info@LetsStopAIDS.org
                </a>
              </h3>
              <h3>
                <a className="underline" href="#">
                  wake@LetsStopAIDS.org
                </a>
              </h3>
              <div className="flex flex-row mt-6 space-x-3">
                <div>
                  <FaFacebookF size={25} />{" "}
                </div>
                <div>
                  <BsInstagram size={25} />{" "}
                </div>
                <div>
                  <BiLogoTwitter size={25} />{" "}
                </div>
                <div>
                  <IoLogoLinkedin size={25} />{" "}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-6 flex items-center md:pr-32">
            <div className="flex flex-col">
              <a href="#">About</a>
              <a href="#">FAQ</a>
              <a href="#">Resources</a>
            </div>
          </div>
        </div>

        <div className="hidden ml-6 md:block md:border md:w-11/12 border-grey mb-10"></div>
        
        {/* PRIVACY POLICY */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:mr-24">
          <div className="sm:mb-6 md:mb-0">
            2023 <span className="text-orange">LetsStopAids</span>, All rights
            reserved.
          </div>
          <div className="flex flex-row space-x-4">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ----------------------
// -------------------------------
// * *********** FUNCTIONS ****************
// -------------------------------
// ------------------------

// * Function to request information for HomePage (homeAbout, purpose, homePicture)

export async function getInitialProps() {
  try {
    const { data } = await client.query({
      query: gql`
        query Homes {
          homes {
            homeAbout
            ourPurpose
            homePicture {
              url
            }
            id
            publishedAt
            updatedAt
          }
        }
      `,
    });

    let info = JSON.stringify(data.homes[0]);
    let objectData = JSON.parse(info);

    return objectData;
  } catch (err) {
    console.log(err);
  }
}

// * FUNCTION to get information from prizes (prize value and what prize)
export async function getStaticPrizes() {
  try {
    const { data } = await client.query({
      query: gql`
        query Homes {
          prizes {
            prizeName
            prizeAmount
          }
        }
      `,
    });

    //console.log("prizes data", data.prizes);

    return data.prizes;
  } catch (err) {
    console.log(err);
  }
}

// * FUNCTION to get information from testimonials
export async function getStaticTestimonials() {
  try {
    const { data } = await client.query({
      query: gql`
        query Homes {
          testimonials {
            userPhoto {
              url
            }
            userName
            userOrganization
            userPosition
            description
          }
        }
      `,
    });

 

    return data.testimonials;
  } catch (err) {
    console.log(err);
  }
}
//getInitialProps();
getStaticTestimonials();
