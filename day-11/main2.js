$.ajax({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/users`,
    success: function (data) {
        data.forEach(d =>
            $("#users").append(`<div class="thisUsers" id="${d.id}"><h3>${d.name}</h3><a href="${d.email}">${d.email}</a></div>`)
          )
    },
    error: function (xhr, text, error) {
        console.log(text)
    }
})
