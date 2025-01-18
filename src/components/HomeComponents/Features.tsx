import React from 'react';
import FeatureCard from './FeatureCard';

const services = [
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
    {
        title: 'Admission',
        description: 'The student admission system involves adding unlimited student information in the fastest way through a bulk data entry system and excel sheet upload systems.',
        img: 'https://i.ibb.co/zmYgbkr/data1.png'
    },
]

const Features = () => {
    return (
        <div >
            <div className='text-center w-3/4 mx-auto mt-5 md:mt-10 space-y-5 mb-5 md:mb-10'>
                <h1 className='text-lg md:text-3xl lg:text-5xl font-semibold text-[#F77E23]'>Our Features</h1>
                <p>E-School Management Software offers a comprehensive and user-friendly solution designed to streamline school operations and improve the overall educational experience in Bangladesh. Our all-in-one platform simplifies complex processes and fosters effective communication between students, parents, teachers, and administrators. Heres an in-depth look at the key features that make ESchool the perfect choice for your institution:</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-3/4 mx-auto'>

                {
                    services.map((service, idx) =>
                        <FeatureCard
                            key={idx}
                            title={service.title}
                            description={service.description}
                            img={service.img}
                        />)
                }
            </div>
        </div>
    );
};

export default Features;