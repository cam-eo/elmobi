<script>
    import wheel from "../assets/icons/wheel.svg";
    import { headerState } from "../store.js";

    const menuItems = [
        { name: "one", id: 1 },
        { name: "two", id: 2 },
        { name: "three", id: 3 },
        { name: "four", id: 4 },
    ];

    let headerStateValue;

    headerState.subscribe((value) => {
        headerStateValue = value;
    });
</script>

<div class="header">
    {#each [...menuItems.values()] as value}
        <div
            class="headerItem"
            on:click={() => {
                headerState.set(value);
            }}
            style="--opacity: {`${
                value.id === headerStateValue.id ? 1 : 0.5
            }`};"
        >
            <span class="headerText">{value.name}</span>
            <img src={wheel} class="wheel" alt="Wheel" />
            {#if value.id !== 1}
                {#each Array(value.id - 1) as _, index (index)}
                    <img
                        src={wheel}
                        class="wheel_subtle"
                        alt="Wheel"
                        style="--transform: {`${
                            value.id === headerStateValue.id
                                ? (index + 1) * 20
                                : 0
                        }px`}; --zIndex: {-(index + 1)}"
                    />
                {/each}
            {/if}
        </div>
    {/each}
</div>

<style>
    .wheel {
        height: 100px;
        border-radius: 50px;
        background-color: brown;
    }
    .wheel_subtle {
        height: 100px;
        border-radius: 50px;
        background-color: brown;
        position: absolute;
        z-index: var(--zIndex);
        transform: translateX(var(--transform));
        transition: transform 0.5s;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 700px;
        margin-bottom: 30px;
        margin-top: 30px;
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
