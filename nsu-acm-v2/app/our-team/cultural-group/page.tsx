import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function CulturalGroupPage() {
  const team = teamsData["cultural-group"];
  return <TeamDetailClient slug="cultural-group" team={team} />;
}


