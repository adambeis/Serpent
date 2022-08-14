<script>
	import { chainId, connected } from '../stores/provider';
	import { showMsg } from '../stores/ui';
</script>

{#if $chainId && $showMsg && $connected}
	<div class="absolute inset-x-0 bottom-3 w-max m-auto">
		<button
			class="absolute -top-8 -left-3 rounded-full border-2 border-black bg-white"
			on:click={() => {
				$showMsg = false;
			}}
			><svg
				class="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg></button
		>
		<div class="p-2 rounded-lg border-2 border-black bg-white">
			<p>Visit this collection on opensea:</p>
			{#if $chainId == 4}
				<a
					href="https://testnets.opensea.io/collection/serpent"
					target="_blank"
					rel="noopener noreferrer">https://testnets.opensea.io/collection/serpent</a
				>
			{:else if $chainId == 80001}
				<a
					href="https://testnets.opensea.io/collection/serpent-polygon"
					target="_blank"
					rel="noopener noreferrer">https://testnets.opensea.io/collection/serpent-polygon</a
				>
			{/if}
		</div>
	</div>
{/if}
