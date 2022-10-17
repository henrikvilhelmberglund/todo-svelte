<script>
  import Nested from "./Nested.svelte";
  import Info from "./Info.svelte";
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
</main>

<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
