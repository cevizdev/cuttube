import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Layout from '../components/app/layout';
import { convertToHms, convertToSeconds } from '../utils/date';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
const ffmpeg = createFFmpeg({ log: true, corePath: '/libs/ffmpeg/ffmpeg-core.js' });

export default function Home() {
  const [videoUrl, setVideoUrl] = useState();
  const [convertedUrl, setConvertedUrl] = useState();
  const [metadata, setMetadata] = useState();
  const [cutVideoUrl, setCutVideoUrl] = useState();

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [preview, setPreview] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const videoControl = useRef(null);

  const renderVideo = () => {
    if (!convertedUrl) {
      return (<Image width="640" height="360" src="/images/welcome.png" className="rounded-lg shadow-2xl" alt="CutTube - Youtube Video Cutter and Downloader" />);
    }

    console.log('convertedUrl', convertedUrl)

    const onTimeUpdate = (e) => {
      /*if (preview && videoControl.current.currentTime > convertToSeconds(endTime)) {
          videoControl.current.pause();
          setPreview(false);
      }*/
    }

    const onVideoLoad = (e) => {
      setMetadata({
        videoHeight: e.target.videoHeight,
        videoWidth: e.target.videoWidth,
        duration: e.target.duration
      });
      setStartTime(convertToHms(0));
      setEndTime(convertToHms(e.target.duration))
    }

    return (
      <video ref={videoControl} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onVideoLoad} className="rounded-lg shadow-2xl" autoPlay controls src={convertedUrl}></video>
    )
  }

  const handleLink = (e) => {
    setConvertedUrl(null);
    if (e.target.value.indexOf('youtu') > -1) {
      const url = new URL(e.target.value);

      setConvertedUrl(`${window.location.origin}/api/preview?videoUrl=${url}`);
    }

    setVideoUrl(e.target.value)
  }

  const setCurrentDuration = (setFunction) => {
    const time = convertToHms(videoControl.current.currentTime);

    setFunction(time);
  }

  const onPreview = async () => {
    if (startTime && endTime) {
      videoControl.current.pause();
      //setPreview(true);
      const url = await convert();
      setCutVideoUrl(url);
      setConvertedUrl(url);
    }
  }

  const onReset = () => {
    setConvertedUrl(`${window.location.origin}/api/preview?videoUrl=${videoUrl}`);
  }

  const renderCutControl = () => {
    if (!convertedUrl) {
      return null;
    }

    return (
      <div className="flex justify-between mb-6 space-x-4 mt-10">
        <div className="flex space-x-4">
          <input value={startTime} onChange={(e) => setStartTime(e.target.value)} type="time" step="1" placeholder="00:00:00" className="flex-1 px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none" />
          <button onClick={() => setCurrentDuration(setStartTime)} className="inline-block px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">Get From Video</button>
        </div>
        <div className="flex space-x-4">
          <input value={endTime} onChange={(e) => setEndTime(e.target.value)} type="time" step="1" placeholder="00:00:00" className="flex-1 px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none" />
          <button onClick={() => setCurrentDuration(setEndTime)} className="inline-block px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">Get From Video</button>
        </div>
      </div>
    )
  }

  const convert = async () => {
    const length = convertToSeconds(endTime) - convertToSeconds(startTime);
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(convertedUrl));
    await ffmpeg.run(
      '-i',
      'input.mp4',
      '-ss',
      startTime,
      '-t',
      length.toString(),
      'converted.mp4',
    );

    // Read the result
    const data = ffmpeg.FS('readFile', 'converted.mp4');

    // Create a URL
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'video/mp4' }),
    );

    return url.toString();
  }

  const load = async () => {
    await ffmpeg.load();
    setLoaded(true);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Layout>

      <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
        <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
          <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">The best way to cut Youtube video</h1>
          <p className="mb-6 text-lg text-gray-600 xl:text-xl lg:mb-8 xl:mb-10">Easy, safe and no paid required Youtube video CUT AND Download application</p>
          <div className="flex mb-6 space-x-4">
            <input disabled={!loaded} value={videoUrl} onChange={handleLink} type="text" placeholder="https://youtube.com/watch?v=..." className="flex-1 px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none" />
            <button disabled={!loaded} className="inline-block px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">Start to Cut</button>
          </div>
          <p className="text-sm text-gray-500">No paid required but Follow me on Github and Twitter</p>
        </div>
        <div className="order-1 col-span-2 md:order-2 xl:col-span-3">
          {renderVideo()}
          {renderCutControl()}
          <div className="flex justify-between mb-6 space-x-4 mt-10">
            <div className="flex space-x-4">
              <button onClick={onPreview} className="inline-block px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">Preview</button>
              <button onClick={onReset} className="inline-block px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">Reset</button>
              <a download href={cutVideoUrl} className="inline-block px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">Download</a>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}