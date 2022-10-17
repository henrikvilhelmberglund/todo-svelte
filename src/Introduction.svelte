<script>
  let name = "world";
  let src = "image.gif";
  let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<h1>Hello {name.toUpperCase()}!!!</h1>
<img {src} alt="a man dances" />
<p>This is a paragraph.</p>
<p>{@html string}</p>

<style>
  p {
    color: purple;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
