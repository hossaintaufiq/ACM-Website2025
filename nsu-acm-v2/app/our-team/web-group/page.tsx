import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function WebGroupPage() {
  const team = teamsData["web-group"];
  return <TeamDetailClient slug="web-group" team={team} />;
}


