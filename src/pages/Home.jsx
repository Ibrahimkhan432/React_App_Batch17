import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Ibrahim khan</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Software engineer Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus repellat tempora voluptates voluptatum iure illo a recusandae, ex veritatis!</p>
           <div className='w-[150px] cursor-pointer'>
          <Button 
          color='white'
          title={"see my Projects"}
          onclick={() => navigate("/project")}
          />
           </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQG6zk-914vnlA/profile-displayphoto-scale_200_200/B4EZo0x8bZKMAY-/0/1761822102703?e=2147483647&v=beta&t=5_fXygb9EuCTNaqsMJaCLCuHAaXRZ-4ejG304qyqaA8" alt="mockup"/>
        </div>                
    </div>
</section>
    </div>
  )
}

export default Home
