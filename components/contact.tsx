"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        <div>
          <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-zinc-100 dark:bg-black rounded-full text-black dark:text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a
                  href="mailto:ombothre1024@gmail.com"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  ombothre1024@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-zinc-100 dark:bg-black rounded-full text-black dark:text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a
                  href="tel:+918291175243"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  +91 8291175243
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 p-2 bg-zinc-100 dark:bg-black rounded-full text-black dark:text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="bg-black hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors inline-flex items-center px-4 py-2 rounded-md"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="w-full min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
