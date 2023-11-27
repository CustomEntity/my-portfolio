<script lang="ts">
    export let color: string = '77 138 240';
    export let imageUrl: string = '';
    export let title: string = '';
    export let link: string = '';
    export let description: string = '';
    export let titleTooltip: string = '';
    export let spanContent: string = '';

    let isHocus = false;
</script>

<a
        on:mouseover={() => (isHocus = true)}
        on:mouseout={() => (isHocus = false)}
        on:focus={() => (isHocus = true)}
        on:blur={() => (isHocus = false)}
        href={link}
        style="--project-color: {color}"
        class="flex items-center rounded-[10px] gap-3 p-2 transition-colors duration-200 hocus:bg-[rgb(var(--project-color)/0.18)] focus:outline-offset-0"
>
    <img
            class="h-[54px] w-[54px] rounded-[10px] object-cover transition-colors duration-200  {isHocus ? 'bg:transparent' : 'bg-[rgb(var(--project-color)/0.18)'}]"
            src={imageUrl}
            alt={title}
    />
    <div class="flex flex-col gap-[1px]">
        <div class="flex gap-2">
            <h3 class="font-bold {isHocus ? 'text-[rgb(var(--project-color))]' : 'text-primary-txt'}">{title}</h3>
            {#if spanContent}
				<span
                        title={titleTooltip}
                        class="flex items-center gap-1 text-[13.5px] text-primary-txt/80 bg-[rgb(var(--project-color)/0.18)] rounded-[10px] px-2 py-[1px] transition-all duration-200"
                >
					{@html spanContent}
				</span>
            {/if}
        </div>
        <p class="text-[13.5px] transition-all duration-200 text-primary-txt/80">{description}</p>
    </div>
</a>

<style>
    a:hover h3 {
        color: rgb(var(--project-color) / 0.8);
        font-weight: 800;
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-thickness: 2px;
    }

    a:hover img {
        background-color: transparent;
    }
</style>
