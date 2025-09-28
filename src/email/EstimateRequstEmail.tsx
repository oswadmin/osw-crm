import { Body, Container, Head, Heading, Html, Preview, Tailwind } from "@react-email/components"

type EstimateRequestEmailProps = {
  custFirstName: string
  custLastName: string
  custEmail: string
  custPhone: string
  custAddress: string
  custServices: string[] | string;
  custDesc?: string
  custContactType: string,
  custReferral?: string
  custPromo?: string
}



EstimateRequestEmail.PreviewProps = {
  custFirstName: 'Scott',
  custLastName: 'Daly',
  custEmail: 'scott.daly1@gmail.com',
  custPhone: '614-805-1950',
  custAddress: '7064 Hilmmar',
  custServices: ['Surfaces', 'Decks'],
  custDesc: 'Clean Something',
  custContactType: "Residential",
  custReferral: 'Referral',
  custPromo: 'O123456',
} satisfies EstimateRequestEmailProps


export default function EstimateRequestEmail(data: EstimateRequestEmailProps) {

  return (
    <Html>
      <Preview>View Request</Preview>

      <Tailwind >
        <Head></Head>
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Customer Detials</Heading>
            <p>Name: {data.custFirstName} {data.custLastName}</p>
            <p>Email: {data.custEmail}</p>
            <p>Phone: {data.custPhone}</p>
            <p>Property Address: {data.custAddress}</p>
            <p>Services Requested: {Array.isArray(data.custServices) ? data.custServices.join(', ') : data.custServices}</p>
            <p>Description: {data.custDesc}</p>
            <p>Contact Type: {data.custContactType}</p>
            <p>How did they find us?: {data.custReferral}</p>
            <p>Promo Code: {data.custPromo}</p>
          </Container>

        </Body>

      </Tailwind>
    </Html>
  )
}


{/* 

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{subject}}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%">
    <tr>
      <td style="background-color: #f8f8f8; padding: 20px; text-align: center;">
        <h1 style="color: #444444;">Hello {{custFirstName}}!</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p>Welcome to our service. Here are some details:</p>
        <ul>
          <li>First Name: {{custFirstName}}]</li>
          <li>Last Name: {{custLastName}}</li>
          <li>Email: {{custEmail}}</li>
          <li>Phone: {{custPhone}}</li>
          <li>Address: {{custAddress}}   </li>
          <li>Services Requested: {{custServices}}</li>
          <li>Description: {{custDesc}}</li>
          <li>Referral Source: {{custReferral}}</li>
          <li>Promo Code: {{custPromo}}</li>
        </ul>
        <p style="margin-top: 20px;">
          Best regards,<br>
          Sales Team
          Orange Soft Washing
        </p>
      </td>
    </tr>
  </table>
</body> */}