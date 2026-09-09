import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WhyDifferent } from "./components/WhyDifferent";
import { VisualBreak } from "./components/VisualBreak";
import { Tasks } from "./components/Tasks";
import { JuniorSenior } from "./components/JuniorSenior";
import { Benefits } from "./components/Benefits";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhyDifferent />
      <VisualBreak />
      <Tasks />
      <JuniorSenior />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
}
