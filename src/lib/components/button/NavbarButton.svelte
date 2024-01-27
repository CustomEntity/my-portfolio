<script lang="ts">
	export let text: string;
	export let href: string;
	export let title: string;
	export let spanClass: string = '';
	export let hocusSpanClass: string;
	export let containerClass: string = '';

	let isHocus: boolean = false;
</script>

<a
	on:mouseover={() => (isHocus = true)}
	on:mouseout={() => (isHocus = false)}
	on:focus={() => (isHocus = true)}
	on:blur={() => (isHocus = false)}
	on:touchstart={() => (isHocus = true)}
	on:touchend={() => (isHocus = false)}
	{title}
	{href}
	class="{containerClass} font-bold text-secondary-txt px-3 py-2 rounded-[6px] select-none hocus:bg-accent-dark/[0.1]"
>
	<span
		class="{spanClass}{isHocus ? hocusSpanClass ?? 'text-accent-txt' : ''}"
		style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
	>
		{text}</span
	>
</a>
