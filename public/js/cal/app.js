$(document).ready(function() {
    
	//WCFFIT Calendar
	$('.calendar').fullCalendar({

		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,listYear'
		},

		displayEventTime: true, // don't show the time column in list view

		events: {
			googleCalendarId: 'elopeq4rih97plroqu4lgo7it0@group.calendar.google.com'
		},

		// THIS KEY WON'T WORK IN PRODUCTION!!!
		// To make your own Google API key, follow the directions here:
		// http://fullcalendar.io/docs/google_calendar/
		googleCalendarApiKey: 'AIzaSyC2evQMXjZpiF2QsVOCQ63hAuzkufrXRxA',
		
		eventClick: function(event) {
			// opens events in a popup window
			window.open(event.url, 'gcalevent', 'width=700,height=600');
			return false;
		},
		
		loading: function(bool) {
			$('.loading').toggle(bool);
		}
		
	});
	
	//Staff Calendar
	$('.staff-calendar').fullCalendar({

		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,listYear'
		},

		displayEventTime: false, // don't show the time column in list view

		events: {
			googleCalendarId: '959c23kf5mghn3lbk2ocd47d18@group.calendar.google.com'
		},

		// THIS KEY WON'T WORK IN PRODUCTION!!!
		// To make your own Google API key, follow the directions here:
		// http://fullcalendar.io/docs/google_calendar/
		googleCalendarApiKey: 'AIzaSyCfn2AU4rK9GHZs0c4PLi7rw0oLMQ5KbQY',
		
		eventClick: function(event) {
			// opens events in a popup window
			window.open(event.url, 'gcalevent', 'width=700,height=600');
			return false;
		},
		
		loading: function(bool) {
			$('.loading').toggle(bool);
		}
		
	});

	//Child Watch Calendar
	$('.child-calendar').fullCalendar({

		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,listYear'
		},

		displayEventTime: false, // don't show the time column in list view

		events: {
			googleCalendarId: '1in5m28sg5di42ptnprn45sra8@group.calendar.google.com'
		},

		// THIS KEY WON'T WORK IN PRODUCTION!!!
		// To make your own Google API key, follow the directions here:
		// http://fullcalendar.io/docs/google_calendar/
		googleCalendarApiKey: 'AIzaSyABIu7x2hwBof2u7T7FNZtX9IOAZr1gsjs',
		
		eventClick: function(event) {
			// opens events in a popup window
			window.open(event.url, 'gcalevent', 'width=700,height=600');
			return false;
		},
		
		loading: function(bool) {
			$('.loading').toggle(bool);
		}
		
	});
});
