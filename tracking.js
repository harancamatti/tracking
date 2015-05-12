$(function() {
  var eventCategory = $('body').attr('data-ga-eventCategory');

  //Tracking de eventos com interação
  $('body').on('click', '.trackable', function(ev) {
      var el = $(this);
      var eventAction= el.attr('data-ga-eventAction');
      var eventLabel = el.attr('data-ga-eventLabel');

      //Diferencia a lista Detaques/Recentes
      if($(this).parents('li').hasClass("card")==true){
        eventAction = eventAction + " - " + $('.highlights__tabs').find('.active').attr('data-ga-eventLabel')
        console.log(eventAction)
      }
      console.log('sending event...', eventAction, eventLabel);
      dataLayer.push({'event':'eventTracking' , 'eventCategory': eventCategory,'eventAction': eventAction, 'eventLabel': eventLabel});
  });

  //Tracking de eventos sem interação
  $('body').on('click', '.trackable-non-interaction', function(ev) {
      var el = $(this);
      var eventAction= el.attr('data-ga-eventAction');
      var eventLabel = el.attr('data-ga-eventLabel');
      console.log('sending event...', eventAction, eventLabel);
      dataLayer.push({'event':'eventTrackingNonInteraction' , 'eventCategory': eventCategory,'eventAction': eventAction, 'eventLabel': eventLabel});
  });

  //Tracking Social
  $('body').on('click', '.trackable-social', function(ev) {
      var el = $(this);
      var socialNetwork= el.attr('data-ga-socialNetwork');
      var socialAction = el.attr('data-ga-socialAction');
      var socialTarget = el.attr('data-ga-socialTarget');
      console.log('sending SocialTracking...', socialNetwork, socialAction, socialTarget);
      dataLayer.push({'event':'socialTracking' , 'socialNetwork': socialNetwork,'socialAction': socialAction, 'socialTarget': socialTarget});
  });


});
