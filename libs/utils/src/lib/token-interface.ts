export interface Token {

  /**
   * The bearer access token
   */
  access_token: string;

  /**
   * The expiration date in second
   */
  expire_in: number;
}