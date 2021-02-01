import ejs from 'ejs';

export const singleRecord = 
`
<div class="card text-white <%= record.display %> mb-3" style="max-width: 18rem;min-width:10rem">
<div class="card-header">Symbol : <%= record.symbol %></div>
<div class="card-body">
  <h5 class="card-title">Details</h5>
  <p class="card-text"> Open: <%= record.open%></p>
  <p class="card-text"> Close:<%= record.close%></p>
  <p class="card-text"> Diff: <%= record.difference %></p>
</div>
</div>`;



export const noResults =
`<div class="alert alert-primary" role="alert">
No Results found!
</div>`



