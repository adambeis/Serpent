<script>
	import Nft from './NFT.svelte';
	import Button from './Button.svelte';
	import Token from './Token.svelte';

	export let cancel;
	export let nftSelected;
	export let price;
	export let sell;

	const validator = (_, value) => {
		//console.log(value);
		_;
	};
</script>

<div
	class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:w-min"
>
	<div class="bg-white px-4 pt-5">
		<div class="sm:flex sm:justify-center sm:items-center">
			<div class="flex justify-center mt-3 text-center sm:mt-0 sm:text-center">
				<div class="">
					<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
						Sell on the Market
					</h3>
					<div class="mt-2">
						<p class="mb-2 text-sm text-gray-500">Do you want to put this NFT up for sale?</p>

						<div class="w-full sm:w-80">
							<Nft nft={nftSelected} />
						</div>
						<div class="py-2 relative rounded-md shadow-sm flex w-full">
							<label for="price" class="text-sm ml-5 mr-2 font-medium text-gray-700">Price</label>
							<input
								type="number"
								name="price"
								id="price"
								class="w-full mr-5 pl-7 pr-12 sm:text-sm border border-gray-400 rounded-md"
								placeholder="Sell price"
								use:validator={price}
								bind:value={price}
								min="0.0"
							/>

							<div class="absolute inset-y-0 right-0 flex items-center">
								<label for="currency" class="sr-only">Currency</label>
								<span
									class="mr-5 h-full py-2 pl-2 pr-4 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
								>
									<Token />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="px-4 py-4 sm:px-6 gap-y-0.5 flex">
		<div class="m-auto">
			<Button
				btnText=""
				exec={cancel}
				classNames="w-[4.125rem] bg-white hover:bg-black border border-black text-black hover:text-white"
				><span>Cancel</span></Button
			>
			<Button
				btnText=""
				exec={sell}
				classNames="w-[4.125rem] bg-white hover:bg-black border border-black text-black hover:text-white"
				><span>Sell</span></Button
			>
		</div>
	</div>
</div>
