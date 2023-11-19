<script lang="ts">
	export let data;
	let { about } = data;
</script>

<section id="contact" class="px-3 flex flex-col gap-4">
	<div class="markdown-theme">
		<svelte:component this={about} />
	</div>
</section>
