import {AsteraiAgent} from "./agent";

/**
 * Represents an asterai team.
 *
 * This can be used to fetch data from and control
 * a team programmatically.
 *
 * The team is authenticated with the account's API key,
 * therefore this should not be used in untrusted clients such as
 * the client side of a public web app.
 */
export class AsteraiTeam {
  private readonly id: string;
  private readonly accountApiKey: string;

  private constructor(id: string, accountApiKey: string) {
    this.id = id;
    this.accountApiKey = accountApiKey;
  }

  public static async fromIdAndApiKey(
    teamId: string,
    accountApiKey: string
  ): Promise<AsteraiTeam> {
    throw new Error("todo");
  }

  public async fetchAgents(): Promise<AsteraiAgent[]> {
    throw new Error("todo");
  }
}
