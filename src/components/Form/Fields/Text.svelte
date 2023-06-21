<script lang="ts">
	import type TextInput from "../../../Form/TextInput";

  export let field: TextInput;
</script>

<div class="form-control w-full max-w-xs">
  <label class="label" for="{field.name}">
    <span class="label-text">{field.label}</span>
    <span class="label-text-alt">{field.hint}</span>
  </label>
  <input 
    type="text" 
    id="{field.name}" 
    name="{field.name}" 
    placeholder="{field.placeholder}" 
    class="input input-bordered w-full max-w-xs" 
    disabled="{field.isDisabled}"
  />
  <label class="label" for="{field.name}">
    <span class="label-text-alt">{field.helper_text}</span>
  </label>
</div>