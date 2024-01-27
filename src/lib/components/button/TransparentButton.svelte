<script lang="ts">
	export let title: string;
	export let ariaLabel: string;
	export let href: string;
	export let text: string;
</script>

<a
	class="hocus:underline-offset-2 hocus:decoration-2 inline-flex w-fit items-center justify-center min-h-[2.625rem] rounded-[6px] py-[6px] px-[12px] gap-[6px] font-bold tracking-wide transition truncate bg-transparent border border-divider text-secondary-txt shadow-sm hocus:transform hocus:-translate-y-1 hocus:no-underline hocus:shadow hocus:bg-accent-dark/[0.12] hocus:border-accent-dark hocus:text-primary-txt"
	aria-label={ariaLabel}
	target="_blank"
	rel="noopener noreferrer"
	{href}
	{title}
>
	<slot name="icon" />
	{text}
</a>
