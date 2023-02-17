<script>
// @ts-nocheck

	
	let buttonProps = {
	class:[$$restProps.class]
	}
</script>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<button on:click
			on:mouseover
			on:mouseenter
			on:mouseleave
		{...buttonProps}>
			<slot/>
	</button>

<style>
	.primary{
		color:green;
	}
	.danger {
		color:red;
	}
	.sm {
		font-size:1em;
		padding:0.1em;
	}
	.lg {
		font-size:2em
	}
</style>