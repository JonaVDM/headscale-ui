<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	const { data } = $props();

	const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

<div class="card bg-base-300 mx-auto my-2 max-w-96 shadow-sm">
	<div class="card-body">
		<h1 class="card-title">Login</h1>

		<p>
			Login using an API key: <a
				href="https://headscale.net/stable/ref/remote-cli/?h=key#create-an-api-key"
				class="link"
			>
				docs
			</a>
		</p>

		<form method="POST" class="contents" use:enhance>
			{#if $errors.key}
				<span class="text-error text-sm">{$errors.key}</span>
			{/if}
			<input
				name="key"
				type="password"
				placeholder="Api Key..."
				class="input"
				class:input-error={$errors.key}
				bind:value={$form.key}
				{...$constraints.key}
			/>

			{#if $message}
				<span class="text-sm">{$message}</span>
			{/if}
			<button class="btn btn-primary">Login</button>
		</form>
	</div>
</div>
