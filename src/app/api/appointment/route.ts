import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1, "Service selection is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time slot is required"),
  message: z.string().min(5, "Condition description is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = appointmentSchema.parse(body);

    const appointmentId = `PGX-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const formattedWhatsAppMessage =
      `*New Clinical Consultation Request - Physiogenix*\n` +
      `*ID:* ${appointmentId}\n` +
      `*Patient:* ${validated.fullName}\n` +
      `*Phone:* ${validated.phone}\n` +
      (validated.email ? `*Email:* ${validated.email}\n` : "") +
      `*Requested Service:* ${validated.service}\n` +
      `*Target Date:* ${validated.preferredDate} (${validated.preferredTime})\n` +
      `*Reported Symptoms:* ${validated.message}\n\n` +
      `_Location: 2nd Floor, Chaudhary Plaza, Sector F-7 Markaz, Islamabad_`;

    return NextResponse.json({
      success: true,
      appointmentId,
      receivedAt: new Date().toISOString(),
      patientName: validated.fullName,
      service: validated.service,
      whatsAppUrl: `https://wa.me/923305122052?text=${encodeURIComponent(formattedWhatsAppMessage)}`,
      clinicNote: "Request logged. Dr. Faiza's coordinator will review the patient schedule for Sector F-7 Markaz Islamabad.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error during appointment intake." },
      { status: 500 }
    );
  }
}
