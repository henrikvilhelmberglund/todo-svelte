<script>
  import Nested from "./Nested.svelte";
  let name = "world";
  let src = "/public/image.gif";
</script>

<main>
  <h1>Hello {name.toUpperCase()}!!!</h1>
  <img {src} alt="a man dances" />
  <p>This is a paragraph.</p>
  <Nested />
</main>

<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
