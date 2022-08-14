<script>
	import play from '../assets/play.png';
	import market from '../assets/market.png';
	import mint from '../assets/mint.gif';
	import Card from '$lib/Card.svelte';
</script>

<div class="grid gap-4 sm:gap-2 sm:grid-cols-3 w-full">
	<Card
		link="/play"
		cardClass="bg-[#7cb4b8]"
		title="Play"
		imgSrc={play}
		description="Play the Serpent Game and Level Up your NFTs"
	/>
	<Card
		link="/market"
		cardClass="bg-[#70f8ba]"
		title="Market"
		imgSrc={market}
		description="Buy any Serpent NFT you like"
	/>
	<Card
		link="/mint"
		cardClass="bg-[#cafe48]"
		title="Mint"
		imgSrc={mint}
		description="Mint new rare Serpents"
	/>
</div>
