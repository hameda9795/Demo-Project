import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { DeviceShowcase } from "@/components/sections/device-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBy />
      <Services />
      <DeviceShowcase />
      <Testimonials />
      <Pricing />
    </main>
  );
}
