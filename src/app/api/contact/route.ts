import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // 1. Log to server console
    console.log("New Contact Form Submission:", { name, email, service });

    // 2. Forward to Google Sheets if configured
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            name, 
            email, 
            phone,
            service,
            message,
            type: "Contact Form Submission",
            date: new Date().toLocaleString()
          }),
        });
      } catch (webhookError) {
        console.error("Google Sheets Webhook failed:", webhookError);
      }
    }

    // 3. Backup to local storage
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    
    const filePath = path.join(dataDir, "contacts.json");
    let contacts = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      contacts = JSON.parse(fileData);
    }
    
    contacts.push({ ...body, date: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: "Message received! We will contact you shortly." 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Error processing request." 
    }, { status: 500 });
  }
}
