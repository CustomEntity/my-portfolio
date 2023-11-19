<script lang="ts">
    import {onMount} from 'svelte';
    import {fly} from 'svelte/transition';
    import NavbarButton from '$lib/components/button/NavbarButton.svelte';


    export let pathName: string;

    const closeNavBarIfOpen = () => {
        if (isNavBarOpen) {
            toggleNavBar();
        }
    };


    $: if (pathName) {
        closeNavBarIfOpen();
    }

    let isNavBarOpen: boolean = false;
    let windowInnerWidth: number;

    let hasScrolled: boolean = false;

    const toggleNavBar = () => {
        isNavBarOpen = !isNavBarOpen;
        if (isNavBarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    onMount(() => {
        window.addEventListener('scroll', () => {
            hasScrolled = window.scrollY > 0;
        });
    });
</script>

<svelte:window
        bind:innerWidth={windowInnerWidth}
        on:resize={() => {
		if (windowInnerWidth > 768) {
			isNavBarOpen = false;
		}
	}}
/>

<nav
        class="flex flex-col w-full bg-nav-background/[0.65] px-3 py-2 border border-accent-dark/[0.12] backdrop-blur-[10px] backdrop-saturate-150 rounded-[10px] transition-all duration-200 hover:border-accent-dark/[0.24] hover:[box-shadow:0_0_8px_2px_rgba(var(--color-accent-dark)/0.16)] {isNavBarOpen
		? 'h-[calc(100vh-1rem)]'
		: 'h-[60px]'}
		{hasScrolled ? '[box-shadow:0_0_6px_1px_rgba(var(--color-accent-dark)/0.16)]' : ''}
"
>
    <div class="flex items-center justify-between w-full h-[42px]">
        <a
                href="/"
                class="flex items-center gap-3 rounded-[6px] hocus:bg-accent-dark/[0.1] h-full px-2"
        >
            <img src="favicon.png" alt="Flavio Moreno" class="w-6 h-6"/>
            <span
                    class="flex items-center h-full transform text-transparent font-bold bg-gradient-to-r from-gradient-brand to-gradient-blue bg-clip-text saturate-125 dark:saturate-150"
            >
				Flavio Moreno
			</span>
        </a>
        {#if windowInnerWidth !== undefined}
            {#if windowInnerWidth < 768}
                <div class="flex items-center gap-7">
                    <button
                            class="focus:bg-accent-dark/[0.1] rounded-sm focus:outline-none p-2 select-none"
                            on:click={toggleNavBar}
                    >
                        <svg
                                viewBox="0 0 24 24"
                                style="width:1.5rem;height:1.5rem"
                                role="presentation"
                                class="text-accent fill-accent transition-transform
               {isNavBarOpen ? 'rotate-45 scale-[1.15]' : 'rotate-0 scale-100'}"
                        >
                            {#if isNavBarOpen}
                                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" style="fill:currentColor"/>
                            {:else}
                                <path
                                        d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                                        style="fill:currentColor"
                                />
                            {/if}
                        </svg>
                    </button>
                </div>
            {:else}
                <ul class="flex items-center gap-2">
                    <li class="relative h-full">
                        <NavbarButton
                                containerClass="{pathName === '/about' ? 'bg-accent-dark/[0.1]' : ''}"
                                spanClass="{pathName === '/about' ? 'text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-blue to-gradient-green' : ''}"
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-blue to-gradient-green"
                                text="About"
                                title="About page"
                                href="/about"
                        />
                    </li>
                    <li>
                        <NavbarButton
                                containerClass="{pathName === '/blog' ? 'bg-accent-dark/[0.1]' : ''}"
                                spanClass="{pathName === '/blog' ? 'text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-yellow to-gradient-orange' : ''}"
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-yellow to-gradient-orange"
                                text="Blog"
                                title="Blog page"
                                href="/blog"
                        />
                    </li>
                    <li>
                        <NavbarButton
                                containerClass="{pathName === '/projects' ? 'bg-accent-dark/[0.1]' : ''}"
                                spanClass="{pathName === '/projects' ? 'text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-red to-gradient-purple' : ''}"
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-red to-gradient-purple"
                                text="Projects"
                                title="Projects page"
                                href="/projects"
                        />
                    </li>
                    <li>
                        <NavbarButton
                                containerClass="{pathName === '/contact' ? 'bg-accent-dark/[0.1]' : ''}"
                                spanClass="{pathName === '/contact' ? 'text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-brand to-gradient-blue' : ''}"
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-brand to-gradient-blue"
                                text="Contact"
                                title="Contact page"
                                href="/contact"
                        />
                    </li>
                </ul>
            {/if}
        {/if}
    </div>
    {#if isNavBarOpen}
        <div
                in:fly={{ y: 50, duration: 200 }}
                out:fly={{ y: -50, duration: 200 }}
                class="flex flex-col absolute justify-center h-full pl-7 gap-8 {isNavBarOpen
				? 'display:flex'
				: 'display:hidden'}"
        >
            <a
                    href="/about"
                    class="font-bold w-full text-secondary-txt px-3 py-2 rounded-[6px] select-none hocus:bg-accent-dark/[0.1] hocus:outline-none"
            >
				<span
                        class="bg-gradient-to-r bg-clip-text saturate-150 {pathName === '/about' ? 'text-transparent from-gradient-blue to-gradient-green' : 'text-secondary-txt'}"
                        style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
                >
					About</span
                >
            </a>
            <a
                    href="/blog"
                    class="font-bold w-full text-secondary-txt px-3 py-2 rounded-[6px] select-none hocus:bg-accent-dark/[0.1] hocus:outline-none"
            >
				<span
                        class="bg-gradient-to-r bg-clip-text saturate-150 {pathName === '/blog' ? 'text-transparent from-gradient-yellow to-gradient-orange' : 'text-secondary-txt'}"
                        style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
                >
					Blog</span
                >
            </a>

            <a
                    href="/projects"
                    class="font-bold w-full text-secondary-txt px-3 py-2 rounded-[6px] select-none hocus:bg-accent-dark/[0.1] hocus:outline-none"
            >
                <span
                        class="bg-gradient-to-r bg-clip-text saturate-150 {pathName === '/projects' ? 'text-transparent from-gradient-red to-gradient-purple' : 'text-secondary-txt'}"
                        style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
                >
                    Projects</span
                >
            </a>
            <a
                    href="/contact"
                    class="font-bold w-full text-secondary-txt px-3 py-2 rounded-[6px] select-none hocus:bg-accent-dark/[0.1] hocus:outline-none"
            >
                <span
                        class="bg-gradient-to-r bg-clip-text saturate-150 {pathName === '/contact' ? 'text-transparent from-gradient-brand to-gradient-blue' : 'text-secondary-txt'}"
                        style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
                >
                    Contact</span
                >
            </a>

        </div>
    {/if}
</nav>
