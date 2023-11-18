<script>
	let isDark = true;

	if (localStorage.getItem('theme') === 'light') {
		isDark = false;
		document.body.classList.add('theme-light');
	} else {
		isDark = true;
	}

	const toggleTheme = () => {
		if (isDark) {
			document.body.classList.add('theme-light');
			localStorage.setItem('theme', 'light');
			isDark = false;
		} else {
			document.body.classList.remove('theme-light');
			localStorage.setItem('theme', 'dark');
			isDark = true;
		}
	};
</script>

<button on:click={toggleTheme} class="tew"> Toggle theme </button>
