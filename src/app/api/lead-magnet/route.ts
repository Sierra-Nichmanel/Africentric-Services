import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

    // Log the lead
    console.log("New Lead Magnet Capture:", { name, email });

    // Store in a local JSON for lead tracking (simple implementation)
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
    return NextResponse.json({ 
      success: false, 
      message: "Error capturing lead." 
    }, { status: 500 });
  }
}
