<script>
  import Introduction from "./Introduction.svelte";
  import Nested from "./Nested.svelte";
  import Inner from "./Inner.svelte";
  import Outer from "./Outer.svelte";
  import CustomButton from "./CustomButton.svelte";

  import Statements from "./Statements.svelte";
  import UpdatingArraysAndObjects from "./UpdatingArraysAndObjects.svelte";
  import Else from "./Else.svelte";
  import ElseIfBlocks from "./ElseIfBlocks.svelte";
  import EachBlocks from "./EachBlocks.svelte";
  import AwaitBlocks from "./AwaitBlocks.svelte";
  import InlineHandlers from "./InlineHandlers.svelte";
  import EventModifiers from "./EventModifiers.svelte";
  import BindingTextInputs from "./BindingTextInputs.svelte";
  import BindingNumericInputs from "./BindingNumericInputs.svelte";
  import BindingCheckboxInput from "./BindingCheckboxInput.svelte";
  import BindingGroupInputs from "./BindingGroupInputs.svelte";
  import BindingTextAreaInput from "./BindingTextAreaInput.svelte";
  import BindingSelectBindings from "./BindingSelectBindings.svelte";
  import BindingEachBlock from "./BindingEachBlock.svelte";
  import BindingMediaElements from "./BindingMediaElements.svelte";

  function handleClick() {
    alert("Button Clicked");
  }

  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<main>
  <Introduction />

  <Nested answer="42" />
  <Nested />

  <Statements />
  <UpdatingArraysAndObjects />

  <Inner on:message={handleMessage} />
  <Outer on:message={handleMessage} />

  <Else />
  <ElseIfBlocks />
  <EachBlocks />
  <AwaitBlocks />
  <InlineHandlers />
  <EventModifiers />
  <CustomButton on:click={handleClick} />
  <BindingTextInputs />
  <BindingNumericInputs />
  <BindingCheckboxInput />
  <BindingGroupInputs />
  <BindingTextAreaInput />
  <BindingSelectBindings />
  <BindingEachBlock />
  <BindingMediaElements />
</main>

<style>
</style>
