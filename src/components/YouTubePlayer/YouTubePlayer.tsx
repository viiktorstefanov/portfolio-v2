import React from 'react';
import YouTube, { YouTubeEvent } from 'react-youtube';
import useIsMobile from '../../hooks/useIsMobile';

type YouTubePlayerProps = {
  videoId: string;
};

const onPlayerReady = (event: YouTubeEvent) => {
  event.target.setPlaybackQuality('hd1080');
};

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const isMobile = useIsMobile();

  
  const opts = {
    height: isMobile ? '200' : '560',
    width: isMobile ? '360' : '1000',
    playerVars: {
      autoplay: 0,
      mute: 1,
    },
  };

  return <YouTube videoId={videoId} loading='lazy' className='w-full mt-10' iframeClassName='w-full rounded-2xl' title='YouTube video player' opts={opts} onReady={onPlayerReady}/>;

};

export default YouTubePlayer;