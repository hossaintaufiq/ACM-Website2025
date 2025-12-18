import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function DesignDecorGroupPage() {
  const team = teamsData["design-decor-group"];
  return <TeamDetailClient slug="design-decor-group" team={team} />;
}


