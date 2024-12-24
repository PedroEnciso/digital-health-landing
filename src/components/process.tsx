"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  FileText,
  Smartphone,
  Globe,
  PlayCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { ContactUsButton } from "./contact-us-button";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const products = [
  {
    title: "AI-enhanced experiences",
    description: "Integrate AI into existing features",
    icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    features: ["Durable", "Versatile", "Energy-efficient"],
    image:
      "https://kzmlukdaifbgkxdx7fwk.lite.vusercontent.net/placeholder.svg?height=400&width=400",
  },
  {
    title: "Interactive IFUs",
    description: "AI-powered instructions for use",
    icon: <FileText className="h-6 w-6 text-blue-600" />,
    features: ["Durable", "Versatile", "Energy-efficient"],
    image:
      "https://kzmlukdaifbgkxdx7fwk.lite.vusercontent.net/placeholder.svg?height=400&width=400",
  },
  {
    title: "Companion App Framework",
    description: "Custom companion apps for Medical Devices",
    icon: <Smartphone className="h-6 w-6 text-blue-600" />,
    features: ["Durable", "Versatile", "Energy-efficient"],
    image:
      "https://kzmlukdaifbgkxdx7fwk.lite.vusercontent.net/placeholder.svg?height=400&width=400",
  },
  {
    title: "Digital Health Portal",
    description: "Dynamic portals for Patients or Providers",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    features: ["Durable", "Versatile", "Energy-efficient"],
    image:
      "https://kzmlukdaifbgkxdx7fwk.lite.vusercontent.net/placeholder.svg?height=400&width=400",
  },
];

const PillLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-wider text-blue-700 uppercase bg-blue-100 border border-blue-200 rounded font-mono">
    {children}
  </span>
);

export default function Process() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section
      aria-labelledby="products-heading"
      className="bg-[#eff6ff] py-20 text-blue-900"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-6">
              <PillLabel>Products</PillLabel>
            </div>
            <h2 id="products-heading" className="text-3xl font-bold mb-6">
              Product Templates
            </h2>
            <p className="text-blue-800 mb-8">
              Use our carefully crafted product templates to enhance or
              kick-start your products, services or features. Rigorous testing,
              compliance and best practices are baked in saving you a lot of
              time and effort.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-700 text-xs font-bold bg-blue-100">
                WCAG
              </div>
              <p className="text-sm text-blue-800 italic">
                "Equitable health outcomes via high quality, compliant Digital
                Health design should be universally available."
              </p>
            </div>
            <p className="text-sm text-blue-800 mb-6">- JD Moore from DH.D</p>
            <div className="flex items-center space-x-4">
              <ContactUsButton label="Watch Demo" icon={PlayCircle} />
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Get Templates
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`bg-white border border-blue-200 transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-50`}
                role="button"
                onClick={() => {
                  setCurrentProduct(index);
                  setIsOpen(true);
                }}
              >
                <CardContent className="flex items-start p-4 lg:p-6">
                  <div className="p-2 lg:p-3 rounded-lg mr-3 lg:mr-4 shrink-0 transition-colors duration-300 bg-blue-50">
                    {React.cloneElement(product.icon, {
                      className: `h-6 w-6 text-blue-600`,
                      "aria-hidden": "true",
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 text-base lg:text-lg text-blue-700">
                      {product.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-blue-600">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full">
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              onClick={prevProduct}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              onClick={nextProduct}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div>
                <Image
                  src={products[currentProduct].image}
                  alt={products[currentProduct].title}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {products[currentProduct].title}
                </DialogTitle>
                <DialogDescription className="text-gray-600 mb-4">
                  {products[currentProduct].description}
                </DialogDescription>
                <h3 className="text-xl font-semibold mb-2">Features:</h3>
                <ul className="list-disc list-inside mb-4">
                  {products[currentProduct].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button>Request Product</Button>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              {products.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                    index === currentProduct ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentProduct(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
