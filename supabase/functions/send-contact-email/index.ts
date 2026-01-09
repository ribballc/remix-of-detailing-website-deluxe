import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  address: string;
  services: string[];
  addons: string[];
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, vehicleType, address, services, addons, message }: ContactEmailRequest = await req.json();

    const servicesText = services.length > 0 ? services.join(", ") : "None selected";
    const addonsText = addons.length > 0 ? addons.join(", ") : "None selected";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Deluxe Detailing <onboarding@resend.dev>",
        to: ["jake@darkerdigital.com"],
        subject: "Website Form Submission",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <br/>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p><strong>Phone:</strong> ${phone}</p>
          <br/>
          <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
          <br/>
          <p><strong>Address:</strong> ${address || "Not provided"}</p>
          <br/>
          <p><strong>Services:</strong> ${servicesText}</p>
          <br/>
          <p><strong>Add-ons:</strong> ${addonsText}</p>
          <br/>
          <p><strong>Message:</strong> ${message || "No message"}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(error);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
