<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Intellectual honesty",
    description: "We challenge ideas with evidence, share context openly, and debate assumptions—no ego, no dogma."
  },
  {
    title: "Transparency & precision",
    description: "We prioritize clarity, source citations, and rigorous detail in our data and communication."
  },
  {
    title: "Ambition with discipline",
    description: "We pursue market-shifting impact while holding each other to the highest operational and technical standards."
  },
  {
    title: "Collaboration without borders",
    description: "Our teams in New York, London, and Tokyo work as one—aligning expertise across finance, AI, and engineering to solve hard, real-world problems."
  }
];
</script>

<SecondaryHero
	title="Institutional-grade intelligence. Auditable by design."
	subtitle="Redefining market insight with real-time AI and a self-learning Knowledge Graph."
	imageSrc="/mockups/dark-screen-1748351485588.png"
/>

<!-- Story Section -->
<Story
  paragraphs={[
    "Before starting Reflexivity, we ran global macro desks, built portfolios, and spent more time than we care to admit clicking around legacy terminals. The core challenge was always the same: important insights lived across dozens of disconnected systems—and too much time was wasted stitching them together. We built Reflexivity to change that.",
    "Our platform grew from the frustration of top-down research stuck in outdated workflows. Reflexivity combines a self-learning Knowledge Graph with natural language AI trained on real scrutiny, so you can stop hunting through dashboards and get transparent, context-rich answers instead. It’s not just slick software—it’s grounded in how investment teams actually work.",
    "With faster flows, explainable outputs, and the ability to map cross-asset relationships instantly, Reflexivity is built for how markets operate now: complex, noisy, and always moving. Whether you're pitching an idea, running a scenario, or asking ‘what changed?’—Reflexivity helps you do it faster, and with more confidence."
  ]}
/>

<!-- Our Culture Section -->
<Culture {values} />
<section class="prose prose-invert mx-auto my-16">
  <h1>The culture behind the intelligence</h1>
  <p>Reflexivity is built by a global team of researchers, engineers, data scientists, and investors committed to clarity, precision, and measurable market impact. From New York to London to Tokyo, we collaborate across time zones and disciplines to build products that institutional investors trust with billions in capital decisions.</p>
  <p>We're a company shaped by diverse experiences—hedge funds, venture capital, tech startups, enterprise infrastructure, and deep AI research. What unites us is a shared belief in intellectual honesty, transparency, and ambition without ego. We prioritize clarity over complexity. We scrutinize assumptions, share context freely, and hold each other to a high standard—not through titles or hierarchy, but through the quality and consequences of our work.</p>
  <p>We operate lean by design. Every team member owns outcomes, asks hard questions, and solves cross-functional problems in real time. Much of what we build hasn't been done before—so precision matters, and strong opinions are always welcome (as long as they come with source citations).</p>
  <p>If making markets more intelligent—and explainable—is a challenge you're wired for, you'll find sharp teammates and a serious seat at the table here.</p>
  <p><a href="mailto:connor@reflexivity.com">Get in touch</a> to learn more about joining Reflexivity or collaborating with our team.</p>
</section>

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our leadership"
  subtitle="Financial experts. Product builders. Operators."
  stakeholders={[
    {
      name: "Jan Szilagyi",
      position: "Co-Founder & CEO",
      bio: "Global macro veteran with a Harvard PhD, formerly portfolio manager at Duquesne and Co-CIO at Lombard Odier. Builds auditable intelligence for the world’s most advanced investors.",
      image: "/generated/image-a-professional-headshot-of-a-male-ceo-wi.webp"
    },
    {
      name: "Giuseppe Sette",
      position: "Co-Founder & President",
      bio: "Patent holder and former Bain consultant. Ex-Co-CIO at Lombard Odier and investor at Brevan Howard; brings system-level rigor to product and data.",
      image: "/generated/image-a-professional-headshot-of-a-male-presid.webp"
    },
    {
      name: "Armenak Mayalian",
      position: "CTO",
      bio: "Serial founder and architect with 20+ years in tech, strategy, and M&A. Shipped fintech platforms for global partners.",
      image: "/generated/image-a-professional-headshot-of-a-male-cto-wi.webp"
    },
    {
      name: "RJ Assaly",
      position: "CPO",
      bio: "Patent holder in natural-language search and ex-ML Product Lead at Kensho (S&P). Designs intuitive products that make complex data actionable.",
      image: "/generated/image-a-professional-headshot-of-a-male-cpo-wi.webp"
    },
    {
      name: "Katherine Plumlee",
      position: "CSO",
      bio: "Former AI investor with experience across VC, law, and product. Ensures strategic growth and cross-functional collaboration.",
      image: "/generated/image-a-professional-headshot-of-a-female-cso-.webp"
    },
    {
      name: "Alvaro F. Almanza",
      position: "CLO & VP Ops",
      bio: "20 years in IP and tech law; licensed in CA, DC, NY. Leads operations with an eye for compliance and scale.",
      image: "/generated/image-a-professional-headshot-of-a-male-clo-wi.webp"
    }
  ]}
/>

<StakeholderGrid
  stakeholderType="investor"
  title="Backed by leading investors and strategic partners"
  subtitle="Supported by top venture funds and industry leaders"
  stakeholders={[
    {
      name: "Greycroft",
      image: "https://logo.clearbit.com/greycroft.com"
    },
    {
      name: "Rose Park Advisors",
      image: "https://logo.clearbit.com/roseparkadvisors.com"
    },
    {
      name: "SoftBank",
      image: "https://logo.clearbit.com/softbank.com"
    },
    {
      name: "General Catalyst",
      image: "https://logo.clearbit.com/generalcatalyst.com"
    },
    {
      name: "Interactive Brokers",
      image: "https://logo.clearbit.com/interactivebrokers.com"
    }
  ]}
/>

<!-- CTA Section -->
<CallToAction
  title="Build with Reflexivity"
  subtitle="Work on problems that move markets"
  description="We're growing our teams in New York, London, and Tokyo. If you’re driven by curiosity, discipline, and real impact—not just titles—reach out directly to Connor Matthews (connor@reflexivity.com) or Jan Szilagyi (jan@reflexivity.com). Help us build the market intelligence platform the world trusts."
  callsToAction={[{
    href: 'mailto:connor@reflexivity.com',
    label: 'Contact the team',
    variant: 'primary',
  }, {
    href: 'mailto:jan@reflexivity.com',
    label: 'Contact the CEO',
    variant: 'secondary',
  }, {
    href: 'https://www.linkedin.com/company/reflexivity/',
    label: 'Connect on LinkedIn',
    variant: 'secondary',
  }]}
/>
