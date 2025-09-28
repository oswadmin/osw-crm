'use client'

import React from 'react';
import Image from "next/image"
import { reverse } from 'dns';
import { PortableText, PortableTextBlock, toPlainText } from '@portabletext/react';
import { toHTML } from '@portabletext/to-html';
import JsxParser from 'react-jsx-parser';
import { urlFor } from '@/lib/sanityData';

export interface ImageTextContent {
    title?: string;
    body?: PortableTextBlock | string;
    box?: boolean;
    backgroundImage?: string;
    parallax?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    imagePosition?: string; // Controls desktop layout
    imageSize?: 'small' | 'medium' | 'large'; // Optional size control
    className?: string; // For additional styling on the container
}

interface ImageTextLayoutProps {
    content: ImageTextContent;
    imageUrl?: string;
}

export function ImageTextLayout({content = {}, imageUrl = ""}: ImageTextLayoutProps) {
    // Destructure with a default value for `imageSize`
    const { 
        title = "", 
        body = "", 
        box = false, 
        backgroundImage,
        parallax,
        imageSrc = "",
        imageAlt = "",
        imagePosition = 'left', 
        imageSize = 'medium',     
        className = "", 
    } = content;
    


    const imageWidthClasses = {
        small: 'w-full desktop:w-1/4',
        medium: 'w-full desktop:w-1/3',
        large: 'w-full desktop:w-1/2',
    };

    const textWidthClasses = {
        small: 'w-full desktop:w-3/4',
        medium: 'w-full desktop:w-2/3',
        large: 'w-full desktop:w-1/2',
    };



    const flexDirection =
        imagePosition === 'left'
            ? 'flex-col desktop:flex-row'
            : 'flex-col desktop:flex-row-reverse';

    const drawBox =
        box === true
            ? 'bg-white border border-orange rounded-3xl shadow-2xl flex flex-col'
            : '';

    const bodyText = typeof body === 'string' ? body : toHTML(body)

    //console.log("imageSrc:", imageSrc);

    return (<>
        <div className={`flex ${flexDirection} items-center gap-6 mb-12 ${className}`}>
            {/* Image Container */}
           
                <div className={`relative   rounded-xl justify-between ${imageWidthClasses[imageSize]}`}>
                     {imageSrc !== "" && (
                        <Image 
                            src={imageUrl}
                            alt={imageAlt} 
                            width={450} 
                            height={450} 
                            className="w-full h-auto border border-orange rounded-xl shadow-2xl " />
                    )}
                </div>
            

            <div className={`${textWidthClasses[imageSize]} ${drawBox} p-2 desktop:p-6 justify-center`}>
                <h3 className="text-3xl font-semibold text-blue mb-4">{title}</h3>
                <div className="text-gray-700 leading-relaxed">
                    {/* {bodyText} */}
                    <JsxParser
                        jsx={bodyText}
                        components={{
                            // Add any custom components you want to allow
                            // Example: MyButton: ({ children, ...props }) => <button {...props}>{children}</button>
                        }}
                        // Security settings
                        allowUnknownElements={true}
                        disableKeyGeneration={false}
                        // Allow standard HTML elements
                        componentsOnly={false}
                    />
                </div>
            </div>
        </div>
    </>
    );
}