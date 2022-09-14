<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            src="./assets/img/bus.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
          />
          Ticket Reservation System
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="search-trip" class="nav-link" active-class="active">Search Trip</router-link>
            </li>
            <li class="nav-item">
              <router-link to="seat-selection" class="nav-link" active-class="active">Select Seat</router-link>
            </li>
            <li class="nav-item">
              <router-link to="passenger-info" class="nav-link" active-class="active">Passenger Info</router-link>
            </li>
            <li class="nav-item">
              <router-link to="payment-info" class="nav-link" active-class="active">Payment Info</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700,700i&subset=latin-ext");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import "~bootstrap/scss/bootstrap";

body {
  font-family: "Montserrat";
  font-size: 18px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}

.navbar {
  margin-bottom: 20px;
}
</style>
