<script lang="ts">
    export let title: string;
    export let ariaLabel: string;
    export let href: string;
    export let text: string;
</script>

<a
        class="inline-flex rounded-[6px] w-fit items-center justify-center min-h-[2.625rem] py-[6px] px-[12px] gap-[6px] font-bold tracking-wide transition truncate bg-accent border-none text-on-accent shadow hocus:transform hocus:-translate-y-1 hocus:no-underline hocus:shadow-md hocus:bg-accent-dark hocus:text-on-accent hocus:underline-offset-2 hocus:decoration-2 "
        aria-label={ariaLabel}
        rel="noopener noreferrer"
        {title}
        {href}
>
    <slot name="icon"/>
    {text}
</a>
