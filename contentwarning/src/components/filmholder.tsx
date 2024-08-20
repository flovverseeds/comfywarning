interface FilmHolderProps {
    videoLink : string;
}

const FilmHolder = ({ videoLink }: FilmHolderProps) => {   
    return (
       <div className="bg-noir w-[380px] h-[380px] md:w-[460px] md:h-[460px] m-auto flex items-center justify-center bg-opacity-50 rounded-md shadow-minty">   
        <div className=" w-[340px] h-[340px] md:w-[420px] md:h-[420px] mx-auto">

        <video className="object-cover rounded-md" loop autoPlay  muted controls>
        <source src={videoLink}/>
        <source src="https://va.media.tumblr.com/tumblr_sihoo3nsxu1aywsje_720.mp4"/>
      </video>
      </div>
      </div>
    );
};
export default FilmHolder;

/*
  sm
  340 x 340 
   holder will be 400
  phone size will be 
  md
  420 x 420 < max
  holder 450
*/



// for not Found
//https://va.media.tumblr.com/tumblr_sihoo3nsxu1aywsje_720.mp4