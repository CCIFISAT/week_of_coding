# Frameworks

Frameworks provide a foundation on which we can build programs on, in our case webpages.
Today, we are going to learn a commonly used framework called Bootstrap.
<br><br>

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" height="250"/>

# Bootstrap

Bootstrap is the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page. It is an open source toolkit for developing with HTML, CSS, and JS.

### Starter Template:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
```

### Responsive Webpages

Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.

#### A non-responsive webpage:
<img src="/Day 5/assets/non-resp.gif"> 
The webpage does not change or adapt to the smaller screen sizes.

#### A responsive webpage:
<img src="/Day 5/assets/resp.gif"> 
You can see that the webpage changes its form depending on the screen-size.

### Breakpoints

Breakpoints are screen sizes you can use to define different layouts. Basically, these breakpoints are like t-shirt sizes. In Bootstrap 4, you can use the "**xl**" breakpoint to define the layout on screens wider than **1200 pixels** and so on. The breakpoints are discussed in detail later on.

### Containers

Containers are the most basic layout element in Bootstrap and are **required when using the default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.


<!-- Table copied from bootstrap documentation -->
<table class="table text-left"> 
  <thead>
    <tr>
      <th></th>
      <th>
        Extra small<br>
        <span class="font-weight-normal">&lt;576px</span>
      </th>
      <th>
        Small<br>
        <span class="font-weight-normal">≥576px</span>
      </th>
      <th>
        Medium<br>
        <span class="font-weight-normal">≥768px</span>
      </th>
      <th>
        Large<br>
        <span class="font-weight-normal">≥992px</span>
      </th>
      <th>
        Extra large<br>
        <span class="font-weight-normal">≥1200px</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.container</code></td>
      <td class="text-muted">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <td><code>.container-sm</code></td>
      <td class="text-muted">100%</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <td><code>.container-md</code></td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <td><code>.container-lg</code></td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <td><code>.container-xl</code></td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td>1140px</td>
    </tr>
    <tr>
      <td><code>.container-fluid</code></td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
      <td class="text-muted">100%</td>
    </tr>
  </tbody>
</table>

#### All-in-one

The default ```.container``` class is a responsive, fixed-width container, meaning its ```max-width``` changes at each breakpoint.

```html
<div class="container">
  <!-- Content here -->
</div>
```

#### Fluid

Use ```.container-fluid``` for a full width container, spanning the entire width of the viewport.

```html
<div class="container-fluid">
  <!-- Content here -->
</div>
```

### Grid System

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with **flexbox** and is fully responsive. 

The grid system contains columns enclosed in rows. **Each row contains a maximum of 12 columns**.

Check ```example1.html```.

#### Equal-width columns

For example, here are two grid layouts that apply to every device and viewport, from ```xs``` to ```xl```. Add any number of unit-less classes and every column will be the same width.

Check ```example2.html```.

#### Row Columns

Use the responsive ```.row-cols-*``` classes to quickly set the number of columns that best render your content and layout. 

Check ```example3.html```

### Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

#### Vertical Alignment

* Align to **start**
* Align to **center**
* Align to **end**

#### Horizontal Alignment

* Justify to **start**
* Justify to **center**
* Justify to **end**
* Justify **around**
* Justify **between**

### Offset

You can offset grid columns in two ways: responsive ```.offset-``` grid classes and ```margin``` utilities. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.

#### Offset Classes

Move columns to the right using ```.offset-md-*``` classes. These classes increase the left margin of a column by * columns. For example, ```.offset-md-4``` moves ```.col-md-4``` over four columns.

Check ```example4.html```

# Display Properties

Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.

### Hiding Elements

For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the .d-none class or one of the ```.d-{sm,md,lg,xl}-none``` classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one ```.d-*-none``` class with a ```.d-*-*``` class, for example ```.d-none``` ```.d-md-block``` ```.d-xl-none``` will hide the element for all screen sizes except on medium and large devices.

Check ```example5.html```

<table>
  <thead>
    <tr>
      <th>Screen Size</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hidden on all</td>
      <td><code class="highlighter-rouge">.d-none</code></td>
    </tr>
    <tr>
      <td>Hidden only on xs</td>
      <td><code class="highlighter-rouge">.d-none .d-sm-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on sm</td>
      <td><code class="highlighter-rouge">.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on md</td>
      <td><code class="highlighter-rouge">.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on lg</td>
      <td><code class="highlighter-rouge">.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
      <td>Hidden only on xl</td>
      <td><code class="highlighter-rouge">.d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible on all</td>
      <td><code class="highlighter-rouge">.d-block</code></td>
    </tr>
    <tr>
      <td>Visible only on xs</td>
      <td><code class="highlighter-rouge">.d-block .d-sm-none</code></td>
    </tr>
    <tr>
      <td>Visible only on sm</td>
      <td><code class="highlighter-rouge">.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
      <td>Visible only on md</td>
      <td><code class="highlighter-rouge">.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
      <td>Visible only on lg</td>
      <td><code class="highlighter-rouge">.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible only on xl</td>
      <td><code class="highlighter-rouge">.d-none .d-xl-block</code></td>
    </tr>
  </tbody>
</table>

# Images

### Responsive Images

Images in Bootstrap are made responsive with ```.img-fluid```.

```max-width: 100%;``` and ```height: auto;``` are automatically applied to the image so that it scales with the parent element.

### Aligning Images

You can align your images to left, right and center.

### Figures

Anytime you need to display a piece of content—like an image with an optional caption, consider using a ```<figure>```.

Use the included ```.figure``` , ```.figure-img``` and ```.figure-caption``` classes to provide some baseline styles for the HTML5 ```<figure>``` and ```<figcaption>``` elements.

check ```example6.html```

# Colors

Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.

Types of colors:

* ```primary```
* ```secondary```
* ```success```
* ```danger```
* ```warning```
* ```info```
* ```light```
* ```dark```
* ```white```
* ```transparent```

check ```example7.html```

# Assignment

Build your Day 2 website using Bootstrap into a responsive one, i.e, webpage has to be responsive, images have to be responsive etc.
