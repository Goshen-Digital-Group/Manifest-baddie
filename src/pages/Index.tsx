import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-baddie.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Twitter, Send, TrendingUp, Globe } from "lucide-react";

const Index = () => {
  const galleryItems = [
    { image: gallery1, tagline: "HODL her energy" },
    { image: gallery2, tagline: "She's bullish on you" },
    { image: gallery3, tagline: "Wifey material, decentralized" },
    { image: gallery4, tagline: "Not financial advice, just fine AF" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-20 bg-gradient-vaporwave bg-clip-text text-transparent bg-[length:200%_auto] animate-glow-pulse">
            Manifesting Asian Girls in Crypto
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-foreground/90 font-medium">
            Where beauty meets blockchain. No roadmap, just vibes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="baddie" size="lg" className="text-lg px-8 py-6">
              BUY $BADDIE
            </Button>
            <Button variant="baddie" size="lg" className="text-lg px-8 py-6">
              JOIN THE CULT
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-primary/30 overflow-hidden group hover:shadow-glow-pink transition-all duration-500 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Baddie ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-lg font-bold text-primary">{item.tagline}</p>
                </div>
              </Card>
            ))}
          </div>
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
            <Button
              variant="outline"
              className="h-24 flex-col gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
            >
              <Twitter className="w-8 h-8" />
              <span className="font-bold">Twitter/X</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col gap-2 border-secondary/30 hover:bg-secondary/10 hover:border-secondary transition-all"
            >
              <Send className="w-8 h-8" />
              <span className="font-bold">Telegram</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col gap-2 border-accent/30 hover:bg-accent/10 hover:border-accent transition-all"
            >
              <TrendingUp className="w-8 h-8" />
              <span className="font-bold">DexTools</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex-col gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
            >
              <Globe className="w-8 h-8" />
              <span className="font-bold">Etherscan</span>
            </Button>
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
