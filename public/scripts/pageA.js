window.addEventListener('load', function(){
    var url = '/api/count'

    this.fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'url=pageA'
    }).then(res => res.json())
    .catch(error => this.console.log(error));
});