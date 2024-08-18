import { getDictionary } from "p/get-dictionary";
import { Locale } from "p/i18-config";
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
})
{
  const dictionary = await getDictionary(lang);
  return (
    <>    
    <main className="h-screen">
    <section className="w-full">
      <div className="sm:h-[50px] md:h-[100px] bg-red-400 nostalgic-text">  
      <p className="h-auto w-auto  text-noir  cursor-pointer text-center font-extrabold text-[30px] md:text-[50px] lg:text-[70px] ">
      {dictionary["header"].navi[1]}
      </p>
      </div>
     </section>
   
   </main>
    </>
  );
}
