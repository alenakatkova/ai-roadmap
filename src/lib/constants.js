export const siteMap = [
	// {
	// 	name: 'Home',
	// 	link: '/'
	// },
	// {
	//     name: 'AI Basics',
	//     link: '/ai-basics'
	// },
	{
		name: 'Full Roadmap',
		link: '/roadmap'
	},
	{
		name: 'Contribute',
		link: '/contribute'
	},
	{
		name: 'About Us',
		link: '/about-us'
	},
	
	// {
	//     name: 'AI Ethics',
	//     link: '/ai-ethics'
	// }
];

export const taskFilters = [
	{
		name: 'Efficiency',
		options: [
			{ name: 'Fundraising', value: 'fundraising' },
			{ name: 'Investment', value: 'investment' },
			{ name: 'Provide skills to dave money', value: 'provide-skills-to-save-money' },
			{ name: 'Evaluation of beneficiaries', value: 'evaluation-of-beneficiaries' }
		]
	},
	{
		name: 'Internal Operations',
		options: [
			{
				name: 'Accounting',
				value: 'accounting'
			}
		]
	},
	{
		name: 'Branding',
		options: [
			{
				name: 'Communication',
				options: [
					{ name: 'Email', value: 'email' },
					{ name: 'Letter', value: 'letter' },
					{ name: 'Cristmas Card', value: 'cristmas-card' },
					{ name: 'Storytelling', value: 'storytelling' }
				]
			},
			{
				name: 'Design',
				options: [
					{ name: 'Logo', value: 'logo' },
					{ name: 'Website', value: 'website' },
					{ name: 'Presentation', value: 'presentation' },
					{ name: 'Visuals', value: 'visuals' },
					{ name: 'Video', value: 'video' },
					{ name: 'Templates', value: 'templates' }
				]
			}
		]
	}
];

export const siteMap1 = [
	{
		name: 'Home',
		link: '/home',
		subpages: [
			{ name: 'Welcome & Introduction', link: '/home/welcome-introduction', subpages: [] },
			{ name: 'Roadmap Overview', link: '/home/roadmap-overview', subpages: [] },
			{ name: 'How to Navigate', link: '/home/how-to-navigate', subpages: [] }
		]
	},
	{
		name: 'Foundation of AI',
		link: '/foundation-of-ai',
		subpages: [
			{
				name: 'What is AI?',
				link: '/foundation-of-ai/what-is-ai',
				subpages: [
					{
						name: 'Definitions and Basics',
						link: '/foundation-of-ai/what-is-ai/definitions',
						subpages: []
					},
					{
						name: 'The Evolution of AI',
						link: '/foundation-of-ai/what-is-ai/evolution',
						subpages: []
					},
					{
						name: 'Common Myths about AI',
						link: '/foundation-of-ai/what-is-ai/myths',
						subpages: []
					}
				]
			},
			{
				name: 'Why AI Matters in Philanthropy?',
				link: '/foundation-of-ai/why-ai-matters',
				subpages: [
					{
						name: 'Benefits and Opportunities',
						link: '/foundation-of-ai/why-ai-matters/benefits',
						subpages: []
					},
					{
						name: 'Real-world Success Stories',
						link: '/foundation-of-ai/why-ai-matters/success-stories',
						subpages: []
					}
				]
			},
			{
				name: 'Practical Applications in Philanthropy',
				link: '/foundation-of-ai/practical-applications',
				subpages: [
					{
						name: 'Community Outreach & Communication',
						link: '/foundation-of-ai/practical-applications/community-outreach',
						subpages: []
					},
					{
						name: 'Streamlining Operations through Automation',
						link: '/foundation-of-ai/practical-applications/streamlining',
						subpages: []
					}
				]
			}
		]
	},
	{
		name: 'Building on AI Knowledge',
		link: '/building-on-ai',
		subpages: [
			{
				name: 'Case Studies in Philanthropy',
				link: '/building-on-ai/case-studies',
				subpages: [
					{
						name: 'Real-world Applications',
						link: '/building-on-ai/case-studies/real-world',
						subpages: []
					},
					{
						name: 'Lessons & Outcomes',
						link: '/building-on-ai/case-studies/lessons-outcomes',
						subpages: []
					}
				]
			},
			{
				name: 'Toolkits and Platforms',
				link: '/building-on-ai/toolkits-platforms',
				subpages: [
					{
						name: 'List of Tools & Platforms',
						link: '/building-on-ai/toolkits-platforms/list',
						subpages: []
					},
					{
						name: 'How-to Guides & Tutorials',
						link: '/building-on-ai/toolkits-platforms/guides-tutorials',
						subpages: []
					}
				]
			},
			{
				name: 'Strategies for AI Adoption',
				link: '/building-on-ai/strategies',
				subpages: [
					{
						name: 'Recommendations',
						link: '/building-on-ai/strategies/recommendations',
						subpages: []
					},
					{
						name: 'Continuous Learning',
						link: '/building-on-ai/strategies/continuous-learning',
						subpages: []
					}
				]
			}
		]
	},
	{
		name: 'Ethical Implications in AI',
		link: '/ethical-implications',
		subpages: [
			{
				name: 'Introduction to AI Ethics',
				link: '/ethical-implications/introduction',
				subpages: [
					{
						name: 'Importance of Ethics',
						link: '/ethical-implications/introduction/importance',
						subpages: []
					}
				]
			},
			{
				name: 'Challenges & Considerations',
				link: '/ethical-implications/challenges',
				subpages: [
					{
						name: 'Data Privacy & Security',
						link: '/ethical-implications/challenges/data-privacy',
						subpages: []
					}
				]
			},
			{
				name: 'Guidelines for Ethical AI Use',
				link: '/ethical-implications/guidelines',
				subpages: [
					{
						name: 'Creating a Code of Ethics',
						link: '/ethical-implications/guidelines/code-of-ethics',
						subpages: []
					},
					{
						name: 'Regular Ethical Reviews',
						link: '/ethical-implications/guidelines/reviews',
						subpages: []
					}
				]
			}
		]
	},
	{
		name: 'Essential Resources',
		link: '/resources',
		subpages: [
			{ name: 'Glossary of AI Terms', link: '/resources/glossary', subpages: [] },
			{ name: 'Guest Lectures', link: '/resources/guest-lectures', subpages: [] }
		]
	},
	{
		name: 'About Us',
		link: '/about',
		subpages: [
			{ name: 'Mission & Vision', link: '/about/mission-vision', subpages: [] },
			{ name: 'Team & Contributors', link: '/about/team', subpages: [] }
		]
	},
	{
		name: 'FAQs',
		link: '/faqs',
		subpages: []
	}
];
