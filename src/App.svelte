<script>
  import Nested from "./Nested.svelte";
  import Info from "./Info.svelte";
  import { each } from "svelte/internal";
  let name = "world";
  let src = "image.gif";
  let string = `this string contains some <strong>HTML!!!</strong>`;
  let count = 0;
  $: doubled = count * 2;
  function incrementCount() {
    count += 1;
  }
  $: {
    console.log("the count is " + count);
    console.log("nice block");
  }
  $: if (count >= 10) {
    console.log("count is dangerously high!");
    count = 9;
  }
  let numbers = [1, 2, 3, 4];

  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }
  $: sum = numbers.reduce((t, n) => t + n, 0);
  const pkg = {
    name: "svelte",
    version: 3,
    speed: "blazing",
    website: "https://svelte.dev",
  };
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }

  let x = 7;

  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ];
</script>

<main>
  <h1>Hello {name.toUpperCase()}!!!</h1>
  <img {src} alt="a man dances" />
  <p>This is a paragraph.</p>
  <Nested answer="42" />
  <Nested />
  <p>{@html string}</p>
  <button on:click={incrementCount}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
  </button>
  <p>{count} doubled is {doubled}</p>
  <p>{numbers.join(" + ")} = {sum}</p>

  <button on:click={addNumber}> Add a number </button>
  <Info {...pkg} />
  {#if user.loggedIn}
    <button on:click={toggle}> Log out </button>
  {:else}
    <button on:click={toggle}> Log in </button>
  {/if}

  {#if x > 10}
    <p>{x} is greater than 10</p>
  {:else if 5 > x}
    <p>{x} is less than 5</p>
  {:else}
    <p>{x} is between 5 and 10</p>
  {/if}

  <h2>The Famous Cats of YouTube</h2>

  <ul>
    {#each cats as cat, i}
      <li>
        <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
          {i + 1}: {cat.name}
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
