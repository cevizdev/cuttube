import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await fetch("https://picsum.photos/640/360", {
    redirect: "follow",
  }).then((r) => r.blob());

  res.setHeader("content-type", result.type);
  res.setHeader("content-length", result.size);

  res.send(result.stream());
};
