/**
 * Contact Service
 * API-ready service for processing contact inquiries.
 * Easily connects to backend endpoints (Laravel, Express, Supabase, EmailJS, etc.)
 */

export const submitContactInquiry = async (formData) => {
  // If an API endpoint is configured via environment variables, use it:
  const API_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL;

  if (API_ENDPOINT) {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to submit inquiry. Please try again.");
    }

    return await response.json();
  }

  // Production-grade simulated network delay and validation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Basic sanity check
      if (!formData.name || !formData.email || !formData.message) {
        reject(new Error("Please fill in all required fields."));
        return;
      }

      console.log("📨 [Contact Inquiry Received]:", formData);

      // Store in localStorage so user can verify submission persisted
      try {
        const existing = JSON.parse(localStorage.getItem("portfolio_inquiries") || "[]");
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem("portfolio_inquiries", JSON.stringify(existing));
      } catch (e) {
        console.warn("Could not save to localStorage", e);
      }

      resolve({
        success: true,
        message: "Thank you for reaching out! Your message has been received. I will reply within 24 hours.",
        timestamp: new Date().toISOString()
      });
    }, 1200);
  });
};
