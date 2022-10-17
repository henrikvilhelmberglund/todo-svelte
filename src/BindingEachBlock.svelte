<script>
  let todos = [
    { done: false, text: "finish Svelte tutorial" },
    { done: false, text: "build an app" },
    { done: false, text: "world domination" },
  ];

  function add() {
    todos = todos.concat({ done: false, text: "" });
  }

  function clear() {
    todos = todos.filter((t) => !t.done);
  }

  $: remaining = todos.filter((t) => !t.done).length;
</script>

<h2>Todos</h2>

{#each todos as todo}
  <div class:done={todo.done}>
    <input type="checkbox" bind:checked={todo.done} />

    <input placeholder="What needs to be done?" bind:value={todo.text} />
  </div>
{/each}

<p>{remaining} remaining</p>

<button on:click={add}> Add new </button>

<button on:click={clear}> Clear completed </button>

<!-- 
    Note that interacting with these <input> elements will mutate the array. If you prefer to work with immutable data, you should avoid these bindings and use event handlers instead.
   -->
<style>
  .done {
    opacity: 0.4;
  }
</style>
