$(document).ready(function() {

    $('#formRegistration').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#register-name').val();
        //get the name field value
        var email = $('#register-email').val();
        //get the affiliation
        var affiliation = $('#register-affiliation').val();
        // get comment field
        var comment_extra = $('#register-comment').val();
        // get attendance days
        var attendance_th = $('#register-attendance-th').is(':checked');
        var attendance_fr = $('#register-attendance-fr').is(':checked');
        var attendance_reception = $('#register-attendance-reception').is(':checked');

        //pretend we don't need validation
        if (!attendance_th & !attendance_fr) {
        	$('#errorAttendance').show();
        	return;
        }

        //send to formspree
        $.ajax({
            //url:'https://formspree.io/luaognzn@grr.la',
            url:'https://formspree.io/' + 'bafaworkshop' + '2017' + '@gm' + 'ail.co' + 'm',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                affiliation:affiliation,
                attendance_th:attendance_th,
                attendance_fr:attendance_fr,
                attendance_reception:attendance_reception,
                comment_extra:comment_extra,
                _subject:'[BAFA] Registration Form',
                _format:'plain',
            },
            dataType:"json",
            beforeSend:function() {
            	console.log('Sending registration form...');
            	$('#sendingRegistration').show();
            }
        }).done(function(data) {
        	console.log('Registration form successfully sent.');
            $('#formRegistration').hide();
            $('#thanksRegistration').show();
            $('#errorRegistration').hide();
        }).fail(function() {
        	console.log('Failed to send registration form.');
            $('#formRegistration').show();
            $('#thanksRegistration').hide();
            $('#errorRegistration').show();
        }).always(function() {
        	$('#sendingRegistration').hide();
        	$('#errorAttendance').hide();
        });

    });

});