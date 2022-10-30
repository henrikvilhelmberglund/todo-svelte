<script>
  let count = 0;
  function incrementCount() {
    count += 1;
  }

  $: doubled = count * 2;

  $: {
    console.log("the count is " + count);
    console.log("nice block");
  }
  $: if (count >= 10) {
    alert("count is dangerously high!");
    count = 9;
  }
</script>

<button on:click={incrementCount}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<p>{count} doubled is {doubled}</p>
