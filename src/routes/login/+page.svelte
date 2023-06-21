<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
	import undraw_movie_night from '$lib/assets/undraw_movie_night.svg';

	export let data
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="flex flex-col justify-center h-full items-center">
		<img src="{undraw_movie_night}" alt="Banner" class="h-40 mb-5">
		<div class="border p-5 rounded w-1/4">
			<h1 class="text-lg bold">Login</h1>
			<Auth
				supabaseClient={data.supabase}
				view="sign_in"
				redirectTo={`${data.url}/auth/callback`}
				showLinks={false}
				appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
				additionalData="{{}}"
			/>
			<a href="/register">Sign up</a>
		</div>
</div>