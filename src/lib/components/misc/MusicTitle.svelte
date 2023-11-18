<script lang="ts">
	import {onMount, tick} from 'svelte';
	import {Marquee} from 'svelte-fast-marquee';

	export let title: string = '';
    export let image: string = '';

    let wrapper: HTMLDivElement | null = null;
    let marquee: HTMLDivElement | null = null;
    let titleSpans: HTMLSpanElement[] = [];
    let repetitions = 2;

    onMount(() => {
        if (!wrapper || !marquee) {
            return;
        }
        if (titleSpans.length === 0) {
            return;
        }

        const wrapperWidth = wrapper.clientWidth;
        const titleWidth = titleSpans[0].clientWidth;

        console.log(wrapperWidth, titleWidth);
        repetitions = Math.ceil(wrapperWidth / titleWidth) + 1;
        console.log(repetitions);

        tick().then(() => {
            const positions = new Array(titleSpans.length).fill(0);

            const speed = 1;
            setInterval(() => {
                for (let i = 0; i < titleSpans.length; i++) {
                    const span = titleSpans[i];
                    const spanWidth = span.clientWidth;

                    positions[i] -= speed;
                    span.style.transform = `translateX(${positions[i]}px)`;

                    if (positions[i] <= -spanWidth) {
                        positions[i] = 0;
                    }
                }
            }, 1000 / 40);
        });
    });
</script>

<div class="flex justify-center items-center overflow-hidden gap-2">
    <img class="rounded-full rotate-infinite w-8 h-8" src={image} alt="Music Cover"/>
    <Marquee class="hover:underline hover:underline-offset-4 text-tertiary-txt font-medium" pauseOnHover={true}
             gap="2rem">
        {title}
    </Marquee>
</div>

<style lang="postcss">
    .rotate-infinite {
        animation: rotate 15s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
