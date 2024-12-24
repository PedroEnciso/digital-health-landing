"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PillLabel from "@/components/ui/pill-label";

const services = [
  {
    title: "Compliance Testing",
    description: "Test and improve accessibility and FDA compliance",
    icon: ClipboardCheck,
    features: ["Durable", "Versatile", "Energy-efficient"],
    image:
      "https://kzmlukdaifbgkxdx7fwk.lite.vusercontent.net/placeholder.svg?height=400&width=400",
  },
  {
    title: "Concept Validation",
    description: "Validate new products, services or features with real people",
    icon: Lightbulb,
    features: ["Durable", "Versatile", "Energy-efficient"],
    image:
      "https://kzmlukdaifbgkxdx7fwk.lite.vusercontent.net/placeholder.svg?height=400&width=400",
  },
  {
    title: "Rapid Prototyping",
    description: "Functional code to inform, test or bootstrap solutions",
    icon: Rocket,
    features: ["Durable", "Versatile", "Energy-efficient"],
    image:
      "https://kzmlukdaifbgkxdx7fwk.lite.vusercontent.net/placeholder.svg?height=400&width=400",
  },
];

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      aria-labelledby="services-heading"
      className="w-full text-gray-800 overflow-hidden"
    >
      <Card>
        <CardContent className="p-8 md:p-12 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white via-[#f7fcfb] to-[#f0fdfb] relative">
          <div className="absolute top-8 left-8">
            <PillLabel>Services</PillLabel>
          </div>
          <h2
            id="services-heading"
            className="text-3xl font-bold text-center mt-8 mb-12"
          >
            Helping You Help Others
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="text-center group cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg rounded-lg p-6"
                onClick={() => {
                  setCurrentService(index);
                  setIsOpen(true);
                }}
              >
                <div className="mb-6 flex justify-center">
                  <service.icon
                    className="h-12 w-12 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                <button
                  className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center group-hover:font-semibold"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more about {service.title}
                  <ArrowRight
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </button>
              </article>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full">
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              onClick={prevService}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              onClick={nextService}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div>
                <Image
                  src={services[currentService].image}
                  alt={services[currentService].title}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {services[currentService].title}
                </DialogTitle>
                <DialogDescription className="text-gray-600 mb-4">
                  {services[currentService].description}
                </DialogDescription>
                <h3 className="text-xl font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside mb-4">
                  {services[currentService].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button>Request Product</Button>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                    index === currentService ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentService(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
