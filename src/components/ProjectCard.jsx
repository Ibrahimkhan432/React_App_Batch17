import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ projectImage, projectTitle, projectDescription, projectLink, }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
      <img className="w-full" src={projectImage} alt={projectTitle} />
      <div className="px-6 py-4">
        <h4 className="font-bold text-xl text-gray-800">{projectTitle}</h4>
        <p className="text-gray-700 text-base">{projectDescription}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <Link 
          to={`/project/${projectTitle}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
