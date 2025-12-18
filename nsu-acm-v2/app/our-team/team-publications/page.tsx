import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function TeamPublicationsPage() {
  const team = teamsData["team-publications"];
  return <TeamDetailClient slug="team-publications" team={team} />;
}


