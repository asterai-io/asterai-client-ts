import { AsteraiTeam } from "../../src";

/*
 * This is an example of how to use the Team class to
 * programmatically fetch and control teams and their agents
 * and other resources.
 */

// Set your account API key.
const ACCOUNT_API_KEY = "secret";

const main = async () => {
  const teams = await AsteraiTeam.list({
    accountApiKey: ACCOUNT_API_KEY,
  });
  for (const team of teams) {
    const teamHeader = `team ${team.name} (${team.id})`;
    console.log("");
    console.log("=".repeat(teamHeader.length));
    console.log(teamHeader);
    console.log("=".repeat(teamHeader.length));
    const agents = await team.listAgents();
    for (const agent of agents) {
      console.log(`> agent ${agent.name} (${agent.id}) has ${agent.plugins.length} plugins`);
    }
  }
};

main().catch(console.error);
