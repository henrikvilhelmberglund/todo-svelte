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
  import BindingDimensions from "./BindingDimensions.svelte";
  import BindingThis from "./BindingThis.svelte";
  import BindingComponent from "./BindingComponent.svelte";
  import BindingComponentInstance from "./BindingComponentInstance.svelte";
  import LifecycleonMount from "./LifecycleonMount.svelte";
  import LifecycleonDestroy from "./LifecycleonDestroy.svelte";
  import LifecyclebeforeUpdateafterUpdate from "./LifecyclebeforeUpdateafterUpdate.svelte";
  import Lifecycletick from "./Lifecycletick.svelte";
  import StoreWritable from "./StoreWritable.svelte";
  import StoreReadable from "./StoreReadable.svelte";
  import StoreCustom from "./StoreCustom.svelte";
  import BindingStore from "./BindingStore.svelte";
  import MotionTweened from "./MotionTweened.svelte";
  import MotionSpring from "./MotionSpring.svelte";
  import Transitions from "./Transitions.svelte";
  import TransitionsCustomCSS from "./TransitionsCustomCSS.svelte";
  import TransitionsCustomJS from "./TransitionsCustomJS.svelte";
  import TransitionsEvents from "./TransitionsEvents.svelte";
  import TransitionsLocal from "./TransitionsLocal.svelte";
  import TransitionsDeferred from "./TransitionsDeferred.svelte";
  import TransitionsKeyblocks from "./TransitionsKeyblocks.svelte";
  import Animations from "./Animations.svelte";
  import ActionsuseDirective from "./ActionsuseDirective.svelte";
  import ActionsAddingParameters from "./ActionsAddingParameters.svelte";
  import AdvancedStylingclassDirective from "./AdvancedStylingclassDirective.svelte";
  import AdvancedStylingShorthandclassDirective from "./AdvancedStylingShorthandclassDirective.svelte";
  import AdvancedStylingInlineStyles from "./AdvancedStylingInlineStyles.svelte";
  import AdvancedStylingstyleDirective from "./AdvancedStylingstyleDirective.svelte";
  import ComponentCompositionSlots from "./ComponentCompositionSlots.svelte";
  import ComponentCompositionNamedSlots from "./ComponentCompositionNamedSlots.svelte";
  import ComponentCompositionCheckingForSlotContent from "./ComponentCompositionCheckingForSlotContent.svelte";
  import ComponentCompositionSlotProps from "./ComponentCompositionSlotProps.svelte";
  import ContextApIsetContextandgetContext from "./ContextAPIsetContextandgetContext.svelte";
  import SpecialElementsself from "./SpecialElementsself.svelte";
  import SpecialElementscomponent from "./SpecialElementscomponent.svelte";
  import SpecialElementselement from "./SpecialElementselement.svelte";
  import SpecialElementswindow from "./SpecialElementswindow.svelte";
  //import SpecialElementswindowbindings from "./SpecialElementswindowbindings.svelte";
  import SpecialElementsbody from "./SpecialElementsbody.svelte";
  import SpecialElementshead from "./SpecialElementshead.svelte";
  import SpecialElementsoptions from "./SpecialElementsoptions.svelte";
  import SpecialElementsfragment from "./SpecialElementsfragment.svelte";
  import ModuleContextSharingCode from "./ModuleContextSharingCode.svelte";
  import ModuleContextExports from "./ModuleContextExports.svelte";
  import Debuggingdebug from "./Debuggingdebug.svelte";
  import Congratulations from "./Congratulations.svelte";

  function handleClick() {
    alert("Button Clicked");
  }

  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<main>
  <div class="border-div">
    <Introduction />
  </div>

  <div class="border-div">
    <Nested answer="42" />
    <Nested />
  </div>

  <div class="border-div">
    <Statements />
  </div>
  <div class="border-div">
    <UpdatingArraysAndObjects />
  </div>

  <div class="border-div">
    <Inner on:message={handleMessage} />
  </div>
  <div class="border-div">
    <Outer on:message={handleMessage} />
  </div>

  <div class="border-div">
    <Else />
  </div>
  <div class="border-div">
    <ElseIfBlocks />
  </div>
  <div class="border-div">
    <EachBlocks />
  </div>
  <div class="border-div">
    <AwaitBlocks />
  </div>
  <div class="border-div">
    <InlineHandlers />
  </div>
  <div class="border-div">
    <EventModifiers />
  </div>
  <div class="border-div">
    <CustomButton on:click={handleClick} />
  </div>
  <div class="border-div">
    <BindingTextInputs />
  </div>
  <div class="border-div">
    <BindingNumericInputs />
  </div>
  <div class="border-div">
    <BindingCheckboxInput />
  </div>
  <div class="border-div">
    <BindingGroupInputs />
  </div>
  <div class="border-div">
    <BindingTextAreaInput />
  </div>
  <div class="border-div">
    <BindingSelectBindings />
  </div>
  <div class="border-div">
    <BindingEachBlock />
  </div>
  <div class="border-div">
    <BindingMediaElements />
  </div>
  <div class="border-div">
    <BindingDimensions />
  </div>
  <div class="border-div">
    <!-- 60% CPU o_O -->
    <!-- <BindingThis /> -->
  </div>
  <div class="border-div">
    <BindingComponent />
  </div>
  <div class="border-div">
    <BindingComponentInstance />
  </div>
  <div class="border-div">
    <LifecycleonMount />
  </div>
  <div class="border-div">
    <LifecycleonDestroy />
  </div>
  <div class="border-div">
    <LifecyclebeforeUpdateafterUpdate />
  </div>
  <div class="border-div">
    <Lifecycletick />
  </div>
  <div class="border-div">
    <StoreWritable />
  </div>
  <div class="border-div">
    <StoreReadable />
  </div>
  <div class="border-div">
    <StoreCustom />
  </div>
  <div class="border-div">
    <BindingStore />
  </div>
  <div class="border-div">
    <MotionTweened />
  </div>
  <div class="border-div">
    <MotionSpring />
  </div>
  <div class="border-div">
    <Transitions />
  </div>
  <div class="border-div">
    <TransitionsCustomCSS />
  </div>
  <div class="border-div">
    <TransitionsCustomJS />
  </div>
  <div class="border-div">
    <TransitionsEvents />
  </div>
  <div class="border-div">
    <TransitionsLocal />
  </div>
  <div class="border-div">
    <TransitionsDeferred />
  </div>
  <div class="border-div">
    <TransitionsKeyblocks />
  </div>
  <div class="border-div">
    <Animations />
  </div>
  <div class="border-div">
    <ActionsuseDirective />
  </div>
  <div class="border-div">
    <ActionsAddingParameters />
  </div>
  <div class="border-div">
    <AdvancedStylingclassDirective />
  </div>
  <div class="border-div">
    <AdvancedStylingShorthandclassDirective />
  </div>
  <div class="border-div">
    <AdvancedStylingInlineStyles />
  </div>
  <div class="border-div">
    <AdvancedStylingstyleDirective />
  </div>
  <div class="border-div">
    <ComponentCompositionSlots />
  </div>
  <div class="border-div">
    <ComponentCompositionNamedSlots />
  </div>
  <div class="border-div">
    <ComponentCompositionCheckingForSlotContent />
  </div>
  <div class="border-div">
    <ComponentCompositionSlotProps />
  </div>
  <div class="border-div">
    <ContextApIsetContextandgetContext />
  </div>
  <div class="border-div">
    <SpecialElementsself />
  </div>
  <div class="border-div">
    <SpecialElementscomponent />
  </div>
  <div class="border-div">
    <SpecialElementselement />
  </div>
  <div class="border-div">
    <SpecialElementswindow />
  </div>
  <!-- 
    needs its own page
    <div class="border-div">
      <SpecialElementswindowbindings />
    </div>
  -->
  <div class="border-div">
    <SpecialElementsbody />
  </div>
  <div class="border-div">
    <SpecialElementshead />
  </div>
  <div class="border-div">
    <SpecialElementsoptions />
  </div>
  <div class="border-div">
    <SpecialElementsfragment />
  </div>
  <div class="border-div">
    <ModuleContextSharingCode />
  </div>
  <div class="border-div">
    <ModuleContextExports />
  </div>
  <div class="border-div">
    <Debuggingdebug />
  </div>
  <div class="border-div">
    <Congratulations />
  </div>
</main>

<style>
</style>
