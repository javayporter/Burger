
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
        burger_name: $("#burgerToGo").val().trim(),
        devoured: 0
        };

        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("Yum! Burger Added.");
            location.reload();
        }
      );
    });

    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var userDevour = $(this).data("userDevour");
    
        var userDevourState = {
          devoured: "true"
        };
    
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: userDevourState
        }).then(
          function() {
            console.log("Results: ", userDevour);
            location.reload();
          }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function() {
            console.log("Burger Removed.", id);
            location.reload();
          }
        );
    });

});