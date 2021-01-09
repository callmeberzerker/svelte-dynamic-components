<script lang="ts" context="module">
  import Button from 'src/generic/components/Button.svelte'
  import Renderer from 'src/generic/components/Renderer.svelte'
  interface ComponentRegistry {
    button: any
    renderer: any
  }

  const COMPONENT_REGISTRY: ComponentRegistry = {
    button: Button,
    renderer: Renderer,
  }
</script>

<script lang="ts">
  export let kind: keyof ComponentRegistry

  let component = COMPONENT_REGISTRY[kind]
</script>

<svelte:component this={component} {...$$props} />
