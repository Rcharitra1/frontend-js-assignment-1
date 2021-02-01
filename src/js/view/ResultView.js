import ejs from 'ejs';

export const singleRecord = 
`
<div class="col-6">
<div class="card text-white <%= record.display %> mb-3" style="max-width: 18rem;min-width:10rem">
<div class="card-header">Symbol : <%= record.symbol %></div>
<div class="card-body">
  <h5 class="card-title">Details</h5>
  <p class="card-text"> Open: $<%= record.open.toFixed(2) %></p>
  <p class="card-text"> Close: $<%= record.close.toFixed(2) %></p>
  <p class="card-text"> Diff: $<%= record.difference.toFixed(2) %></p>
</div>
</div>
</div>`;



export const noResults =
`<div class="alert alert-primary" role="alert">
No Results found!
</div>`



