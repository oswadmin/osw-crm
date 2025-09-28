

// import nodemailer from 'nodemailer';


// interface TransportOptions {
//     host: string;
//     port: number;
//     secure: boolean;
//     auth: {
//         user: string;
//         pass: string;
//     };
// }

// const transporter = nodemailer.createTransport({
//     host: process.env.mail_host,
//     port: process.env.mail_host_port,
//     secure: true,
//     auth: {
//         user: process.env.mail_uid,
//         pass: process.env.mail_pwd,
//     },
// })

// interface semdMailProps {
//     reciepent: string;
//     sender: string;
//     emailSubject: string;
//     emailBody: string;
// }



// export async function sendMail({
//     reciepent,
//     sender,
//     emailSubject,
//     emailBody,
// }: semdMailProps) {

//     const { mail_uid, mail_pwd } = process.env


//     transporter.sendMail(mailOptions, (error, info) => {
//         if(error){
//             console.log('Error sending email:', error);
//         } else {
//             console.log('Email sent', info.messageId);
//         }

//     })
    

// }