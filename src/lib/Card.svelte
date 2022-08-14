<script>
	export let cardClass;
	export let title;
	export let imgSrc;
	export let description;
	export let link;
</script>

<a class="{cardClass} space-y-4 text-center px-1 py-2 md:px-2 md:py-4 rounded-lg" href={link}>
	<div class="row-span-1"><h1 class="font-bold text-2xl">{title}</h1></div>
	<div class="row-span-6">
		<img class="rounded" src={imgSrc} alt="" />
	</div>
	<div class="row-span-1">
		<p class="basis-1/4 font-medium text-lg">{description}</p>
	</div>
</a>
