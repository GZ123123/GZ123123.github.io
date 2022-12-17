import { IronSessionOptions } from "iron-session";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const CONFIGS: IronSessionOptions = {
  cookieName: "xmas",
  password: "complex_password_at_least_32_characters_long",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
}

export const withSessionSsr = (handler: any) => withIronSessionSsr(handler, CONFIGS)

export const withSessionApi = (handler: any) => withIronSessionApiRoute(handler, CONFIGS);