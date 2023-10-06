<script>
	import '../app.css';
    import {siteMap} from '../lib/constants';
</script>


<div class="min-h-screen bg-gray-100">
    <nav class="bg-blue-600 text-white shadow-md mb-10">
        <div class="mx-auto p-4">
            <div class="flex flex-wrap justify-between">
                {#each siteMap as page}
                    <a href={page.link} class="hover:bg-blue-500 px-4 py-2 rounded transition-colors duration-300">
                        {page.name}
                    </a>
                {/each}
            </div>
        </div>
    </nav>
    <main class="container mx-auto p-4 bg-white rounded shadow">
        <slot></slot> <!-- This is where the content of the child components will be injected. -->
    </main>
</div>
