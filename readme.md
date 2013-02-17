#notiphi.js
##A lightweight notification plugin for jQuery

###Why use notiphi?
* Lightweight
* Because you can!
* Easy to use and setup
* Offers all you need when it comes to notifications

By: kay van baarle - oceanmountain

##Installation

###Step 1: Link required files

First make sure you are already using the latest jQuery! Notiphi was build on jquery 1.9 (maybe compatible from 1.7 - not sure though) so make sure you got this included.
Then download the package and link the files in your html.

```html
<!-- jQuery library (googleapis hotlink) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<!-- notiphi.js (the minified version) -->
<script src="/js/jquery.notiphi.min.js"></script>
<!-- the css (make sure the notiphIcons are in css/images) -->
<link href="/css/notiphi.css" rel="stylesheet" />
```

###Step 2: Create a notiphication

After linking the files you should be able to use notiphi.js to create any notification. By default the notification displays a normal message with a timeout of 2 seconds (2000 ms).
When calling notiphi, make sure you always specify a msg and title (title can be set false if you dont want any). A simple notiphi call will look like this, and will prepend it to the body.

```javascript
$(document).ready(function(){
	$.fn.notiPhi({
		titel: 'Your notification',
		msg: [
			'We are pleased to inform you, your notification is working!'
		].join("\n"),
	});
});
```

##Notiphi options

**title**  
The title shown in the notification
```
default: 'Notification Title'  
options: 'false (shows no title)', 'Your title'
```

**msg**  
The notification message
```
default: 'Notification'  
options: 'Your message (must be present)'
```

**target**  
Specifies where the notificati on must go
```
default: 'body'  
options: 'any DOM element'
```

**order**  
According to the specified target, how to put the notification there. Works as the jquery-calls given in the options.
```
default: 'prepend'  
options: 'prepend', 'append', 'befofe', 'after'
```

**selector**  
Adds a css/domselecter to the notification
```
default: 'notiphi'  
options: 'any class you like, add multiple selectors with a space in between'
```

**actions**  
With actions you can add user feedback to the notification (like yes/no/accept/etc)
```
default: 'false'  
options: 'any action you will allow the user to interact with'
```

**timeout**  
An integer to set the timeout before the notification removes itself again. There is no timeout when there are actions defined.
```
default: '2000'  
options: 'false', 'any integer'