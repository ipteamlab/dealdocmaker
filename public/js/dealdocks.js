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
            mainprod: $('#mainprod').val()==undefined ? "" : $('#mainprod').val(),
            mainnum: $('#mainnum').val()==undefined ? "" : $('#mainnum').val(),
            mainprise: $('#mainprise').val()==undefined ? "" : moneyFormat($('#mainprise').val()),
            summainprise: moneyFormat($('#mainprise').val()*$('#mainnum').val()),

            module1: $('#module1').val()==undefined ? "" : $('#module1').val(),
            module2: $('#module2').val()==undefined ? "" : $('#module2').val(),
            module3: $('#module3').val()==undefined ? "" : $('#module3').val(),
            module4: $('#module4').val()==undefined ? "" : $('#module4').val(),
            module5: $('#module5').val()==undefined ? "" : $('#module5').val(),
            module6: $('#module6').val()==undefined ? "" : $('#module6').val(),
            modulnum: $('#modulnum').val()==undefined ? "" : $('#modulnum').val(),
            moduleprise: $('#moduleprise').val()==undefined ? "" : moneyFormat($('#moduleprise').val()),
            summoduleprise: moneyFormat($('#moduleprise').val()*$('#modulnum').val()),

            itogo: moneyFormat($('#moduleprise').val()*$('#modulnum').val()+$('#mainprise').val()*$('#mainnum').val()),

            payment_date: $('#payment_date').val()==undefined ? "" : $('#payment_date').val(),
            term_options: $('#term_options').val()==undefined ? "" : $('#term_options').val(),
            genitive_namehead: "",
            genitive_position_manager: ""
            
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
            mainprod: $('#mainprod').val()==undefined ? "" : $('#mainprod').val(),
            mainnum: $('#mainnum').val()==undefined ? "" : $('#mainnum').val(),
            mainprise: $('#mainprise').val()==undefined ? "" : moneyFormat($('#mainprise').val()),
            summainprise: moneyFormat($('#mainprise').val()*$('#mainnum').val()),
            module1: $('#module1').val()==undefined ? "" : $('#module1').val(),
            module2: $('#module2').val()==undefined ? "" : $('#module2').val(),
            module3: $('#module3').val()==undefined ? "" : $('#module3').val(),
            module4: $('#module4').val()==undefined ? "" : $('#module4').val(),
            module5: $('#module5').val()==undefined ? "" : $('#module5').val(),
            module6: $('#module6').val()==undefined ? "" : $('#module6').val(),
            modulnum: $('#modulnum').val()==undefined ? "" : $('#modulnum').val(),
            moduleprise: $('#moduleprise').val()==undefined ? "" : moneyFormat($('#moduleprise').val()),
            summoduleprise: moneyFormat($('#moduleprise').val()*$('#modulnum').val()),

            itogo: moneyFormat($('#moduleprise').val()*$('#modulnum').val()+$('#mainprise').val()*$('#mainnum').val()),
            
            payment_date: $('#payment_date').val()==undefined ? "" : $('#payment_date').val(),
            term_options: $('#term_options').val()==undefined ? "" : $('#term_options').val(),
            genitive_namehead: "",
            genitive_position_manager: ""
        }, updateContrac);
    });

    function updateContrac(data) {
        console.log(data);
        $('#contract').html(data)
    }

    $('#printbtn').click(function() {
        window.print();
    })

    function moneyFormat(n) {
        return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace('.', '.');
    }
    

});