import React from "react";
import ReactPlayer from "react-player";
import useIsMobile from "../../hooks/useIsMobile";

type PlayerProps = {
  url: string;
};

const Player: React.FC<PlayerProps> = ({ url }) => {
  const isMobile = useIsMobile();

  return (
    <ReactPlayer
      url={url}
      controls
      width={isMobile ? "360" : "1000"}
      height={isMobile ? "200" : "560"}
      className="w-full mt-10"
    />
  );
};

export default Player;
