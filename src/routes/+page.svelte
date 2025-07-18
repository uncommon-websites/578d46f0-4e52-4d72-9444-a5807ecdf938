<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
</script>

<Hero
	centered
	title="Clarity that moves with the market"
	subtitle="Reflexivity delivers trusted, real-time intelligence for institutional and wealth investors—all from one secure, unified platform."
/>
<video autoplay muted loop playsinline class="sc-9f88f3a3-3 gDhaGV mx-auto mix-blend-luminosity"
	><source
		src="https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/chunks/assets/videos/app-presentation.717c7f387b0c12b6.webm"
		type="video/webm"
	/><source
		src="https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/chunks/assets/videos/app-presentation.86fe1d32b1c8f379.mp4"
		type="video/mp4"
	/>Your browser does not support the video tag.</video
>
<!-- customers={[
    {
      name: "Eric Liu",
      position: "Senior Portfolio Manager",
      imageSrc: "/generated/image-a-confident-male-finance-professional-in.webp"
    },
    {
      name: "Jessica Kim",
      position: "Head of Investment Research",
      imageSrc: "/generated/image-a-professional-woman-investor-in-a-conte.webp"
    },
    {
      name: "Michael Grant",
      position: "Fintech Strategy Lead",
      imageSrc: "/generated/image-a-smiling-male-fintech-executive-in-a-mo.webp"
    },
    {
      name: "Alex Morgan",
      position: "Data Analyst",
      imageSrc: "/generated/image-a-confident-nonbinary-data-analyst-in-a-.webp"
    },
    {
      name: "Priya Desai",
      position: "Portfolio Manager",
      imageSrc: "/generated/image-a-professional-woman-portfolio-manager-i.webp"
    }
  ]} -->

<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		"https://logo.clearbit.com/ubs.com",
		"https://logo.clearbit.com/interactivebrokers.com",
		"https://logo.clearbit.com/mufg.jp",
		"https://logo.clearbit.com/tradestation.com"
	]}
/>

<Summary
	title="What we do"
	text="Reflexivity is a market-intelligence platform for institutional and wealth investors, powered by a proprietary Knowledge Graph and natural-language AI. Get real-time, auditable insights and unify your research and monitoring—all from a single, browser-based terminal."
/>

<Testimonials
	testimonials={[
		{
			name: "Elise Tanaka",
			position: "Head of Thematic Research",
			company: "Helix Capital",
			quote:
				"Reflexivity helped our team catch hidden exposures that we previously missed—like channel risk tied to Chinese consumer assets—reducing overall portfolio variance by 12% in a single quarter.",
			image: "/generated/image-a-japanese-woman-in-a-modern-finance-off.webp"
		},
		{
			name: "Deven Ocampo",
			position: "Chief Product Officer",
			company: "Orion Securities",
			quote:
				"We integrated AI-driven market insights into our retail platform ten times faster than planned, saving several sprint cycles and reducing dependencies on external analysts.",
			image: "/generated/image-a-filipino-man-in-a-fintech-office-surro.webp"
		},
		{
			name: "Daniella Feron",
			position: "Portfolio Strategy Lead",
			company: "Argo Family Office",
			quote:
				"Cut our team’s time spent on daily macro and thematic research by over twenty hours per week—which freed up resources and shrank outside research spend by nearly forty percent.",
			image: "/generated/image-a-french-woman-seated-at-a-desk-in-an-of.webp"
		}
	]}
/>

<Features
	title="Key features"
	subtitle="What makes Reflexivity different"
	features={[
		{
			title: "AI-powered knowledge graph",
			description:
				"Maps 40,000+ global assets with explainable links across brands, supply chains, and themes—so you surface connections others miss."
		},
		{
			title: "Auditable, real-time answers",
			description:
				"Every insight includes full source traceability and citations, giving confidence in every decision and workflow."
		},
		{
			title: "Instant thematic analysis",
			description:
				"Test scenarios, run screens, and spot trends in seconds, not hours. Fast results with no terminals required."
		},
		{
			title: "Plug-and-play intelligence",
			description:
				"Drop charts, tables, and insight modules into your platform via API or component—launch features 90% faster."
		},
		{
			title: "Enterprise security by design",
			description:
				"Zero-trust, SOC 2 compliance, and proprietary authentication built for safe scaling across global partners."
		},
		{
			title: "Browser-based, always up to date",
			description:
				"No installs, patches or maintenance. Reflexivity updates itself to keep you ready for what’s next."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "Accelerate institutional research",
			description:
				"Speed up multi-asset coverage across equities, credit, macro, and alternatives. Reflexivity brings all your relevant data and insights onto one command center, making deep dives and thematic analysis effortless for investment teams.",
			image: "/generated/image-a-diverse-team-of-institutional-investor.webp",
			link: {
				href: "/use-cases/institutional-investing",
				label: "Learn more"
			}
		},
		{
			title: "Personalize wealth management",
			description:
				"Instantly surface exposures and trends that matter to every client portfolio. Reflexivity lets advisors move beyond static dashboards to auditable, live market intelligence—helping you build trust at every touchpoint.",
			image: "/generated/image-a-wealth-manager-sitting-comfortably-in-.webp",
			link: {
				href: "/use-cases/wealth-management",
				label: "Learn more"
			}
		},
		{
			title: "Embed intelligence in your platform",
			description:
				"Plug Reflexivity’s insights, screeners, and analytics modules directly into your fintech or brokerage product. Increase user retention with differentiated data and personalized alerts, all delivered securely and at scale.",
			image: "/generated/image-a-fintech-team-collaborating-in-a-sleek-.webp",
			link: {
				href: "/use-cases/fintech-embedding",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
	title="Markets move fast. Move faster."
	subtitle="Your edge starts here."
	description="Reflexivity brings institutional and platform investors AI-native market intelligence, powered by our proprietary Knowledge Graph. Request a demo or get started today."
	imageSrc="/generated/image-a-cheerful-financial-professional-standi.webp"
	callsToAction={[
		{ href: "/get-started", label: "Get started", variant: "primary" },
		{ href: "/contact", label: "Request a demo", variant: "secondary" }
	]}
/>
