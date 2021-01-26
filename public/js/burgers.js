$(() => {
    $(".devoured").on("click", function() {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevoured");
        const newDevoured = { value: newDevour};

        $.ajax(`/api/burgers/${id}/devoured`, {
            type: "PUT",
            data: JSON.stringify(newDevoured),
            contentType: "application/json; charset=UTF-8",
        }).then(() => {
      
         location.reload();

        });
    });


  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#nom").val().trim(),
     
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