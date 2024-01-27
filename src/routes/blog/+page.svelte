<script lang="ts">
	import ArticleCard from '$lib/components/blog/ArticleCard.svelte';
	import { groupBy } from '../../utils/groupBy';

	async function loadBlogs() {
		const res = await fetch('/api/blog/');
		if (res.ok) {
			const data = (await res.json()) as {
				fileName: string;
				title: string;
				summary: string;
				date: string;
				path: string;
				color: string;
				timeToRead: number;
				imageUrl: string;
			}[];

			data.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			});

			const groupedBlogs = groupBy(data, (blog) => new Date(blog.date).getFullYear());

			const sortedYears = Object.keys(groupedBlogs).sort((a, b) => {
				return parseInt(b) - parseInt(a);
			});

			const sortedGroupedBlogs = sortedYears.map((year) => [year, groupedBlogs[year]]);

			await new Promise((resolve) => setTimeout(resolve, 250));
			return sortedGroupedBlogs as [string, typeof data][];
		}
		return [];
	}
</script>

<section id="blog" class="px-3 flex flex-col gap-4">
	<h2
		class="text-[32px] font-bold inline-block self-start [--text-shadow-color:var(--color-transparent)] dark:[text-shadow:none] dark:text-transparent dark:bg-gradient-to-r dark:bg-clip-text dark:saturate-150 w-[unset] dark:from-gradient-yellow dark:to-gradient-orange"
		style="--text-shadow-color: var(--color-shadow-yellow);"
	>
		<span
			data-br=":r4:"
			data-brr="1"
			style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
			>Blog</span
		>
	</h2>
	<div class="flex flex-col gap-4">
		{#await loadBlogs()}
			<div class=" items-end gap-3 mt-3 w-full flex">
				<h2 class="text-lg font-manrope font-bold leading-none">2024</h2>
				<hr class="w-full border-none m-0 -mt-0.5 h-px bg-divider flex-1" />
			</div>
			<div class="flex flex-col gap-4">
				<div role="status" class="flex flex-col gap-4 p-4 rounded-[0.25rem] lg:flex-row">
					<div
						class="flex items-center justify-center rounded-[0.25rem] h-[144px] w-full lg:w-[96px] lg:mr-4 lg:h-[72px] bg-gray-300 dark:bg-gray-700"
					>
						<svg
							class="w-10 h-10 text-gray-200 dark:text-gray-600"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18"
						>
							<path
								d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
							/>
						</svg>
					</div>
					<div class="flex flex-col flex-grow justify-between gap-2">
						<div class="bg-gray-200 rounded-full dark:bg-gray-700 h-3"></div>
						<div class="flex flex-col gap-2">
							<div
								class="text-sm text-secondary-txt bg-gray-200 rounded-full dark:bg-gray-700 w-full h-3"
							></div>
							<div
								class="flex text-xs text-secondary-txt bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 h-3"
							></div>
						</div>
					</div>
				</div>
				<div role="status" class="flex flex-col gap-4 p-4 rounded-[0.25rem] lg:flex-row">
					<div
						class="flex items-center justify-center rounded-[0.25rem] h-[144px] w-full lg:w-[96px] lg:mr-4 lg:h-[72px] bg-gray-300 dark:bg-gray-700"
					>
						<svg
							class="w-10 h-10 text-gray-200 dark:text-gray-600"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18"
						>
							<path
								d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
							/>
						</svg>
					</div>
					<div class="flex flex-col flex-grow justify-between gap-2">
						<div class="bg-gray-200 rounded-full dark:bg-gray-700 h-3"></div>
						<div class="flex flex-col gap-2">
							<div
								class="text-sm text-secondary-txt bg-gray-200 rounded-full dark:bg-gray-700 w-full h-3"
							></div>
							<div
								class="flex text-xs text-secondary-txt bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 h-3"
							></div>
						</div>
					</div>
				</div>
				<span class="sr-only">Loading...</span>
			</div>
			<div class="flex items-end gap-3 mt-3 w-full">
				<h2 class="text-lg font-manrope font-bold leading-none">2023</h2>
				<hr class="w-full border-none m-0 -mt-0.5 h-px bg-divider flex-1" />
			</div>
			<div class="flex flex-col gap-4">
				<div role="status" class="flex flex-col gap-4 p-4 rounded-[0.25rem] lg:flex-row">
					<div
						class="flex items-center justify-center rounded-[0.25rem] h-[144px] w-full lg:w-[96px] lg:mr-4 lg:h-[72px] bg-gray-300 dark:bg-gray-700"
					>
						<svg
							class="w-10 h-10 text-gray-200 dark:text-gray-600"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18"
						>
							<path
								d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
							/>
						</svg>
					</div>
					<div class="flex flex-col flex-grow justify-between gap-2">
						<div class="bg-gray-200 rounded-full dark:bg-gray-700 h-3"></div>
						<div class="flex flex-col gap-2">
							<div
								class="text-sm text-secondary-txt bg-gray-200 rounded-full dark:bg-gray-700 w-full h-3"
							></div>
							<div
								class="flex text-xs text-secondary-txt bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 h-3"
							></div>
						</div>
					</div>
				</div>
				<span class="sr-only">Loading...</span>
			</div>
		{:then data}
			{#each data as [year, blogs]}
				<div class="flex items-end gap-3 mt-3 w-full">
					<h2 class="text-lg font-manrope font-bold leading-none">{year}</h2>
					<hr class="w-full border-none m-0 -mt-0.5 h-px bg-divider flex-1" />
				</div>
				<div class="flex flex-col gap-4 py-2">
					{#each blogs as blog}
						<ArticleCard
							path="/blog/{blog.fileName.replace('.svx', '')}"
							color={blog.color}
							imageUrl={blog.imageUrl}
							title={blog.title}
							description={blog.summary}
							publishDate={new Date(blog.date).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric'
							})}
							timeToRead={blog.timeToRead + ' min read'}
						/>
					{/each}
				</div>
			{/each}
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</div>
</section>
