This is a super simple example of how to create a Light and Dark theme website.

I have utilised the :root class within CSS to target the <html> element; this is my default 'Light Mode'. I have then added a data-theme which is my toggle for 'Dark Mode'.

This toggle happens through a simple button that amends the background colour and text colour inside the <html> element.

I also added a transition so it smoothly switches between the Light and Dark modes.

The logic is simple. If the <html> attribute of 'data-theme' is not 'dark', it would add 'dark'. If it is 'dark', it removes it. This is the switch between light (default, and dark.