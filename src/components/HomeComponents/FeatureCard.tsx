import { FeatureCardProps } from '@/Types';
import Image from 'next/image';
import React from 'react';


const FeatureCard: React.FC<FeatureCardProps> = ({title , description , img}) => {
    return (
        <div className='bg-slate-50 shadow-lg mb-5 mx-auto  rounded-lg max-w-72 p-4 text-center flex flex-col items-center '>
            <Image
            className='max-w-12 max-h-12 mb-4' 
            src={img} 
            width={50}
            height={50}
            alt={title}
            />
        
        <h2 className="font-bold text-sm uppercase  mb-2">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
    </div>
    );
};

export default FeatureCard;