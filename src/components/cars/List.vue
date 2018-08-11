<template>
  <div>
    <p>
      <router-link tag="li" to="/car/create">Create car</router-link>
    </p>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Maker</th>
        <th scope="col">Model</th>
        <th scope="col">Year</th>
        <th scope="col">Cost</th>
        <th scope="col">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Honda</td>
        <td>Civic</td>
        <td>1992</td>
        <td>USD 2,000</td>
        <td>Used</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Honda</td>
        <td>CRD</td>
        <td>2018</td>
        <td>USD 27,000</td>
        <td>New</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Kia</td>
        <td>Cerato</td>
        <td>2012</td>
        <td>USD 18,000</td>
        <td>Used</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
