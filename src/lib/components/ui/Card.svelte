<script>
	let { title = "", description = "", class: customClass = "", icon = null } = $props();
</script>

<article
	class="bg-card hover:bg-sidebar-primary-foreground hover:text-primary-900 border-border grid content-between gap-16 rounded-(--radius) border p-4 px-5 text-pretty transition duration-300 ease-out lg:p-5 lg:px-6 {customClass}"
>
	<div class="flex items-center gap-3 mb-2">
		{#if icon}
			<div class="text-primary-500 flex-shrink-0">
				<svelte:component this={icon} class="w-6 h-6" />
			</div>
		{/if}
		<h3 class="text-title3">
			{title}
		</h3>
	</div>
	<p class="text-body max-w-prose opacity-60">{description}</p>
</article>
