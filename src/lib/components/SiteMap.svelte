<script>
    import { siteMap } from '../constants';
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
	{#each siteMap as section}
		<div class="border p-4 rounded">
			<div class="text-xl font-bold mb-2">{section.name}</div>
			{#each section.subpages as page}
				<a
					href={page.link}
					class="block text-blue-500 hover:text-blue-700 mb-1 transition-colors duration-150"
				>
					{page.name}
				</a>
				{#if page.subpages && page.subpages.length}
					<ul class="ml-4">
						{#each page.subpages as subPage}
							<li class="mb-1">
								<a
									href={subPage.link}
									class="block text-blue-400 hover:text-blue-600 transition-colors duration-150"
								>
									{subPage.name}
								</a>
								{#if subPage.subpages && subPage.subpages.length}
									<ul class="ml-4">
										{#each subPage.subpages as deepSubPage}
											<li class="mb-1">
												<a
													href={deepSubPage.link}
													class="block text-blue-300 hover:text-blue-500 transition-colors duration-150"
												>
													{deepSubPage.name}
												</a>
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</div>
	{/each}
</div>