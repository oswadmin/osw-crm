// components/Accordion.tsx
'use client'; // This is a client component

import { useState, ReactNode } from 'react';

interface AccordionProps {
    title: string;
    body: string;
}

const Accordion = ({ title, body }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col desktop:flex-row justify-center items-center ">
            <div className="flex flex-col text-lg px-6 desktop:w-2/3 w-full">
          

                <div className="border border-orange bg-orange rounded-2xl mb-2 shadow-2xl">
                    <button
                        className="flex justify-between items-center w-full p-4 text-xl font-bold text-left text-blue_dark bg-gray-300 rounded-2xl hover:bg-gray-200 focus:outline-hidden "
                        onClick={toggleAccordion}
                    >
                        <span className="w-5/6">{title}</span>
                        <svg
                            className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        className={`overflow-hidden rounded-bl-2xl rounded-br-2xl transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                    >
                        <div className="p-4 bg-white text-blue">
                            {body}
                        </div>
                    </div>
                </div>

                
                

            </div>
        </div>
    );
};

export default Accordion;