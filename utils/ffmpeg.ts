import { createFFmpeg } from "@ffmpeg/ffmpeg";
import { isProduction } from "../env";

export { fetchFile } from "@ffmpeg/ffmpeg";

export interface FFMpegConfig {
  log: boolean;
  corePath?: string;
}

export const getFfmpeg = () => {
  const config: FFMpegConfig = {
    log: !isProduction,
  };

  if (!isProduction) {
    config.corePath = "/libs/ffmpeg/ffmpeg-core.js";
  }

  return createFFmpeg(config);
};
