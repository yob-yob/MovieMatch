<script>
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
  import { invalidate } from '$app/navigation'

  import { onMount } from 'svelte'
  export let data

  let { supabase, session } = data
	$: ({ supabase, session } = data)
  $: isLoggedIn = session !== null;

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})

</script>

<div class="drawer drawer-open">
  <input id="sidebar-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <header>
      <Navbar isLoggedIn="{isLoggedIn}"/>
    </header>
    <main class="flex-1 flex">
      <div class="flex-1">
        <slot />
      </div>
    </main>
  </div>
  <aside class="drawer-side">
    <label for="sidebar-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {#if isLoggedIn}
        <li><a href="/">Home</a></li>
        <li><a href="/account">Account Profile</a></li>
      {/if}
    </ul>
  </aside>
</div>