<script>
	import Modal from '$lib/Modal.svelte';
	import Events from '$lib/Events.svelte';
	import { notifications } from '../stores/notifications';
	import { contract, market, connected, changeLoadingState, account } from '../stores/provider';
	import { numberToWei } from '../utils';

	$: $connected && ($account, init());

	let NFTs = [];
	let nftSelected = null;
	let showModal = false;
	let price = 0.0;

	const init = () => {
		getOwnerTokens();
	};

	const getOwnerTokens = async () => {
		NFTs = await $contract.getOwnerTokens();
	};

	const showDialog = () => {
		showModal = !showModal;
	};

	const handleSell = (nft) => {
		nftSelected = nft;
		showDialog();
	};

	const sell = async () => {
		if (nftSelected) {
			try {
				changeLoadingState(true);
				const tokenId = nftSelected.index.toString();
				const options = { value: numberToWei('0.001') };
				let tx = await $market.createMarketItem(
					$contract.address,
					tokenId,
					numberToWei(price),
					options
				);
				await tx.wait();
				notifications.success('NFT listed on the Marketplace to be sold', 6000);
				getOwnerTokens();
				price = 0.0;
				showDialog();
			} catch (error) {
				if (typeof error === 'object') {
					if ('reason' in error) notifications.danger(`Reason ${error.reason}`, 6000);
					else if ('message' in error) notifications.danger(error.message, 6000);
				} else console.log(error);
			}
		}
		changeLoadingState(false);
	};
</script>

{#if showModal}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

		<div class="fixed z-10 inset-0 overflow-y-auto">
			<div
				on:click|self={showDialog}
				class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
			>
				<Modal cancel={showDialog} {nftSelected} bind:price {sell} />
			</div>
		</div>
	</div>
{/if}
{#if NFTs.length}
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-2">
		{#each NFTs as nft}
			<Events {nft} {handleSell} />
		{/each}
	</div>
{:else}
	<p class="w-full text-center text-lg">You can Mint or Buy NFTs</p>
{/if}
