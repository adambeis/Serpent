<script>
	import { loading, disabledClass } from '../stores/provider';
	export let exec;
	export let btnText;
	export let classNames;
</script>

<button
	disabled={$loading}
	on:click={exec}
	title={btnText}
	class="{classNames} p-2 hover:border-transparent rounded {$disabledClass}"><slot /></button
>
