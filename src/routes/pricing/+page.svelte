<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Mikael Gerard",
      position: "COO",
      company: "Discretionary Global Macro Fund",
      quote:
        "Switching from legacy systems saved us over $600k annually across terminals, data vendors, and compliance tools. Reflexivity paid for itself in the first 4 months.",
      image: "/generated/image-a-professional-headshot-of-a-white-male-.webp"
    },
    {
      name: "Rachael Nguyen",
      position: "Head of Product",
      company: "Southeast Asia Bank & Brokerage Platform",
      quote:
        "Reflexivity’s API integration took less than two weeks and immediately cut our feature dev cycle by 70%. The ROI was obvious after the first use case.",
      image: "/generated/image-a-professional-headshot-of-a-vietnamese-.webp"
    },
    {
      name: "Dawit Berhane",
      position: "Director of Asset Allocation",
      company: "$30B Multi-Asset Firm",
      quote:
        "Our analysts ship 2–3x more investment memos with Reflexivity’s AI doing the heavy lifting on prep, sourcing, and thematic benchmarking. Explainability sealed it for compliance.",
      image: "/generated/image-a-professional-headshot-of-an-ethiopian-.webp"
    }
  ]}
/>

<CallToAction
  title="See Reflexivity in action. Make better decisions—faster."
  subtitle="Instant, auditable insights from AI you can trust. No vendor lock-in, no setup delays—just answers that drive results."
  description="Ready to accelerate your investment research? Request your personalized demo or talk to sales."
  imageSrc="/generated/image-a-cheerful-institutional-investor-sittin.webp"
  callsToAction={[
    {
      href: 'https://reflexivity.com/contact',
      label: 'Request a demo',
      variant: 'primary'
    },
    {
      href: 'mailto:connor@reflexivity.com',
      label: 'Talk to sales',
      variant: 'secondary'
    }
  ]}
/>
