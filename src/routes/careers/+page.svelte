<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
  {
    title: "Direct impact",
    description: "Work on technology shaping real-time decision-making across global finance.",
    icon: IconBriefcase,
  },
  {
    title: "Elite team, fast learning",
    description:
      "Collaborate with leaders from hedge funds, VC, and AI startups. Growth is measured in real outcomes—not just titles.",
    icon: IconUsers,
  },
  {
    title: "Ownership & autonomy",
    description:
      "Own major projects from day one in a flat, trust-first environment with rapid feedback and low bureaucracy.",
    icon: IconHeart,
  },
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Jamal Brooks",
    position: "Software Engineer",
    company: "Engineering Team",
    quote:
      "Reflexivity’s culture really encourages learning and mentorship. I feel heard here, and my ideas are valued. Every project gives me the chance to grow alongside sharp, motivated colleagues.",
    image:
      "/generated/image-a-young-black-male-professional-in-a-mod.webp"
  },
  {
    name: "Neha Patel",
    position: "Product Manager",
    company: "Product Team",
    quote:
      "There’s true collaboration across teams and everyone’s voice matters—from new hires to leadership. Reflexivity trusts me to take initiative and the support for career development is real, not just talk.",
    image:
      "/generated/image-a-south-asian-female-professional-in-her.webp"
  },
  {
    name: "David Miller",
    position: "Director of Operations",
    company: "Operations",
    quote:
      "What stands out is the transparency and trust at every level. It’s a fast-paced environment where people help each other succeed and leadership leads by example. Reflexivity empowers me to make real impact daily.",
    image:
      "/generated/image-a-white-male-professional-in-his-40s-dre.webp"
  }
];

	const processSteps = [
  {
    step: 1,
    title: "Apply",
    description:
      "Submit your resume and a short note on why Reflexivity is a match. We review all candidates quickly.",
  },
  {
    step: 2,
    title: "Screening call",
    description:
      "A 30-minute call to discuss your motivations, interests, and fit within our culture.",
  },
  {
    step: 3,
    title: "Technical or case interview",
    description:
      "Show your skills through a role-relevant task, coding screen, or real-world case study.",
  },
  {
    step: 4,
    title: "Meet the team",
    description:
      "Engage with team members and founders to go deeper and get unfiltered perspectives.",
  },
  {
    step: 5,
    title: "Decision and offer",
    description:
      "Receive fast, candid feedback. Most processes wrap up in 2-3 weeks from your first application.",
  },
];

	const values = [
  {
    icon: IconHeart,
    title: "Outcomes over optics",
    description:
      "We focus on building products that solve real problems and move markets—not just showing progress.",
  },
  {
    icon: IconUsers,
    title: "Systems thinkers",
    description:
      "We connect details to big-picture strategy. If you see how things work together, you’ll thrive here.",
  },
  {
    icon: IconGlobe,
    title: "Minimal politics. Maximum ownership.",
    description:
      "We keep decision-making direct and elevate ideas over job titles. High trust, low ego.",
  },
];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the future of financial intelligence"
	subtitle="Join global engineers and experts powering AI-driven insight"
	imageSrc="/generated/image-a-diverse-team-of-professionals-collabor.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
