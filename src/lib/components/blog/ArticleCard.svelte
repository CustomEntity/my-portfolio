<script lang="ts">
	export let imageUrl: string;
	export let title: string;
	export let description: string;
	export let publishDate: string = '';
	export let timeToRead: string = '';
	export let path: string;
	export let color: string = '#7D9499';

	let isHocus = false;
</script>

<a
	on:mouseover={() => (isHocus = true)}
	on:mouseout={() => (isHocus = false)}
	on:focus={() => (isHocus = true)}
	on:blur={() => (isHocus = false)}
	on:touchstart={() => (isHocus = true)}
	on:touchend={() => (isHocus = false)}
	href={path}
	class="flex flex-col gap-4 {isHocus
		? 'bg-[rgba(var(--article-color)/0.2)]'
		: ''} p-4 rounded-[0.25rem] transition-colors duration-200 ease-in-out lg:flex-row"
	style="--article-color: {color};"
>
	<img
		class="object-cover object-center rounded-[0.25rem] h-[144px] lg:w-[96px] {isHocus
			? 'border-[1px] border-[rgba(var(--article-color)/.24)]'
			: 'border border-transparent'} w-full lg:mr-4 lg:h-[72px]"
		src={imageUrl}
		alt={title}
	/>
	<div class="flex flex-col w-full justify-between gap-2">
		<p class="w-full text-lg text-primary-txt font-bold mt-[-6px] {isHocus ? 'underline' : ''}">
			{title}
		</p>
		<div class="flex flex-col gap-2">
			<p class="text-sm text-secondary-txt">{description}</p>
			<div class="flex text-xs text-secondary-txt">
				<p>{publishDate}</p>
				<p>&nbsp;•&nbsp;</p>
				<p>{timeToRead}</p>
			</div>
		</div>
	</div>
</a>
