import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function TeamPromotionsPage() {
  const team = teamsData["team-promotions"];
  return <TeamDetailClient slug="team-promotions" team={team} />;
}


