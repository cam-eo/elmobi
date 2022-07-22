<script>
  import wheel from "./assets/icons/wheel.svg";
  const menuItems = [
    { name: "one", id: 1 },
    { name: "two", id: 2 },
    { name: "three", id: 3 },
    { name: "four", id: 4 },
  ];

  let headerState = menuItems[0];
  console.log("headerState: ", headerState);
</script>

<main>
  <div class="header">
    {#each [...menuItems.values()] as value}
      <div
        class="headerItem"
        on:click={() => {
          headerState = value;
        }}
        style="--opacity: {`${value.id === headerState.id ? 1 : 0.5}`};"
      >
        <img src={wheel} class="wheel" alt="Wheel" />
        {#if value.id !== 1}
          {#each Array(value.id - 1) as _, index (index)}
            <img
              src={wheel}
              class="wheel_subtle"
              alt="Wheel"
              style="--transform: {`${(index + 1) * 15}px`}; --zIndex: {-(
                index + 1
              )}"
            />
          {/each}
        {/if}
        <span class="headerText">{value.name}</span>
      </div>
    {/each}
  </div>
  <div>
    <a href="https://svelte.dev" target="_blank">HI</a>
  </div>
</main>

<style>
  /* .test {
    z-index: 100;
  } */
  .wheel {
    height: 100px;
    border-radius: 50px;
    background-color: brown;
  }
  .wheel_subtle {
    height: 100px;
    background-color: grey;
    position: absolute;
    z-index: var(--zIndex);
    transform: translateX(var(--transform));
    border-radius: 50px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 700px;
  }

  .headerItem {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: var(--opacity);
    transition: opacity 0.5s;
  }

  .headerText {
    position: absolute;
    z-index: 1;
  }
</style>
