<script lang="ts" context="module">
	export const TABS = {};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	let tabs: string[] = [];
	const activeTab: Writable<string | null> = writable(null);

	function setActiveTab(tab: string): void {
		activeTab.set(tab);
	}

	function registerTab(tab: string): void {
		if (tabs.includes(tab)) {
			return;
		}
		tabs = [...tabs, tab];
		if (tabs.length === 1) {
			setActiveTab(tab);
		}
	}

	setContext(TABS, {
		setActiveTab,
		registerTab,
		activeTab
	});
</script>

<div class="tab-view overflow-hidden">
	<div class="flex items-center border-b border-divider">
		{#each tabs as tab}
			<button
				on:click={() => activeTab.set(tab)}
				class="px-3 py-2 outline-none font-manrope font-semibold text-[14.55px] hocus:bg-accent-dark/[0.08] {tab ===
				$activeTab
					? 'text-accent border-b-2 border-accent'
					: 'text-secondary-txt'}"
			>
				<span>
					{tab}
				</span>
			</button>
		{/each}
	</div>

	{#key $activeTab}
		<div in:fly={{ y: 50, duration: 150, delay: 150 }} class="py-2">
			<slot />
		</div>
	{/key}
</div>
