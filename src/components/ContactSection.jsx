import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description:
          "There was an error sending your message. Please try again later.",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-6 w-full max-w-xs flex flex-col items-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-center">Email</h4>
                <a
                  href="mailto:swapnilakshirsagar@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-center"
                >
                  swapnilakshirsagar@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-center">Phone</h4>
                <a
                  href="tel:+91-8793020338"
                  className="text-muted-foreground hover:text-primary transition-colors text-center"
                >
                  +91 - 8793020338
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-center">Location</h4>
                <span className="text-muted-foreground hover:text-primary transition-colors text-center">
                  Nagpur, Maharashtra, India
                </span>
              </div>
            </div>
 
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/swapnil-kshirsagar-423748273/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a href="https://github.com/2003swapnil" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Swapnil Kshirsagar..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="swapnil@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full mx-auto flex items-center justify-center gap-2 py-1.5 text-sm"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
