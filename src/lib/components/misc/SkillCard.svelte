<script lang="ts">
	export let name: string;
	export let skillColorRgb: string = '49 120 198';
</script>

<span
	class="flex items-center justify-center py-[0.4375rem] px-[0.6875rem] text-sm rounded-full border border-divider bg-accent-dark/[0.012] text-secondary-txt transition leading-[1.65] gap-[8px] truncate dark:bg-accent-dark/[0.036] hocus:underline-none hocus:text-primary-txt hocus:transform hocus:scale-[1.015] hocus:bg-[rgba(var(--skill-color)/0.12)] dark:hocus:bg-[rgba(var(--skill-color)/0.18)] hocus:border-[rgba(var(--skill-color)/0.56)]"
	style="--skill-color: {skillColorRgb};"
>
	<slot name="icon" />
	<span class="font-[500]">{name}</span>
</span>
