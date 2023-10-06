<script>
	import { taskFilters } from '../constants';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let selectedFilters = [];

	function handleCheckboxChange() {
		dispatch('filtersChanged', {
      filters: selectedFilters,
    });
	}

	function resetFilters() {
		selectedFilters = [];
		dispatch('filtersChanged', selectedFilters); // If you want to inform the parent when filters are reset
	}
</script>

<form class="space-y-4">
	{#each taskFilters as filter}
		<div class="mb-4">
			<h2 class="text-lg font-semibold mb-2">{filter.name}</h2>
			<ul>
				{#each filter.options as option}
					{#if option.options}
						<li class="mb-2">
							<span class="block font-medium mb-1">{option.name}</span>
							<ul class="space-y-1">
								{#each option.options as subOption}
									<li>
										<label class="flex items-center space-x-2">
											<input type="checkbox" bind:group={selectedFilters} class="form-checkbox text-blue-500 h-5 w-5" value={subOption.value} on:change={handleCheckboxChange} />
											<span>{subOption.name}</span>
										</label>
									</li>
								{/each}
							</ul>
						</li>
					{:else}
						<li class="mb-2">
							<label class="flex items-center space-x-2">
								<input type="checkbox" bind:group={selectedFilters} class="form-checkbox text-blue-500 h-5 w-5" value={option.value} on:change={handleCheckboxChange} />
								<span>{option.name}</span>
							</label>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/each}
	<button type="button" on:click={resetFilters} class="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-800">
		Reset Filters
	</button>
</form>
