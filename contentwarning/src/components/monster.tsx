"use client"
import React from 'react';
import { useState } from 'react';
import MonsterModal from './monstermodal';
import FilmHolder from './filmholder';
interface MonsterProps{
  staticName? : string;
  staticDangerLevel? : string;  
  staticTraits? : string;

  icon?: string,
  monsterName?: string,
  dangerLevel: string,
  define: string;

  video01: string;
}

const Monster =({ staticName, staticDangerLevel , staticTraits , icon , monsterName , dangerLevel, define ,video01}: MonsterProps) => {
const [showModal, setShowModal] = useState(false);
  return (
  <section> 
  <div>
    <div className='flex flex-col justify-center  w-[350px] h-[420px] md:w-[450px] md:h-[520px] bg-minty '>
      <div className={`w-[320px] h-[320px] md:w-[420px] md:h-[420px] mt-5  mx-auto ${icon} bg-cover relative overflow-hidden group`}>
        <button onClick={() => setShowModal(true)}>
        <div className="text-balance text-center absolute bottom-0 w-full h-full text-[20px] md:text-[35px] bg-noir opacity-90 text-minty flex items-center justify-center transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
          {define}
        </div>
        </button>
    </div>
<p className="flex justify-center h-auto my-auto text-noir text-center cursor-pointer  font-extrabold  text-[35px] md:text-[40px] lg:text-[50px] ">
{monsterName}
</p>
</div>
    {showModal &&
        <MonsterModal  onClose={() => setShowModal(false)}>
        <div className='flex flex-col justify-center w-full'>
        
        {/* explanation */}  
        <div className="border-2 py-5 border-minty bg-lefu rounded-md shadow-minty ">
        <div className="flex grid-cols-2  justify-start">
        <div className={`w-[100px] h-[100px]  md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] border-2 m-2 border-minty bg-iconshiro bg-center ${icon} bg-cover flex-shrink-0"`}></div>
        <div className=" mx-2 border-2 border-minty bg-lefu max-w-fit my-2 ">
          <div className="text-shiro nostalgic-text text-lg md:text-4xl p-2 gap-5 flex">
            <p>{staticName}</p>
            <p>{monsterName}</p>
         </div>
        <div className="text-shiro nostalgic-text text-lg md:text-4xl p-2 gap-5 flex">
        <p>{staticDangerLevel}</p>
        <p>{dangerLevel}</p>
        </div>
        </div>
        </div>
        <div className='pl-5  gap-5 text-shiro nostalgic-text text-lg md:text-4xl'>
        <p>{staticTraits}</p>
        <p className='break-words'>{define}</p>
        </div>
      </div>


     {/* Video */} 
    <div className='my-10'>
      <FilmHolder videoLink={video01}></FilmHolder>
    </div>
    
    
    </div>
    </MonsterModal>
    }
</div>
</section>
);
}

/*
top
 w-[350px] h-[420px]
 w-[320px] h-[320px]
*/
/*
+2000 yen
*/

export default Monster;