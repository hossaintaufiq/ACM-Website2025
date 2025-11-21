'use client';
import Image from 'next/image';
import CustomButton from '../../components/button-tab-sections/CustomButton';
import TopButton from '../../components/button-tab-sections/TopButton';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

// -----------images------------

import hackNsuImg1 from "../assets/img/hacknsu/hack1.jpg";
import hackNsuImg2 from "../assets/img/hacknsu/hack2.jpg";
import hackNsuImg3 from "../assets/img/hacknsu/hack3.jpg";
import technoImg1 from "../assets/img/technovation/tech1.jpg";
import technoImg2 from "../assets/img/technovation/tech2.jpg";
import technoImg3 from "../assets/img/technovation/tech3.jpg";
import icImg1 from "../assets/img/innovation/inno1.jpg";
import icImg2 from "../assets/img/innovation/inno2.jpg";
import icImg3 from "../assets/img/innovation/inno4.jpg";
import hocimg1 from "../assets/img/hourofcode/hoc0.jpg";
import hocimg2 from "../assets/img/hourofcode/hoc1.jpg";
import hocimg3 from "../assets/img/hourofcode/hoc2.jpg";



const hackImage = [
	{
		image: hackNsuImg1,
		name: 'Hack NSU',
	},
	{
		image: hackNsuImg2,
		name: 'Hack NSU',
	},
	{
		image: hackNsuImg3,
		name: 'Hack NSU',
	},
];
const technoImages = [
	{
		image: technoImg1,
		name: 'Technovation',
	},
	{
		image: technoImg2,
		name: 'Technovation',
	},
	{
		image: technoImg3,
		name: 'Technovation',
	},
];

const icImage = [
	{
		image: icImg1,
		name: 'Innovation Challenge',
	},
	{
		image: icImg2,
		name: 'Innovation Challenge',
	},
	{
		image: icImg3,
		name: 'Innovation Challenge',
	},
];

const hourOfCodeImage = [

  {
    image: hocimg1,
    name: "Hour of Code",
  },
  {
    image: hocimg2,
    name: "Hour of Code",
  },
  {
    image: hocimg3,
    name: "Hour of Code",
  },

	{
		image: hackNsuImg1,
		name: 'Hack NSU',
	},
	{
		image: hackNsuImg2,
		name: 'Hack NSU',
	},
	{
		image: hackNsuImg3,
		name: 'Hack NSU',
	},

];

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Background = () => {
	const image = ['/Rectangle 34.png'];
	return (
		<div className="">
			<MaxWidthWrapper>
				<div className="py-12 md:py-18 grid grid-cols-1 md:grid-cols-4 gap-4">
					<div className="flex justify-center md:mt-6">
						<h1 className="text-4xl md:text-5xl">Our Event</h1>
					</div>

					<div className="col-span-3 flex justify-center items-center mt-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div>
								<Image src={hackNsuImg1} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Hack NSU</h2>
							</div>

							<div>
								<Image src={technoImg1} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Technovation</h2>
							</div>

							<div>
								<Image src={icImg1} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Innovation Challenge</h2>
							</div>

							<div>
								<Image src={hackNsuImg2} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Hack NSU</h2>
							</div>

							<div>
								<Image src={technoImg2} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Technovation</h2>
							</div>

							<div>
								<Image src={icImg3} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Innovation Challenge</h2>
							</div>

							<div>
								<Image src={hackNsuImg3} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Hack NSU</h2>
							</div>

							<div>
								<Image src={technoImg3} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Technovation</h2>
							</div>

							<div>
								<Image src={icImg1} width="125" height="125" className="w-full md:h-[85%] rounded-md md:rounded-sm" alt=""></Image>
								<h2 className="text-center mt-2">Innovation Challenge</h2>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>

			<MaxWidthWrapper>
				<div className="py-12 md:py-18">
					<h1 className="text-4xl md:text-5xl flex justify-center md:mt-6">Signature Events</h1>
					<div className="grid grid-cols-1 md:grid-cols-1 mt-20 gap-16 justify-center items-center">
						{/* ------------- first div--------- */}
						<div className="flex flex-col md:flex-row gap-10 justify-center">
							<div className="max-w-2xl">
								<Carousel
									plugins={[
										Autoplay({
											delay: 3000,
										}),
									]}
									className="w-full"
								>
									<CarouselContent>
										{hackImage.map((image, index) => (
											<CarouselItem key={index}>
												<div className="p-1 h-full">
													<Image src={image.image} className="w-full h-[85%] md:h-[90%] rounded-md md:rounded-sm" alt=""></Image>
													<h3 className="text-center mt-3">{image.name}</h3>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
							</div>

							<div>
								<h2 className="text-center mb-2 text-2xl">HACK NSU</h2>
								<p className="text-sm text-center md:text-start md:text-lg lg:text-xl text-muted-foreground tracking-tight italic">
									HackNSU, a Hackathon organized by NSU ACM SC, was an excellent opportunity for students and tech enthusiasts. Over the course of 8 hours, more than 20 teams (each team consisting of 3-4 members) participated from different universities all over the city, with their wide range of thoughts competing against each other over two different problems. The competitors put their heads together to solve the problems that plague us, providing them with a platform to showcase their skills, creativity, and efficiency in coding, software, etc. More than 500 viewers were seen on that day, along with the other special guests.
									<br></br>
									It was a huge platform for those who are passionate and searching for an opportunity to showcase their ability to generate new ideas and a new vision.<br></br>
									The event was a part of ACM-SC's goal to promote and develop fresh minds' ideas and thoughts and give those ideas a new dimension. And in the process, they also searched for solutions to the plethora of problems we face every day.
								</p>
							</div>
						</div>

						{/* ---------second div--------- */}
						<div className="flex flex-col-reverse md:flex-row gap-10 justify-center">
							<div>
								<h2 className="text-center mb-2 text-2xl">TECHNOVATION</h2>
								<p className="text-sm text-center md:text-start md:text-lg lg:text-xl text-muted-foreground tracking-tight italic">
									Our signature event, Technovation - a Beacon of Engineering Success, one of North South University’s largest and most anticipated tech fests, was hosted for the very first time by NSU ACM Student Chapter in February 2018 for consecutive 3 days where over 800 participants, from 22 different universities, competed against each other across six different competitions such as IT Business Challenge, Hackathon, App Development Contest and many more. It gave the participants an opportunity to upheaval in the meadow of tech. It was a resounding success in all areas ranging from programming and gaming to robotics.
									<br></br>
									After witnessing this grand event in 2018, it was again held in November 2019 as “Technovation 2.0”. One of the main goals of Technovation was to help students from the participating universities display the skills they will use in the future as engineers and entrepreneurs. Many of the contests revolved around applications in real-life technological fields that are currently being developed.
								</p>
							</div>

							<div className="max-w-2xl">
								<Carousel
									plugins={[
										Autoplay({
											delay: 3000,
										}),
									]}
									className="w-full"
								>
									<CarouselContent>
										{technoImages.map((image, index) => (
											<CarouselItem key={index}>
												<div className="p-1 h-full">
													<Image src={image.image} className="w-full h-[85%] md:h-[90%] rounded-md md:rounded-sm" alt=""></Image>
													<h3 className="text-center mt-3">{image.name}</h3>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
							</div>
						</div>

						{/* ------------------------- third div-------------------------- */}
						<div className="flex flex-col md:flex-row gap-10 justify-center">
							<div className="max-w-2xl">
								<Carousel
									plugins={[
										Autoplay({
											delay: 3000,
										}),
									]}
									className="w-full"
								>
									<CarouselContent>
										{icImage.map((image, index) => (
											<CarouselItem key={index}>
												<div className="p-1 h-full">
													<Image src={image.image} className="w-full h-[85%] md:h-[90%] rounded-md md:rounded-sm" alt=""></Image>
													<h3 className="text-center mt-3">{image.name}</h3>
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
							</div>

							<div>
								<h2 className="text-center mb-2 text-2xl">INNOVATION CHALLENGE</h2>
								<p className="text-sm text-center md:text-start md:text-lg lg:text-xl text-muted-foreground tracking-tight italic">
									The final project of a Computer Science undergraduate is of utmost importance. This project has the potential to open new doors in their career. After eight long months of struggle and nerve-wracking hard work, they present their amazing work.
									<br></br>
									This event helps students ace in their venture of gathering knowledge in the realm of Computer Science. NSU ACM SC has been arranging Innovation Challenge every semester for the students in their final semester. Each season, more than 100 teams (each team consisting of 3-4 members) participated with their final year project. In the process of doing that, members of this community get the opportunity to know about many effective and impactful projects.<br></br>
									The participants learned a lot from these projects for them to apply in their own life. Over 10,000 visitors from the university checked out the projects in the plaza area.
								</p>
							</div>
						</div>

						{/* -----------------------------fourth div---------------------------- */}
						<div className=" flex flex-col-reverse md:flex-row gap-10 justify-center">
							<div>
								<h2 className="text-center mb-2 text-2xl">HOUR OF CODE</h2>
								<p className="text-sm text-center md:text-start md:text-lg lg:text-xl text-muted-foreground tracking-tight italic">
									Every year NSU ACM SC hosts Hour of Code at North South University. Hour of Code is an event celebrated worldwide where the basic concepts of coding are taught to newcomers in a fun and exciting session that lasts an hour. Being a global movement, it introduces millions of students around the world to Computer Science. NSU ACM Student Chapter had undertaken this great initiative in order to celebrate “World Computer Science Week” at its premises for the very first time in December 2018 and onwards every year. We witness a significant number of participants from different backgrounds every year who had never written a single line of code before.<br></br>
									They are taught simple codes through a fun game that ensures their concentration and keeps them engaged in the session, thus completing various difficulty levels of code. The goal of this event is to encourage students to get into the world of coding. This milestone celebrates coding for all; therefore, it successfully implements its slogan, “Anyone Can Code!”.
								</p>
							</div>

							<div className="max-w-2xl">
								<Carousel
									plugins={[
										Autoplay({
											delay: 3000,
										}),
									]}
									className="w-full"
								>
									<CarouselContent>
										{hourOfCodeImage.map((image, index) => (
											<CarouselItem key={index}>
												<div className="p-1 h-full">
													<Image src={image.image} alt={image.alt} layout="fill" objectFit="cover" />
												</div>
											</CarouselItem>
										))}
									</CarouselContent>
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Background;
