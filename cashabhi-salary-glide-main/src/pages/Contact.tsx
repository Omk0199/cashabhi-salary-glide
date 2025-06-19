
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4">
        <section className="container-custom py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-6 text-gray-600">
                Have questions about Cashabhi's services? Want to learn more about partnering with us? 
                Our team is here to help you navigate your financial journey.
              </p>
              
              <div className="space-y-4 mt-8">
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-600">support@cashabhi.com</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Office</h3>
                  <p className="text-gray-600">101 Financial District, Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} required />
                </div>
                
                <Button type="submit" className="bg-cashabhi-blue hover:bg-cashabhi-blue-dark">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
