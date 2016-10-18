---
layout: blog_post
nav: blog
---

At a recent tech talk I gave, as is common, a recruiter spoke beforehand.  He said that the #1 thing that his clients
were looking for were "full stack" developers, that is, developers who can conceive and deliver an entire application
or feature within an application, from the front end all the way through to the data store.

It used to be that being a full-stack developer wasn't that bad.  You had to know a bit of SQL, how HTML worked and
a bit of server side glue to get from point A to point B.  It wasn't easy to produce *good* 


## Step 1: Learn Bootstrap &amp; CSS

Putting in a bit of time with bootstrap and CSS tutorials will go a long way.  CSS should be used sparingly: don't get
fancy with it and, if something is hard to do, don't do it.  Use the defaults as much as possible and add your personalized
look around the frame of the application, rather than in the main content.  Keep the HTML as stripped down as possible.

There is vocal group of people is critical of bootstrap, and I understand the concern that everything might look the same, 
although I think that it is ambiguous that this is a bad thing, from a UX perspective.  Regardless, the default bootstrap
look and feel, with a bit of CSS on top of it, is going to be better than *you* can do, and is far better than the default
browser look and feels.

It is a standard, and later on, if it becomes necessary, you can bring in real design talent.  They will thank you for
keeping the HTML clean.

## Step 2: Learn intercooler.js

And here's the real trick: use [intercooler.js](http://intercoolerjs.org).  You can set aside 99% of the junk that is 
involved in modern javascript front end development and use the same old familiar web development tools you always have.
That's right: use whatever backend technology you want.  You might not have to write a single line of javascript, 
depending on your client or employers needs and how fancy you want to get.

You'll get [progress indicators](http://intercoolerjs.org/docs.html#progress) for free and, if you are willing to put 
in a bit (just a bit!) of effort learning CSS, you can have [nice transitions](http://intercoolerjs.org/docs.html#transitions).

There are a [bunch of examples of common UX patterns](http://intercoolerjs.org/examples/index.html) using stripped down 
bootstrap-based HTML already available, to be copypasta'd into your project.

And that's it.  Congrats, you are now a full stack developer.

Always keep in mind The Three Virtues: [Laziness, Impatience, Hubris](http://threevirtues.com/)