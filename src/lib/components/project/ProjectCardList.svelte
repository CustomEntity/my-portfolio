<script lang="ts">
	import ProjectCard from '$lib/components/project/ProjectCard.svelte';

	export let selectedCategory: string = 'all';

	const projects = [
		{
			link: 'https://valodle.eu',
			title: 'Valodle',
			titleTooltip: 'Valodle has more than 40k unique visitors per month',
			description: 'Daily guess Valorant agents with clues, emojis, ablities...',
			imageUrl: 'valorant.png',
			color: '255 104 104',
			category: 'personal',
			additionalContent: `<div class="flex items-center gap-1">
            <svg style="width: 0.95rem; height: 0.95rem" viewBox="0 -4 20 20" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>

                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -4563.000000)"
                       style="fill: currentColor;">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M216,4409.00052 C216,4410.14768 215.105,4411.07682 214,4411.07682 C212.895,4411.07682 212,4410.14768 212,4409.00052 C212,4407.85336 212.895,4406.92421 214,4406.92421 C215.105,4406.92421 216,4407.85336 216,4409.00052 M214,4412.9237 C211.011,4412.9237 208.195,4411.44744 206.399,4409.00052 C208.195,4406.55359 211.011,4405.0763 214,4405.0763 C216.989,4405.0763 219.805,4406.55359 221.601,4409.00052 C219.805,4411.44744 216.989,4412.9237 214,4412.9237 M214,4403 C209.724,4403 205.999,4405.41682 204,4409.00052 C205.999,4412.58422 209.724,4415 214,4415 C218.276,4415 222.001,4412.58422 224,4409.00052 C222.001,4405.41682 218.276,4403 214,4403"
                                  id="view_simple-[#815]">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
            <span>+100k</span>
        </div>`
		},
		{
			link: 'https://vyntr.app',
			title: 'VyNtr',
			description: 'AI-driven LinkedIn outreach to convert more leads with our smart chatbot.',
			imageUrl: 'vyntr.png',
			color: '97 13 227',
			category: 'professional'
		}
	];
</script>

<div class="flex flex-col">
	<div class="flex flex-col">
		{#each projects.filter((p) => selectedCategory === 'all' || p.category === selectedCategory) as project}
			<ProjectCard
				link={project.link}
				title={project.title}
				description={project.description}
				imageUrl={project.imageUrl}
				color={project.color}
				hasAdditionalContent={project.additionalContent != null}
			>
				{@html project.additionalContent}
			</ProjectCard>
		{/each}
	</div>
</div>
