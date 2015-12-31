---
layout: blog
nav: blog
---

Intercooler is a funny sort of javascript library, in that you typically don't end up writing that much javascript.  Many people 
who first see it will hastily dismiss it as [an older way](http://2.bp.blogspot.com/-KYftkSiFvq4/T9VUCZ1iAiI/AAAAAAAABz4/H3pOtXlT7Kk/s1600/clinteastwood.jpg)
of building web applications, without digging into the library or its 
[philosophy](https://upload.wikimedia.org/wikipedia/commons/9/98/Sanzio_01_Plato_Aristotle.jpg).

This is understandable: [life is short](https://austraalien.files.wordpress.com/2013/10/baby-yolo.jpg), the javascript 
world is quite noisy and intercooler goes against the grain of many trends in the industry.  Therefore, the burden is on 
me to demonstrate some of the advantages of intercooler when compared with libraries like Angular or React.

In this post I will give you N good reasons try intercooler out in 2016, where N > 0.  

### Simplicity

Intercooler is very simple to get started with.  A single HTML attribute is enough to add AJAX functionality to a 
web application:

<pre>
  &lt;a ic-post-to="/click"> Click Me! &lt;/a>
</pre>

This is in sharp contrast with most javascript frameworks, which demand far more code be written to accomplish anything.

Despite this initial simplicity, intercooler also scales quite well, since the amount of intercooler in your application
will scale linearly with your application, and with a very low constant.

This light footprint also allows intercooler be [retrofitted](http://www.dravenstales.ch/wp-content/uploads/2009/08/tifi-mmmpringles.jpg) into an existing application easily, without making a huge 
commitment to the library.

### Security

I don't see this discussed much, buy the client-side browser environment is *not* a secure environment, despite how it 
is treated by many people.  All data from a browser environment should be verified on the server side and I would argue 
you should be worried about domain logic *even executing* in an environment as chaotic and open as a browser.

An application built in intercooler keeps domain logic on the server side, in a 
[trusted](http://www.quickmeme.com/img/2a/2afb26e85dbd25d09c0275c619d04519e2b58d145e9a8b330935fdde74dab27b.jpg), secure environment.

### Language Openness

Because intercooler consists mostly of declarative annotations in HTML, it does not dictate (or strongly
recommend) a particular server-side language or environment.  If you need to maintain a significant amount of javascript 
on the client-side, or share domain logic between both the client and server side, there is a lot of pressure to 
adopt javascript on the server side as well, to standardize things.

Server-side javascript may be right for some people, but not everyone wants to or is even able to use it.  Intercooler's
attribute-driven approach takes this problem entirely off the table, leaving you to
[do what you want to do](https://s-media-cache-ak0.pinimg.com/736x/97/f0/9d/97f09d42e177e00e5c4dae7929ce774d.jpg), 
in the server environment best for you.  

### REST-ful Friendliness

REST is somewhat controversial in development circles, particularly in the context of JSON APIs.  While I agree
with many of the criticisms of REST for APIs, it turns out that REST-ful thinking is *wonderful* when you are
designing web interfaces: it produces clean, decoupled and stateless web applications that are easy to reason about and,
therefore, easy to maintain.  

Since web pages and sub-elements within it tend to be "final consumers" of data it is not 
necessary for them to be chatty over HTTP with a REST-ful URL scheme (the data access is done, and tuned, on the 
server-side, against a datastore using its natural tools, e.g. SQL)  Additionally, since HTML is being returned from
the server, developers can return data *as well as the operations on that data (e.g. links, forms, etc.)*, rather than
only data, as with JSON.  This is powerful, deep feature of HTML, and a future guest blog-post will expand on this point.

Intercooler takes REST seriously, providing access to [most HTTP actions](/docs.html#core_attributes), using URL layouts 
to [determine dependencies](/docs.html#dependencies), etc.  In this context, REST-ful thinking works very well indeed.

### CSS Animations

CSS3 introduced [transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
finally bringing a standard, design-friendly way of adding visual effects to web pages.  Unfortunately the only way
to trigger transitions is to change classes on elements in the DOM, which typically involves interleaving javascript
with event handling.

Intercooler [standardizes the application of classes during AJAX requests and during HTML content swaps](/docs.html#transitions), 
making CSS transitions easy to wire in without explicit javascript.  Additionally, intercooler [provides tools](/docs.html#client-side) for declarative 
manipulation of classes based on timing or events.

All of this makes working with CSS transitions both intuitive and easy.

### Conclusion

Intercooler can be [deceptively simple](https://bodhitreepose.files.wordpress.com/2014/06/bruce-lee-simplicity-is-the-key-2-brilliance.jpg): 
you can build advanced interfaces in it using modern browser features like CSS3 transitions, HTTP headers, extended HTTP actions,
hierarchical dependencies, and DOM events, to name just a few.  It is also quite fun, once you get the hang of it.

So, unfit citizens of web development, heed my instructions: take a hard look at intercooler in 2016.  It might 
not be right [for every project](https://fir.sh/projects/jsnes/), but it would be a great alternative for many of them.


<center>
<iframe width="400" height="280" src="https://www.youtube.com/embed/F_d4VDDfjpA" frameborder="0"></iframe>
</center>


