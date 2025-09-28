// async function getInstagramEmbed(url: string) {
//     const oEmbedUrl = `https://graph.facebook.com/v13.0/instagram_oembed?url=${encodeURIComponent(
//         url
//     )}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`; // You will need an access token.
//     try {
//         const response = await fetch(oEmbedUrl);
//         const data = await response.json();
//         return data.html; // The html property contains the embed code.
//     } catch (error) {
//         console.error('Error fetching Instagram oEmbed:', error);
//         return null;
//     }
// }

// // Example Usage within a Next.js component:

// interface InstagramEmbedProps {
//   instagramUrl: string;
// }

// async function InstagramEmbed({ instagramUrl: string }: InstagramEmbedProps) {
    
//     const embedHtml = await getInstagramEmbed(instagramUrl);

//     return (
//         <div>
//             {embedHtml ? (
//                 <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
//             ) : (
//                 <p>Could not load Instagram embed.</p>
//             )}
//         </div>
//     );
// }