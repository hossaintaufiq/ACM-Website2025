import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function DesignDecorGroupPage() {
  const team = teamsData["design-decor-group"];
  return <TeamDetailClient slug="design-decor-group" team={team} />;
}


