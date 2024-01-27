<script>
	import { getContext } from 'svelte';
	import { TABS } from './TabView.svelte';

	export let title = 'Tab';
	const { registerTab, activeTab } = getContext(TABS);

	registerTab(title);
</script>

{#if $activeTab === title}
	<slot />
{/if}
