<script lang="ts">
	import PageData = App.PageData;
	import { fly } from 'svelte/transition';

	export let data: PageData;

	console.log(data.metadata.color);
</script>

<figure
	class="overflow-hidden -z-1 h-[85vh] max-h-[384px] w-full absolute top-0 left-0 pointer-events-none blur transition saturate-125 opacity-65 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]"
>
	<img
		alt="Article cover"
		data-nozoom="true"
		width="640"
		height="433"
		class="object-cover object-center h-full w-full"
		src={data.metadata.imageUrl}
		style="color: transparent;"
	/>
</figure>
<div class="px-3 flex flex-col gap-4 overflow-hidden">
	<div class="flex flex-col gap-3 text-shadow shadow-background py-2">
		<a
			title="Go back to blog posts list"
			class="inline-block font-medium text-accent transition-colors hocus:text-accent-dark self-start no-underline hocus:underline mb-2"
			href="/blog">← Back to blog posts list</a
		>
	</div>
	<div in:fly={{ y: 100, duration: 500, delay: 100 }}>
		<div class="flex flex-col gap-3 text-shadow shadow-background -mt-2">
			<h1
				class="text-shadow dark:text-[rgba(var(--title-color))] dark:saturate-150 dark:!shadow-background"
				style="--title-color: {data.metadata.color};"
			>
				{data.metadata.title}
			</h1>
			<p class="text-secondary-txt">{data.metadata.summary}</p>
			<p
				class="flex flex-row items-center gap-2 text-tertiary-txt tabular-nums flex-wrap text-3xs mobile-md:text-2xs"
			>
				<span
					title="This blog post was published on {new Date(data.metadata.date).toLocaleDateString(
						'en-US',
						{
							month: 'long',
							day: 'numeric',
							year: 'numeric'
						}
					)}"
					aria-label="This blog post was published on {new Date(
						data.metadata.date
					).toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric'
					})}"
					><span class="sr-only">Published on</span><span
						>{new Date(data.metadata.date).toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric'
						})}</span
					></span
				><span aria-hidden="true" class="font-bold">·</span><span
					title="It takes {data.metadata.timeToRead} minutes to read this blog post"
					aria-label="It takes 1.76 minutes to read this blog post"
					>{data.metadata.timeToRead} minutes read</span
				>
			</p>
		</div>
		<div class="markdown-theme">
			{@html data.articleCode}
		</div>
	</div>
</div>
