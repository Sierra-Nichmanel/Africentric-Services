import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Here you would typically integrate with Resend or Nodemailer
    console.log("Contact Form Submission:", { name, email, phone, service, message });

    // For now, we simulate success
    return NextResponse.json({ 
      success: true, 
      message: "Submission received. Our team will contact you shortly." 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "There was an error processing your request." 
    }, { status: 500 });
  }
}
