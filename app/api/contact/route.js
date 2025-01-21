// app/api/contact/route.js
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { fullName, email, subject, phone, message } = await req.json(); // Cambié req.body por req.json()

  try {
    const emailData = await resend.emails.send({
      from: "Contacto Sitio Web <contacto@verticalspa.cl>",
      to: [email],
      subject: subject || "New Contact Form Submission",
      react: (
        <EmailTemplate
          fullName={fullName}
          email={email}
          subject={subject}
          phone={phone}
          message={message}
        />
      ),
    });

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: "GET method is not supported" }),
    { status: 405 }
  );
}
