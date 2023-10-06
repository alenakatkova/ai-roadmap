<script>
    import image from "../../../lib/images/story_01.jpg"
    import author from "../../../lib/images/author.jpg"
    let title = "How AI Transformed My Document Drafting Routine";
    let description = "As someone responsible for crafting numerous documents daily, I found a lifeline in generative AI. Here's my journey from manual drafting to AI-powered efficiency.";
    let authorDetails = {
        name: "Emily Watson",
        photo: author,
        jobTitle: "Document Specialist",
        organisation: "Charity Horizon Foundation"
    };
    let challengesFaced = [
        "Spending hours on manual drafting, leaving little time for other tasks.",
        "Struggling to maintain a consistent format and tone across documents.",
        "Repetitive tasks felt like they were consuming my productivity."
    ];
    let solution = {
        introduction: "Desperate for a solution, I turned to generative AI, akin to ChatGPT.",
        steps: [
            "I fed the AI model with samples of my previous documents as templates.",
            "Developed an interface where I could easily input specific details.",
            "The AI generated drafts which I just had to give final touches to."
        ],
        outcome: "The result? An 80% reduction in drafting time, and consistently high-quality documents."
    };
    let prompts = [
        {
            question: "Hey AI, can you draft a thank-you letter for a donor named John Smith who donated $500?",
            aiResponse: "Absolutely! 'Dear John Smith, Thank you for your generous donation of $500. Your kindness propels our cause forward...'"
        },
        {
            question: "Need an agenda for our annual charity gala. Can you help?",
            aiResponse: "Of course! '1. Welcome Speech, 2. Celebrating This Year's Achievements, 3. A Special Thanks to Our Donors...'"
        },
        {
            question: "Quickly summarize the main goals of our upcoming outreach program for me.",
            aiResponse: "Certainly! 'The program is designed to uplift underserved communities, focusing on education, healthcare, and vocational skills.'"
        }
    ];
    let benefits = [
        "Rapid document creation, saving hours of my day.",
        "Every document now has a consistent tone and format.",
        "I've reclaimed time to focus on tasks that truly matter."
    ];
    let conclusion = "Integrating AI into my document drafting routine was a game-changer. If you're drowning in paperwork like I was, give AI a shot. It's the future, and it's here to help!";

    let complexConversation = [
        {
            speaker: "Me",
            content: "AI, I have to draft a policy for our new remote work arrangement due to the pandemic, but I'm not sure where to begin. Can you help?"
        },
        {
            speaker: "AI",
            content: "Of course! Let's start with some basics. Who is the policy intended for? And what are the primary objectives you wish to achieve with this policy?"
        },
        {
            speaker: "Me",
            content: "It's intended for all our staff members. The objectives are to ensure clarity in communication, maintain productivity, and ensure everyone's well-being."
        },
        {
            speaker: "AI",
            content: "Got it. Here's a rough structure to get you started: 1. Introduction and Purpose, 2. Eligibility, 3. Communication Guidelines, 4. Productivity Measures, 5. Health and Well-being Support. How does that sound?"
        },
        {
            speaker: "Me",
            content: "Sounds like a great start! Can you draft the first section for me?"
        },
        {
            speaker: "AI",
            content: "'Introduction and Purpose: Due to the unforeseen circumstances of the ongoing pandemic, we're transitioning to a remote work model. This policy aims to offer clarity, maintain our work ethos, and ensure the well-being of every team member.'"
        }
    ];
</script>

<div class="p-6 border rounded-lg shadow-md bg-white">
    <img class="w-full h-48 object-cover mb-4" src={image} alt={title}>
    <h2 class="text-2xl font-bold mb-3">{title}</h2>
    <p class="text-gray-600 mb-5">{description}</p>

    <div class="mt-8 mb-8 p-6 flex items-center space-x-6">
        <img class="w-20 h-20 rounded-full object-cover" src={authorDetails.photo} alt={authorDetails.name}>
        <div>
            <h3 class="text-xl font-bold">{authorDetails.name}</h3>
            <p class="text-gray-600 mb-1">{authorDetails.jobTitle}</p>
            <p class="text-gray-500">{authorDetails.organisation}</p>
        </div>
    </div>

    <div class="mb-4">
        <h3 class="font-semibold mb-2">Challenges I Faced:</h3>
        <ul class="list-disc pl-5">
            {#each challengesFaced as challenge}
                <li class="mb-1">{challenge}</li>
            {/each}
        </ul>
    </div>

    <div class="mb-4">
        <h3 class="font-semibold mb-2">My Solution:</h3>
        <p class="mb-2">{solution.introduction}</p>
        <ul class="list-disc pl-5 mb-2">
            {#each solution.steps as step}
                <li class="mb-1">{step}</li>
            {/each}
        </ul>
        <p>{solution.outcome}</p>
    </div>

    <div class="mb-4">
        <h3 class="font-semibold mb-2">Conversations with My AI:</h3>
        {#each prompts as prompt}
            <div class="mb-3 border rounded p-3">
                <p class="font-semibold">{prompt.question}</p>
                <p class="text-gray-600">{prompt.aiResponse}</p>
            </div>
        {/each}

        <div class="mt-8 p-6 border rounded-lg shadow-md bg-white">
            <h3 class="text-xl font-bold mb-4">Complex Interaction with My AI:</h3>
            {#each complexConversation as entry}
                <div class="mb-4 p-4 {entry.speaker === 'Me' ? 'bg-blue-100' : 'bg-green-100'} rounded">
                    <p class="font-semibold">{entry.speaker}:</p>
                    <p class="text-gray-700 mt-1">{entry.content}</p>
                </div>
            {/each}
        </div> 
    </div>

    <div class="mb-4">
        <h3 class="font-semibold mb-2">The Benefits I Experienced:</h3>
        <ul class="list-disc pl-5">
            {#each benefits as benefit}
                <li class="mb-1">{benefit}</li>
            {/each}
        </ul>
    </div>

    <div class="border-t pt-3">
        <p>{conclusion}</p>
    </div>
</div>
