import { getDictionary } from "p/get-dictionary";
import { Locale } from "p/i18-config";
import Monster from "p/components/monster";
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
})
{
  const dictionary = await getDictionary(lang);
  return (
    <>    
    <main className="h-auto my-20">
    <section className="w-full">
      <div className="sm:h-[50px] md:h-[100px] bg-minty nostalgic-text">  
      <p className="h-auto w-auto  text-noir  cursor-pointer text-center font-extrabold text-[30px] md:text-[50px] lg:text-[70px] ">
      {dictionary["header"].navi[1]}
      </p>
      </div>
     </section>
     <section className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-10 mt-10">
    <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster01Icon" 
      monsterName={dictionary["monster"].monster01.name}
      define={dictionary["monster"].monster01.define}
      dangerLevel={dictionary["dangerlever"].zero}
      video01="https://va.media.tumblr.com/tumblr_sihkvmeAbA1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster00Icon" 
      monsterName="xxxx"
      define="xxx"
      dangerLevel={dictionary["dangerlever"].five}
      video01=""
      /> 

    <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster00Icon" 
      monsterName="xxxx"
      define="xxx"
      dangerLevel={dictionary["dangerlever"].five}
      video01=""
      /> 

    <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster00Icon" 
      monsterName="xxxx"
      define="xxx"
      dangerLevel={dictionary["dangerlever"].five}
      video01=""
      /> 

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster00Icon" 
      monsterName="xxxx"
      define="xxx"
      dangerLevel={dictionary["dangerlever"].five}
      video01=""
      /> 


  </section>
  </main>
    </>
  );
}

//テンプレ
/*
   <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster01Icon" 
      monsterName={dictionary["monster"].monster01.name}
      define={dictionary["monster"].monster01.define}
      dangerLevel={dictionary["dangerlever"].zero}
      />
*/