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
		<h1 class="text-2xl font-bold mb-4">Your Title Here</h1>
		<p class="text-gray-700">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
			vestibulum. Donec in efficitur leo. Pellentesque habitant morbi tristique senectus et netus et
			malesuada fames ac turpis egestas.
		</p>
		<p class="text-gray-700 mt-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
			vestibulum.
		</p>
	</div>

	<!-- Right Column (Video) -->
	<div class="flex-1 p-4">
		<iframe
			width="500"
			height="200"
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
			href="/roadmap"
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>
			Go to your personalized roadmap
		</a>
	</div>
{/if}
