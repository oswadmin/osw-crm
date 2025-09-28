import { PortableTextBlock } from '@portabletext/react';

export interface Service {
    name: string;
    slug: {
        current: string; // The URL-friendly identifier
    },
    activeService: boolean;
    metaTitle: string; // For the <title> tag
    metaDescription: string; // For the <meta name="description"> tag
    cardImage: MediaImage;
    className?: string;
    titleMsg: string;
    subTitleMsg: string;
    estimateMsg: string;
    details: readonly ServiceDetail[];
    sections?: readonly Section[];
}


export interface ServiceDetail {
    detailSummary: string;
    detailDescription: string;
    detailImageURL: MediaImage
    detailImageAlt: string;
    detailImageClass?: string;
}

export interface Section {
    title?: string;
    subTitle?: string;
    backgroundImage?: MediaImage;
    parallax?: boolean;
    className?: string;
    contents?: readonly SectionContent[];
}

export type SectionContent = ImageText | Accordian | Estimate;

export interface ImageText {
    title: string;
    body: PortableTextBlock;
    box?: boolean;
    imageSrc?: MediaImage
    imageAlt?: string;
    imagePosition?: "left" | "right";
    imageSize?: "small" | "medium" | "large";
    imageClassName?: string;
}


export interface Accordian {
    title: string;
    body: string;
}

export interface Estimate {
    estimateMsg: string;
}

export interface MediaImage {
    url: string;
}


