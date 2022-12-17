import { withSessionApi } from 'common/utilities/session';
import { NextApiRequest, NextApiResponse } from 'next';


async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: any = req.method

  if (method !== "POST") return res.status(404).send({ error: 'failed to fetch data' });

  const usernames = ["lnphuongtrinh0198@gmail.com", "nguyensang0753@gmail.com"]

  try {
    const data = JSON.parse(req.body)

    if (!usernames.includes(data['email']) || data['password'] !== "password")
      return res.status(404).send({ error: 'failed to fetch data' });

    const user = {
      ...((<any>req.session).user ?? {}),
      isAdmin: true
    };

    (<any>req.session).user = user;

    await req.session.save();

    return res.status(200).json(user)
  } catch (e) {
    console.log(e)
    return res.status(404).send({ error: 'failed to fetch data' });
  }
}

export default withSessionApi(handler);