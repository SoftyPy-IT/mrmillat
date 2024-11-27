import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


const ImageModal = ({close}) => {
  const images = [
    {
      original: "/Images/mr-2.jpg",
      thumbnail: "/Images/mr-2.jpg",
    },
 
  
    {
      original: "/Images/mr-5.jpg",
      thumbnail: "/Images/mr-5.jpg",
    },
    {
      original: "/Images/mr-6.jpg",
      thumbnail: "/Images/mr-6.jpg",
    },
    {
      original: "/Images/mr-7.jpg",
      thumbnail: "/Images/mr-7.jpg",
    },
    {
      original: "/Images/mr-8.jpg",
      thumbnail: "/Images/mr-8.jpg",
    },
    {
      original: "/Images/mr-9.jpg",
      thumbnail: "/Images/mr-9.jpg",
    },
    {
      original: "/Images/mr-10.jpg",
      thumbnail: "/Images/mr-10.jpg",
    },
  
    {
      original: "/Images/mr-11.jpg",
      thumbnail: "/Images/mr-11.jpg",
    },
  ];

  const zoomImages = images.map((image) => ({
    ...image,
    renderItem: () => (
   
      <Zoom>
        <div  className="w-[100%] h-[250px] md:h-[400px] lg:h-[400px]">
          <Image
            src={image.original}
            alt="Zoomable"
            layout="responsive"
            width={800} 
            height={600} 
            objectFit="contain"
            priority
            
          />
        </div>
      </Zoom>
    ),
  }));
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-20"></div>

      {/* Modal */}
     
     
      <div className=" fixed shadow-2xl  z-20 h-[100px] w-[400px] md:w-[600px] md:h-[400px] lg:w-[800px] lg:h-[580px] mx-10 top-36 lg:top-20 ">
      <span className="text-4xl  text-white absolute z-30 right-3 top-4 hover:text-blue-600 hover:scale-90" onClick={()=>close(false)} > <RxCross2  /></span>
        <div className="w-full h-[200px] lg:h-[500px]">
          <ImageGallery
           showFullscreenButton={false}
            items={zoomImages}
            showPlayButton={false}
            showThumbnails={true}
           
          />
        </div>
     
      </div>
    </div>
  );
};

export default ImageModal;
