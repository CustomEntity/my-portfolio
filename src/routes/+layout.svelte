<script lang="ts">
    import '../app.css';
    import {onMount} from 'svelte';
    import Navbar from '$lib/components/navigation/Navbar.svelte';
    import {fly} from 'svelte/transition';
    import Footer from '$lib/components/layout/Footer.svelte';
    import {page} from "$app/stores";
    import PageData = App.PageData;

    let headerHeight = 0;
    let isReady = false;

    export let data: PageData;

    onMount(() => {
        headerHeight = document.querySelector('header').clientHeight;
        isReady = true;
    });
</script>

<body class="bg-background md:max-w-[666px] md:mx-auto">
<header
        class="fixed top-0 left-0 right-0 z-50 pt-3 px-2 md:max-w-[666px] md:mx-auto before:content-[''] before:absolute before:h-[20px] before:block before:top-0 before:w-full before:left-1/2 before:transform before:-translate-x-1/2 before:bg-gradient-to-t before:from-background before:to-transparent before:backdrop-blur-md before:backdrop-saturate-150"
>
    <Navbar/>
</header>
    {#if isReady}
        {#key data.pathname}
        <main
                in:fly={{ y: 100, duration: 300, delay: 300 }}
                style="margin-top: {headerHeight + 25}px"
                class="flex flex-col w-full md:pt-4 mb-4 gap-14 justify-center overflow-y-auto"
        >
            <slot/>
        </main>
        <Footer/>
        {/key}
    {/if}
</body>

<style>
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: rgb(var(--color-background));
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(var(--color-accent) / 0.5);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(var(--color-accent) / 0.8);
    }
</style>
