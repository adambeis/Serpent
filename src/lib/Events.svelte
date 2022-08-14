<script>
	import { onMount } from 'svelte';
	import Nft from '$lib/NFT.svelte';
	import Button from '$lib/Button.svelte';
	import PotionIcon from '$lib/PotionIcon.svelte';
	import SuperPotionIcon from '$lib/SuperPotionIcon.svelte';
	import { notifications } from '../stores/notifications';
	import { contract, market, connected, changeLoadingState, account } from '../stores/provider';

	export let nft;
	export let handleSell;

	let isMarketApproved;
	let listening = false;

	$: $connected && ($account, init(), listenEvent());

	onMount(() => {
		listenEvent();
	});

	const init = () => {
		getApproved();
	};

	const getApproved = async () => {
		isMarketApproved = await $contract.isApprovedForAll($account, $market.address);
	};

	const listenEvent = () => {
		let tokenId = nft.index;
		//if (!listening) {
		const eventFilter = $contract.filters.SerpentUpdated($account, tokenId);
		$contract.on(
			eventFilter,
			(owner, tokenId, imageURI, level, hp, coolness, endurance, lastChecked) => {
				nft = { ...nft, level, hp, coolness, endurance };
			}
		);
		//listening = true;
		//}
	};

	const heal = async (healFactor, tokenId) => {
		try {
			changeLoadingState(true);
			let tx;
			let msg = '';
			switch (healFactor) {
				case 0:
					tx = await $contract.midHealth(tokenId);
					msg = 'Mid';
					break;
				case 1:
					tx = await $contract.maxHealth(tokenId);
					msg = 'Max';
					break;
				case 2:
					tx = await $contract.superHealth(tokenId);
					msg = 'Super';
					break;
				default:
					throw 'Error!';
			}
			await tx.wait();
			notifications.success(msg + ' Health used', 6000);
		} catch (error) {
			if (typeof error === 'object') {
				if ('reason' in error) notifications.danger(`Reason ${error.reason}`, 6000);
				else if ('message' in error) notifications.danger(error.message, 6000);
			} else console.log(error);
		}
		changeLoadingState(false);
	};

	const approve = async () => {
		try {
			changeLoadingState(true);
			let tx = await $contract.setApprovalForAll($market.address, true);
			await tx.wait();
			notifications.success('Market is now approved', 6000);
			init();
		} catch (error) {
			if (typeof error === 'object') {
				if ('reason' in error) notifications.danger(`Reason ${error.reason}`, 6000);
				else if ('message' in error) notifications.danger(error.message, 6000);
			} else console.log(error);
		}
		changeLoadingState(false);
	};
</script>

<Nft {nft}>
	<div class="flex flex-row justify-between pt-2">
		<Button
			btnText="Mid Health Potion"
			exec={() => {
				heal(0, nft.index);
			}}
			classNames="w-1/3 m-1 ml-0 bg-blue-400 hover:bg-white"
			><PotionIcon />
		</Button>

		<Button
			btnText="Max Health Potion"
			exec={() => {
				heal(1, nft.index);
			}}
			classNames="w-1/3 m-1 mx-0 bg-purple-400 hover:bg-white"><PotionIcon /></Button
		>

		<Button
			btnText="Super Health Potion"
			exec={() => {
				heal(2, nft.index);
			}}
			classNames="w-1/3 m-1 mr-0 bg-yellow-400 hover:bg-white"><SuperPotionIcon /></Button
		>
	</div>
	{#if isMarketApproved}
		<Button
			btnText=""
			exec={() => {
				handleSell(nft);
			}}
			classNames="w-full bg-white font-bold mt-3 hover:bg-black hover:text-white border border-transparent hover:border hover:border-1 hover:border-white"
			>Sell</Button
		>
	{:else}
		<Button
			btnText=""
			exec={approve}
			classNames="w-full bg-white font-bold mt-3 hover:bg-black hover:text-white border border-transparent hover:border hover:border-1 hover:border-white"
			>Approve</Button
		>
	{/if}
</Nft>
