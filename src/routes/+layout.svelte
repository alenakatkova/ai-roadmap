<script>
	import '../app.css';
	import { siteMap } from '../lib/constants';
import logo from "$lib/images/logo.png";
	let showModal = false;
</script>

<style>
    /* Light gray gradient background */
    nav {
		background-color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	a {
    color: #8D6E63; /* A deep golden brown */
    transition: all 0.3s ease;
	}

	a:hover {
		color: #473a27; /* A light gold for hover effect */
		background-color: #FFF8E1;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	a.active {
		border-bottom: 2px solid #8D6E63;
		padding-bottom: 2px;
	}
</style>

<div>
	<nav class="bg-white text-purple-600 shadow-md">
		<div class="container mx-auto p-2">
			<div class="flex justify-between">
				<!-- <a
					href="/"
					class="px-4 py-2 rounded transition-transform transform hover:scale-105 hover:shadow-md duration-300"
				>
					CHAINGE
				</a> -->

				<button
					on:click={() => showModal = true}
				
				>
					<img src={logo} width="80px" alt="CHAINGE" />
				</button>


				<div class="flex flex-wrap justify-center space-x-4">
					{#each siteMap as page}
						<a
							href={page.link}
							class="px-4 py-2 rounded transition-transform transform hover:scale-105 hover:shadow-md duration-300"
						>
							{page.name}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</nav>

	<main class="container mx-auto p-4 mt-6">
		<slot />
	</main>
</div>

{#if showModal}
		<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
			<div class="bg-white p-8 rounded shadow-lg">
				<button 
					on:click={() => showModal = false}
					class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 focus:outline-none"
				>
					&times;
				</button>
				<img src={logo} width="700px" alt="Big CHAINGE logo" />
			</div>
		</div>
	{/if}
