/* global $ */
// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();




})



$("#backlink").click(function(event) {
    event.preventDefault();
    history.back(1);
});

// ---------- last 3 months filters ------------ //

$("#typeFilter :checkbox").click(function() {
    $("#submissions tr").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $("#submissions tr").show();
    }
});

// ---------- history filters ------------ //

$("#yearFilter :checkbox").click(function() {
    $(".year-groups").hide();
    $("#yearFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#yearFilter :checkbox").is(':checked')) {
      $(".year-groups").show();
    }
});

// ---------- qar frm filters ------------ //

$("#qarfrmFilter :checkbox").click(function() {
    $(".qf").hide();
    $("#qarfrmFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#qarfrmFilter :checkbox").is(':checked')) {
      $(".qf").show();
    }
});


// to add a URL to the button when any radio button is select - ADD NEW PROVIDER PAGE //
$('#bulkOrSingle').click(function() {
   if($('#changed-name-1').is(':checked')) { location.href='new-provider-details'; }
	 else if ($('#changed-name-2').is(':checked')) { location.href='upload-provider-list'; }
});


$('#manageOrNew').click(function() {
   if($('#newNotification').is(':checked')) { location.href='notifications-type'; }
	 else if ($('#manageNotification').is(':checked')) { location.href='manage-notifications'; }
	 else if ($('#ilrNotification').is(':checked')) { location.href='notifications-layout-options'; }
});


// autocomlete option select function //

$(".autocomplete__menu").click(function() {
  $("#searchProviders").trigger("click");
});

// dashboard number count up //

// $('.counter').each(function() {
//   var $this = $(this),
//       countTo = $this.attr('data-count');
//
//   $({ countNum: $this.text()}).animate({
//     countNum: countTo
//   },
//
//   {
//     // delay: 2000,
//     duration: 1000,
//     easing:'linear',
//     step: function() {
//       $this.text(Math.floor(this.countNum));
//     },
//     complete: function() {
//       $this.text(this.countNum);
//       //alert('finished');
//     }
//
//   });
//
// });


// add assignments to provider //

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


  if($('.assignment2').is(':checked') && !$('.assignment-value2').val() == '') {

    $('.assignment-value').removeAttr("disabled");

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

$("#MLselectAll").bind('click', function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});


$('#deleteSelected').on('click', function(e) {
var allVals = [];
		$(".mailing-list .govuk-checkboxes__input:checked").each(function() {
			allVals.push($(this).attr('data-id'));
		});
		//alert(allVals.length); return false;
		if(allVals.length <=0)
		{
      $('.govuk-banner--success').addClass('govuk-visually-hidden');
			$('.govuk-banner--warning').removeClass('govuk-visually-hidden');
		}
		else {
			//$("#loading").show();
			//WRN_PROFILE_DELETE = "Are you sure you want to delete selected emails?";
			//var check = confirm(WRN_PROFILE_DELETE);
			//if(check == true){
              //for client side
			  $.each(allVals, function( index, value ) {
				  $('table.mailing-list tr').filter("[data-row-id='" + value + "']").remove();
			  });
        $('.govuk-banner--warning').addClass('govuk-visually-hidden');
        $('.govuk-banner--success').removeClass('govuk-visually-hidden');
			//}
		}
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


$(document).ready(function () {
  $('#frm-continue').click(function() {
     $('#unpublish-confirmation').removeClass('govuk-visually-hidden');
  });

  $("#upload-csv").click(function() {
      location.href="campus-identifiers-upload#reference-data-report";
      $('#new-csv-upload-row').hide();
  });

  $('#new-csv-upload-row').hide();
  //$('#new-csv-upload-spinner').fadeOut(3000);

  $('#new-csv-upload-spinner').fadeOut(2000, function(){$('#new-csv-upload-row').fadeIn(0)});
  $("#frm-button").click(function() {
    if ($('#unpublish').is(':checked')) {
                    window.location.replace("frm-report-choice-sel-unpublish");
                }
                else if ($('#publish').is(':checked')) {
                    window.location.replace("frm-report-choice-sel-publish");
                }

  });

      var l1 = $('#email-list-1').val();
      var l2 = $('#email-list-2').val();
      var l3 = $('#email-list-3').val();
      var l4 = $('#email-list-4').val();
      var l5 = $('#email-list-5').val();
      var l6 = $('#email-list-6').val();
      var l7 = $('#email-list-7').val();
      var l8 = $('#email-list-8').val();
      var l9 = $('#email-list-9').val();

      if(!l1) {$('#email-list-data-1').hide()}
      if(!l2) {$('#email-list-data-2').hide()}
      if(!l3) {$('#email-list-data-3').hide()}
      if(!l4) {$('#email-list-data-4').hide()}
      if(!l5) {$('#email-list-data-5').hide()}
      if(!l6) {$('#email-list-data-6').hide()}
      if(!l7) {$('#email-list-data-7').hide()}
      if(!l8) {$('#email-list-data-8').hide()}
      if(!l9) {$('#email-list-data-9').hide()}


    if(window.location.href.indexOf
      ("dashboard") > -1) {
       $('.main-nav #1').addClass('active');
    }

    if(window.location.href.indexOf("provider") > -1) {
       $('.main-nav #2').addClass('active');
    }

    if(window.location.href.indexOf("manage-collections") > -1) {
       $('.main-nav #3').addClass('active');
    }

    if(window.location.href.indexOf("notifications") > -1) {
       $('.main-nav #4').addClass('active');
    }

    if(window.location.href.indexOf("period-end") > -1) {
       $('.main-nav #5').addClass('active');
    }

    if( window.location.href.indexOf("frm") > -1) {
       $('.main-nav #6').addClass('active');
    }

    if(window.location.href.indexOf("rule-validation") > -1) {
      $('.main-nav #7').addClass('active');
   }
   if(window.location.href.indexOf("report") > -1) {
     $('.main-nav #7').addClass('active');
  }

   /************************************************************
   *                      BARCHART One - Queues                       *
   ***********************************************************

   const chart1 = document.getElementById('chart-queues');
   const data1 = [
     ['auditing', 10],
     ['failedjob', 42],
     ['fundingclaim', 4],
  ['jobstatus', 3]
   ];
   const options1 = {

     title: '',

     titleBG: 'none',
     chartBG: 'none',
     valColors: ['white', 'white', 'white', 'white', 'yellow'],
     barColors: ['red'],
     labelColors: ['black'],
     labelPos: 'bottom',
     axisColor: 'orange',
     axisWidth: 1,
     barSpacing: .9,
     ticks: 5,
     width:300
   };

 createBarChart(data1, chart1, options1);*/

 /************************************************************
 *                      BARCHART Two - Topics                       *
 ***********************************************************

 const chart2 = document.getElementById('chart-topics');
 const data2 = [
   ['datamatch', 0],
   ['eas1819', 0],
   ['eas1920', 0],
 ['esf', 0],
 ['ILR1819', 0],
 ['ilr1920', 0],
 ['ncs', 0],
 ['periodend', 250],
 ['referencedata', 0],
 ['summarisation', 0]
 ];
 const options2 = {

   title: '',

   titleBG: 'none',
   chartBG: 'none',
   valColors: ['white', 'white', 'white', 'white', 'yellow'],
   barColors: ['green'],
   labelColors: ['black'],
   labelPos: 'bottom',
   axisColor: 'orange',
   axisWidth: 1,
   barSpacing: .9,
   ticks: 5,
   width:290
 };

 createBarChart(data2, chart2, options2);*/

 /************************************************************
 *                      BARCHART three - ILR                       *
 ***********************************************************

 const chart3 = document.getElementById('chart-ILR');
 const data3 = [
   ['Deds', 21],
   ['ESFV1', 0],
   ['ESFV2', 11],
 ['FileValidation', 0],
 ['Funding', 0],
 ['Payments', 0],
 ['Ref Data', 0],
 ['Reports', 0.1],
 ['Validation', 0]
 ];
 const options3 = {

   title: '',
   titleBG: 'none',
   chartBG: 'none',
   valColors: ['white', 'white', 'white', 'white', 'yellow'],
   barColors: ['red','green'],
   labelColors: ['black'],
   labelPos: 'bottom',
   axisColor: 'orange',
   axisWidth: 1,
   barSpacing: .5  ,
   ticks: 9,
   width:290
 };

 createBarChart(data3, chart3, options3);*/



     var TASKS = ['auditing', 'failedjob', 'fundingclaim', 'jobstatus'];
     var color = Chart.helpers.color;
     var barChartData = {
       labels: ['auditing', 'failedjob', 'fundingclaim', 'jobstatus'],
       datasets: [{
         label: '# of Messages',
         backgroundColor: color(window.chartColors.red).alpha(1).rgbString(),
         borderColor: window.chartColors.red,
         borderWidth: 1,
         data: [
           45, 12, 34, 50
         ]
       }, {
         label: '# of Dead Letters',
         backgroundColor: color(window.chartColors.lawngreen).alpha(1).rgbString(),
         borderColor: window.chartColors.lawngreen,
         borderWidth: 1,
         data: [
           60, 45, 65, 70
         ]
       }]

     };

     var topicData = {
       labels: ['datamatch', 'eas1819', 'eas1920', 'est', 'ilr1819', 'ilr1920', 'ncs', 'periodend', 'referencedata', 'summarisation'],
       datasets: [{
         label: '# of Messages',
         backgroundColor: color(window.chartColors.red).alpha(1).rgbString(),
         borderColor: window.chartColors.red,
         borderWidth: 1,
         data: [
           45, 12, 34, 50
         ]
       }, {
         label: '# of Dead Letters',
         backgroundColor: color(window.chartColors.lawngreen).alpha(1).rgbString(),
         borderColor: window.chartColors.lawngreen,
         borderWidth: 1,
         data: [
           60, 45, 65, 70
         ]
       }]

     };

     var ilrData = {
       labels: ['Deds', 'ESFV1', 'ESFV2', 'FileValidation', 'Funding', 'Payments', 'Ref Data', 'Reports', 'Validation'],
       datasets: [{
         label: '# of Messages',
         backgroundColor: color(window.chartColors.lawngreen).alpha(1).rgbString(),
         borderColor: window.chartColors.lawngreen,
         borderWidth: 1,
         data: [
           45, 12, 34, 50
         ]
       }, {
         label: '# of Dead Letters',
         backgroundColor: color(window.chartColors.lawngreen).alpha(1).rgbString(),
         borderColor: window.chartColors.lawngreen,
         borderWidth: 1,
         data: [
           60, 45, 65, 70
         ]
       }]

     };

     window.onload = function() {
       var ctx = document.getElementById('canvas-queue').getContext('2d');
       window.myBar = new Chart(ctx, {
         type: 'bar',
         data: barChartData,
         options: {
           responsive: true,
           legend: {
             position: 'top',
           },
           title: {
             display: false,
             text: 'Chart.js Bar Chart'
           }
         }
       });


       var ctx = document.getElementById('canvas-topics').getContext('2d');
       window.myBar = new Chart(ctx, {
         type: 'bar',
         data: topicData,
         options: {
           responsive: true,
           legend: {
             position: 'top',
           },
           title: {
             display: false,
             text: 'Chart.js Bar Chart'
           }
         }
       });


       var ctx = document.getElementById('canvas-ILR').getContext('2d');
       window.myBar = new Chart(ctx, {
         type: 'bar',
         data: ilrData,
         options: {
           responsive: true,
           legend: {
             position: 'top',
           },
           title: {
             display: false,
             text: 'Chart.js Bar Chart'
           }
         }
       });

     };

     document.getElementById('randomizeData').addEventListener('click', function() {
       var zero = Math.random() < 0.2 ? true : false;
       barChartData.datasets.forEach(function(dataset) {
         dataset.data = dataset.data.map(function() {
           return zero ? 0.0 : randomScalingFactor();
         });

       });
       window.myBar.update();
     });

     var colorNames = Object.keys(window.chartColors);
     document.getElementById('addDataset').addEventListener('click', function() {
       var colorName = colorNames[barChartData.datasets.length % colorNames.length];
       var dsColor = window.chartColors[colorName];
       var newDataset = {
         label: 'Dataset ' + (barChartData.datasets.length + 1),
         backgroundColor: color(dsColor).alpha(1).rgbString(),
         borderColor: dsColor,
         borderWidth: 0,
         data: []
       };

       for (var index = 0; index < barChartData.labels.length; ++index) {
         newDataset.data.push(randomScalingFactor());
       }

       barChartData.datasets.push(newDataset);
       window.myBar.update();
     });

     document.getElementById('addData').addEventListener('click', function() {
       if (barChartData.datasets.length > 0) {
         var month = TASKS[barChartData.labels.length % TASKS.length];
         barChartData.labels.push(month);

         for (var index = 0; index < barChartData.datasets.length; ++index) {
           // window.myBar.addData(randomScalingFactor(), index);
           barChartData.datasets[index].data.push(randomScalingFactor());
         }

         window.myBar.update();
       }
     });

     document.getElementById('removeDataset').addEventListener('click', function() {
       barChartData.datasets.pop();
       window.myBar.update();
     });

     document.getElementById('removeData').addEventListener('click', function() {
       barChartData.labels.splice(-1, 1); // remove the label first

       barChartData.datasets.forEach(function(dataset) {
         dataset.data.pop();
       });

       window.myBar.update();
     });



});

$('#startRound3').click(function(e){
  $(this).hide();
  // $(this).text('Pause');
  $('.green-dot').removeClass('hidden');
  $('.awaiting-1').addClass('line-height-adjustment');
  $('.awaiting-1').text('in progress...');
  $('.time-started').show();
  $('.spinner1').show();
  $('.start-period-end-text').hide();
  setTimeout(function()
  {
    $('.awaiting-1').hide();
    $('.spinner1').hide();
    $('.spinner2').show();
    $('.hide-complete-1').show();
    $('.awaiting-2').html('in progress...');
    $('.awaiting-2').addClass('line-height-adjustment');
  }, 1000);
  setTimeout(function()
  {

    $('.awaiting-2').hide();
    $('.hide-complete-2').show();
    $('.spinner2').hide();
    $('.spinner3').show();
    $('.awaiting-3').html('in progress...');
    $('.awaiting-3').addClass('line-height-adjustment');
  }, 2000);
  setTimeout(function()
  {

    $('.awaiting-3').hide();
    $('.hide-complete-3').show();
    $('.spinner3').hide();
    $('.spinner4').show();
    $('.awaiting-4').html('in progress...');
    $('.awaiting-4').addClass('line-height-adjustment');

  }, 5000);
  setTimeout(function()
  {

    $('.spinner4').hide();
    $('.awaiting-4').hide();
    $('.hide-complete-4').show();
    $('#startRound3').hide();
    $('.green-dot').hide();
    $('.govuk-warning-text__icon').removeClass('custom');
  }, 7000);

  e.preventDefault();
});

$(".rerun-job").click(function(e){
  $(this).hide();

  $('.spinner4').show();
  $('.awaiting-4').show();
  $('.hide-complete-4').hide();
  $('.green-dot').show();
  $('.govuk-warning-text__icon').addClass('custom');

  setTimeout(function()
  {

    $('.spinner4').hide();
    $('.awaiting-4').hide();
    $('.hide-complete-4').show();
    $('.govuk-tag.hide-complete-4').text("Completed");
    $('.hide-complete-4').removeClass("red");
    $('.period-end-complete').css('display', 'inline-block');
    $('#startRound3').hide();
    $('.green-dot').hide();
  }, 2000);
  e.preventDefault();

});

$('.period-end-complete').click(function(e){
  $(this).hide();
  $('.pe-steps.3').show();
  e.preventDefault();
});

$('.pe-steps.3').click(function(e){
  $(this).hide();
  $('.pe-steps.4').show();
  e.preventDefault();
});

$('.pe-steps.4').click(function(e){
  $(this).hide();
  $('.pe-steps.5').show();
  e.preventDefault();
});

$('.pe-steps.5').click(function(e){
  $(this).hide();
  $('.pe-steps.6').show();
  $('.publish-reports').removeClass('hidden');
  e.preventDefault();
});

$('.pe-steps.6').click(function(e){
  $(this).hide();
  $('.pe-steps.7').show();
  e.preventDefault();
});

$('.publish-reports').click(function(e){
  $('.red-dot').removeClass('hidden')
  $(this).addClass('hidden');
  e.preventDefault();
});

$('.pe-steps.7').click(function(e){
  $(this).hide();
  $('.pe-steps.8').show();
  e.preventDefault();
});

$('.pe-steps.8').click(function(e){
  $(this).hide();
  $('.pe-steps.9').show();
  e.preventDefault();
});

$('.pe-steps.9').click(function(e){
  $(this).hide();
  $('.pe-steps.10').show();
  e.preventDefault();
});

// $('.pe-steps.10').click(function(e){
//   $(this).hide();
//   $('.pe-steps.11').show();
//   e.preventDefault();
// });


$("#firstStep").change(function () {
    if ($(this).val() == "collection-assignments") {
        $("#grey1").addClass('show');
    } else {
        $("#grey1").removeClass('show');
    }
});

$('#closeBox').click(function(){
  $('#firstStep').val('empty').trigger('change');
  $('#secondStep').val('empty').trigger('change');
  $("#grey1").removeClass('show');
  $('.button-container').removeClass('show');
});

$("#secondStep").change(function () {
  $('.button-container').addClass('show');
});

$('#addMore').click(function(e){
  $("#grey2").addClass('show');
  $("#andOr").addClass('show');
  e.preventDefault();
});

$('#closeBox2').click(function(){
  $("#grey2").removeClass('show');
  $("#andOr").removeClass('show');
});

$('#allTab').click(function(){
  $('#first').attr('stroke-dasharray', '40, 100');
  $('#firstDonut').text('40');
  $('#jobText').text('All jobs');
});

$('.ilr').change(function(){
  $('#first').attr('stroke-dasharray', '22, 100');
  $('#firstDonut').text('22');
  $('#jobText').text('ILR');
});

$('.eas').change(function(){
  $('#first').attr('stroke-dasharray', '10, 100');
  $('#firstDonut').text('10');
  $('#jobText').text('EAS');
});

$('.esf').change(function(){
  $('#first').attr('stroke-dasharray', '8, 100');
  $('#firstDonut').text('8');
  $('#jobText').text('ESF');
});


$("#ILR").change(function() {
  if ($(this).is(':checked')) {
    $('#first').attr('stroke-dasharray', '22, 100');
    $('#firstDonut').text('22');
    $('#jobText').text('ILR jobs');
  } else {
    $('#first').attr('stroke-dasharray', '40, 100');
    $('#firstDonut').text('40');
    $('#jobText').text('All jobs');
  }
});

$("#EAS").change(function() {
  if ($(this).is(':checked')) {
    $('#first').attr('stroke-dasharray', '10, 100');
    $('#firstDonut').text('10');
    $('#jobText').text('EAS jobs');
  } else {
    $('#first').attr('stroke-dasharray', '40, 100');
    $('#firstDonut').text('40');
    $('#jobText').text('All jobs');
  }
});

$("#ESF").change(function() {
  if ($(this).is(':checked')) {
    $('#first').attr('stroke-dasharray', '8, 100');
    $('#firstDonut').text('8');
    $('#jobText').text('ESF jobs');
  } else {
    $('#first').attr('stroke-dasharray', '40, 100');
    $('#firstDonut').text('40');
    $('#jobText').text('All jobs');
  }
});


$("#typeFilter :checkbox").click(function() {
    $("#submissions div").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $("#submissions div").show();
    }
});

$('#clearFromList').click(function(e){
  $('.card-1').hide();

  e.preventDefault();
});

$('.pause').click(function(e){
  $('#Status').text('Paused');
  $(this).text('Continue');
  e.preventDefault();
});

$('.cancel-process').click(function(e){
  $('#Status').text('Cancelled');
  $(this).text('Submit again');
  $('.pause').hide();

  e.preventDefault();
});


$('#intExt').click(function() {
   if($('.open-to-providers').is(':checked')) { location.href='review-ILR-changes-ext'; }
	 else if ($('.open-internally').is(':checked')) { location.href='review-ILR-changes'; }
});

$("#typeFilter :checkbox").click(function() {
    $("#submissions tr").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $("#submissions tr").show();
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


$("#first-radio").change(function() {
  $('.right-side-image img').attr('src','/public/images/01-first.png');
});
$("#second-radio").change(function() {
  $('.right-side-image img').attr('src','/public/images/02-second.png');
});
$("#third-radio").change(function() {
  $('.right-side-image img').attr('src','/public/images/03-third.png');
});
$("#forth-radio").change(function() {
  $('.right-side-image img').attr('src','/public/images/right-hand.png');
});

$("#selectAllLink").click(function(e) {
  $(".filter-wrapper").toggleClass("hidden");
  $(".submit-and-clear").toggleClass("hidden");
  $(".wrong-file-name").toggleClass("hidden");

  if((this).text == "Multi selection") {
    $(this).text("Single selection");
    $(".submit-clear-container").addClass("show");

    // $("#typeFilter input").attr("checked", true);
    // $(".filter-wrapper input").attr("checked", true);
  } else {
    $(this).text("Multi selection");
    $(".submit-clear-container").removeClass("show");
    $("#typeFilter input").attr("checked", false);
    $(".filter-wrapper input").attr("checked", false);
    $(".card-wrapper").show();
    $(".filter-wrapper :checkbox").attr("checked", false);
    $("#typeFilter :checkbox").attr("checked", false);
    $(".card-wrapper").show();
    $(".main-card").show();

    // $(".wrong-file-name").removeClass("hidden");
  }
  e.preventDefault();
});


//****************** failed files filters ********************//

$("#typeFilter :checkbox").on("change" , function() {
    $(".card-wrapper").hide();
    $(".main-card").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $(".card-wrapper").show();
      $(".main-card").show();
    }

    if ($(".card-wrapper").hasClass("hide-from-list")) {
      $(".hide-from-list").hide();
    }
});


$("#typeFilter .ilr-check").on("change" , function() {

  // if (!$(".card-wrapper").hasClass("hide-from-list")) {
  //   alert("doesnt have hide from list");
  // }

  if ($(".ilr-check").is(':checked')) {
    $(".filter-wrapper :checkbox[value='ilr']").attr("checked", true);
  } else if (!$(".ilr-check").is(':checked')) {
    $(".filter-wrapper :checkbox[value='ilr']").attr("checked", false);
  }

});


$("#typeFilter .eas-check").on("change" , function() {

  if ($(".eas-check").is(':checked')) {
    $(".filter-wrapper :checkbox[value='eas']").attr("checked", true);
  } else if (!$(".eas-check").is(':checked')) {
    $(".filter-wrapper :checkbox[value='eas']").attr("checked", false);
  }

});


$("#typeFilter .esf-check").on("change" , function() {

  if ($(".esf-check").is(':checked')) {
    $(".filter-wrapper :checkbox[value='esf']").attr("checked", true);
  } else if (!$(".esf-check").is(':checked')) {
    $(".filter-wrapper :checkbox[value='esf']").attr("checked", false);
  }

});

$("#submitAgain").click(function(e) {
  if ($(".ilr input").is(':checked')) {
    $(".card-wrapper.ilr").hide();
    $(".main-card.ilr").hide();
    $("#typeFilter :checkbox[value='ilr']").attr("checked", false);
    $(".main-card.ilr.eas").show();
    $(".main-card.eas.esf").show();
    $(".main-card.esf.ilr").show();
    $(".card-wrapper.eas").show();
    $(".card-wrapper.esf").show();
    $("#govukPanel").removeClass("hidden");
  }
  e.preventDefault();
});

$("#hideFiles").click(function(e) {
  $(".custom input[type='checkbox']:checked").each(
    function() {
      // $(this).parentsUntil(".new-wrapper").hide();
      $(this).parents().eq(3).addClass("hide-from-list");
      $(this).parents().eq(1).siblings().addClass("show");
    });

  $(".show-hidden-check-box").show();
  $("#typeFilter :checkbox").attr("checked", false);
  $(".show-hidden-check-box :checkbox").attr("checked", false);
  $(".custom input").attr("checked", false);
  $(".card-wrapper").show();
  // $(".main-card").show();
  $(".hide-from-list").hide();
  e.preventDefault();

});


$("#showFiles").click(function(e) {
  $(".custom input[type='checkbox']:checked").each(
    function() {
      // $(this).parentsUntil(".new-wrapper").hide();
      $(this).parents().eq(3).removeClass("hide-from-list");
      $(this).parents().eq(1).siblings().removeClass("show");
    });

  $(".show-hidden-check-box").hide();
  $("#typeFilter :checkbox").attr("checked", false);
  $(".show-hidden-check-box :checkbox").attr("checked", false);
  $(".custom input").attr("checked", false);
  $(".card-wrapper").show();
  $(".main-card").show();
  $("#hideFiles").show();
  $("#showFiles").removeClass("show");
  e.preventDefault();

});


$(".show-hidden-check-box input").on("change" , function() {

  if ($(this).is(':checked')) {

    $("#hideFiles").hide();
    $("#showFiles").addClass("show");
    $(".card-wrapper").hide();
    $(".hide-from-list").show();
    $(".hide-from-list input").attr("checked", true);

  } else {
    $("#hideFiles").show();
    $("#showFiles").removeClass("show");
    $(".card-wrapper").show();
    $(".hide-from-list").hide();
    // $(".main-card").show();
  }

});

$("#pause-all-jobs").click(function(e){
  $(this).hide();
  $(".confirm-pause").show();
  e.preventDefault();
});


$(".yes-pause").click(function(e){
  $(this).hide();
  $(".confirm-pause").hide();
  $(".pause-confirmation").show();
  $(".paused-job").text("Paused");
  $(".show-continue").show();
  e.preventDefault();
});

$(".cancel-pause").click(function(e){
  $(".confirm-pause").hide();
  $("#pause-all-jobs").show();
  e.preventDefault();
});

$('#sort').change(function() {
  if($('#firstTime').is(':selected')) {
    $('#interactiveHeading').text('Providers returning for the first time');
  }

  if($('#perDay').is(':selected')) {
    $('#interactiveHeading').text('Provider submissions per day');
  }
})

$('#returnPeriod').change(function() {
  if($("#r01").is(':selected')) {
    $(".fade-in.one").animate({height: "89%"}, 200);
    $(".fade-in-b.one").animate({height: "83%"}, 200);
    $(".fade-in.two").animate({height: "77%"}, 200);
    $(".fade-in-b.two").animate({height: "82%"}, 200);
    $(".fade-in.three").animate({height: "75%"}, 200);
    $(".fade-in-b.three").animate({height: "12%"}, 200);
    $(".fade-in.four").animate({height: "70%"}, 200);
    $(".fade-in-b.four").animate({height: "9%"}, 200);
    $(".fade-in.five").animate({height: "81%"}, 200);
    $(".fade-in-b.five").animate({height: "55%"}, 200);
    $(".fade-in.six").animate({height: "7%"}, 200);
    $(".fade-in-b.six").animate({height: "66%"}, 200);
    $(".fade-in.seven").animate({height: "8%"}, 200);
    $(".fade-in-b.seven").animate({height: "69%"}, 200);
    $(".fade-in.eight").animate({height: "73%"}, 200);
    $(".fade-in-b.eight").animate({height: "77%"}, 200);
    $(".fade-in.nine").animate({height: "88%"}, 200);
    $(".fade-in-b.nine").animate({height: "89%"}, 200);
    $(".fade-in.ten").animate({height: "92%"}, 200);
    $(".fade-in-b.ten").animate({height: "99%"}, 200);
  }
  if($("#r14").is(':selected')) {
    $(".fade-in.one").animate({height: "99%"}, 200);
    $(".fade-in-b.one").animate({height: "81%"}, 200);
    $(".fade-in.two").animate({height: "13%"}, 200);
    $(".fade-in-b.two").animate({height: "11%"}, 200);
    $(".fade-in.three").animate({height: "5%"}, 200);
    $(".fade-in-b.three").animate({height: "3%"}, 200);
    $(".fade-in.four").animate({height: "59%"}, 200);
    $(".fade-in-b.four").animate({height: "77%"}, 200);
    $(".fade-in.five").animate({height: "65%"}, 200);
    $(".fade-in-b.five").animate({height: "63%"}, 200);
    $(".fade-in.six").animate({height: "66%"}, 200);
    $(".fade-in-b.six").animate({height: "77%"}, 200);
    $(".fade-in.seven").animate({height: "67%"}, 200);
    $(".fade-in-b.seven").animate({height: "88%"}, 200);
    $(".fade-in.eight").animate({height: "91%"}, 200);
    $(".fade-in-b.eight").animate({height: "97%"}, 200);
    $(".fade-in.nine").animate({height: "100%"}, 200);
    $(".fade-in-b.nine").animate({height: "94%"}, 200);
    $(".fade-in.ten").animate({height: "85%"}, 200);
    $(".fade-in-b.ten").animate({height: "89%"}, 200);
  }
});


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if ($(window).width() > 640) {
      if (windscroll >= 500) {
          $('#nav li a').addClass('active');
          $('.wrapper').each(function(i) {
              if ($(this).position().top <= windscroll + 200) {
                  $('#nav li a.active').removeClass('active');
                  $('#nav li a').eq(i).addClass('active');
              }
          });

      } else {

          $('#nav').removeClass('active');
          $('#nav li a.active').removeClass('active');
          $('#nav li a:first').addClass('active');
      }
    }
}).scroll();



var $window = $(window);
var distance = $('.sticky').offset().top;

// var distance = ($sticky.length) ? stickyOffset.top : 0
$window.scroll(function() {
  if ( $window.scrollTop() >= distance ) {
        $('.sticky').addClass('stuck');
    } else {
        $('.sticky').removeClass('stuck');
    }
});
