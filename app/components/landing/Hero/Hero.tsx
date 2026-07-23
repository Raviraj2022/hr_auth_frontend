import { HeroBackground } from ".";
import { HeroContent } from ".";
import { HeroVisual } from ".";

export default function Hero() {
  return (
    <section className="relative">
      <HeroBackground />

      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        <HeroContent />

        <HeroVisual />
      </div>
    </section>
  );
}