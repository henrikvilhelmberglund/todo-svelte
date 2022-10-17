<script>
  import Nested from "./Nested.svelte";
  import Info from "./Info.svelte";
  import Thing from "./Thing.svelte";
  import Inner from "./Inner.svelte";
  import Outer from "./Outer.svelte";
  import CustomButton from "./CustomButton.svelte";

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

  let things = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ];

  function handleClick() {
    things = things.slice(1);
  }

  let m = { x: 0, y: 0 };

  function handleClickNew() {
    alert("no more alerts");
  }

  function handleMessage(event) {
    alert(event.detail.text);
  }

  function handleClickNew2() {
    alert("Button Clicked");
  }

  let nameNew = "world";

  let a = 1;
  let b = 2;

  let yes = false;

  let scoops = 1;
  let flavours = ["Mint choc chip"];

  let menu = ["Cookies and cream", "Mint choc chip", "Raspberry ripple"];

  function join(flavours) {
    if (flavours.length === 1) return flavours[0];
    return `${flavours.slice(0, -1).join(", ")} and ${
      flavours[flavours.length - 1]
    }`;
  }

  let value = `Some words are *italic*, some are **bold**`;

  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selected;

  let answer = "";

  function handleSubmit() {
    alert(
      `answered question ${selected.id} (${selected.text}) with "${answer}"`
    );
  }
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

  <button on:click={handleClick}> Remove first thing </button>

  {#each things as thing (thing.id)}
    <Thing name={thing.name} />
  {/each}

  <!-- await stuff
  {#await promise}
	<p>...waiting</p>
  {:then number}
	<p>The number is {number}</p>
  {:catch error}
	<p style="color: red">{error.message}</p>
  {/await}
  
  or
  
  {#await promise then value}
	<p>the value is {value}</p>
  {/await}
  
-->

  <div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
    The mouse position is {m.x} x {m.y}
  </div>

  <button on:click|once={handleClickNew}> Click me </button>

  <!-- The full list of modifiers: preventDefault — calls event.preventDefault()
  before running the handler. Useful for client-side form handling, for example.
  stopPropagation — calls event.stopPropagation(), preventing the event reaching
  the next element passive — improves scrolling performance on touch/wheel
  events (Svelte will add it automatically where it's safe to do so) nonpassive
  — explicitly set passive: false capture — fires the handler during the capture
  phase instead of the bubbling phase (MDN docs) once — remove the handler after
  the first time it runs self — only trigger handler if event.target is the
  element itself trusted — only trigger handler if event.isTrusted is true. I.e.
  if the event is triggered by a user action. You can chain modifiers together,
  e.g. on:click|once|capture=~{}.  -->

  <Inner on:message={handleMessage} />
  <Outer on:message={handleMessage} />

  <CustomButton on:click={handleClickNew2} />

  <input bind:value={nameNew} />
  <h2>Hello {nameNew}!</h2>

  <label>
    <input type="number" bind:value={a} min="0" max="10" />
    <input type="range" bind:value={a} min="0" max="10" />
  </label>

  <label>
    <input type="number" bind:value={b} min="0" max="10" />
    <input type="range" bind:value={b} min="0" max="10" />
  </label>

  <p>{a} + {b} = {a + b}</p>

  <label>
    <input type="checkbox" bind:checked={yes} />
    Yes! Send me regular email spam
  </label>

  {#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
  {:else}
    <p>
      You must opt in to continue. If you're not paying, you're the product.
    </p>
  {/if}

  <button disabled={!yes}> Subscribe </button>

  <h2>Size</h2>

  <label>
    <input type="radio" bind:group={scoops} name="scoops" value={1} />
    One scoop
  </label>

  <label>
    <input type="radio" bind:group={scoops} name="scoops" value={2} />
    Two scoops
  </label>

  <label>
    <input type="radio" bind:group={scoops} name="scoops" value={3} />
    Three scoops
  </label>

  <h2>Flavours</h2>

  {#each menu as flavour}
    <label>
      <input
        type="checkbox"
        bind:group={flavours}
        name="flavours"
        value={flavour}
      />
      {flavour}
    </label>
  {/each}

  {#if flavours.length === 0}
    <p>Please select at least one flavour</p>
  {:else if flavours.length > scoops}
    <p>Can't order more flavours than scoops!</p>
  {:else}
    <p>
      You ordered {scoops}
      {scoops === 1 ? "scoop" : "scoops"}
      of {join(flavours)}
    </p>
  {/if}

  {@html value}

  <textarea bind:value />

  <h2>Insecurity questions</h2>

  <form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected} on:change={() => (answer = "")}>
      {#each questions as question}
        <option value={question}>
          {question.text}
        </option>
      {/each}
    </select>

    <input bind:value={answer} />

    <button disabled={!answer} type="submit"> Submit </button>
  </form>

  <p>selected question {selected ? selected.id : "[waiting...]"}</p>
</main>

<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
  div {
    width: 100%;
    height: 100%;
  }

  label {
    display: flex;
  }
  input,
  p {
    margin: 6px;
  }

  textarea {
    width: 100%;
    height: 200px;
  }

  input {
    display: block;
    width: 500px;
    max-width: 100%;
  }
</style>
