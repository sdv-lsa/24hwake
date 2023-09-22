"use client";
import Navbar from '@/components/Navbar'
import React from 'react'

import { useState, useEffect } from "react";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import VerticalTimeline from '@/components/VerticalTimeline';

// ICONS
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoTwitter } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

export default function About2() {

    const [pictures, setPictures] = useState([]);
    useEffect(() => {
        const response = getStaticPictures();
        response
            .then((result) => {
                
                setPictures(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <section className='font-lexend'>


                <div className="text-3xl pl-8">About Us</div>
                <div className="pl-8 mb-12">
                    Learn more about our National HIV <br></br> Ararness & Fundraising
                    Campaign
                </div>

                {/* MOBILE */}
                <div className='w-full md:hidden'>
                    {pictures && pictures.length > 0 ? (
                        <div className="flex flex-col space-y-2 mx-6 justify-center items-baseline">
                            <img className="ml-8 w-10/12 " src={pictures[0].photo.url} alt="imagen1"></img>
                            <img className="pr-8 w-10/12 " src={pictures[1].photo.url} alt="imagen2"></img>
                            <img className="ml-8 w-10/12 " src={pictures[2].photo.url} alt="imagen3"></img>
                        </div>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>


                {/* BIG SCREENS */}
                <div className='hidden md:block w-full'>
                    {pictures && pictures.length > 0 ? (
                        <div className=" py-2 flex flex-row space-x-6">
                            <img className="ml-8 w-[50%] " src={pictures[0].photo.url} alt="imagen1"></img>
                            <img className="pr-8 w-[41%] " src={pictures[1].photo.url} alt="imagen2"></img>
                        </div>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>

                <div className='hidden md:block w-full'>
                    {pictures && pictures.length > 0 ? (
                        <div className="items-center py-2 flex flex-row space-x-4 w-full">
                            <img className="ml-8 w-[25%] " src={pictures[2].photo.url} alt="imagen1"></img>
                            <img className="w-[39%]" src={pictures[3].photo.url} alt="imagen2"></img>
                            <img className="pr-8 w-[27%]" src={pictures[4].photo.url} alt="imagen3"></img>
                        </div>
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </section>



            <div className='px-8 font-lexend my-16'>
                LetsStopAIDS’ first official initiative in 2005. This project has birthed other amazing national and international projects. <br></br>
                24 Hour wake is an annual fundraiser that challenges youth to stay awake for 24 hours to raise funds to support youth living with HIV and at-risk youth in Canada and in third world countries. Most importantly, they have fun whilst doing so. Through this initiative, youth ambassadors in conjunction with LetsStopAIDS will fundraise and share knowledge about HIV. <br></br>
                The 24 Hour Wake engages youth through grassroots events that inspire them to continue to take action in their local communities.
            </div>

            {/*  TIMELINE */}
            <section className='font-lexend'>
                <div className='text-2xl md:text-5xl font-bold pl-8 mb-16'>
                    24 Hour Wake over the years
                </div>
                <div className='flex justify-center'>
                    <VerticalTimeline></VerticalTimeline>
                </div>
            </section>

            {/* SECTION WHATS IN IT FOR YOU */}
            <section className='pt-20 mb-16 '>
                <div className='font-lexend text-4xl font-bold mb-6 pl-8'>
                    Whats in it for you?
                </div>

                <div className='pl-8 pr-8 md:pr-2 font-lexend'>
                    The 24 Hour wake can be one of the most rewarding activities that you will participate in throughout your lifetime. <br></br><br></br>
                    <ol className='list-decimal pl-4'>
                        <li>Join young ambassadors working to end the AIDS epidemic!</li>
                        <li>Help lower HIV infections in Canada</li>
                        <li>Knowing that funds raised will support youth living with HIV and at-risk youth in Canada and third world countries</li>
                        <li>Strengthen your leadership skills (gain experience organizing & leading an event)</li>
                        <li>Strengthen Interpersonal, Teamwork and Communication Skills</li>
                        <li>Meet other like-minded Individuals, Leaders and Activists like Yourself.</li>
                        <li>Learn & Educate others About HIV and AIDS</li>
                        <li>Give Back to Your Community</li>
                        <li>Earn Volunteer Hours or Certificate of Community Service</li>
                        <li>Gain experience that gives you a competitive edge for scholarship applications as well as undergraduate, graduate and professional program applications.</li>

                    </ol>
                </div>

            </section>

            <footer className="font-lexend bg-white text-black pl-8 py-10">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Address and contact */}
                    <div className="flex flex-col">
                        <div className="mb-10">
                            <img src="LogoBlack.svg" alt="logoBlack"></img>
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


        </div>
    )
}


export async function getStaticPictures() {
    try {
        const { data } = await client.query({
            query: gql`
          query Homes {
            pictures {
              photo {
                url
              }
            }
          }
        `,
        });

        
        return data.pictures;
    } catch (err) {
        console.log(err);
    }
}

getStaticPictures();