import { goto } from '$app/navigation'

export const load = async ({parent, data}) => {
  const _parent = await parent()
  
  if(_parent.session) {
    goto('/')
  }

  return data
}