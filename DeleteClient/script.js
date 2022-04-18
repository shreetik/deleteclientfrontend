$(document).ready(function () {
  var tableData = "";
  $.ajax({
    url: "https://calqdaee1h.execute-api.ap-south-1.amazonaws.com/dev/clientdata",
    type: "GET",
    success: function (response) {
      console.log(response);
      for (let i = 0; i < 6; i++) {
        $("#tbody").append(
          "<tr>" +
            "<td>" +
            response.clients[i].id +
            "</td>" +
            "<td>" +
            response.clients[i].client_name +
            "</td>" +
            "<td>" +
            response.clients[i].email_id +
            "</td>" +
            "<td>" +
            response.clients[i].phone_no +
            "</td>" +
            "<td>" +
            response.clients[i].company_name +
            "</td>" +
            "<td>" +
            '<button type="button" id="btn" value=" ' +
            response.clients[i].email_id +
            '"  class="btn btn-outline-danger" id="bttn">' +
            "Delete" +
            "</button>" +
            "</td>" +
            +"</tr>"
        );
      }
    },
    error: function (response) {
      console.log("error");
    },
  });
});

$(document.body).on("click", ".btn", function () {
  var id = $(this).val();
  console.log(id);
  if (confirm("Do you want to delete this client?")) {
    $.ajax({
      url:
        "https://calqdaee1h.execute-api.ap-south-1.amazonaws.com/dev/clientdata/" +
        id,
      type: "POST",
      success: function (response) {
        console.log(response);
      },
      error: function (response) {
        console.log("error " + response);
      },
    });
  }
});
