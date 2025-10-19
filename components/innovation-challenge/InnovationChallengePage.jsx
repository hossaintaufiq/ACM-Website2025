import ReviewProcess from '@/components/InnovationChallenge/ReviewProcess';
import SeasonAttraction from '@/components/InnovationChallenge/SeasonAttraction';
import Footer from '@/components/Footer';
import PrizeMoney from '../InnovationChallenge/PrizeMoney';
import '@/app/assets/css/ic.css';
import '@/app/assets/css/style.css';

export default function InnovationChallengePage() {
	return (
		<>
			<div className="bg z-0"></div>
			<main className="relative z-10">
				<SeasonAttraction />
				<ReviewProcess />
				<PrizeMoney />
			</main>
			{/* <Footer/>   */}
		</>
	);
}
