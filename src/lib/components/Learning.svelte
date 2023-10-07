<script>
	import img1 from '../images/story_01.jpg';
	import img2 from '../images/story_02.jpg';
	import img3 from '../images/story_03.jpg';
	import img4 from '../images/story_04.jpg';
	import img5 from '../images/story_05.jpg';
	import img6 from '../images/story_06.jpg';
	const learnings = [
		{
			id: 1,
			// image: img1, // Image placeholder
			title: 'AI Strategy Workshops',
			// tags: [],
			// description: ''
		},
		{
			id: 2,
			// image: img1, // Image placeholder
			title: 'Collaborative Learning',
			// tags: [],
			// description: ''
		},
        // {
		// 	id: 3,
		// 	// image: img1, // Image placeholder
		// 	title: 'AI and Global Challenges',
		// 	// tags: [],
		// 	// description: ''
		// },
	];

    const learningsFiltered = [
		{
			id: 1,
			// image: img1, // Image placeholder
			title: 'AI Strategy Workshops',
			// tags: [],
			// description: ''
		},
		{
			id: 2,
			// image: img1, // Image placeholder
			title: 'Collaborative Learning',
			// tags: [],
			// description: ''
		},
        {
			id: 3,
			// image: img1, // Image placeholder
			title: 'AI and Global Challenges',
			// tags: [],
			// description: ''
		},
	];
</script>

<!-- <div class="grid grid-cols-1 gap-6"> -->
    <div class="flex flex-col space-y-4">
    <h2 class="text-l font-medium">Learning</h2>
	{#each learnings as learning (learning.id)}
		<a
			href="/success-stories/ai-streamlines-paperwork"
			class="flex items-center h-28 transition-transform transform hover:scale-105 border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg cursor-pointer"
		>
			<!-- Image on the left -->
			<!-- <img class="w-24 h-24 object-cover" src={story.image} alt={story.title} /> -->

			<!-- Title on the right -->
			<div class="p-4 flex-1">
				<h2 class="text-m">{learning.title}</h2>
			</div>
		</a>
	{/each}
</div>
