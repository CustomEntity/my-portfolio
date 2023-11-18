<script lang="ts">
	import SocialLinks from '$lib/components/social-links/SocialLinks.svelte';
	import {onDestroy, onMount} from 'svelte';
	import MusicTitle from "$lib/components/misc/MusicTitle.svelte";

	const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    let track: any = {};

    async function getCurrentPlaying() {
        const trackResponse = await fetch('/api/current-playing-song');
        track = await trackResponse.json();
    }

    let trackInterval: NodeJS.Timeout;

    onMount(() => {
        trackInterval = setInterval(getCurrentPlaying, 2000);
    });

    onDestroy(() => {
        clearInterval(trackInterval);
    });
</script>


<!--<div class="flex flex-wrap gap-10">
	<ul class="flex flex-col gap-3">
		<li class=" text-tertiary-txt font-medium">About</li>
		<li class=" text-tertiary-txt font-medium">Blog</li>
		<li class=" text-tertiary-txt font-medium">Projects</li>
	</ul>
</div>-->


<footer>
    <div class="flex flex-col border-t border-divider p-4 gap-6">
        <div class="grid grid-cols-2 gap-6">
            <div class="flex flex-col gap-3">
                <span class="text-tertiary-txt font-medium">About</span>
                <a href="/about" class="text-tertiary-txt font-medium">Blog</a>
                <a href="/about#contact" class="text-tertiary-txt font-medium">Projects</a>

            </div>
            <div class="flex flex-col gap-3">
                <span class="text-tertiary-txt font-medium">Vouches</span>
                <a href="/about#hire" class="text-tertiary-txt font-medium">Hire me</a>
                {#if track && track.item}
                    <MusicTitle
                            image={track.item && track.item.album.images[2].url}
                            title="{track.item && track.item.name} - {track.item && track.item.artists[0].name}"
                    />
                {/if}
            </div>
        </div>


        <div class="flex justify-between items-center">
            <a href="/" class="flex items-center gap-2">
                <img src="f_icon.png" alt="Flavio Moreno" class="w-6"/>
                <span
                        class="h-full transform text-transparent font-bold bg-gradient-to-r from-gradient-brand to-gradient-blue bg-clip-text saturate-125 dark:saturate-150"
                >
				Flavio Moreno
			</span>
            </a>
            <div class="flex items-center gap-4">
                <SocialLinks/>
                <button
                        on:click={scrollToTop}
                        title="Scroll back to top"
                        aria-label="Scroll back to top"
                        class="p-0 inline-flex items-center justify-center w-[30px] h-[30px] rounded-[6px] text-tertiary-txt hocus:bg-accent-dark/[0.1] hocus:no-underline hocus:text-accent"
                >
                    <svg viewBox="0 0 24 24" style="width:1.35rem;height:1.35rem" role="presentation">
                        <path
                                d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14zm-3.3-5.7c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L12 11.4l-3.3 3.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l4-4c.4-.4 1-.4 1.4 0l4 4z"
                                style="fill:currentColor"
                        />
                    </svg>
                </button>
            </div>
        </div>


    </div>
</footer>
