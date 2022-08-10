<script>

    export /**
     * @type {{ brand: string; priceRange: string; range: string; imageUrl: string; brandLogoImageUrl: string; }}
     */
    let vehicle;
</script>

<div class="vehicleListingItem">
    <img class="vehicleListingItem_image" src={vehicle.imageUrl} alt="Telsa Model X" />
    <div class="vehicleListingItem_info">
        <h2>{vehicle.brand}</h2>
        <span>{vehicle.priceRange}</span>
        <span>{vehicle.range}</span>
    </div>
    <img class="vehicleListingItem_logo" src={vehicle.brandLogoImageUrl} alt="Telsa Logo" />
</div>

<style>
    .vehicleListingItem {
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 200px;
        background-color: rgb(99, 99, 99);
        margin-bottom: 15px;
        cursor: pointer;
    }

    .vehicleListingItem:hover {
        transform: scale(1.01);
        transition: transform 0.05s ease-in-out;
    }

    .vehicleListingItem_image {
        height: 100%;
        object-fit: contain;
    }
    .vehicleListingItem_logo {
        height: 80px;
        align-self: flex-end;
    }
    .vehicleListingItem_info {
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
</style>
