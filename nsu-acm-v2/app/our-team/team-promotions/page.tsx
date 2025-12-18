import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function TeamPromotionsPage() {
  const team = teamsData["team-promotions"];
  return <TeamDetailClient slug="team-promotions" team={team} />;
}


