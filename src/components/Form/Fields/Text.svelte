<script lang="ts">
	import type TextInput from "../../../Form/TextInput";

  export let field: TextInput;
</script>

<div class="form-control">
  <label class="label" for="{field.name}">
    <span class="label-text capitalize">{field.label}</span>
    <span class="label-text-alt">{field.hint}</span>
  </label>
  <input 
    type="text" 
    id="{field.name}" 
    name="{field.name}" 
    placeholder="{field.placeholder}" 
    class="input input-bordered" 
    disabled="{field.isDisabled}"
  />
  <label class="label" for="{field.name}">
    <span class="label-text-alt">{field.helper_text}</span>
  </label>
</div>