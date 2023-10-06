<script>
    import img1 from "../images/uc-1.jpg";
    let useCases = [
        {
            id: 1,
            image: img1, // Adjust with the path to your image
            title: "Use Case 1",
            tags: ["Tag1", "Tag2"],
            description: "This is a short description for use case 1."
        },
        {
            id: 2,
            image: img1, // Adjust with the path to your image
            title: "Use Case 2",
            tags: ["Tag2", "Tag3"],
            description: "This is a short description for use case 2."
        },
        {
            id: 3,
            image: img1, // Adjust with the path to your image
            title: "Use Case 3",
            tags: ["Tag2", "Tag3"],
            description: "This is a short description for use case 3."
        },
        {
            id: 4,
            image: img1, // Adjust with the path to your image
            title: "Use Case 4",
            tags: ["Tag2", "Tag3"],
            description: "This is a short description for use case 4."
        },
        {
            id: 5,
            image: img1, // Adjust with the path to your image
            title: "Use Case 5",
            tags: ["Tag2", "Tag3"],
            description: "This is a short description for use case 5."
        },
        {
            id: 6,
            image: img1, // Adjust with the path to your image
            title: "Use Case 6",
            tags: ["Tag2", "Tag3"],
            description: "This is a short description for use case 6."
        }
    ];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each useCases as useCase (useCase.id)}
    <div class="transition-transform transform hover:scale-105 border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg cursor-pointer">
        <img class="w-full h-48 object-cover" src={useCase.image} alt={useCase.title}>
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{useCase.title}</h2>
            <div class="mb-3">
                {#each useCase.tags as tag}
                    <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">{tag}</span>
                {/each}
            </div>
            <p class="text-gray-700">{useCase.description}</p>
        </div>
    </div>
    {/each}
</div>
