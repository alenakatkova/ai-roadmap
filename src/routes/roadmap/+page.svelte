<script>
	let roadmap = [
		{
			title: "Beginner's Introduction",
			content: [
				'What is AI? A simple overview.',
				'Brief on Machine Learning vs. Deep Learning.',
				'Real-world examples of AI in philanthropic work.',
				'Understanding the potential of Generative AI.'
			]
		},
		{
			title: 'Setting Up the Basics',
			content: [
				'Choosing the right AI tools for your needs.',
				'Getting familiar with user-friendly AI platforms.',
				'Setting up your first generative AI model (like ChatGPT).'
			]
		},
		{
			title: 'Text Generation with AI',
			content: [
				'Understanding text prompts and how they influence outputs.',
				'Crafting effective prompts for document drafting.',
				'Editing and refining AI-generated text.'
			]
		},
		{
			title: 'Diving into Image Generation',
			content: [
				'Basics of AI-driven image creation.',
				'Using tools like DALL·E for creating images from text prompts.',
				'Understanding the limitations and potential biases.'
			]
		},
		{
			title: 'Integrating AI Tools in Workflow',
			content: [
				'Automating repetitive tasks using AI.',
				"Customizing AI outputs for better alignment with your organization's goals.",
				'Collaborating with colleagues using AI tools.'
			]
		},
		{
			title: 'Advanced AI Applications',
			content: [
				'Predictive analytics for better resource allocation.',
				'Custom training your AI models with organization-specific data.',
				'Exploring advanced platforms and AI services for specialized needs.'
			]
		},
		{
			title: 'Ethical Use and Limitations',
			content: [
				'Understanding potential biases in AI and their implications.',
				'Ensuring ethical use of AI-generated content.',
				'Handling privacy concerns and data security.'
			]
		}
	];
</script>

<div class="roadmap">
	{#each roadmap as { title, content }, index}
		<div
			class="step bg-white p-4 m-3 w-11/12 md:w-3/4 lg:w-1/2 border border-gray-300 rounded-lg shadow-md relative"
		>
			<div class="step-title font-semibold mb-4 text-xl text-blue-600">{index + 1}. {title}</div>
			<ul class="list-disc list-inside space-y-2 text-gray-700">
				{#each content as item}
					<li><a href="/" class="hover:text-blue-600 transition-colors duration-200">{item}</a></li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style>
	.roadmap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.step::before {
		content: '';
		position: absolute;
		top: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 6px;
		height: 6px;
		background: #93c5fd; /* Lighter blue from Tailwind */
		border-radius: 50%;
		z-index: 1;
	}

	.step:first-child::before {
		background: none;
	}
</style>
