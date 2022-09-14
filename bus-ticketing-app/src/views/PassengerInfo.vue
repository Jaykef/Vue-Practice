<template>
  <div class="container">
    <h2>Passenger Info</h2>
    <form method="post" action="#" @submit.prevent="payment_info">
      <div v-for="item in choosen_seats" class="form-inline mb-2">
        <label class="mr-2" for="seat">Seat</label>
        <input
          type="text"
          class="form-control col-1 mr-3"
          v-model="item.seat_number"
          id="seat"
          readonly
        />
        <label class="mr-2" for="fiyat">Price</label>
        <input
          type="text"
          class="form-control col-1 mr-3"
          v-model="choosen_trip.ticket_price"
          id="price"
          readonly
        />
        <label class="mr-2" for="tck">ID#</label>
        <input type="text" class="form-control col-2 mr-3" name="id_num" id="id_num" />
        <label class="mr-2" for="fullname">Full Name</label>
        <input type="text" class="form-control col-2 mr-3" name="fullname" id="fullname" />
        <label class="mr-2" for="sex">Gender</label>
        <input type="text" class="form-control col-1" name="gender" id="gender" />
      </div>
      <button class="btn btn-success btn-sm mt-2 float-right">Enter payment info</button>
    </form>
  </div>
</template>


<script>
import { GlobalData } from "../main";

export default {
  data() {
    return {
      choosen_trip: {},
      choosen_seats: []
    };
  },
  created() {
    if (GlobalData.choosen_trip == null) {
      this.$router.push({ name: "search-trip" });
    }
    this.choosen_trip = GlobalData.choosen_trip;
    this.choosen_seats = GlobalData.choosen_seats;
  },
  methods: {
    payment_info() {
      this.$router.push({ name: "payment-info" });
    }
  }
};
</script>