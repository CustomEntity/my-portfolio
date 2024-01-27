<script lang="ts">
	import { RecruitmentStatus } from '../../../types/recruitment.type';

	export let recruitmentStatus: RecruitmentStatus = RecruitmentStatus.OPEN;

	let isHocus = false;
</script>

<div
	on:focus={() => (isHocus = true)}
	on:blur={() => (isHocus = false)}
	on:mouseenter={() => (isHocus = true)}
	on:mouseleave={() => (isHocus = false)}
	class="absolute flex items-center justify-center gap-1 bottom-0 left-[120px] md:left-auto md:right-[120px] md:flex-row-reverse whitespace-pre rounded-full font-semibold text-secondary-txt {isHocus
		? 'bg-divider'
		: 'bg-background'}"
>
	<div class="flex justify-center items-center h-8 w-8 rounded-full relative">
		<span
			class="relative inline h-4 w-4 rounded-full opacity-75 animate-ping {recruitmentStatus ===
			RecruitmentStatus.OPEN
				? 'bg-green-600'
				: recruitmentStatus === RecruitmentStatus.UNAVAILABLE
					? 'bg-red-600'
					: 'bg-yellow-600'}"
		/>
		<span
			class="inline absolute rounded-full h-6 w-6 {recruitmentStatus === RecruitmentStatus.OPEN
				? 'bg-green-500'
				: recruitmentStatus === RecruitmentStatus.UNAVAILABLE
					? 'bg-red-500'
					: 'bg-yellow-500'}"
		/>
	</div>
	<span class="text-[13px] font-bold mr-2 md:mr-0 md:ml-2 {isHocus ? 'block' : 'hidden'}">
		{recruitmentStatus === RecruitmentStatus.OPEN
			? 'Open for work'
			: recruitmentStatus === RecruitmentStatus.UNAVAILABLE
				? 'Unavailable for work'
				: 'In vacation'}
	</span>
</div>
