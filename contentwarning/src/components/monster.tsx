"use client"
import React from 'react';
import { useState } from 'react';
import MonsterModal from './monstermodal';
interface MonsterProps{
  icon?: string,
  monsterName?: string,
  define: string
}

const Monster =({ icon , monsterName , define}: MonsterProps) => {
const [showModal, setShowModal] = useState(false);
  return (
  <section> 
  <div>
    <div className='flex flex-col justify-center  w-[350px] h-[420px] md:w-[450px] md:h-[520px] bg-minty'>
      <div className={` w-[320px] h-[320px] md:w-[420px] md:h-[420px] mt-5  mx-auto ${icon} relative overflow-hidden group`}>
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
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
           akjsdhkjhashkdjhaskjhd
         
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