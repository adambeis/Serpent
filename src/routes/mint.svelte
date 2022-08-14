<script>
	import Button from '$lib/Button.svelte';
	import { contract, connected, changeLoadingState } from '../stores/provider';
	import { notifications } from '../stores/notifications';
	import serpentGif from '../assets/serpent-mint.gif';
	import { numberToWei, weiToNumber } from '../utils';

	let supply = 0;
	let maxSupply = 0;
	let mintAmount = 0;
	let maxMintAmount = 0;
	let cost = 0;

	$: $connected && (getSupply(), getMaxSupply(), getmaxMintAmount(), getCost());

	const addMintAmount = async () => {
		if (mintAmount < maxMintAmount) mintAmount++;
	};

	const subMintAmount = async () => {
		if (mintAmount > 0) mintAmount--;
	};

	const getSupply = async () => {
		supply = await $contract.getSupply();
	};

	const getMaxSupply = async () => {
		maxSupply = await $contract.maxSupply();
	};

	const getmaxMintAmount = async () => {
		maxMintAmount = await $contract.maxMintAmountPerTx();
	};

	const getCost = async () => {
		cost = await $contract.cost();
		cost = parseFloat(weiToNumber(cost));
	};

	const mint = async () => {
		if (mintAmount > 0) {
			try {
				changeLoadingState(true);
				let mintCost = cost * mintAmount;
				const options = { value: numberToWei(mintCost.toString()) };
				const tx = await $contract.mint(mintAmount, options);
				await tx.wait();
				notifications.success('Success! NFT Minted', 6000);
				mintAmount = 0;
				getSupply();
			} catch (error) {
				if ('reason' in error) notifications.danger(`Reason ${error.reason}`, 6000);
				else if ('message' in error) notifications.danger(error.message, 6000);
				else console.log(error);
			}
			changeLoadingState(false);
		}
	};
</script>

<div class="flex">
	<div class="w-auto m-auto">
		<img src={serpentGif} class="sm:w-80 rounded-lg" alt="" />
		<div class="text-center">
			<p class="mt-2 sm:mt-4">
				<span class="font-bold">{supply}</span> / <span class="font-bold">{maxSupply}</span>
			</p>
			<p class="mt-1 sm:mt-4 sr-only">
				Max mint amount per transaction: <span class="font-bold">{maxMintAmount}</span>
			</p>
		</div>

		<div class="flex mt-1 sm:mt-4">
			<div class="m-auto">
				<button
					on:click={subMintAmount}
					class="font-bold w-9 h-9 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full"
					>-</button
				>
				<span class="mx-4">{mintAmount}</span>
				<button
					on:click={addMintAmount}
					class="font-bold w-9 h-9 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full"
					>+</button
				>
			</div>
		</div>
		<div class="flex">
			<div class="w-full sm:w-auto sm:m-auto">
				<Button
					btnText=""
					classNames="font-bold mt-2 sm:mt-4 w-full sm:w-[7.625rem] hover:bg-white hover:text-black border hover:border-black bg-black text-white"
					exec={mint}>Mint</Button
				>
			</div>
		</div>
	</div>
</div>
