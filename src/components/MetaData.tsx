import Head from 'next/head';
import React from 'react';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
}

export default function Meta({ title, description, image }: MetaProps): React.ReactElement<any> {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || '/default-og.webp'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || '/default-og.webp'} />
    </Head>
  );
}