<script>
	import { chainId } from '../stores/provider';
</script>

{#if $chainId == 4}
	ETH
{:else if $chainId == 80001}
	MATIC
{/if}
