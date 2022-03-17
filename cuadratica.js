function solonum(str) {
    var str_end = '';
    var filtro = '1234567890.-';
    for (var i = 0; i < str.length; i++)
        if (filtro.indexOf(str.charAt(i)) != -1)
            str_end += str.charAt(i);
    return str_end;
}
$(document).ready(function () {
    $("#flexSwitchCheckDefault").click(function () {
        if ($("#valorfx").is('[readonly]')) {
            $(this).parent().siblings('div').children('div').children("#valorfx").prop('readonly', false);
            $("#obtener").text('Obtener y calcular Et y �t');
        } else {
            $(this).parent().siblings('div').children('div').children("#valorfx").prop('readonly', true);
            $("#obtener").text('Obtener');
            $("#valorfx").val('');
        }
    });
    $("#limpiar").click(function () {
        $("[type='text']").val('');
    });
    $("#obtener").click(function () {
        let fx = parseFloat($("#valorfx").val()),
            fx0 = parseFloat($("#valorfx0").val()),
            fx1 = parseFloat($("#valorfx1").val()),
            fx2 = parseFloat($("#valorfx2").val()),
            x = parseFloat($("#valorx").val()),
            x0 = parseFloat($("#valorx0").val()),
            x1 = parseFloat($("#valorx1").val()),
            x2 = parseFloat($("#valorx2").val()),
            res = 0,
            b0 = fx0,
            b1 = 0,
            b2 = 0,
            ev = 0,
            er = 0;
        b1 = (fx1 - fx0) / (x1 - x0);
        b2 = (((fx2 - fx1) / (x2 - x1)) - ((fx1 - fx0) / (x1 - x0))) / (x2 - x0);
        res = b0 + (b1 * (x - x0)) + (b2 * (x - x0)*(x - x1));

        ev = fx - res;
        er = (ev / fx) * 100;
        let r, eve, ero;
        r = res ? res + " aprox." : 0;
        eve = ev ? ev : 0;
        ero = er ? er : 0;
        if ($("#valorfx").is('[readonly]')) {
            $("#body-modal").html("Valor de fx<br><p> f(x)=<label id='fxtotal'>" + r + "</label></p>");
        } else {
            $("#body-modal").html("<p> f(x)=<label id='fxtotal'>" + r + "</label></p>" +
                "<p>Error Verdadero(E<sub>T</sub>): <label id='erverdadero'>" + eve + "</label></p>" +
                "<p>Error Relativo Porcentual(&epsilon;<sub>T</sub>):<label id='errelativo'>" + ero.toFixed(2) + "%</label></p>");
        }
        $('#modalResultado').modal('show');

    });
    ////////////////////////////////////////////////////

});