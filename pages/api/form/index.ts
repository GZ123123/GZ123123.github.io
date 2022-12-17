import { withSessionApi } from 'common/utilities/session';


async function handler(req: any, res: any) {
  const method: any = req.method

  if (method !== "POST") return res.status(404).send({ error: 'failed to fetch data' });

  req.session['user'] = {
    id: 230,
    admin: true,
  };
  await req.session.save();

  // const database = new Database(OBJECT.SENDED);

  try {
    // const { message } = JSON.parse(req.body);

    // if (!message) return res.status(400)
    // database.data.push({ id: session.id, name: "test", message: message.trim() });
    // database.save();
    return res.status(200).json(req.body)
  } catch (e) {
    console.log(e)
  }

}

export default withSessionApi(handler);