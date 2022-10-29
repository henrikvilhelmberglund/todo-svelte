<script>
  import { count } from "./stores.js";
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";
  import Resetter from "./Resetter.svelte";
</script>

// auto subscription for stores: reference with $ before the store name
<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
