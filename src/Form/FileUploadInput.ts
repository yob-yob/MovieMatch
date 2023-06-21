import FileUpload from '../components/Form/Fields/FileUpload.svelte'

export default class FileUploadInput {
  name: string
  component = FileUpload
  label: string = ''
  hint: string = ''
  helper_text: string = ''
  placeholder: string = ''
  isDisabled: boolean = false

  constructor(name: string) {
    this.name = name
    this.label = name
  }

  public setLabel(label: string) {
    this.label = label
    return this
  }

  public setHint(hint: string) {
    this.hint = hint
    return this
  }

  public setHelperText(helper_text: string) {
    this.helper_text = helper_text;
    return this
  }

  public setPlaceholder(placeholder: string) {
    this.placeholder = placeholder
    return this
  }

  public setDisabledStatus(isDisabled: boolean) {
    this.isDisabled = isDisabled
    return this
  }
}