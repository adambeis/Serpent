<script>
	import Button from '$lib/Button.svelte';
	import MarketItem from '$lib/MarketItem.svelte';
	import { market, connected, account } from '../stores/provider';

	$: $connected && ($account, init());

	let marketNFTs = [];
	let btnSelected = 0;
	let btnActiveClass = 'w-[6rem] font-bold bg-black text-white border border-black';
	let btnDefaultClass =
		'w-[6rem] bg-white text-black border border-black hover:bg-black hover:text-white';

	const init = () => {
		getAllMarketItems();
	};

	const getAllMarketItems = async () => {
		marketNFTs = [];
		marketNFTs = await $market.fetchMarketItems();
		btnSelected = 0;
	};

	const getSoldItems = async () => {
		marketNFTs = [];
		marketNFTs = await $market.fetchItemsCreated();
		btnSelected = 1;
	};

	const getPurchasedItems = async () => {
		marketNFTs = [];
		marketNFTs = await $market.fetchMyNFTs();
		btnSelected = 2;
	};
</script>

<div>
	<div class="pb-2">
		<Button
			btnText="All NFTs on the Market"
			exec={getAllMarketItems}
			classNames={btnSelected == 0 ? btnActiveClass : btnDefaultClass}>All nfts</Button
		>
		<Button
			btnText=""
			exec={getSoldItems}
			classNames={btnSelected == 1 ? btnActiveClass : btnDefaultClass}>Sold</Button
		>
		<Button
			btnText=""
			exec={getPurchasedItems}
			classNames={btnSelected == 2 ? btnActiveClass : btnDefaultClass}>Purchased</Button
		>
	</div>

	{#if marketNFTs.length}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-2">
			{#each marketNFTs as marketItem}
				<MarketItem {marketItem} exec={init} {btnSelected} />
			{/each}
		</div>
	{:else}
		<p class="w-full text-center text-lg">You can Mint or Buy NFTs</p>
	{/if}
</div>
