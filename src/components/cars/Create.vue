<template>
  <div>
    <h1>Create a car</h1>
    <form>
      <div class="form-group">
        <label for="maker">Maker</label>
        <input type="text" class="form-control" id="maker" aria-describedby="makerHelp" placeholder="Enter maker">
        <small id="makerHelp" class="form-text text-muted">Makers: Toyota, Honda, Kia, etc.</small>
      </div>
      <div class="form-group">
        <label for="model">Model</label>
        <input type="text" class="form-control" id="model" aria-describedby="modelHelp" placeholder="Enter model">
        <small id="modelHelp" class="form-text text-muted">Models: Celica, CRV, Cerato, etc.</small>
      </div>
      <div class="form-group">
        <label for="year">Year</label>
        <input type="text" class="form-control" id="year" aria-describedby="yearHelp" placeholder="Enter year">
        <small id="yearHelp" class="form-text text-muted">Use 4 digits: 1964, 2018.</small>
      </div>
      <div class="form-group">
        <label for="cost">Cost</label>
        <input type="text" class="form-control" id="cost" aria-describedby="costHelp" placeholder="Enter brand">
        <small id="costHelp" class="form-text text-muted">Use "," for thousands and "." for decimals.</small>
      </div>
      <div class="form-group">
        <label for="status">Status</label>
        <select class="form-control" id="status" aria-describedby="statusHelp">
          <option>-- Select a status --</option>
          <option>New</option>
          <option>Used</option>
        </select>
        <small id="statusHelp" class="form-text text-muted">Previously used or not.</small>
      </div>

      <button type="submit" class="btn btn-primary">Back</button>
      <button type="submit" class="btn btn-primary">Save Car</button>
    </form>
  </div>
</template>
