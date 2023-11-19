<script lang="ts">
	import PageData = App.PageData;
	import {superForm} from 'sveltekit-superforms/client';

	export let data: PageData;

    let submissionStatus = '';

    const {form, errors, constraints, enhance} = superForm(data.form, {
        validators: data.form.contraints,
        resetForm: true,
        onSubmit: (event) => {
            submissionStatus = 'submitting';
        },
        onUpdated: async ({form}) => {
            if (form.valid) {
                submissionStatus = 'success';
                await new Promise((resolve) => setTimeout(resolve, 2000));
            }
            submissionStatus = '';
        },
        delayMs: 500
    });
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
        >Contact</span
        >
    </h2>
    <form class="flex flex-col gap-4" method="POST" use:enhance>
        <input
                type="text"
                name="name"
                placeholder="Name"
                aria-invalid={$errors.name ? 'true' : undefined}
                bind:value={$form.name}
                {...$constraints.name}
                class="bg-accent-dark/10 p-2 border-2 border-gray-300 dark:border-gray-700 rounded-md"
        />
        {#if errors.name}
            <span class="error">{errors.name}</span>
        {/if}
        <input
                type="email"
                name="email"
                placeholder="Email"
                aria-invalid={$errors.email ? 'true' : undefined}
                bind:value={$form.email}
                {...$constraints.email}
                class="bg-accent-dark/10 p-2 border-2 border-gray-300 dark:border-gray-700 rounded-md"
        />
        {#if errors.email}
            <span class="error">{errors.email}</span>
        {/if}
        <textarea
                type="text"
                name="message"
                placeholder="Message"
                aria-invalid={$errors.message ? 'true' : undefined}
                bind:value={$form.message}
                {...$constraints.message}
                class="bg-accent-dark/10 p-2 border-2 border-gray-300 dark:border-gray-700 rounded-md"
        />
        <button
                type="submit"
                class="p-2 border-2 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none"
        >
            {#if submissionStatus === 'submitting'}
				<span>
					<span class="animate-pulse">Submitting</span>
				</span>
            {:else if submissionStatus === 'success'}
				<span
                        class="font-bold inline-block self-start [--text-shadow-color:var(--color-transparent)] [text-shadow:0.125rem_0.125rem_0_var(--text-shadow-color)] dark:[text-shadow:none] dark:text-transparent dark:bg-gradient-to-r dark:bg-clip-text dark:saturate-150 w-[unset] dark:from-gradient-blue dark:to-gradient-green"
                        style="--text-shadow-color: var(--color-shadow-blue);"
                >
					<span
                            data-br=":r4:"
                            data-brr="1"
                            style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance;"
                    >Submitted
					</span>
				</span>
            {:else}
                <span>Submit</span>
            {/if}
        </button>
    </form>
</section>
