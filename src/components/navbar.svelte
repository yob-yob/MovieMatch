<!-- Issue: FIX CLICKING DROPDOWN ON MOBILE -->
<!-- Issue: FIX TabIndex issues -->
<!-- Issue: FIX Links -->

<script lang="ts">
  import Icon from '@iconify/svelte';
  import { enhance, type SubmitFunction } from '$app/forms'

  export let isLoggedIn: boolean = false;

  let loading = false

  const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div class="btn btn-ghost lg:hidden">
        <Icon icon="heroicons:bars-3-center-left" class="h-5 w-5" />
      </div>
      <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {#if isLoggedIn}
          <li><a href="/">Home</a></li>
          <li><a href="/account">Account Profile</a></li>
        {/if}
      </ul>
    </div>
    <a href="/" class="btn btn-ghost normal-case text-xl">MovieMatch</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#if isLoggedIn}
        <li><a href="/">Home</a></li>
        <li><a href="/account">Account Profile</a></li>
      {/if}
    </ul>
  </div>
  
  {#if isLoggedIn}
    <div class="navbar-end">
      <form method="post" action="?/signout" use:enhance={handleSignOut}>
        <div>
          <button class="btn" disabled={loading}>Sign Out</button>
        </div>
      </form>
    </div>
  {/if}
</div>