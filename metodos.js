function solonum(str) {
    var str_end = '';
    var filtro = '1234567890.-';
    for (var i = 0; i < str.length; i++)
        if (filtro.indexOf(str.charAt(i)) != -1)
            str_end += str.charAt(i);
    return str_end;
}
$(document).ready(function () {
    ///Interpolacion Lineal
    $("#flexSwitchCheckDefault").click(function () {
        if ($("#valorfx").is('[readonly]')) {
            $(this).parent().siblings('div').children('div').children("#valorfx").prop('readonly', false);
        } else {
            $(this).parent().siblings('div').children('div').children("#valorfx").prop('readonly', true);
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
            x = parseFloat($("#valorx").val()),
            x0 = parseFloat($("#valorx0").val()),
            x1 = parseFloat($("#valorx1").val()),
            res = 0,
            ev = 0,
            er = 0;
        res = fx0 + ((fx1 - fx0) / (x1 - x0)) * (x - x0);
        ev = fx - res;
        er = (ev / fx) * 100;
        let r, eve, ero;
        r = res ? res + " aprox." : 0;
        eve = ev ? ev : 0;
        ero = er ? er : 0;
        $("#fxtotal").text(r);
        $("#erverdadero").text(eve);
        $("#errelativo").text(ero.toFixed(2) + "%");
        $('#modalResultado').modal('show');
        
    });
    ////////////////////////////////////////////////////
    
});