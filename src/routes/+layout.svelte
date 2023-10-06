<script>
	import '../app.css';
    import {siteMap} from '../lib/constants';
</script>


<div>
    <nav class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-md">
        <div class="container mx-auto p-4">
            <div class="flex flex-wrap justify-between space-x-4">
                {#each siteMap as page}
                    <a 
                        href={page.link} 
                        class="hover:bg-white hover:text-purple-600 px-4 py-2 rounded transition-transform transform hover:scale-105 hover:shadow-md duration-300"
                    >
                        {page.name}
                    </a>
                {/each}
            </div>
        </div>
    </nav>
    
    <main class="container mx-auto p-4 mt-6">
        <slot/>
    </main>
</div>