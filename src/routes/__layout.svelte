<script>
	import '../app.css';
	import Toast from '$lib/Toast.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import WalletConnect from '$lib/WalletConnect.svelte';
	import CollectionMsg from '$lib/CollectionMsg.svelte';
</script>

<WalletConnect />
<Toast />
<NavBar />
<div class="h-full pb-24 mt-2 px-2 sm:px-6 lg:px-8 overflow-auto">
	<slot />
	<CollectionMsg />
</div>
