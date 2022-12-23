import { Database, OBJECT } from 'common/utilities/database';
import { withSessionApi } from 'common/utilities/session';

const post = (req: any, res: any) => {
  const database = new Database(OBJECT.SENDED);

  const sender = req.session?.user?.name ?? "Matakunkun";

  try {
    const { message } = JSON.parse(req.body);
    if (!message) return res.status(400)

    const data = { name: sender, message: message.trim() };

    database.data.push(data);
    database.save();

    return res.status(200).json(data)
  } catch (e) {
    console.log(e)
  }
}

const put = (req: any, res: any) => {
  const saved = new Database(OBJECT.SAVED);
  const sended = new Database(OBJECT.SENDED);

  const { approved } = JSON.parse(req.body);

  const data = sended.data.splice(approved, 1);

  if (!data) return res.status(404).json({ error: "Not Found" });

  saved.data = [...data, ...saved.data];
  sended.save()
  saved.save()

  return res.status(200).json(req.body)
}


async function handler(req: any, res: any) {
  const method: any = req.method

  if (!["POST", "PUT"].includes(method)) return res.status(404).send({ error: 'Method not supported' });

  if (method === "POST") return post(req, res)

  return put(req, res);
}

export default withSessionApi(handler);