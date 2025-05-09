import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BioType } from '../../types/constants';

type SocialIconsProps = {
    bio: BioType,
};

const SocialIcons: React.FC<SocialIconsProps> = ( { bio }) => {

  return (
    <div className="flex gap-2 justify-center items-center text-3xl">
    <Link to={`mailto:${bio.email}`} className="hover:opacity-50">
      <MdEmail className='text-4xl'/>
    </Link>
    <Link to={bio.linkedin} target="_blank" className="hover:opacity-50">
      <FaLinkedin />
    </Link>
    <Link to={bio.github} target="_blank" className="hover:opacity-50">
      <FaGithubSquare  />
    </Link>
  </div>
  );
};

export default SocialIcons;