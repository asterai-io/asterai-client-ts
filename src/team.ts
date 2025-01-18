import {DEFAULT_API_BASE_URL} from "./config";

export type FetchTeamArgs = {
  teamId: string;
  accountApiKey: string;
  apiBaseUrl?: string;
};

export type ListTeamsArgs = {
  accountApiKey: string;
  apiBaseUrl?: string;
};

export type AsteraiAgentInformation = {
  id: string;
  name: string;
  publicQueryKeys: string[];
  teamId: string;
  plugins: AgentPlugin[];
  llmParams: AgentLlmParams;
};

export type AgentPlugin = {
  /**
   * The ID of the plugin instance.
   */
  id: string;
  name: string;
  isEnabled: boolean;
}

export type AgentLlmParams = {
  model: string;
  provider: string;
  maxTokens: number;
  temperature: number;
  topP: number;
  presencePenalty: number;
  frequencyPenalty: number;
};

type ListTeamsResponse = {
  teams: ListTeamsResponseTeam[];
}

type ListTeamsResponseTeam = {
  id: string;
  name: string;
};

type ListAgentsResponse = {
  apps: AsteraiAgentInformation[];
}

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
  private readonly apiBaseUrl: string = DEFAULT_API_BASE_URL;

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

  public static async fetch(args: FetchTeamArgs): Promise<AsteraiTeam | undefined> {
    const teams = await AsteraiTeam.list({
      accountApiKey: args.accountApiKey,
      apiBaseUrl: args.apiBaseUrl
    });
    return teams.find(t => t.id == args.teamId);
  }

  /**
   * List teams from an account.
   */
  public static async list(args: ListTeamsArgs): Promise<AsteraiTeam[]> {
    const apiBaseUrl = args.apiBaseUrl ?? DEFAULT_API_BASE_URL;
    let url = `${apiBaseUrl}/teams`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${args.accountApiKey}`
      },
    });
    const json = await response.json() as ListTeamsResponse;
    return json.teams.map(team => new AsteraiTeam(
      team.id,
      team.name,
      args.accountApiKey,
      args.apiBaseUrl
    ));
  }

  public async listAgents(): Promise<AsteraiAgentInformation[]> {
    let url = `${this.apiBaseUrl}/team/${this.id}/apps`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.accountApiKey}`
      },
    });
    const json = await response.json() as ListAgentsResponse;
    return json.apps;
  }
}
