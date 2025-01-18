import {AsteraiAgent} from "./agent";

export type FetchTeamArgs = {
  teamId: string;
  accountApiKey: string;
  apiBaseUrl?: string;
};

export type ListTeamsArgs = {
  accountApiKey: string;
};

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
  public readonly id: string;
  public readonly name: string;
  private readonly accountApiKey: string;
  private readonly apiBaseUrl: string = "https://api.asterai.io";

  private constructor(
    id: string,
    name: string,
    accountApiKey: string,
    apiBaseUrl?: string,
  ) {
    this.id = id;
    this.name = name;
    this.accountApiKey = accountApiKey;
    if (apiBaseUrl) {
      this.apiBaseUrl = apiBaseUrl;
    }
  }

  public static async fetch(args: FetchTeamArgs): Promise<AsteraiTeam> {
    throw new Error("todo");
  }

  /**
   * List teams from an account.
   */
  public static async list(args: ListTeamsArgs): Promise<AsteraiTeam[]> {
    throw new Error("todo");
  }

  public async listAgents(): Promise<AsteraiAgent[]> {
    throw new Error("todo");
  }
}
