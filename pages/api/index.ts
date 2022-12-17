import { NextApiResponse } from "next";

const handler = (req: any, res: NextApiResponse) => {
  res.status(404).send({ error: "Not Found" })
}

export default handler;