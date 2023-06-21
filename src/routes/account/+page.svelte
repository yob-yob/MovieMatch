<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms'
  import Avatar from './Avatar.svelte'
	import TextInput from '../../Form/TextInput';

	export let data
	// export let form

	let { session, supabase, profile } = data
	$: ({ session, supabase, profile } = data)

	let profileForm: HTMLFormElement
	let loading = false
	let fullName: string = profile?.full_name ?? ''
	let username: string = profile?.username ?? ''
	let website: string = profile?.website ?? ''
	let avatarUrl: string = profile?.avatar_url ?? ''

	const fields = [
		(new TextInput('fullName')),
		(new TextInput('email')),
		(new TextInput('username')),
		(new TextInput('website')),
	]

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<div class="flex justify-center h-full items-center">
	<div>
		<form class="form-widget" method="post" action="?/update" use:enhance={handleSubmit} bind:this={profileForm}>
			<Avatar
					{supabase}
					bind:url={avatarUrl}
					size={10}
					on:upload={() => {
						profileForm.requestSubmit();
					}}
				/>
			{#each fields as field}
				<svelte:component this="{field.component}" field="{field}"></svelte:component>
			{/each}

			<div>
				<input
					type="submit"
					class="button block primary"
					value={loading ? 'Loading...' : 'Update'}
					disabled={loading}
				/>
			</div>
		</form>

		<form method="post" action="?/signout" use:enhance={handleSignOut}>
			<div>
				<button class="button block" disabled={loading}>Sign Out</button>
			</div>
		</form>
	</div>
</div>