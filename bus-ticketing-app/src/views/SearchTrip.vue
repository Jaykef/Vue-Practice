<template>
  <div class="container">
    <h2>Trip Planner</h2>
    <h5 style="opacity: 60%;">Sample Trip from DB</h5>
    <p style="opacity: 60%;">From "Lisbon" to "Porto" at "25 April 2020"</p>
    <p style="opacity: 60%;">From "Lisbon" to "Madrid" at "25 April 2020"</p>

    <form @submit.prevent="search_trip">
      <div class="form-row align-items-center">
        <div class="col-sm-2">
          <label>From</label>
          <select class="form-control" v-model="from_location">
            <option value>Select</option>
            <option v-for="item in locations" :value="item.id" v-text="item.description"></option>
          </select>
        </div>
        <div class="col-sm-2">
          <label>To</label>
          <select class="form-control" v-model="to_location">
            <option value>Select</option>
            <option v-for="item in locations" :value="item.id" v-text="item.description"></option>
          </select>
        </div>
        <div class="col-sm-2">
          <label>Departure</label>
          <input type="date" class="form-control" v-model="departure_date" />
        </div>
        <div class="col-auto">
          <label>&nbsp;</label>
          <button type="submit" class="btn btn-primary btn-block">Search</button>
        </div>
      </div>
    </form>
    <hr />
    <div v-if="isLoading">Trips Loading...</div>
    {{ message }}
    <div v-if="available_trips.length">
      <h2>Trips</h2>
      <table class="table table-hover">
        <tr v-for="(item, index) in available_trips">
          <td>
            Depature Time
            <h4>{{ getTime(item.departure_date) }}</h4>
          </td>
          <td>
            Ticket Price
            <h4>{{ item.ticket_price }} €</h4>
          </td>
          <td>
            <button class="btn btn-success btn-sm" @click="chooseTrip(item.id)">Choose Seat</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import db from "../assets/db.json";
export default {
  name: "SearchForm",
  props: {
    msg: String
  },
  data() {
    return {
      from_location: "",
      to_location: "",
      departure_date: "",
      locations: [],
      trips: [],
      available_trips: [],
      isLoading: false,
      message: ""
    };
  },
  created() {
    this.locations = db.locations;
    this.trips = db.trips;
  },
  methods: {
    search_trip() {
      this.isLoading = true;
      this.available_trips = this.trips.filter(
        x =>
          x.from_location === this.from_location &&
          x.to_location === this.to_location &&
          this.getDate(x.departure_date) === this.getDate(this.departure_date)
      );
      if (this.available_trips.length == 0) {
        this.message = "No trips available";
      }
      this.isLoading = false;
    },
    getDate(val) {
      var datetime = new Date(val);
      var date =
        datetime.getFullYear() +
        "-" +
        ("0" + datetime.getMonth()).slice(-2) +
        "-" +
        ("0" + datetime.getDate()).slice(-2);
      return date;
    },
    getTime(val) {
      var datetime = new Date(val);
      var time =
        ("0" + datetime.getHours()).slice(-2) +
        "-" +
        ("0" + datetime.getMinutes()).slice(-2);
      return time;
    },
    chooseTrip(trip_id) {
      this.$router.push({ name: "seat-selection", params: { trip_id } });
    }
  }
};
</script>


<style scoped>
</style>