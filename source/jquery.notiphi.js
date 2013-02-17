(function($){
	$.fn.notiPhi = function(options){
		'version = v0.1';
	
		var defaults  = {
			title:  "Notification Title",
			msg: "Notification",
			target: 'body',
			order: 'prepend',
			selector: 'notiphi',
			actions: false,
			timeout: 2000
		}
		
		var options = $.extend(defaults, options);
		
		//Creating random selector for notification element, so we can find it as long as its up
		function randomString(length) {
		    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
		    if (! length) {
		        length = Math.floor(Math.random() * chars.length);
		    }
		
		    var str = '';
		    for (var i = 0; i < length; i++) {
		        str += chars[Math.floor(Math.random() * chars.length)];
		    }
		    return str;
		}
		var random = "r" + randomString(8);
		//Construction the notification
		var notification = [
			'<div class="notification '+options.selector+' '+random+'" style="display: none;">',
			'<span class="notiphIcon"><!-- --></span>'
		];
		if (options.title != false){
			notification.push('<h6 class="notiphiTitle">'+options.title+'</h6>');			
		}
		if (options.msg != false){
			notification.push('<span class="notiphiMessage">'+options.msg+'</span>');
		}
		if (options.actions != false){
			var actions = options.actions;
			notification.push('<div class="notiphiActions">');
			$.each(actions, function getActions(i, v) {
			  notification.push('<input type="button" class="notiphiAction '+v+'" value="'+v+'" />');
			});
			notification.push('</div>');
		}
		//Closing the notification container up and join the array
		notification.push('</div>');
		notification = notification.join("\n");
		
		//Check where to put the notification and drop it there
		var goto = options.order;
		if (goto == 'before'){
			$(options.target).before(notification);
		}
		if (goto == 'after'){
			$(options.target).after(notification);
		}
		if (goto == 'prepend'){
			$(options.target).prepend(notification);
		}
		if (goto == 'append'){
			$(options.target).append(notification);
		}
		
		//Set our unique notification item as a variable
		var thisNoti = $('.notification.'+random)
		
		//Display the notification in a gentle manner...
		thisNoti.slideDown(358);
		if (options.timeout != false){
			//...and slides-up after the given timeout (if not set false)
			setTimeout(function() {
				thisNoti.slideUp(1355);
				setTimeout(function() {
					thisNoti.remove();
				}, 813);
			}, options.timeout);
		}
	}
})(jQuery);