$.ajax({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/users`,
    success: function (data) {
        const source = $('#users-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({data});
        $('#users').append(newHTML);
    },
    error: function (xhr, text, error) {
        console.log(text)
    }
})
