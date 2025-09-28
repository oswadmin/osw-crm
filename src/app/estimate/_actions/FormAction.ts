"use server"

import { z } from "zod";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import EstimateRequestEmail from "@/email/EstimateRequstEmail"
import { request } from "http";

const resend = new Resend(process.env.RESEND_API_KEY)

const singleServiceSchema = z.enum(["Surfaces", "Siding", "Decks", "Fences", "Roofs", "Gutters", "Waste Bins", "Commercial"]);

const custServicesSchema = z
  .union([
    singleServiceSchema,
    z.array(singleServiceSchema).min(1, { message: "At least one service must be selected" }),
  ]);

// Zod schema for the form
const requestFormSchema = z.object({
  custFirstName: z.string().min(1, { message: "First Name is required" }),
  custLastName: z.string().min(1, { message: "Last Name is required" }),
  custEmail: z.string().email({ message: "Invalid email address" }),
  custPhone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number cannot exceed 15 digits" }),
  custAddress: z.string().min(1, { message: "Address is required" }),
  custServices: custServicesSchema, // Uses the union schema
  custDesc: z.string().optional(),
  custContactType: z.enum([
    "Residential",
    "Commercial",
  ]),
  custReferral: z.enum([
    "Angie",
    "Business Card",
    "Facebook",
    "Google",
    "Instagram",
    "Nextdoor",
    "Flyer",
    "Yard Sign",
    "Referral",
    "Truck",
    "Yard Sign"
  ]).optional(),
  custPromo: z.string().optional(),
});

export async function FormAction(formData: FormData) {

  //console.log("formData:")
  //console.log(formData)

  //Parse the formData into an object that zod can use.
  const fData = Array.from(formData.entries()).reduce<Record<string, string | string[]>>((acc, [key, value]) => {
    if (!acc[key]) {
      acc[key] = formData.getAll(key).length > 1
        ? formData.getAll(key) as string[]
        : value as string;
    }
    return acc;
  }, {});
  //console.log("fData:")
  //console.log(fData)

  //Zod data validation
  const result = requestFormSchema.safeParse(fData)
  //console.log("zod result:")


  if (result.success === false) {
    //console.log("result failed")
    //console.log(result.error.formErrors.fieldErrors)
    return { success: false, error: result.error.formErrors.fieldErrors }

  }

  //console.log ("result data")
  //console.log (result.data)

  //console.log(process.env.SEND_EMAIL)
  if (process.env.SEND_EMAIL === "true") {
    //Send Email Notification
    // console.log("send email")
    const data = await resend.emails.send({
      from: `OSW System <admin@orangesoftwash.com>`,
      to: `sales@orangesoftwash.com`,
      subject: `OSW: New Estimate Request`,
      react: EstimateRequestEmail(result.data)
    })

    //console.log(data)
    if (data.error) {
      return { success: false, error: "There was an error" }
    }
  }


  //redirect("/estimate/thankyou")
  return { success: true, message: "Form submitted successfully!" }
}