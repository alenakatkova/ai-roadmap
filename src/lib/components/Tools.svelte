<script>
	import img1 from '../images/story_01.jpg';
	import img2 from '../images/story_02.jpg';
	import img3 from '../images/story_03.jpg';
	import img4 from '../images/story_04.jpg';
	import img5 from '../images/story_05.jpg';
	import img6 from '../images/story_06.jpg';
	const tools = [
		{
			id: 1,
			// image: img1, // Image placeholder
			title: 'Create your Custom Solutions Database for Donor Management',
			// tags: [],
			// description: ''
		},
		{
			id: 2,
			// image: img1, // Image placeholder
			title: 'Reach the right people with what you do',
			// tags: [],
			// description: ''
		},
        // {
		// 	id: 3,
		// 	// image: img1, // Image placeholder
		// 	title: 'Unlock the Secrets of Generosity with AI-powered Analytics',
		// 	// tags: [],
		// 	// description: ''
		// },
        // {
		// 	id: 4,
		// 	// image: img1, // Image placeholder
		// 	title: 'ChatGPT',
		// 	// tags: [],
		// 	// description: ''
		// },
        // {
		// 	id: 5,
		// 	// image: img1, // Image placeholder
		// 	title: 'MidJourney',
		// 	// tags: [],
		// 	// description: ''
		// },
        
	];


    const toolsFiltered = [
		{
			id: 1,
			// image: img1, // Image placeholder
			title: 'Create your Custom Solutions Database for Donor Management',
			// tags: [],
			// description: ''
		},
		{
			id: 2,
			// image: img1, // Image placeholder
			title: 'Reach the right people with what you do',
			// tags: [],
			// description: ''
		},
        {
			id: 3,
			// image: img1, // Image placeholder
			title: 'Unlock the Secrets of Generosity with AI-powered Analytics',
			// tags: [],
			// description: ''
		},
        {
			id: 4,
			// image: img1, // Image placeholder
			title: 'ChatGPT',
			// tags: [],
			// description: ''
		},
        {
			id: 5,
			// image: img1, // Image placeholder
			title: 'MidJourney',
			// tags: [],
			// description: ''
		},
        
	];
</script>

<!-- <div class="grid grid-cols-1 gap-6 mr-4"> -->
    <div class="flex flex-col space-y-4 mr-4">
    <h2 class="text-l font-medium">Tools</h2>
	{#each tools as tool (tool.id)}
		<a
			href="/success-stories/ai-streamlines-paperwork"
			class="flex items-center h-28 transition-transform transform hover:scale-105 border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg cursor-pointer"
		>
			<!-- Image on the left -->
			<!-- <img class="w-24 h-24 object-cover" src={story.image} alt={story.title} /> -->

			<!-- Title on the right -->
			<div class="p-4 flex-1">
				<h2 class="text-m">{tool.title}</h2>
			</div>
		</a>
	{/each}
</div>
