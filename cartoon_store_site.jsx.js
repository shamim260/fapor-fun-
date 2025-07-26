import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Fapor Fun</h1>
        <p className="text-lg text-gray-600">Buy Cartoon Characters, Backgrounds & More</p>
        <Button className="mt-4">Visit Our Gumroad Shop</Button>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cartoon Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardContent className="p-4">
                <img
                  src={`https://via.placeholder.com/300x200?text=Character+${item}`}
                  alt={`Character ${item}`}
                  className="rounded-xl mb-3"
                />
                <h3 className="text-lg font-bold mb-1">Cartoon Character {item}</h3>
                <p className="text-sm text-gray-500 mb-2">High-quality PNG character illustration</p>
                <Button>Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Background Packs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2].map((item) => (
            <Card key={`bg-${item}`}>
              <CardContent className="p-4">
                <img
                  src={`https://via.placeholder.com/300x200?text=Background+${item}`}
                  alt={`Background ${item}`}
                  className="rounded-xl mb-3"
                />
                <h3 className="text-lg font-bold mb-1">Background Pack {item}</h3>
                <p className="text-sm text-gray-500 mb-2">Layered HD cartoon backgrounds</p>
                <Button>Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Full Asset Bundles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1].map((item) => (
            <Card key={`bundle-${item}`}>
              <CardContent className="p-4">
                <img
                  src={`https://via.placeholder.com/300x200?text=Bundle+${item}`}
                  alt={`Bundle ${item}`}
                  className="rounded-xl mb-3"
                />
                <h3 className="text-lg font-bold mb-1">Complete Cartoon Asset Pack</h3>
                <p className="text-sm text-gray-500 mb-2">Characters, backgrounds, and props all in one bundle</p>
                <Button>Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm Rajab, a passionate cartoon artist creating unique characters, backgrounds,
          and digital assets. I sell high-quality creative resources to help animators,
          designers, and video creators.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a className="text-blue-500" href="mailto:mdshamim@email.com">mdshamim@email.com</a></p>
      </section>
    </main>
  );
}
