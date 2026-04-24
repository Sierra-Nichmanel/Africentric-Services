import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    // 1. Log to server console
    console.log("New Lead Magnet Capture:", { name, email });

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
            type: "Tax Checklist Download",
            date: new Date().toLocaleString()
          }),
        });
      } catch (webhookError) {
        console.error("Google Sheets Webhook failed:", webhookError);
        // We continue anyway so the user doesn't see a failure if the sheet is down
      }
    }

    // 3. Store in a local JSON (as a backup)
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    
    const filePath = path.join(dataDir, "leads.json");
    let leads = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      leads = JSON.parse(fileData);
    }
    
    leads.push({ name, email, date: new Date().toISOString(), type: "Tax Checklist" });
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: "Checklist sent to your email!" 
    });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Error capturing lead." 
    }, { status: 500 });
  }
}
