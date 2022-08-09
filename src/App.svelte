<script>
  import Header from "./lib/Header.svelte";
  import VehicleListItem from "./lib/VehicleListItem.svelte";
  import Searchbox from "./lib/Searchbox.svelte";
  import { headerState } from "./store.js";

  const vehicles = {
    one: [
      {
        brand: "",
        priceRange: "$ABC - $DEF",
        range: "539km - 564km",
        imageUrl: "",
        brandLogoImageUrl: "",
      },
    ],
    two: [
      {
        brand: "",
        priceRange: "$NMNW - $DEF",
        range: "539km - 564km",
        imageUrl: "",
        brandLogoImageUrl: "",
      },
    ],
    three: [
      {
        brand: "",
        priceRange: "$efefefefef - $DEF",
        range: "539km - 564km",
        imageUrl: "",
        brandLogoImageUrl: "",
      },
    ],
    four: [
      {
        brand: "Tesla Model X",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "",
        brandLogoImageUrl: "",
      },
      {
        brand: "Tesla Model S",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "",
        brandLogoImageUrl: "",
      },
      {
        brand: "Tesla Model X",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "",
        brandLogoImageUrl: "",
      },
      {
        brand: "Tesla Model X",
        priceRange: "$115,000 - $139,000",
        range: "539km - 564km",
        imageUrl: "",
        brandLogoImageUrl: "",
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
