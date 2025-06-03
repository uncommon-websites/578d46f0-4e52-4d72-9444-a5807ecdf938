/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Get a Demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Help Center",
		href: "https://support.reflexivity.com/hc/en-us",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Institutional investing",
				href: "/use-cases/institutional-investing",
				image: "/generated/image-a-diverse-team-of-institutional-investor.webp",
				description:
					"Accelerate multi-asset research across equities, credit, macro, and alternatives. Bring all your relevant data and insights onto one command center for deeper dives and thematic analysis.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Wealth management",
				href: "/use-cases/wealth-management",
				image: "/generated/image-a-wealth-manager-sitting-comfortably-in-.webp",
				description:
					"Surface exposures and trends that matter to client portfolios instantly. Move beyond static dashboards to live, auditable intelligence and build trust with every touchpoint.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Fintech embedding",
				href: "/use-cases/fintech-embedding",
				image: "/generated/image-a-fintech-team-collaborating-in-a-sleek-.webp",
				description:
					"Plug intelligence, screens, and analytics directly into your fintech or brokerage product. Boost retention and engagement with differentiated data and personalized alerts.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
