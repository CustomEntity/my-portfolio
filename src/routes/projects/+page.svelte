<script lang="ts">
	import TransparentButton from '$lib/components/button/TransparentButton.svelte';
	import TabView from '$lib/components/tabview/TabView.svelte';
	import TabPanel from '$lib/components/tabview/TabPanel.svelte';
	import ProjectCardList from '$lib/components/project/ProjectCardList.svelte';
</script>

<section id="projects" class="px-3 flex flex-col gap-4">
	<div class="flex flex-row justify-between items-center gap-4">
		<h2
			class="text-[32px] font-bold inline-block self-start [--text-shadow-color:var(--color-transparent)] [text-shadow:0.125rem_0.125rem_0_var(--text-shadow-color)] dark:[text-shadow:none] dark:text-transparent dark:bg-gradient-to-r dark:bg-clip-text dark:saturate-150 w-[unset] dark:from-gradient-red dark:to-gradient-purple"
			style="--text-shadow-color: var(--color-shadow-red);"
		>
			<span
				data-br=":r4:"
				data-brr="1"
				style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
				>Projects</span
			>
		</h2>
		<TransparentButton
			title="Flavio's resume pdf file"
			ariaLabel="Flavio's resume pdf file"
			href="/resume.pdf"
			text="Resume"
		>
			<span slot="icon">
				<svg viewBox="0 0 24 24" style="width:1.35rem;height:1.35rem" role="presentation">
					<path
						d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M9.54 15.65L11.63 17.74L10.35 19L7 15.65L10.35 12.3L11.63 13.56L9.54 15.65M17 15.65L13.65 19L12.38 17.74L14.47 15.65L12.38 13.56L13.65 12.3L17 15.65Z"
						style="fill:currentColor"
					/>
				</svg>
			</span>
		</TransparentButton>
	</div>
	<div class="w-full">
		<TabView>
			<TabPanel title="All">
				<ProjectCardList selectedCategory="all" />
			</TabPanel>
			<TabPanel title="Academic">
				<ProjectCardList selectedCategory="academic" />
			</TabPanel>
			<TabPanel title="Personal">
				<ProjectCardList selectedCategory="personal" />
			</TabPanel>
			<TabPanel title="Professional">
				<ProjectCardList selectedCategory="professional" />
			</TabPanel>
		</TabView>
	</div>
</section>
