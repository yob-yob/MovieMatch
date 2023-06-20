<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'

	export let data
  console.log(data)
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<div class="flex justify-center h-full items-center">
	<div class="border p-5 rounded">
		<Auth
			supabaseClient={data.supabase}
			view="sign_up"
			redirectTo={`${data.url}/auth/callback`}
			showLinks={false}
			appearance={{ theme: ThemeSupa, style: { input: 'color: #fff' } }}
      additionalData="{{}}"
		/>
    <a href="/register">Sign in</a>
	</div>
</div>