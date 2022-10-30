<script>
  let darkMode;

  function toggleDarkMode() {
    if (darkMode) {
      darkMode = false;
    } else {
      darkMode = true;
    }
  }
</script>

<button on:click={toggleDarkMode}>Toggle dark mode </button>
<svelte:head>
  <!-- elements go here -->

  {#if darkMode}
    <link rel="stylesheet" href="src/tutorial/dark-theme.css" />
  {:else}
    <link rel="stylesheet" href="src/tutorial/light-theme.css" />
  {/if}
</svelte:head>
<!-- for some reason doesn't trigger a transition when going from dark to light -->

<h1>Hello world!</h1>
