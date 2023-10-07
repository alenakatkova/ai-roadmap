<script>
	import img1 from '../images/story_01.jpg';
	import img2 from '../images/story_02.jpg';
	import img3 from '../images/story_03.jpg';
	import img4 from '../images/story_04.jpg';
	import img5 from '../images/story_05.jpg';
	import img6 from '../images/story_06.jpg';
	const successStories = [
		{
			id: 1,
			image: img1, // Image placeholder
			title: 'AI Streamlines Paperwork: Crafting Doc Drafts Made Easy',
			tags: ['DocumentAutomation', 'Efficiency', 'GenerativeAI'],
			description:
				'By leveraging generative AI, administrative tasks such as creating document drafts have become a breeze, reducing manual effort and errors.'
		},
		{
			id: 2,
			image: img2, // Image placeholder
			title: 'Bridging Donor Communications: Multilingual AI Magic',
			tags: ['DonorEngagement', 'Multilingual', 'Communication'],
			description:
				'Generative AI now assists in seamless communication with donors globally by instantly drafting responses in multiple languages.'
		},
		{
			id: 3,
			image: img3, // Image placeholder
			title: 'Generating Visual Content: AI-Powered Graphic Design',
			tags: ['VisualContent', 'Design', 'GenerativeAI'],
			description:
				'From infographics to event posters, AI now crafts engaging visuals tailored for philanthropic campaigns, reducing the need for professional designers.'
		},
		{
			id: 4,
			image: img4, // Image placeholder
			title: 'AI Helped Me Optimize Volunteer Allocation',
			tags: ['VolunteerManagement', 'Optimization', 'GenerativeAI'],
			description:
				"With AI's assistance, we were able to allocate volunteers to tasks that best matched their skills and availability, maximizing our on-ground impact."
		},
		{
			id: 5,
			image: img5, // Image placeholder
			title: 'AI Helped Me Craft Personalized Stories for Outreach',
			tags: ['Storytelling', 'Engagement', 'GenerativeAI'],
			description:
				"Using generative AI, I've been able to produce touching and tailored narratives for each community we engage with, enhancing connection and understanding."
		},
		{
			id: 6,
			image: img6, // Image placeholder
			title: 'Creating Virtual Training Scenarios with AI',
			tags: ['Training', 'Simulation', 'GenerativeAI'],
			description:
				"Generative AI has allowed us to simulate real-life training scenarios for our volunteers, ensuring they're well-prepared for the challenges they'll face in the field."
		}
	];
</script>


<!-- <div class="grid grid-cols-1 gap-4 mr-4"> -->
	<div class="flex flex-col space-y-6 mr-4">
	<h2 class="text-l font-medium">Success stories</h2>
	{#each successStories as story (story.id)}
		<a
			href="/success-stories/ai-streamlines-paperwork"
			class="pl-2 flex items-center h-28 transition-transform transform hover:scale-105 border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg cursor-pointer"
		>
			<!-- Image on the left -->
			<img class="w-24 h-24 object-cover" src={story.image} alt={story.title} />

			<!-- Title on the right -->
			<div class="p-4 flex-1">
				<h2 class="text-m">{story.title}</h2>
			</div>
		</a>
	{/each}
</div>
<!-- <a
			href="/success-stories/ai-streamlines-paperwork"
			class="transition-transform transform hover:scale-105 border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg cursor-pointer"
		>
			<img class="w-full h-48 object-cover" src={story.image} alt={story.title} />
			<div class="p-4">
				<h2 class="text-xl font-semibold mb-2">{story.title}</h2>
				<div class="mb-3">
					{#each story.tags as tag}
						<span
							class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"
							>{tag}</span
						>
					{/each}
				</div>
				<p class="text-gray-700">{story.description}</p> 
			</div>
		</a> -->
