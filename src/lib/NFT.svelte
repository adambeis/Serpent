<script>
	import { contract } from '../stores/provider';
	export let nft;
	let nftMetadata;

	$: nft, loadJSON();

	const loadJSON = async () => {
		let uriBase = await $contract.uriBase();
		uriBase = 'https://ipfs.io/ipfs/' + uriBase.slice(7, uriBase.length);
		try {
			const url = `${uriBase}${nft.index}.json`;
			const response = await fetch(url);
			nftMetadata = response.ok && (await response.json());
		} catch (error) {
			console.log('Error fetching Metadata');
		}
	};
	const getImgURL = (imgUri) => {
		return 'https://ipfs.io/ipfs/' + imgUri.slice(7, imgUri.length);
	};
</script>

{#if nftMetadata}
	<div class="md:px-0 md:pb-0 lg:pb-3">
		<div class="bg-[#1b1818] p-2 rounded-lg w-full h-auto mt-2 sm:m-0 m-auto">
			<img class="rounded w-full" src={getImgURL(nftMetadata.image)} alt="" />

			<div class="text-white pt-2">
				<div class="grid grid-cols-2 text-left">
					<div class="pr-1 sm:pr-2 md:pr-3 lg:pr-4">
						<span class="text-gray-300">Level:</span>
						<span class="font-bold float-right">{nft.level}</span>
					</div>
					<div class="pl-1 sm:pl-2 md:pl-3 lg:pl-4">
						<span class="text-gray-300">Hp:</span>
						<span class="font-bold float-right">{nft.hp}</span>
					</div>
					<div class="pr-1 sm:pr-2 md:pr-3 lg:pr-4">
						<span class="text-gray-300">Coolness:</span>
						<span class="font-bold float-right">{nft.coolness}</span>
					</div>
					<div class="pl-1 sm:pl-2 md:pl-3 lg:pl-4">
						<span class="text-gray-300">Endurance:</span>
						<span class="font-bold float-right">{nft.endurance}</span>
					</div>
				</div>
			</div>
			<slot />
		</div>
	</div>
{/if}
