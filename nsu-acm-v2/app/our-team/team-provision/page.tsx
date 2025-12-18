import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function TeamProvisionPage() {
  const team = teamsData["team-provision"];
  return <TeamDetailClient slug="team-provision" team={team} />;
}


