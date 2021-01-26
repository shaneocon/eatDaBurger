$(() => {
    $(".devoured").on("click", function() {
        const id = $(this).data("id");
        if ($(this).data("devoured") === 0) {
            let devoured = true
        } else{
            devoured = false
        }
        console.log(devoured);
        console.log(id);
        const newDevoured = {
            devoured: devoured
        };

        $.ajax(`/api/burgers/${id}/devoured`, {
            type: "PUT",
            data: newDevoured
        }).then(() => {
        console.log("changed devoured status to ", devoured);
         location.reload();

        });
    });


  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#nom").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
        console.log("new burger added to the menu")
      // Reload the page to get the updated list
        location.reload();
    });
  });
})