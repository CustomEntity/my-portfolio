<script lang="ts">
    import TransparentButton from "$lib/components/button/TransparentButton.svelte";
    import ProjectCard from "$lib/components/project/ProjectCard.svelte";

    const valodleSpan = `<div class="flex items-center gap-1">
<svg style="width: 0.95rem; height: 0.95rem" viewBox="0 -4 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -4563.000000)" style="fill: currentColor;">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M216,4409.00052 C216,4410.14768 215.105,4411.07682 214,4411.07682 C212.895,4411.07682 212,4410.14768 212,4409.00052 C212,4407.85336 212.895,4406.92421 214,4406.92421 C215.105,4406.92421 216,4407.85336 216,4409.00052 M214,4412.9237 C211.011,4412.9237 208.195,4411.44744 206.399,4409.00052 C208.195,4406.55359 211.011,4405.0763 214,4405.0763 C216.989,4405.0763 219.805,4406.55359 221.601,4409.00052 C219.805,4411.44744 216.989,4412.9237 214,4412.9237 M214,4403 C209.724,4403 205.999,4405.41682 204,4409.00052 C205.999,4412.58422 209.724,4415 214,4415 C218.276,4415 222.001,4412.58422 224,4409.00052 C222.001,4405.41682 218.276,4403 214,4403" id="view_simple-[#815]">
</path>
            </g>
        </g>
    </g>
</svg>
<span>+100k</span>
</div>`;
</script>

<section id="projects" class="px-3 flex flex-col gap-4 ">

    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
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

    <div class="flex flex-col p-1">
        <ProjectCard
                link="https://valodle.eu"
                title="Valodle"
                titleTooltip="Valodle has more than 40k unique visitors per month"
                description="Daily guess Valorant agents with clues, emojis, ablities..."
                imageUrl="valorant.png"
                color="255 104 104"
                spanContent={valodleSpan}
        />
        <ProjectCard
                link="https://vyntr.app"
                title="VyNtr"
                description="AI-driven LinkedIn outreach to convert more leads with our smart chatbot."
                imageUrl="vyntr.png"
                color="97 13 227"
        />
    </div>
</section>