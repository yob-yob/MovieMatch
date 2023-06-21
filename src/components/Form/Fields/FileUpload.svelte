<script lang="ts">
	import type FileUploadInput from "../../../Form/FileUploadInput";

  export let field: FileUploadInput;
</script>

<div class="form-control">
  <label class="label" for="{field.name}">
    <span class="label-text capitalize">{field.label}</span>
    <span class="label-text-alt">{field.hint}</span>
  </label>
  <input 
    type="file" 
    id="{field.name}" 
    name="{field.name}" 
    placeholder="{field.placeholder}" 
    class="file-input file-input-bordered" 
    disabled="{field.isDisabled}"
  />
  <label class="label" for="{field.name}">
    <span class="label-text-alt">{field.helper_text}</span>
  </label>
</div>