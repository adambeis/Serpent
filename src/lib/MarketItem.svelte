<script>
	import { contract, market, connected, loading, changeLoadingState } from '../stores/provider';
	import Nft from './NFT.svelte';
	import Button from './Button.svelte';
	import Token from './Token.svelte';
	import { getNumber, getAccount } from '../utils';
	import { notifications } from '../stores/notifications';

	export let btnSelected;
	export let marketItem;
	export let exec;

	$: $connected && getNFT();
	$: buyPrice = getNumber(marketItem.price);
	let nft;

	const getNFT = async () => {
		nft = await $contract.tokenToSerpentAttributes(marketItem.tokenId);
	};

	const buy = async () => {
		try {
			changeLoadingState(true);
			const options = { value: marketItem.price };
			let tx = await $market.createMarketSale($contract.address, marketItem.itemId, options);
			await tx.wait();
			notifications.success('You bought the NFT', 6000);
			exec();
		} catch (error) {
			if (typeof error === 'object') {
				if ('reason' in error) notifications.danger(`Reason ${error.reason}`, 6000);
				else if ('message' in error) notifications.danger(error.message, 6000);
			} else console.log(error);
		}
		changeLoadingState(false);
	};
</script>

<div>
	{#if nft}
		<Nft {nft}>
			{#if btnSelected == 0}
				<div class="text-center">
					<div class="py-2 text-white">
						<div class="grid grid-cols-1 md:grid-cols-2 text-left">
							<div class="pr-0 md:pr-3 lg:pr-4">
								<span class="text-gray-300">Seller:</span>
								<span class="font-bold float-right">{getAccount(marketItem.seller)}</span>
							</div>
							<div class="pl-0 md:pl-3 lg:pl-4">
								<span class="text-gray-300">Price:</span>
								<span class="font-bold float-right">{buyPrice} <Token /></span>
							</div>
						</div>
					</div>

					<Button
						btnText=""
						exec={buy}
						classNames="w-full mt-1 font-bold bg-white hover:bg-black border border-black text-black hover:text-white"
						>Buy</Button
					>
				</div>
			{:else if btnSelected == 1}
				<div class="text-center">
					<div class="py-2 text-white">
						<div class="grid grid-cols-2 text-left">
							<div class="pr-4">
								<span class="text-gray-300">Owner:</span>
								<span class="font-bold float-right">{getAccount(marketItem.owner)}</span>
							</div>
							<div class="pl-4">
								<span class="text-gray-300">Price:</span>
								<span class="font-bold float-right">{buyPrice} <Token /></span>
							</div>
						</div>
					</div>
				</div>
			{:else}
				<div class="text-center">
					<div class="py-2 text-white">
						<div class="grid grid-cols-2 text-left">
							<div class="pr-4">
								<span class="text-gray-300">Seller:</span>
								<span class="font-bold float-right">{getAccount(marketItem.seller)}</span>
							</div>
							<div class="pl-4">
								<span class="text-gray-300">Price:</span>
								<span class="font-bold float-right">{buyPrice} <Token /></span>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</Nft>
	{/if}
</div>
