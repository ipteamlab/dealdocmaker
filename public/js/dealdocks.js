$(function () {

    $(document).ready(function () {
        $.post('getcontract', {
            datadeal: $('#datadeal').val()==undefined ? "" : $('#datadeal').val(),
            numdeal: $('#numdeal').val()==undefined ? "" : $('#numdeal').val(),
            nameoffirm: $('#nameoffirm').val()==undefined ? "" : $('#nameoffirm').val(),
            shortnameoffirm: $('#shortnameoffirm').val()==undefined ? "" : $('#shortnameoffirm').val(),
            namehead: $('#namehead').val()==undefined ? "" : $('#namehead').val(),
            position_manager: $('#position_manager').val()==undefined ? "" : $('#position_manager').val(),
            based_on_what: $('#based_on_what').val()==undefined ? "" : $('#based_on_what').val(),
            contract_date: $('#contract_date').val()==undefined ? "" : $('#contract_date').val(),
            INN: $('#INN').val()==undefined ? "" : $('#INN').val(),
            KPP: $('#KPP').val()==undefined ? "" : $('#KPP').val(),
            legal_address: $('#legal_address').val()==undefined ? "" : $('#legal_address').val(),
            mailing_address: $('#mailing_address').val()==undefined ? "" : $('#mailing_address').val(),
            phone: $('#phone').val()==undefined ? "" : $('#phone').val(),
            email: $('#email').val()==undefined ? "" : $('#email').val(),
            banker: $('#banker').val()==undefined ? "" : $('#banker').val(),
            P_C: $('#P_C').val()==undefined ? "" : $('#P_C').val(),
            K_P: $('#K_P').val()==undefined ? "" : $('#K_P').val(),
            BIK: $('#BIK').val()==undefined ? "" : $('#BIK').val(),
            specification: $('#specification').val()==undefined ? "" : $('#specification').val(),
            payment_date: $('#payment_date').val()==undefined ? "" : $('#payment_date').val()
        }, updateContrac);
    });

    $('#getcontract').change(function (e) {
        e.preventDefault();
        $.post('getcontract', {
            datadeal: $('#datadeal').val()==undefined ? "" : $('#datadeal').val(),
            numdeal: $('#numdeal').val()==undefined ? "" : $('#numdeal').val(),
            nameoffirm: $('#nameoffirm').val()==undefined ? "" : $('#nameoffirm').val(),
            shortnameoffirm: $('#shortnameoffirm').val()==undefined ? "" : $('#shortnameoffirm').val(),
            namehead: $('#namehead').val()==undefined ? "" : $('#namehead').val(),
            position_manager: $('#position_manager').val()==undefined ? "" : $('#position_manager').val(),
            based_on_what: $('#based_on_what').val()==undefined ? "" : $('#based_on_what').val(),
            contract_date: $('#contract_date').val()==undefined ? "" : $('#contract_date').val(),
            INN: $('#INN').val()==undefined ? "" : $('#INN').val(),
            KPP: $('#KPP').val()==undefined ? "" : $('#KPP').val(),
            legal_address: $('#legal_address').val()==undefined ? "" : $('#legal_address').val(),
            mailing_address: $('#mailing_address').val()==undefined ? "" : $('#mailing_address').val(),
            phone: $('#phone').val()==undefined ? "" : $('#phone').val(),
            email: $('#email').val()==undefined ? "" : $('#email').val(),
            banker: $('#banker').val()==undefined ? "" : $('#banker').val(),
            P_C: $('#P_C').val()==undefined ? "" : $('#P_C').val(),
            K_P: $('#K_P').val()==undefined ? "" : $('#K_P').val(),
            BIK: $('#BIK').val()==undefined ? "" : $('#BIK').val(),
            specification: $('#specification').val()==undefined ? "" : $('#specification').val(),
            payment_date: $('#payment_date').val()==undefined ? "" : $('#payment_date').val()
        }, updateContrac);
    });

    function updateContrac(data) {
        $('#contract').html(data)
    }

    $('#printbtn').click(function() {
        window.print();
    })

});