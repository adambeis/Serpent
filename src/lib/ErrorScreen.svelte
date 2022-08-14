<script>
	export let message;
	export let status;
</script>

<div class="text-center w-5/6 sm:w-1/3 m-auto space-y-4">
	<h1 class="font-bold text-2xl">Error {status}</h1>
	<p class="font-medium text-lg">{message}</p>
	<div><a class="hover:text-blue-400 hover:underline" href="/">Home</a></div>
</div>
