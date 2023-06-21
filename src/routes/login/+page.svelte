<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
	import undraw_movie_night from '$lib/assets/undraw_movie_night.svg';

	export let data
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="flex flex-col justify-center h-full items-center mx-10 ">
		<img src="{undraw_movie_night}" alt="Banner" class="mb-5 w-full md:max-w-xl">
		<div class="border p-5 rounded w-full md:max-w-xl">
			<h1 class="text-lg bold">Login</h1>
			<Auth
				supabaseClient={data.supabase}
				view="sign_in"
				redirectTo={`${data.url}/auth/callback`}
				showLinks={true}
				appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
				additionalData="{{}}"
			/>
		</div>
</div>