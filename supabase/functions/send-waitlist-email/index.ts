import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@3.5.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();
    
    console.log("Processing waitlist signup for:", email);

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send notification email to Paychipa team
    const teamEmailResponse = await resend.emails.send({
      from: "Paychipa Waitlist <onboarding@resend.dev>",
      to: ["paychipaengineers@gmail.com"],
      subject: "New Waitlist Signup",
      html: `
        <h1>New Waitlist Signup</h1>
        <p>Someone just joined the Paychipa waitlist!</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Team notification sent:", teamEmailResponse);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Paychipa <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Paychipa Waitlist!",
      html: `
        <h1>You're on the list!</h1>
        <p>Thank you for joining the Paychipa waitlist. We're excited to have you on board!</p>
        <p>We're working hard to bring you the best banking experience in Nigeria. You'll be among the first to know when we launch.</p>
        <p>In the meantime, follow us on social media @paychipa for updates and exclusive previews.</p>
        <p>Best regards,<br>The Paychipa Team</p>
      `,
    });

    console.log("User confirmation sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        teamEmail: teamEmailResponse,
        userEmail: userEmailResponse
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-waitlist-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
