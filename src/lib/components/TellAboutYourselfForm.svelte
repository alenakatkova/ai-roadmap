<script>
	let description = '';

	function handleSubmit() {
		// You can handle the form submission here.
		console.log(description);
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
	<label for="description" class="block text-xl font-medium">Describe in a few sentences with what you need help:</label>
	<textarea
		id="description"
		bind:value={description}
		class="w-full p-3 border rounded-md"
		rows="4"
		placeholder="Your description here..."
	></textarea>
	<button
		type="submit"
		class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800"
	>
		Submit
	</button>
</form>

