//@section Scripts {
//<script>
//    $("#holderSelect").change(function () {
//        var holderId = $(this).val();

//        $("#cardSelect").empty();
//        $("#bankInput").val("");

//        if (holderId) {
//            $.get("/Records/GetCardsByHolder", { holderId: holderId }, function (data) {

//                $("#cardSelect").append('<option value="">Select Card</option>');

//                $.each(data, function (i, card) {
//                    $("#cardSelect").append(
//                        `<option value="${card.id}" data-bank="${card.bank}">
//                            ${card.cardNumber}
//                        </option>`
//                    );
//                });
//            });
//        }
//    });

//    $("#cardSelect").change(function () {
//        var bank = $(this).find(":selected").data("bank");
//        $("#bankInput").val(bank);
//    });
//</script>
//}
