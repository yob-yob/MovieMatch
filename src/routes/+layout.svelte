<script>
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
  import { invalidate } from '$app/navigation'

  import { onMount } from 'svelte'
  export let data

  let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<div class="flex flex-col min-h-screen overflow-x-hidden">
  <header class="">
    <Navbar />
  </header>
  <main class="flex-1 flex">
    <div class="flex-1">
      <slot />
    </div>
  </main>
</div>