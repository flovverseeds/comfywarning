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
      icon="bg-monster02Icon" 
      monsterName={dictionary["monster"].monster02.name}
      define={dictionary["monster"].monster02.define}
      dangerLevel={dictionary["dangerlever"].two}
      video01="https://va.media.tumblr.com/tumblr_skpu7kxWHX1aywsje_720.mp4"
      /> 

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster03Icon" 
      monsterName={dictionary["monster"].monster03.name}
      define={dictionary["monster"].monster03.define}
      dangerLevel={dictionary["dangerlever"].zero}
      video01="https://va.media.tumblr.com/tumblr_skpvgzCQGU1aywsje_720.mp4"
      /> 

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster04Icon" 
      monsterName={dictionary["monster"].monster04.name}
      define={dictionary["monster"].monster04.define}
      dangerLevel={dictionary["dangerlever"].three}
      video01="https://va.media.tumblr.com/tumblr_skpx86ytY21aywsje_r1_720.mp4"
      /> 

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster05Icon" 
      monsterName={dictionary["monster"].monster05.name}
      define={dictionary["monster"].monster05.define}
      dangerLevel={dictionary["dangerlever"].three}
      video01="https://va.media.tumblr.com/tumblr_skpzsdcFRq1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster06Icon" 
      monsterName={dictionary["monster"].monster06.name}
      define={dictionary["monster"].monster06.define}
      dangerLevel={dictionary["dangerlever"].four}
      video01="https://va.media.tumblr.com/tumblr_skq0srtVVM1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster07Icon" 
      monsterName={dictionary["monster"].monster07.name}
      define={dictionary["monster"].monster07.define}
      dangerLevel={dictionary["dangerlever"].zero}
      video01="https://va.media.tumblr.com/tumblr_skq2xrpves1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster08Icon" 
      monsterName={dictionary["monster"].monster08.name}
      define={dictionary["monster"].monster08.define}
      dangerLevel={dictionary["dangerlever"].one}
      video01="https://va.media.tumblr.com/tumblr_skq4imzsqw1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster09Icon" 
      monsterName={dictionary["monster"].monster09.name}
      define={dictionary["monster"].monster09.define}
      dangerLevel={dictionary["dangerlever"].one}
      video01="https://va.media.tumblr.com/tumblr_skq5wcpLV41aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster10Icon" 
      monsterName={dictionary["monster"].monster10.name}
      define={dictionary["monster"].monster10.define}
      dangerLevel={dictionary["dangerlever"].two}
      video01="https://va.media.tumblr.com/tumblr_skq7jlGmxn1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster11Icon" 
      monsterName={dictionary["monster"].monster11.name}
      define={dictionary["monster"].monster11.define}
      dangerLevel={dictionary["dangerlever"].one}
      video01="https://va.media.tumblr.com/tumblr_skq9fqQGoc1aywsje_r1_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster12Icon" 
      monsterName={dictionary["monster"].monster12.name}
      define={dictionary["monster"].monster12.define}
      dangerLevel={dictionary["dangerlever"].two}
      video01="https://va.media.tumblr.com/tumblr_skqauxIhG21aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster13Icon" 
      monsterName={dictionary["monster"].monster13.name}
      define={dictionary["monster"].monster13.define}
      dangerLevel={dictionary["dangerlever"].three}
      video01="https://va.media.tumblr.com/tumblr_skqcqk9Bqx1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster14Icon" 
      monsterName={dictionary["monster"].monster14.name}
      define={dictionary["monster"].monster14.define}
      dangerLevel={dictionary["dangerlever"].four}
      video01="https://va.media.tumblr.com/tumblr_skqe133rxp1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster15Icon" 
      monsterName={dictionary["monster"].monster15.name}
      define={dictionary["monster"].monster15.define}
      dangerLevel={dictionary["dangerlever"].four}
      video01="https://va.media.tumblr.com/tumblr_skqf89SG2X1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster16Icon" 
      monsterName={dictionary["monster"].monster16.name}
      define={dictionary["monster"].monster16.define}
      dangerLevel={dictionary["dangerlever"].zero}
      video01="https://va.media.tumblr.com/tumblr_skqgo3mLGk1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster17Icon" 
      monsterName={dictionary["monster"].monster17.name}
      define={dictionary["monster"].monster17.define}
      dangerLevel={dictionary["dangerlever"].one}
      video01="https://va.media.tumblr.com/tumblr_skqhjvM8MB1aywsje_720.mp4"
      />

      <Monster staticName={dictionary["monsterTags"].name}
      staticTraits={dictionary["monsterTags"].define} 
      staticDangerLevel={dictionary["monsterTags"].dangerlever} 
      icon="bg-monster18Icon" 
      monsterName={dictionary["monster"].monster18.name}
      define={dictionary["monster"].monster18.define}
      dangerLevel={dictionary["dangerlever"].three}
      video01="https://va.media.tumblr.com/tumblr_skqinmR1e81aywsje_720.mp4"
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