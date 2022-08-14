<script>
	import { onMount } from 'svelte';
	import { connectWallet, connected } from '../stores/provider';
	onMount(() => {
		connectWallet();
	});
</script>

{#if !$connected}
	<div class="flex w-full h-full">
		<button
			class="m-auto sm:w-40 sm:h-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			on:click={connectWallet}>Connect Wallet</button
		>
	</div>
{/if}
