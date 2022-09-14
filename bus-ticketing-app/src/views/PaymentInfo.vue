<template>
  <div class="container">
    <h2>Payment Details</h2>
    <form method="post" action="#" @submit.prevent="pay">
      <p>
        <b>Total amount:</b>
        {{ total_amount }} Euro
      </p>
      <div class="row">
        <div class="col-2">
          <label class="mr-2" for="cc_num">Card Number</label>
          <input type="text" class="form-control" name="cc_no" id="cc_no" />
        </div>
        <div class="col-2">
          <label class="mr-2" for="cc_fullname">Fullname</label>
          <input type="text" class="form-control" name="cc_fullname" id="cc_fullname" />
        </div>
        <div class="col-2">
          <label class="mr-2" for="cc_ccv">CCV</label>
          <input type="text" class="form-control" name="cc_ccv" id="cc_ccv" />
        </div>
        <div class="col-3">
          <label class="mr-2" for="cc_exp_mo">Exp. Date (mo)</label>
          <input type="text" class="form-control" name="cc_exp_mo" id="cc_exp_mo" />
        </div>
        <div class="col-3">
          <label class="mr-2" for="cc_exp_yr">Exp. Date (yr)</label>
          <input type="text" class="form-control" name="cc_exp_yr" id="cc_exp_yr" />
        </div>
      </div>
      <button class="btn btn-success btn-sm mt-2 float-right mt-2">Pay</button>
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
  computed: {
    total_amount() {
      return this.choosen_trip.ticket_price * this.choosen_seats.length;
    }
  },
  created() {
    if (GlobalData.choosen_trip == null) {
      this.$router.push({ name: "search-trip" });
    }
    this.choosen_trip = GlobalData.choosen_trip;
    this.choosen_seats = GlobalData.choosen_seats;
  },
  methods: {
    pay() {
      alert("Payment received.")
      GlobalData.choosen_seats = null;
      GlobalData.choosen_trip = null;
      this.$router.push({name: 'search-trip'});
    }
  }
};
</script>