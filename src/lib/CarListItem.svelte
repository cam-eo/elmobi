<script>
    import teslaMX from "../assets/images/tesla_modelx.jpg";
    import teslaLogo from "../assets/logos/tesla_logo.svg";
</script>

<div class="carListingItem">
    <img class="carListingItem_image" src={teslaMX} alt="Telsa Model X" />
    <div class="carListingItem_info">
        <h2>Tesla Model X</h2>
        <span>$115,000 - $139,000</span>
        <span>539km - 564km</span>
    </div>
    <img class="carListingItem_logo" src={teslaLogo} alt="Telsa Logo" />
</div>

<style>
    .carListingItem {
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 200px;
        background-color: rgba(255, 255, 255, 0.05);
    }
    .carListingItem_image {
        height: 100%;
        object-fit: contain;
    }
    .carListingItem_logo {
        height: 80px;
        align-self: flex-end;
    }
    .carListingItem_info {
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
</style>
