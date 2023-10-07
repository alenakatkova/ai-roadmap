<script>
	import TellAboutYourselfForm from '$lib/components/TellAboutYourselfForm.svelte';
	import ChooseRelatedTasksForm from '$lib/components/ChooseRelatedTasksForm.svelte';

	function handleFiltersChange(event) {
		console.log(event.detail.filters);
	}
</script>

<div class="mx-auto flex space-x-8 p-4">
	<!-- Filters Block (Left Side) -->
	<div class="w-1/3 bg-gray-100 p-4 rounded-md">
		<h1 class="text-xl font-bold mb-4">Choose related tasks</h1>
		<ChooseRelatedTasksForm on:filtersChanged={handleFiltersChange} />
	</div>

	<!-- Textarea Form Block (Right Side) -->
	<div class="w-2/3">
		<TellAboutYourselfForm />
	</div>
</div>
