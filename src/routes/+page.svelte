<script>
	import TellAboutYourselfForm from '../lib/components/TellAboutYourselfForm.svelte';
	import SuccessStories from '../lib/components/SuccessStories.svelte';
	import Tools from '../lib/components/Tools.svelte';
	import Learning from '../lib/components/Learning.svelte';

	let isDescriptionSubmitted = false;
	function handleDescriptionSubmit(event) {
		isDescriptionSubmitted = true;
		console.log(event.detail.text);
	}
</script>

<div class="flex">
	<!-- Left Column (Text) -->
	<div class="flex-1">
		<h1 class="text-2xl font-bold mb-4">AI Empowerment for Philanthropy</h1>
		<p class="text-gray-700">
			Discover the transformative potential of AI through our specialized tutorials, exclusively tailored for the philanthropic sector. With a personalized learning roadmap crafted to address your unique challenges and tasks, we guide you step-by-step. 
		</p>
		<p class="text-gray-700 mt-4">
			Harness AI to streamline processes, amplify your impact, and transform your organization's operations. Begin your enlightening journey with us today.
		</p>
	</div>

	<!-- Right Column (Video) -->
	<div class="flex-1 p-4">
		<iframe
			width="500"
			height="250"
			src="https://www.youtube.com/embed/Kf319Gh2voc?si=_4gngCLG4pRR5FBT"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</div>

<TellAboutYourselfForm on:describe={handleDescriptionSubmit} />

<div class="flex justify-between mt-6">
	<div class="flex-1"><SuccessStories shouldFilter={isDescriptionSubmitted}/></div>
	<div class="flex-1"><Tools shouldFilter={isDescriptionSubmitted}/></div>
	<div class="flex-1"><Learning shouldFilter={isDescriptionSubmitted} /></div>
</div>

{#if isDescriptionSubmitted}
	<div class="flex justify-end mt-2">
		<a
			href="/personalized-roadmap"
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>
			Go to your personalized roadmap
		</a>
	</div>
{/if}
