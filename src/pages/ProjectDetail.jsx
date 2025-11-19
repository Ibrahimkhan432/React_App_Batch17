import React from 'react'
import { useParams } from 'react-router-dom'
import projectdata from '../constant/data';

const ProjectDetail = () => {

  const {title} = useParams();
  console.log("title=>",title)

const {
  title:projectTitle,
  description,
  image,
  link
} = projectdata.find((data)=>data.title===title)

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
      {projectTitle}
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
       {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
       See Detail 
      </a>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img
        src={image}
        alt="mockup"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default ProjectDetail
