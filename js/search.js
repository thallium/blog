import "/js/typesense.min.js"

let client = new Typesense.Client({
    'nodes': [{
      'host': 'typesense.tgc54.com', // For Typesense Cloud use xxx.a1.typesense.net
      'port': '443',      // For Typesense Cloud use 443
      'protocol': 'https'   // For Typesense Cloud use https
    }],
    'apiKey': 'UMUlw4TasZZqnqmJulPAZiSrzamIlMVu',
    'connectionTimeoutSeconds': 2
})


function search() {
    let input = document.querySelector("#searchBox").value;
    if (input.length === 0) {
        document.querySelector("#searchResults").innerHTML = '';
        return;
    }
    let searchParameters = {
        'q'         : input,
        'query_by'  : 'contents',
    }
    client.collections(collection_name).documents().search(searchParameters).then((resp) => {
        // console.log(resp);
        let searchitems = ''
        for (let item of resp.hits) { // only show first 5 results
            searchitems += `<div class="searchResultPage"><a class="searchResultTitle" href="${item.document.permalink}">${item.document.title}</a>`
            searchitems += '<div class="searchResultBody">'
          for (let highlight of item.highlights) {
            searchitems += `${highlight.snippet}`
          }
          searchitems += `</div></div>`
        }
        document.querySelector("#searchResults").innerHTML = searchitems;
    })
}
  
document.querySelector("#searchBox").addEventListener('input', search)