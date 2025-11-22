import JoinNow from '../../components/home-page-sections/JoinNow';
import Content from './content';

export default function AboutUs() {
	return (
		<>
			{/* Home Page */}
			<section className="">
				<Content />
				<div className="bg-[#215AD7]">
					<JoinNow />
				</div>
			</section>
		</>
	);
}
