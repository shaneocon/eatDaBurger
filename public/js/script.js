$(() => {
    $(".change-sleep").on("click", function() {
        const id = $(this).data("id");
        const newSleep = $(this).data(newsleep)

        const newSleepstate = { value: newSleep };

        $.ajax(`/api/burgers/${id}/devoured`, {
            type: "PUT",
            data: JSON.stringify(newSleepstate),
            contentType: "application/json; charset=UTF-8",
        }).then(() => {
           
         location.reload();

        });
    });


  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat,
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });
})