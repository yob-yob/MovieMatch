<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
  import undraw_home_cinema from '$lib/assets/undraw_home_cinema.svg';

	export let data
  console.log(data)
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="flex flex-col justify-center h-full items-center">
	  <img src="{undraw_home_cinema}" alt="Banner" class="h-40 mb-5">
		<div class="border p-5 rounded w-1/4">
			<h1 class="text-lg bold">Register</h1>
			<Auth
        supabaseClient={data.supabase}
        view="sign_up"
        redirectTo={`${data.url}/auth/callback`}
        showLinks={false}
        appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
        additionalData="{{}}"
      />
      <a href="/login">Sign in</a>
		</div>
</div>