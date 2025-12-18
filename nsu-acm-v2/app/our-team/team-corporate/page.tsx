import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function TeamCorporatePage() {
  const team = teamsData["team-corporate"];
  return <TeamDetailClient slug="team-corporate" team={team} />;
}


