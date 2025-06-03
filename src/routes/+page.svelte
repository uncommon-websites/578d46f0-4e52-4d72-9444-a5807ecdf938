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

	// Icons
	import IconBot from "~icons/lucide/bot";
	import IconBarChart from "~icons/lucide/bar-chart-3";
	import IconFileSearch from "~icons/lucide/file-search";
	import IconTrendingUp from "~icons/lucide/trending-up";
	import IconNetwork from "~icons/lucide/network";
</script>

<Hero
	centered
	title="The AI Analyst for Institutional Finance"
	subtitle="Reflexivity delivers trusted, real-time intelligence for institutional and wealth investors—all from one secure, unified platform."
/>
<!-- <video autoplay muted loop playsinline class="sc-9f88f3a3-3 gDhaGV mx-auto mix-blend-luminosity"
	><source
		src="https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/chunks/assets/videos/app-presentation.717c7f387b0c12b6.webm"
		type="video/webm"
	/><source
		src="https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/chunks/assets/videos/app-presentation.86fe1d32b1c8f379.mp4"
		type="video/mp4"
	/>Your browser does not support the video tag.</video
> -->
<video autoplay muted loop playsinline class="sc-9f88f3a3-3 gDhaGV mx-auto mix-blend-luminosity"
	><source src="/reflexivity-hero.webm" type="video/webm" />
</video>
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
	label="In the news"
	logoUrls={[
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/wall-street-journal.27de7283.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/bloomberg.9d4be63c.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/barrons.211d04a9.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/cnbc.1e5dd650.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/fox.5314b6db.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/marketwatch.2fa33a4b.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/yahoo.6a6f26ed.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/business-insider.75364b33.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/bond-buyer.8d9eb71a.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/reuters.6ef8b7f6.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/forbes.4ba0b835.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/benzinga.b9e5e76e.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/nasdaq.07ea9e7f.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/kiplinger.77ec421a.svg",
		"https://cdn.toggle.ai/cd869464e939172633f04b3c306e96e32a882c32/_next/static/media/the-street.1a1f54b7.svg"
	]}
/>

<Summary
	title="What we do"
	text="Reflexivity is a market-intelligence platform for institutional and wealth investors, powered by a proprietary Knowledge Graph and natural-language AI. Get real-time, auditable insights and unify your research and monitoring—all from a single, browser-based terminal."
/>

<Features
	title="Faster answers. Smarter moves."
	subtitle="Reflexivity combines real-time AI with a self-learning financial graph to deliver the speed, accuracy, and transparency institutional investors rely on. No panes to stitch together. Just actionable insight, exactly when you need it."
	features={[
		{
			title: "Alfred",
			description:
				"Your AI analyst for any market question—across assets, sectors, macro themes and more. Ask in plain language. Get sourced answers with context in seconds.",
			icon: IconBot
		},
		{
			title: "Insights",
			description:
				"Daily intelligence generated from 250+ technical, fundamental, and macro signals. Over 1,500 curated outputs land straight in your alerts, dashboards, or API.",
			icon: IconBarChart
		},
		{
			title: "Document Search",
			description:
				"Scan earnings, filings, letters, and transcripts—instantly. Our multi-strategy retrieval engine surfaces answers with sentence-level accuracy across formats.",
			icon: IconFileSearch
		},
		{
			title: "Scenario Analysis",
			description:
				"Test what-if ideas in markets, not spreadsheets. Run hypothetical events or policy changes against thousands of historical asset behaviors—with full source traceability.",
			icon: IconTrendingUp
		},
		{
			title: "Knowledge Graph",
			description:
				"The engine behind it all. Reflexivity's graph continuously maps 40,000+ global assets across exposures, supply chains, stakeholders, and signals—giving you a single point of truth for an increasingly dynamic market landscape.",
			icon: IconNetwork
		}
	]}
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
