import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// ------------ ic sponsor logos ------------
import abcRadio from "../assets/img/sponsors/abcradio.png";
import thedailystar from "../assets/img/sponsors/thedailystar.png";
import jugantor from "../assets/img/sponsors/jugantor.png";
import jamuna from "../assets/img/sponsors/jamuna.png";
import shout from "../assets/img/sponsors/shout.png";
import jagonews24 from "../assets/img/sponsors/jagonews24.png";
import radiodhol from "../assets/img/sponsors/radiodhol.png";

import BIF from "../assets/img/sponsors/BIF-Logo.png";
import foorti from "../assets/img/sponsors/foorti.png";
import dailysun from "../assets/img/sponsors/dailysun.png";
import charismatic from "../assets/img/sponsors/charismatic.png";
import studentbd24 from "../assets/img/sponsors/studentbd24.png";
import gpaccelerator from "../assets/img/sponsors/gpaccelerator.jpg";

import pfec from "../assets/img/sponsors/pfec.png";
import sibl from "../assets/img/sponsors/sibl-logo.png";
import asus from "../assets/img/sponsors/asus.png";
import infolink from "../assets/img/sponsors/infolink.png";
import ticketchai from "../assets/img/sponsors/ticketchai.png";

import ipe from "../assets/img/sponsors/ipe.png";
import torongo from "../assets/img/sponsors/torongo.png";
import news24 from "../assets/img/sponsors/news24.png";
import kalerkontho from "../assets/img/sponsors/kalerkontho.png";

import gic from "../assets/img/sponsors/gic.png";
import brother from "../assets/img/sponsors/brother.png";
import airposted from "../assets/img/sponsors/airposted.png";
import banglanews from "../assets/img/sponsors/banglanews.png";
import ujalapaints from "../assets/img/sponsors/ujalapaints.png";


import bkash from "../assets/img/sponsors/bkash.png";
import shopnshipbd from "../assets/img/sponsors/shopnshipbd.png";
import banglalink from "../assets/img/sponsors/banglalink.png";
import weddingeye from "../assets/img/sponsors/weddingeye.png";
import satv from "../assets/img/sponsors/satv.png";

import indexgrp from "../assets/img/sponsors/indexgrp.png";
import islamicbank from "../assets/img/sponsors/islamicbank.png";
import ekattor from "../assets/img/sponsors/71.png";
import mtndew from "../assets/img/sponsors/mtndew.png";
import dotNet from "../assets/img/sponsors/dotNet.png";
import weddingdream from "../assets/img/sponsors/weddingdream.png";
import floraltd from "../assets/img/sponsors/floraltd.png";

import shomoy from "../assets/img/sponsors/shomoy.png";
import bohubrihi from "../assets/img/sponsors/bohubrihi.png";

import creativeit from "../assets/img/sponsors/creativeit.png";
import shikhbeshobai from "../assets/img/sponsors/shikhbeshobai.png";
import rotor from "../assets/img/sponsors/rotor-solution.png";
import robodoc from "../assets/img/sponsors/robodoc.png";
import AT from "../assets/img/sponsors/AT logo.jpg";




// Page Component
const Page = () => {

    const icSponsor_2017_april = [
        {
            image: abcRadio,
        },
        {
            image: thedailystar,
        },
        {
            image: jugantor,
        },
        {
            image: jamuna,
        },
        {
            image: shout,
        },
        {
            image: jagonews24,
        },
    ];
    const icSponsor_2017_august = [
        {
            image: jamuna,
        },
        {
            image: radiodhol,
        },
        {
            image: shout,
        },
    ]
    const icSponsor_2017_october = [
        {
            image: BIF,
        },
        {
            image: foorti,
        },
        {
            image: dailysun,
        },
        {
            image: charismatic,
        },
        {
            image: studentbd24,
        },
    ]
    const icSponsor_2017_december = [
        {
            image: gpaccelerator,
        },
        {
            image: dailysun,
        },
    ]
    const technovation_2018_february = [
        {
            image: pfec,
        },
        {
            image: sibl,
        },
        {
            image: jamuna,
        },
        {
            image: dailysun,
        },
        {
            image: asus,
        },
        {
            image: infolink,
        },
        {
            image: ticketchai,
        },
        {
            image: foorti,
        },
    ]
    const icSponsor_2018_april = [
        {
            image: gpaccelerator,
        },
        {
            image: ipe,
        },
        {
            image: torongo,
        },
        {
            image: news24,
        },
        {
            image: kalerkontho,
        },
        {
            image: foorti,
        },
    ];
    const hack_2019_april = [
        {
            image: gic,
        },
        {
            image: brother,
        },
        {
            image: airposted,
        },
        {
            image: banglanews,
        },
        {
            image: ujalapaints,
        },
        {
            image: dailysun,
        },
        {
            image: infolink,
        },
    ];
    const ic_2019_april = [
        {
            image: bkash,
        },
    ];
    const ic_2019_august = [
        {
            image: shopnshipbd,
        },
        {
            image: banglalink,
        },
        {
            image: kalerkontho,
        },
        {
            image: weddingeye,
        },
        {
            image: satv,
        },
    ];
    const technovation_2019_november = [
        {
            image: indexgrp,
        },
        {
            image: islamicbank,
        },
        {
            image: ekattor,
        },
        {
            image: foorti,
        },
        {
            image: kalerkontho,
        },
        {
            image: mtndew,
        },
        {
            image: dotNet,
        },
        {
            image: weddingdream,
        },
        {
            image: floraltd,
        },
    ]
    const hack_2021_september = [
        {
            image: shomoy,
        },
        {
            image: bohubrihi,
        },

    ];
    const previous_workshop = [
        {
            image: creativeit,
        },
        {
            image: shikhbeshobai,
        },
        {
            image: rotor,
        },
        {
            image: robodoc,
        },
        {
            image: AT,
        },

    ];




    return (
        <MaxWidthWrapper>
            <div>
                <div className='text-center'>
                    <h2 contentEditable='true' className='glow-effect text-6xl mt-5 mb-12'> Sponsors</h2>
                    <h2 className='text-4xl'>Our Previous <span className='text-blue-500'>Sponsors & Partners</span></h2>
                </div>

                {/* -------------NSU Capstone Innovation Challenge April 2017------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>NSU Capstone Innovation Challenge</h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>April, 2017</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {icSponsor_2017_april.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------innovation challenge August 2017------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Innovation Challenge</h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>August, 2017</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {icSponsor_2017_august.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Innovation Challenge Season 3 Idea Generation October, 2017------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Innovation Challenge Season 3 Idea Generation
                    </h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400 mb-8'>October, 2017</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-9 '>
                            {icSponsor_2017_october.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Innovation Challenge Season 3 December, 2017------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Innovation Challenge Season 3</h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400 mb-8'>December, 2017</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-9 '>
                            {icSponsor_2017_december.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Technovation February, 2018------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Technovation</h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400 mb-8'>February, 2018</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-x-10 gap-y-32  '>
                            {technovation_2018_february.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Innovation Challenge Season 4 April, 2018------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Innovation Challenge Season 4                    </h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>April, 2018</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {icSponsor_2018_april.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------HackNSU April, 2019------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>HackNSU</h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>April, 2019</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {hack_2019_april.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Innovation Challenge Season 7 April, 2019------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Innovation Challenge Season 7                    </h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>April, 2019</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {ic_2019_april.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Innovation Challenge Season 8 August, 2019------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Innovation Challenge Season  8                  </h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>August, 2019</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {ic_2019_august.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Technovation 2.0, November, 2019------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>Technovation 2.0</h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400 mb-8'>November, 2019</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-x-10 gap-y-32  '>
                            {technovation_2019_november.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------HackNSU Season 2 September,2021 ------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16'>HackNSU Season 2</h2>
                    <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>September,2021</p>

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {hack_2021_september.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* -------------Our Previous Workshop Partners ------------ */}
                <section className='mb-44'>
                    <h2 className='text-center font-bold text-2xl text-blue-400 mt-16 mb-20'>Our Previous Workshop Partners</h2>
                    {/* <p className='text-center font-mono opacity-80 text-2xl text-blue-400  mb-8'>September,2021</p> */}

                    <div className="flex flex-col mt-10">
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-5 '>
                            {previous_workshop.map(({ name, image }, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center text-center h-10 mt-8">
                                        <Image
                                            src={image}
                                            className="img-fluid hover:scale-125 hover:transform hover:duration-500"
                                            alt={name}
                                        />
                                        <h1 className="text-sm md:text-lg lg:text-xl mt-2">{name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
            </div>
        </MaxWidthWrapper>
    );
};

export default Page;
