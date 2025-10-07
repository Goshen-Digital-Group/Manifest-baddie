import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/manifesting-banner.png";
import gallery1 from "@/assets/new-baddie/NEWBADDIES/BD-1.png";
import gallery2 from "@/assets/new-baddie/NEWBADDIES/BD-2.png";
import gallery3 from "@/assets/new-baddie/NEWBADDIES/BD-3.png";
import gallery4 from "@/assets/new-baddie/NEWBADDIES/BD-4.png";
import gallery5 from "@/assets/new-baddie/NEWBADDIES/BD-5.png";
import gallery6 from "@/assets/new-baddie/NEWBADDIES/BD-6.png";
import gallery7 from "@/assets/new-baddie/NEWBADDIES/BD-7.png";
import gallery8 from "@/assets/new-baddie/NEWBADDIES/BD-8.png";
import gallery9 from "@/assets/new-baddie/NEWBADDIES/BD-9.png";
import gallery10 from "@/assets/new-baddie/NEWBADDIES/BD-10.png";
import gallery11 from "@/assets/manifesting-baddie-12.png";
import gallery12 from "@/assets/manifesting-baddie-14.png";

import { Twitter, Send, TrendingUp, Globe } from "lucide-react";
import { useEffect, useState } from "react";

// --- Data & Configuration ---
// Centralized data makes the component cleaner and easier to maintain.
const GALLERY_ITEMS = [
  { image: gallery1, alt: "Baddie 1" },
  { image: gallery2, alt: "Baddie 2" },
  { image: gallery3, alt: "Baddie 3" },
  { image: gallery4, alt: "Baddie 4" },
  { image: gallery5, alt: "Baddie 5" },
  { image: gallery6, alt: "Baddie 6" },
  { image: gallery7, alt: "Baddie 7" },
  { image: gallery8, alt: "Baddie 8" },
  { image: gallery9, alt: "Baddie 9" },
  { image: gallery10, alt: "Baddie 10" },
  { image: gallery11, alt: "Baddie 11" },
  { image: gallery12, alt: "Baddie 12" },
];

const COMMUNITY_LINKS = [
  { icon: Twitter, text: "Twitter/X", href: "#", color: "border-primary/30 hover:bg-primary/10 hover:border-primary" },
  { icon: Send, text: "Telegram", href: "#", color: "border-secondary/30 hover:bg-secondary/10 hover:border-secondary" },
  { icon: TrendingUp, text: "DexTools", href: "#", color: "border-accent/30 hover:bg-accent/10 hover:border-accent" },
  { icon: Globe, text: "Etherscan", href: "#", color: "border-primary/30 hover:bg-primary/10 hover:border-primary" },
];

const Index = () => {
  // ⚠️ The DexScreener API call is commented out because it won't work in the browser due to CORS.
  // This is the correct approach to prevent errors and clutter in the console.
  // If you want to include this feature, you'll need to set up a backend proxy.
  const [tokenProfiles, setTokenProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTokenProfiles = async () => {
      try {
        const res = await fetch("https://api.dexscreener.com/token-profiles/latest/v1");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTokenProfiles(data?.pairs?.slice(0, 5) || []); // DexScreener returns { pairs: [...] }
      } catch (err) {
        console.error("DexScreener API error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenProfiles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
          }}
          aria-hidden="true" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" aria-hidden="true" />
        
        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          <h1 className="text-4 text-white md:text-9xl font-black mb-20 bg-gradient-vaporwave bg-clip-text text-transparent bg-[length:200%_auto] animate-glow-pulse">
            MAGIC
              <h2 className="text-md text-white md:text-2xl font-normal mb-20 bg-[length:200%_auto] animate-glow-pulse">
            Manifesting Asian Girls in Crypto
          </h2>
          </h1>
        
          <p className="text-md md:text-md mb-8 text-foreground/90 font-normal text-white animate-glow-pulse">
            Where beauty meets blockchain. No roadmap, just vibes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="baddie" size="lg" className="text-lg px-8 py-6">
              <a href="#">BUY $BADDIE</a>
            </Button>
            <Button asChild variant="baddie" size="lg" className="text-lg px-8 py-6">
              <a href="#">JOIN THE BADDIE</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="text-primary text-4xl">↓</div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-vaporwave bg-clip-text text-transparent">
            The Baddie Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GALLERY_ITEMS.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-primary/30 overflow-hidden group hover:shadow-glow-pink transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Carousel (DexScreener API Attempt) */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-4 text-primary">Live from DexScreener</h3>
          {loading ? (
            <p className="text-center text-muted-foreground">Loading latest tokens...</p>
          ) : error ? (
            <Card className="bg-background/50 p-4 border border-primary/30">
              <p className="text-center text-muted-foreground">
                🔒 Live prices unavailable in browser. Use DexScreener widget or backend proxy.
              </p>
            </Card>
          ) : tokenProfiles.length > 0 ? (
            <div className="flex overflow-x-auto gap-4 pb-4">
              {tokenProfiles.map((pair, i) => (
                <Card key={i} className="flex-shrink-0 w-48 p-3 bg-card border border-primary/20">
                  <p className="font-bold text-sm truncate">{pair.baseToken?.name || "Token"}</p>
                  <p className="text-primary font-black">{pair.priceUsd || "—"} USD</p>
                  <p className="text-xs text-muted-foreground">
                    {pair?.chainId?.toUpperCase?.() || "CHAIN"}
                  </p>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No data available.</p>
          )}
        </div>
      </section>

      {/* About $BADDIE Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-vaporwave bg-clip-text text-transparent">
            $BADDIE TOKEN
          </h2>
          <Card className="bg-gradient-card border-primary/30 p-8 shadow-glow-purple">
            <p className="text-xl text-center mb-12 text-foreground/90 leading-relaxed">
              "$BADDIE is a memecoin celebrating Asian charm and crypto chaos.
              <br />
              No utility. No promises. Just vibes powered by manifestation and main character energy."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background/50 p-6 rounded-lg border border-primary/20">
                <p className="text-2xl font-bold text-primary mb-2">Total Supply</p>
                <p className="text-3xl font-black">69,000,000,000 $BADDIE</p>
              </div>
              <div className="bg-background/50 p-6 rounded-lg border border-secondary/20">
                <p className="text-2xl font-bold text-secondary mb-2">Liquidity</p>
                <p className="text-3xl font-black">4.20%</p>
              </div>
              <div className="bg-background/50 p-6 rounded-lg border border-accent/20">
                <p className="text-2xl font-bold text-accent mb-2">Taxes</p>
                <p className="text-3xl font-black">0% (too hot to tax)</p>
              </div>
              <div className="bg-background/50 p-6 rounded-lg border border-primary/20">
                <p className="text-2xl font-bold text-primary mb-2">Burn</p>
                <p className="text-xl font-bold">Every sell burns ego & gas</p>
              </div>
            </div>

            <div className="bg-background/70 p-6 rounded-lg border border-primary/30 text-center">
              <p className="text-sm text-muted-foreground mb-2">Contract Address</p>
              <p className="text-lg font-mono break-all text-primary">
                0xBADD1E69C0IN420AS1ANG1RLS69
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-vaporwave bg-clip-text text-transparent">
            Join The Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {COMMUNITY_LINKS.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className={`h-24 flex-col gap-2 ${link.color} transition-all`}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-8 h-8" />
                  <span className="font-bold">{link.text}</span>
                </a>
              </Button>
            ))}
          </div>

          <Card className="bg-gradient-card border-primary/30 p-8 shadow-glow-pink">
            <h3 className="text-3xl font-black mb-4 text-primary">Baddie of the Week</h3>
            <div className="aspect-square max-w-sm mx-auto mb-4 rounded-lg overflow-hidden">
              <img src={gallery1} alt="Baddie of the Week" className="w-full h-full object-cover" />
            </div>
            <p className="text-xl font-bold">Main character energy activated 🌟</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Manifesting Asian Girls in Crypto
          </p> 
        </div>
      </footer>
    </div>
  );
};

export default Index;