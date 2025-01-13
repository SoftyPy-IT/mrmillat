import useAxiosPublic from "@/hooks/useAxiosPublic";
import { TGallery } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


interface ImageModalProps {
  close: (value: boolean) => void;
  selectedIndex: number;
}

const ImageModal:React.FC<ImageModalProps> = ({ close, selectedIndex }) => {
const [images,setImages] = useState([]);
const axiosPublic = useAxiosPublic();

  useEffect(()=>{
          const getData =async()=>{
            try {
            const response = await axiosPublic.get(`gallery?sort=-date`);
            const {totalCount,data}= response?.data?.data
            console.log(totalCount,data);
            setImages(data);
            } catch (error) {
            console.log(error);  
            }
          
              }      
        getData();   
        },[axiosPublic])
  const galleryItems: ReactImageGalleryItem[] = images?.map((image:TGallery) => ({
    original: image.imageUrl,
    thumbnail: image.imageUrl,
    renderItem: () => (
      <Zoom>
        <div className="w-full h-[250px] md:h-[400px] lg:h-[400px]">
          <Image
            src={image.imageUrl}
            alt={image.title}
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
            items={galleryItems}
            startIndex={selectedIndex}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={true}
          />
        </div>
     
      </div>
    </div>
  );
};

export default ImageModal;
