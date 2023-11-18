<script lang="ts">
	import { onMount } from 'svelte';

	let text = 'Hello world!';
	let logos: HTMLUListElement | null = null;

	onMount(() => {
		if (!logos) return;
		const ulClone = logos.cloneNode(true);
		ulClone.setAttribute('aria-hidden', 'true');
		logos.parentNode.insertBefore(ulClone, logos.nextSibling);
	});
</script>

<div
	class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
>
	<ul
		bind:this={logos}
		class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll whitespace-nowrap"
	>
		<li>
			<span class="">{text}</span>
		</li>
	</ul>
</div>

<style>
	.animate-infinite-scroll {
		animation: infinite-scroll 20s linear infinite;
	}

	@keyframes infinite-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
