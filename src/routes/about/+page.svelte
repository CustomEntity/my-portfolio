<script lang="ts">
    export let data;
    let {about} = data;
</script>

<section id="contact" class="px-3 flex flex-col gap-4">
    <h2
            class="text-[28px] font-bold inline-block self-start [--text-shadow-color:var(--color-transparent)] [text-shadow:0.125rem_0.125rem_0_var(--text-shadow-color)] dark:[text-shadow:none] dark:text-transparent dark:bg-gradient-to-r dark:bg-clip-text dark:saturate-150 w-[unset] dark:from-gradient-blue dark:to-gradient-green"
            style="--text-shadow-color: var(--color-shadow-blue);"
    >
		<span
                data-br=":r4:"
                data-brr="1"
                style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
        >About</span
        >
    </h2>
    <div class="markdown-theme">
        <svelte:component this={about}/>
    </div>
</section>
