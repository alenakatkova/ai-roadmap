<script>
	const siteMap = [
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
</script>

<h1>AI Roadmap</h1>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
	{#each siteMap as section}
		<div class="border p-4 rounded">
			<div class="text-xl font-bold mb-2">{section.name}</div>
			{#each section.subpages as page}
				<a
					href={page.link}
					class="block text-blue-500 hover:text-blue-700 mb-1 transition-colors duration-150"
				>
					{page.name}
				</a>
				{#if page.subpages && page.subpages.length}
					<ul class="ml-4">
						{#each page.subpages as subPage}
							<li class="mb-1">
								<a
									href={subPage.link}
									class="block text-blue-400 hover:text-blue-600 transition-colors duration-150"
								>
									{subPage.name}
								</a>
								{#if subPage.subpages && subPage.subpages.length}
									<ul class="ml-4">
										{#each subPage.subpages as deepSubPage}
											<li class="mb-1">
												<a
													href={deepSubPage.link}
													class="block text-blue-300 hover:text-blue-500 transition-colors duration-150"
												>
													{deepSubPage.name}
												</a>
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</div>
	{/each}
</div>
