import { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { videoUrl } = req.query;

  res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
  res.setHeader("Accept-Ranges", "none");

  ytdl(videoUrl.toString(), {
    quality: "highest",
  }).pipe(res);
};
