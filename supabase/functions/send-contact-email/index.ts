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

    const servicesHtml = services.length > 0 
      ? `<li><strong>Services:</strong> ${services.join(", ")}</li>` 
      : "";
    
    const addonsHtml = addons.length > 0 
      ? `<li><strong>Add-ons:</strong> ${addons.join(", ")}</li>` 
      : "";
    
    const messageHtml = message 
      ? `<li><strong>Message:</strong> ${message}</li>` 
      : "";

    const addressHtml = address
      ? `<li><strong>Address:</strong> ${address}</li>`
      : "";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Deluxe Detailing <onboarding@resend.dev>",
        to: ["deluxedetailing012@gmail.com"],
        subject: `New Booking Request from ${name}`,
        html: `
          <h1>New Booking Request</h1>
          <p>You have received a new booking request from your website.</p>
          <h2>Customer Details:</h2>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Vehicle:</strong> ${vehicleType}</li>
            ${addressHtml}
            ${servicesHtml}
            ${addonsHtml}
            ${messageHtml}
          </ul>
          <p>Please follow up with this customer to confirm their appointment.</p>
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
