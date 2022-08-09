<script>
    const searchbox = {
        type: ["car", "pickup"],
        brand: ["Telsa", "BMW", "Audi"],
        maxPrice: [0, 1000, 10000, 25000],
        minPrice: [0, 1000, 10000, 25000],
        minRange: [0, 100, 200, 300, 400, 500],
        maxRange: [0, 100, 200, 300, 400, 500],
        kW: [0, 100, 200, 300, 400, 500],
        timeToCharge: [0, 100, 200, 300, 400, 500],
        towingCapacity: [0, 100, 200, 300, 400, 500],
        availability: [0, 100, 200, 300, 400, 500],
    };
</script>

<form class="searchbox">
    <div class="dropdowns">
        {#each Object.entries(searchbox) as [filter, filterItems], i}
            <select name={filter} id={filter}>
                <option hidden>{filter}</option>
                {#each filterItems as filterItem}
                    <option value="filterItem">{filterItem}</option>
                {/each}
            </select>
        {/each}
    </div>
    <div class="actions">
        <button>Clear</button>
        <button type="submit">Search</button>
    </div>
</form>

<style>
    .searchbox {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 700px;
        align-items: flex-end;
        margin-bottom: 20px;
    }

    .actions {
        display: flex;
    }

    .dropdowns {
        display: flex;
        align-items: flex-start;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .dropdowns > select {
        width: 130px;
        height: 30px;
        margin-bottom: 10px;
        padding: 5px;
    }
</style>
