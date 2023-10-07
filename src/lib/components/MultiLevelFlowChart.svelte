<script>
    export let isPersonalized = false;

    let personalizedRoadmap = [
		{
			title: "Beginner's Introduction",
			content: [
				'What is AI? A simple overview.',
				'Understanding the potential of Generative AI.'
			]
		},
		{
			title: 'Setting Up the Basics',
			content: [
				'Choosing the right AI tools for your needs.',
			]
		},
		{
			title: 'Text Generation with AI',
			content: [
				'Understanding text prompts and how they influence outputs.',
				'Editing and refining AI-generated text.'
			]
		},
		{
			title: 'Integrating AI Tools in Workflow',
			content: [
				"Customizing AI outputs for better alignment with your organization's goals.",
			]
		},
		{
			title: 'Ethical Use and Limitations',
			content: [
				'Understanding potential biases in AI and their implications.',
				'Handling privacy concerns and data security.'
			]
		}
	];

    let roadmap = [
		{
			title: "Beginner's Introduction",
			content: [
				'What is AI? A simple overview.',
				'Brief on Machine Learning vs. Deep Learning.',
				'Real-world examples of AI in philanthropic work.',
				'Understanding the potential of Generative AI.'
			]
		},
		{
			title: 'Setting Up the Basics',
			content: [
				'Choosing the right AI tools for your needs.',
				'Getting familiar with user-friendly AI platforms.',
				'Setting up your first generative AI model (like ChatGPT).'
			]
		},
		{
			title: 'Text Generation with AI',
			content: [
				'Understanding text prompts and how they influence outputs.',
				'Crafting effective prompts for document drafting.',
				'Editing and refining AI-generated text.'
			]
		},
		{
			title: 'Diving into Image Generation',
			content: [
				'Basics of AI-driven image creation.',
				'Using tools like DALL·E for creating images from text prompts.',
				'Understanding the limitations and potential biases.'
			]
		},
		{
			title: 'Integrating AI Tools in Workflow',
			content: [
				'Automating repetitive tasks using AI.',
				"Customizing AI outputs for better alignment with your organization's goals.",
				'Collaborating with colleagues using AI tools.'
			]
		},
		{
			title: 'Advanced AI Applications',
			content: [
				'Predictive analytics for better resource allocation.',
				'Custom training your AI models with organization-specific data.',
				'Exploring advanced platforms and AI services for specialized needs.'
			]
		},
		{
			title: 'Ethical Use and Limitations',
			content: [
				'Understanding potential biases in AI and their implications.',
				'Ensuring ethical use of AI-generated content.',
				'Handling privacy concerns and data security.'
			]
		}
	];

    let tutorialID = 1;
    const tutorials = roadmap.map(section => {
        return {
            stepTitle: section.title,
            tutorials: section.content.map(tutorial => {
                return {
                    id: tutorialID++,
                    title: tutorial,
                    link: `/tutorial/${tutorialID}` // Replace with the appropriate link structure
                };
            })
        };
    });

    const personalizedTutorials = personalizedRoadmap.map(section => {
        return {
            stepTitle: section.title,
            tutorials: section.content.map(tutorial => {
                return {
                    id: tutorialID++,
                    title: tutorial,
                    link: `/tutorial/${tutorialID}` // Replace with the appropriate link structure
                };
            })
        };
    });

    $: renderedTutorials = isPersonalized ? personalizedTutorials : tutorials;
</script>

<style>
    /* Here you may want to add some specific styles not covered by Tailwind CSS */
    .arrow {
        width: 0; 
        height: 0; 
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 30px solid #ddd; /* You can change the arrow color here */
        margin: 0 auto;
    }
</style>

<div class="flex flex-col items-center space-y-8">
    {#each renderedTutorials as tutorialGroup, index (tutorialGroup.stepTitle)}
        <div class="flex flex-col items-center space-y-4">
            <!-- Step Title -->
            <h3 class="text-xl font-semibold mb-4">{tutorialGroup.stepTitle}</h3>

            <!-- Tutorials for this step -->
            <div class="flex space-x-4">
                {#each tutorialGroup.tutorials as tutorial}
                    <a href={tutorial.link} class="bg-white p-4 border rounded-md shadow-md transition-shadow hover:shadow-lg transition-colors hover:text-blue-600">
                        {tutorial.title}
                    </a>
                {/each}
            </div>
        </div>
        
        <!-- Arrow between sections -->
        {#if index < renderedTutorials.length - 1}
            <div class="arrow"></div>
        {/if}
    {/each}
</div>

<!-- <script>
    import FlowChartItem from './FlowChartItem.svelte';

    export let items = [
    { id: 1, title: "Beginner's Introduction: What is AI? A simple overview.", link: "/tutorial/1" },
    { id: 2, title: "Beginner's Introduction: Brief on Machine Learning vs. Deep Learning.", link: "/tutorial/2" },
    // ... and so on
];
</script>

<div class="flowchart">
    {#each items as item (item.id)}
        <FlowChartItem { ...item } />
        {#if item !== items[items.length - 1]}
            <div class="arrow mb-4">
                <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 11v.01M12 17v.01M12 3v1m-6.938 1h13.856a8 8 0 017.94 7.174l.26 1.948a8.003 8.003 0 01-7.412 8.855l-1.721.129a8.001 8.001 0 01-8.35-7.31L3.06 12 5 12a6 6 0 106-6z"></path>
                </svg>
            </div>
        {/if}
    {/each}
</div>

<style>
    /* Add any custom styles for the flowchart here */
</style> -->
