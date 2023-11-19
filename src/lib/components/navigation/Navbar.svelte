<script lang="ts">
    import {onMount} from 'svelte';
    import {fly} from 'svelte/transition';
    import NavbarButton from '$lib/components/button/NavbarButton.svelte';

    let isNavBarOpen: boolean = false;
    let windowInnerWidth: number;

    let hasScrolled: boolean = false;

    const toggleNavBar = () => {
        isNavBarOpen = !isNavBarOpen;
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
        class="flex flex-col w-full bg-nav-background/[0.65] px-4 border border-accent-dark/[0.12] backdrop-blur-[10px] backdrop-saturate-150 rounded-[10px] transition-all duration-200 hover:border-accent-dark/[0.24] hover:[box-shadow:0_0_8px_2px_rgba(var(--color-accent-dark)/0.16)] {isNavBarOpen
		? 'h-[calc(100vh-1rem)]'
		: 'h-[60px] '}
		{hasScrolled ? '[box-shadow:0_0_6px_1px_rgba(var(--color-accent-dark)/0.16)]' : ''}
"
>
    <div class="flex items-center justify-between w-full h-[60px]">
        <a href="/" class="flex items-center gap-2">
            <img src="f_icon.png" alt="Flavio Moreno" class="w-6"/>
            <span
                    class="h-full transform text-transparent font-bold bg-gradient-to-r from-gradient-brand to-gradient-blue bg-clip-text saturate-125 dark:saturate-150"
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
                                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" style="fill:currentColor"/>
                            {/if}
                        </svg>
                    </button>
                </div>
            {:else}
                <ul class="flex items-center gap-2">
                    <li class="relative h-full">
                        <NavbarButton
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-blue to-gradient-green"
                                text="About" title="About page" href="/about"/>
                    </li>
                    <li>
                        <NavbarButton
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-yellow to-gradient-orange"
                                text="Blog" title="Blog page" href="/blog"/>
                    </li>
                    <li>
                        <NavbarButton
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-red to-gradient-purple"
                                text="Projects" title="Projects page" href="/projects"/>
                    </li>
                    <li>
                        <NavbarButton
                                hocusSpanClass="text-transparent bg-gradient-to-r bg-clip-text saturate-150 from-gradient-brand to-gradient-blue"
                                text="Contact" title="Contact page" href="/contact"/>
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
            <a href="/blog" class="flex items-center gap-2">
                <svg
                        viewBox="0 0 24 24"
                        style="width:1.35rem;height:1.35rem"
                        role="presentation"
                        class="text-white fill-white"
                >
                    <path
                            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zM9.5 8.5h5v1h-5v-1zm0 2h5v1h-5v-1zm0 2h5v1h-5v-1zm0 2h3v1h-3v-1z"
                            style="fill:currentColor"
                    />
                </svg>
                <span class="text-white">About</span>
            </a>
            <a href="/blog" class="flex items-center gap-2">
                <svg
                        viewBox="0 0 24 24"
                        style="width:1.35rem;height:1.35rem"
                        role="presentation"
                        class="text-white fill-white"
                >
                    <path
                            d="M12 2L1 21h22M12 2v16M12 6l7.5 5M12 6L4.5 11M12 10l7.5 5M12 10L4.5 15M12 14l7.5 5M12 14L4.5 19"
                            style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"
                    />
                </svg>
                <span class="text-white">Blog</span>
            </a>
            <a href="/blog" class="flex items-center gap-2">
                <svg
                        viewBox="0 0 24 24"
                        style="width:1.35rem;height:1.35rem"
                        role="presentation"
                        class="text-white fill-white"
                >
                    <path
                            d="M12 2L1 21h22M12 2v16M12 6l7.5 5M12 6L4.5 11M12 10l7.5 5M12 10L4.5 15M12 14l7.5 5M12 14L4.5 19"
                            style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2"
                    />
                </svg>
                <span class="text-white">Projects</span>
            </a>
        </div>
    {/if}
</nav>
