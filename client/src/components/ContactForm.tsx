import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Rental Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      
      // Open email client
      window.location.href = `mailto:privatekeysllc@gmail.com?subject=${subject}&body=${body}`;

      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      alert("Something went wrong. Please call us at (929) 264-9184 instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      {showSuccess && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
          ✓ Your email client should open shortly. Please send the email to complete your inquiry.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name *</label>
        <input 
          id="name"
          name="name"
          type="text" 
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email *</label>
        <input 
          id="email"
          name="email"
          type="email" 
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium">Phone *</label>
        <input 
          id="phone"
          name="phone"
          type="tel" 
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message *</label>
        <textarea 
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your rental needs..."
        ></textarea>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Preparing..." : "Send Message"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Or call us directly at <a href="tel:9292649184" className="text-primary hover:underline">(929) 264-9184</a>
      </p>
      </form>
    </div>
  );
}

