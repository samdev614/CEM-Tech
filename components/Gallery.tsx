import React from "react";
import Image from 'next/image'
import { useState } from "react";

const cn=(...classes: string[])=>{
    return classes.filter(Boolean).join('');
}


const Gallery = () => {
  return (
    <div
      className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg: 
    max-w-7xl lg:px-8"
    >
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-colos-3 xl:grid-cols-4 xl:gap-x-8">
        <BlurImage />
      </div>
    </div>
  );
};

const BlurImage = () => {
    const [isLoading, setLoading] = useState(true);

  return (
    <a href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-h-1 xl:aspect-w-7 
      xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image 
        alt= ""
        src="https://bit.ly/placeholder-img" 
        layout= "fill"
        objectFit= "cover"
        className= {cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading ?
            'grayscale blur-2xl scale-100'
            : 'grayscale-0 blur-0 scale-100'
        )}
        onLoadingComplete={() =>setLoading(false)}
            
            
            />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Samuel Maina</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@SamuelM</p>
      
    </a>
  );
};

export default Gallery;