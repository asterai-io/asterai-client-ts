import {AsteraiTeam} from "./team";

/**
 * Represents an asterai account.
 *
 * This can be used to fetch data from and control
 * an account programmatically.
 *
 * The account is authenticated with the account's API key,
 * therefore this should not be used in untrusted clients such as
 * the client side of a public web app.
 */
export class AsteraiAccount {
  public readonly id: string;
  private readonly apiKey: string;

  private constructor(id: string, apiKey: string) {
    this.id = id;
    this.apiKey = apiKey;
  }

  public static async fromApiKey(apiKey: string): Promise<AsteraiAccount> {
    throw new Error("todo");
  }

  public async fetchTeams(): Promise<AsteraiTeam[]> {
    throw new Error("todo");
  }
}
