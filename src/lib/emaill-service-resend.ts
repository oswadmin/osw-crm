// import { Resend } from 'resend';
// import EstimateRequestEmail from '@/email/EstimateRequstEmail';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendEmail-resened(formData: FormData) {
//   'use server';
  
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const message = formData.get('message') as string;

//   const data = await resend.emails.send({
//       from: process.env.EMAIL_FROM!,
//       to: process.env.EMAIL_TO!,
//       subject: 'New Contact Form Submission',
//       react: EstimateRequestEmail({ 
//         name, 
//         email, 
//         message 
//     }),
//   });

//   if (data.error) {
//     success: false, 
//     error: data.error instanceof Error ? data.error.message : 'Unknown error' 
//     return { success: false, error: data.error.message };
//   }

  
//   return { success: true, data };
  
//   } catch (error) {
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Unknown error' 
//     };
//   }
// }