//Aqui podemos utilizar el snippet para crear una API => nextapi + tab

import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedData } from "../../database";
import { Entry } from "../../models";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(400).json({ message: "No tiene acceso a este servicio" });
  }

  await db.connect();
  await Entry.deleteMany(); //Tener cuidado con esto, borra toda la base de datos
  await Entry.insertMany(seedData.entries);
  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
