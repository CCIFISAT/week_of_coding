# Bootstrap Continued

Now that you are familiar with the basics of bootstrap, let us look at some of the interesting features of bootstrap.

# Buttons

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

### Button tags

Apart from the usual ```<button>``` element, you can also use the ```<a>``` and ```<input>``` elements. These elements should be given a role="button" to appropriately convey their purpose to assistive technologies such as screen readers.

### Outline buttons

Replace the default modifier classes with the ```.btn-outline-*``` ones to remove all background images and colors on any button.

### Disabled state

Make buttons look inactive by adding the disabled boolean attribute to any ```<button>``` element. ```<a>```s don’t support the disabled attribute, so you must add the ```.disabled``` class to make it visually appear disabled.

### Toggle states

Add ```data-toggle="button"``` to toggle a button’s active state.

Check ```example1.html```

### Dropdowns

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering.

Check ```example1.html```

There are various directions in which you can drop the menus. Check them all out [here](https://getbootstrap.com/docs/4.4/components/dropdowns/).

# Shadows

Add or remove shadows to elements with box-shadow utilities.

Check ```example2.html```

# Borders

Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.

Check ```example2.html```

# Text

Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.

Check ```example3.html```

# Embeds

Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.

The correct syntax to add the link in case of YouTube is: ```https://www.youtube.com/embed/VIDEO_ID```

Check ```example4.html```

# Cards

Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

### Content Types

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

### Body

The building block of a card is the ```.card-body```. Use it whenever you need a padded section within a card.

### Titles, text, and links

Card titles are used by adding ```.card-title``` to a ```<h*>``` tag. In the same way, links are added and placed next to each other by adding ```.card-link``` to an ```<a>``` tag.

Subtitles are used by adding a ```.card-subtitle``` to a ```<h*>``` tag. If the ```.card-title``` and the ```.card-subtitle``` items are placed in a ```.card-body``` item, the card title and subtitle are aligned nicely.

### Images

```.card-img-top``` places an image to the top of the card. With ```.card-text```, text can be added to the card. Text within ```.card-text``` can also be styled with the standard HTML tags.

### Horizontal Cards

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way.

### Header and footer

Add an optional header and/or footer within a card.

### Image overlays

Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.

### Background and color

Use text and background utilities to change the appearance of a card.

### Border

Use border utilities to change just the border-color of a card.

### Card decks

Use card decks to get a set of equal width and height cards that aren’t attached to one another.

Check ```example5.html```

# Modals

Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.

Check ```example6.html```

# Navbar

Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar.

Check ```example7.html```

# Today's Assignment

The assignment is to make a webpage as in the screenshots provided in the assignment folder.

### Note:

* You are free to add your own content into the website, but basic elements as in the screenshots provided must be used.
* You can use the images provided or feel free to use your own.

### Hints:

* The social media icons used here are used from importing fontawesome to the project. You can google it or contact one of us on how to do it.
* Make good use of the grid system taught yesterday to make the page look good on desktop and mobile.

Cheers, and get coding!