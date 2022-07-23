<script>
  import Header from "./lib/Header.svelte";
  import CarListItem from "./lib/CarListItem.svelte";

  const searchbox = {
    type: ["car", "pickup"],
    brand: ["m"],
  };
</script>

<main>
  <Header />
  <form class="searchbox">
    <div class="dropdown">
      <select name="cars" id="cars">
        <option hidden>Type...</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  </form>
  <CarListItem />
</main>

<style>
  .dropdown {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .dropdown > select {
    width: 130px;
    height: 30px;
  }
</style>
