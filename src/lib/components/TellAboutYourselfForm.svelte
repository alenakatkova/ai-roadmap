<script>
	let description = '';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function handleSubmit() {
		dispatch('describe', {
			text: description
		});
	}
</script>

<div class="w-full mt-6">
	<h2 for="description" class="block text-xl mb-4 font-medium">Tell us why are you here:</h2>
	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<div class="flex">
			<textarea
				id="description"
				bind:value={description}
				class="w-full p-3 border rounded-md mr-4"
				rows="1"
				placeholder="What are you working on..."
			/>
			<button
				type="submit"
				class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800"
			>
				Submit
			</button>
		</div>
	</form>
</div>
