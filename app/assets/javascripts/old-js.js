/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


$("#backlink").click(function(event) {
    event.preventDefault();
    history.back(1);
});


$("#typeFilter :checkbox").click(function() {
    $(".cards").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $(".cards").show();
    }
});

$("#yearFilter :checkbox").click(function() {
    $(".year-groups").hide();
    $("#yearFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#yearFilter :checkbox").is(':checked')) {
      $(".year-groups").show();
    }
});


// to add a URL to the button when any radio button is select - ADD NEW PROVIDER PAGE //
$('#bulkOrSingle').click(function() {
   if($('#changed-name-1').is(':checked')) { location.href='new-provider-details'; }
	 else if ($('#changed-name-2').is(':checked')) { location.href='upload-provider-list'; }

   // else if(!$('.govuk-radios__item input').is(':checked')) {
   //   $('#formError').addClass('govuk-form-group--error');
   //   $('.govuk-error-summary').removeClass('hide');
   //   $('.govuk-error-message').removeClass('hide');
   // }
});


// create a container for assignments //

// $(document).ready(function() {
//     $('#btnSave').click(function() {
//         addCheckbox($('#txtName').val());
//     });
// });
//
// function addCheckbox(name) {
//    var container = $('#cblist');
//    var inputs = container.find('input');
//    var id = inputs.length+1;
//
//    $('<input />', { type: 'checkbox', id: 'cb'+id, value: name }).appendTo(container);
//    $('<label />', { 'for': 'cb'+id, text: name }).appendTo(container);
// }


// $("#addAssignment").click(function(){
//   var value = $(".assignment-value").val();
//   var checkvalue = $(".assignment").val();
//
//   $('.over-right').remove();
//   $('#noActive').remove();
//
//   if($('.assignment').is(':checked')) {
//      $(".active-assignments").append("<div><p class='govuk-body over-right'>" + checkvalue + "</p> <p class='govuk-body over-right'> " + value + "<a href='#' class='govuk-link remove-assignment'>Remove</a></p></div>");
//    }
//
//    var value2 = $(".assignment-value2").val();
//    var checkvalue2 = $(".assignment2").val();
//
//    if($('.assignment2').is(':checked')) {
//       $(".active-assignments").append("<p class='govuk-body over-right'>" + checkvalue2 + "</p> <p class='govuk-body over-right'> " + value2 + "<a href='#' class='govuk-link'>Remove</a> </p>");
//     }
//
//     var value3 = $(".assignment-value3").val();
//     var checkvalue3 = $(".assignment3").val();
//
//     if($('.assignment3').is(':checked')) {
//        $(".active-assignments").append("<p class='govuk-body over-right'>" + checkvalue3 + "</p> <p class='govuk-body over-right'> " + value3 + "<a href='#' class='govuk-link'>Remove</a> </p>");
//      }
//
// });
//
// $(".remove-assignment").click(function(){
//   alert('clicked');
// })
// $('#radio_value').click(function() {
// $('#result').empty();
// var value = $("form input[type='radio']:checked").val();
// if($("form input[type='radio']").is(':checked')) {
// $('#result').append("Checked Radio Button Value is :<span> "+ value +" </span>");
// }else{
// alert(" Please Select any Option ");
// }
// });


// autocomlete option select function //

$(".autocomplete__menu").click(function() {
  $("#searchProviders").trigger("click");
});



// to add collection typess

// $("#inactiveAssignments #1a a").click(function(){
//   $("#inactiveAssignments #1a").hide();
//   $("#inactiveAssignments #2a").hide();
//   $("#activeAssignments #1b").show();
//   $("#noActive").hide();
// });
//
// $("#activeAssignments #1b a").click(function(){
//   $("#activeAssignments #1b").hide();
//   $("#inactiveAssignments #1a").show();
//   $("#inactiveAssignments #2a").show();
//   $("#noActive").show();
// })
//
// $("#inactiveAssignments a").click(function(){
//   $("#buttonGroup").show();
// });
//
// $("#activeAssignments a").click(function(){
//   $("#buttonGroup").show();
// });


$('#addAssignment').click(function(){

  if($('.assignment').is(':checked') && !$('.assignment-value').val() == '') {

    $('.govuk-error-message').addClass('hidden');

    $('.assigned').addClass('hidden');
    $('.assigned2').addClass('hidden');

    var datevalue = $(".assignment-value").val();
    var assignmnentEnd = $(".assignment-end").val();
    $('.assigned').removeClass('hidden');
    $('.start-date').empty().append( 'Start date: ' + datevalue );

    if($('.assignment-end').val() == '') {
      $('.end-date').empty().append( 'End date: ' + 'N/A' );
    } else if (!$('.assignment-end').val() == '') {
      $('.end-date').empty().append( 'End date: ' + assignmnentEnd );
    }

    $('#noActive').addClass('hidden');
    $('#buttonGroup').show();

    } else if ($('.assignment').is(':checked') && $('.assignment-value').val() == '') {
        $('.error1').removeClass('hidden');
      }
  // if($('.assignment-value').val() == '') {
  //   alert('you did not fill out one of the fields');
  //   e.preventDefault();
  // }

  if($('.assignment2').is(':checked') && !$('.assignment-value2').val() == '') {

    $('.govuk-error-message').addClass('hidden');

    $('.assigned').addClass('hidden');
    $('.assigned2').addClass('hidden');

    var datevalue2 = $(".assignment-value2").val();
    var assignmnentEnd2 = $(".assignment-end2").val();
    $('.assigned2').removeClass('hidden');
    $('.start-date2').empty().append( 'Start date: ' + datevalue2 );

    if($('.assignment-end2').val() == '') {
      $('.end-date2').empty().append( 'End date: ' + 'N/A' );
    } else if (!$('.assignment-end2').val() == '') {
      $('.end-date2').empty().append( 'End date: ' + assignmnentEnd2 );
    }

    $('#noActive').addClass('hidden');
    $('#buttonGroup').show();

  } else if ($('.assignment2').is(':checked') && $('.assignment-value2').val() == '') {
      $('.error2').removeClass('hidden');
    }



  if($('.assignment3').is(':checked') && !$('.assignment-value3').val() == '') {

    $('.govuk-error-message').addClass('hidden');

    var datevalue3 = $(".assignment-value3").val();
    var assignmnentEnd3 = $(".assignment-end3").val();
    $('.assigned3').removeClass('hidden');
    $('.start-date3').empty().append( 'Start date: ' + datevalue3 );

    if($('.assignment-end3').val() == '') {
      $('.end-date3').empty().append( 'End date: ' + 'N/A' );
    } else if (!$('.assignment-end3').val() == '') {
      $('.end-date3').empty().append( 'End date: ' + assignmnentEnd3 );
    }

    $('#noActive').addClass('hidden');
    $('#buttonGroup').show();

  } else if ($('.assignment3').is(':checked') && $('.assignment-value3').val() == '') {
      $('.error3').removeClass('hidden');
    }


  if($('.assignment4').is(':checked') && !$('.assignment-value4').val() == '') {

    $('.govuk-error-message').addClass('hidden');

    var datevalue4 = $(".assignment-value4").val();
    var assignmnentEnd4 = $(".assignment-end4").val();
    $('.assigned4').removeClass('hidden');
    $('.start-date4').empty().append( 'Start date: ' + datevalue4 );

    if($('.assignment-end4').val() == '') {
      $('.end-date4').empty().append( 'End date: ' + 'N/A' );
    } else if (!$('.assignment-end4').val() == '') {
      $('.end-date4').empty().append( 'End date: ' + assignmnentEnd4 );
    }

    $('#noActive').addClass('hidden');
    $('#buttonGroup').show();

  } else if ($('.assignment4').is(':checked') && $('.assignment-value4').val() == '') {
      $('.error4').removeClass('hidden');
    }


    if($('.assignment5').is(':checked')) {

      $('.govuk-error-message').addClass('hidden');

      $('.assigned5').removeClass('hidden');

      $('#noActive').addClass('hidden');
      $('#buttonGroup').show();

    }


  if($('.active-assignments section').is(':visible')) {
    $('#addAssignment').text('Update assignments');
  }

  // $(".govuk-input").val("");

});



$('.remove').click(function(){
  $('.assigned').addClass('hidden');
  if(!$('.active-assignments section').is(':visible')) {
    $('#noActive').removeClass('hidden');
  }
  $('#buttonGroup').show();
});

$('.remove2').click(function(){
  $('.assigned2').addClass('hidden');
  if(!$('.active-assignments section').is(':visible')) {
    $('#noActive').removeClass('hidden');
  }
  $('#buttonGroup').show();
});

$('.remove3').click(function(){
  $('.assigned3').addClass('hidden');
  if(!$('.active-assignments section').is(':visible')) {
    $('#noActive').removeClass('hidden');
  }
  $('#buttonGroup').show();
});

$('.remove4').click(function(){
  $('.assigned4').addClass('hidden');
  if(!$('.active-assignments section').is(':visible')) {
    $('#noActive').removeClass('hidden');
  }
  $('#buttonGroup').show();
});

$('.remove5').click(function(){
  $('.assigned5').addClass('hidden');
  if(!$('.active-assignments section').is(':visible')) {
    $('#noActive').removeClass('hidden');
  }
  $('#buttonGroup').show();
});

$('#1 section p a').click(function(e){
  e.preventDefault();
});
