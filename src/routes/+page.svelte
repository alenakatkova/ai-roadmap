<script>
	import SiteMap from '$lib/components/SiteMap.svelte';
	import TellAboutYourselfForm from '../lib/components/TellAboutYourselfForm.svelte';
	import SuccessStories from '../lib/components/SuccessStories.svelte';
	import Tools from '../lib/components/Tools.svelte';
	import Learning from '../lib/components/Learning.svelte';
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

<TellAboutYourselfForm />
<!-- <div class="flex col-2">
	<div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		
	</div>
	<TellAboutYourselfForm />
</div> -->


<!-- <h2 class="text-xl font-medium mb-4 mt-8">Success stories, tools, and learning paths</h2> -->
<div class="flex justify-between mt-6">
<div class="flex-1"><SuccessStories /></div>
<div class="flex-1"><Tools /></div>
<div class="flex-1"><Learning /></div>
</div>


<a href="/roadmap" class="text-blue-500 hover:underline">Go to your personalized roadmap</a>
