import { NextApiRequest, NextApiResponse } from "next";

export interface IMessage {
  name: string;

  message: string;
}

const postNewData = async (data: IMessage) => {
  console.log(data);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query: { id, name }, method } = req


  switch (method) {
    case 'POST':
      // res.status(200).json({ id, name: `User ${id}` })
      postNewData(req.body)
      res.status(200).json(req.body)
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}