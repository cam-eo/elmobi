<script>
  import Header from "./lib/Header.svelte";
  import VehicleListItem from "./lib/VehicleListItem.svelte";
  import Searchbox from "./lib/Searchbox.svelte";
  import { headerState } from "./store.js";

  const vehicles = {
    one: [
      {
        brand: "One Wheel Pint Kiteflow 4",
        priceRange: "$123 - $456",
        range: "539km - 564km",
        imageUrl: "images/onewheel_pint_kiteflow_4.jpeg",
        brandLogoImageUrl: "images/logos/tesla_logo.svg",
      },
    ],
    two: [
      {
        brand: "Ather 450x",
        priceRange: "$321 - $654",
        range: "539km - 564km",
        imageUrl: "images/ather_450x.png",
        brandLogoImageUrl: "images/logos/tesla_logo.svg",
      },
    ],
    three: [
      {
        brand: "Gotcha",
        priceRange: "$099 - $990",
        range: "539km - 564km",
        imageUrl: "images/gotcha_trike.jpeg",
        brandLogoImageUrl: "images/logos/tesla_logo.svg",
      },
    ],
    four: [
      {
        brand: "Tesla Model X",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "images/tesla_modelx.jpg",
        brandLogoImageUrl: "images/logos/tesla_logo.svg",
      },
      {
        brand: "Rivian",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "images/rivian.jpg",
        brandLogoImageUrl: "images/logos/tesla_logo.svg",
      },
      {
        brand: "Tesla Model X",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "images/tesla_modelx.jpg",
        brandLogoImageUrl: "images/logos/tesla_logo.svg",
      },
      {
        brand: "Tesla Model X",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "images/tesla_modelx.jpg",
        brandLogoImageUrl: "images/logos/tesla_logo.svg",
      },
    ],
  };

  let headerStateValue = { name: "one", id: 1 };
  let showVehicles;

  headerState.subscribe((value) => {
    headerStateValue = value;
    switch (headerStateValue.id) {
      case 1:
        showVehicles = vehicles.one;
        break;
      case 2:
        showVehicles = vehicles.two;
        break;
      case 3:
        showVehicles = vehicles.three;
        break;
      case 4:
        showVehicles = vehicles.four;
        break;
      default:
        console.log("FAIL");
    }
  });
</script>

<main>
  <Header />
  <Searchbox />
  <div class="vehicleList">
    {#each showVehicles as vehicle}
      <VehicleListItem {vehicle} />
    {/each}
  </div>
</main>

<style>
  .vehicleList {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
