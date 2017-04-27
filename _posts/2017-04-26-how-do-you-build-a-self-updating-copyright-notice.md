---
layout: post
title: "How Do You Build a Self-Updating Copyright Notice?"
date: 2017-04-26 12:00:00 +800
---

Many websites have a copyright notice in their footer. Here's how to create one that updates itself with every new year.

The standard format seems to be the copyright sign, followed by a range from the year the website's owner was established, to the current year.

<blockquote>&copy; 1900 - 2017 My Organization Inc.</blockquote>

If both the start and current year are the same, only one year is used in the notice:

<blockquote>&copy; 2017 My Organization Inc.</blockquote>

The logic is pretty easy to implement in several languages:

## Liquid

Figuring this out with Liquid templating tags required a bit of experimentation, so I'm showing the code snippet for this language first.

{% highlight html linenos %}
{% raw %}
{% assign start_year = '1900' %}
{% assign current_year = {{site.time | date: '%Y'}} %}
        
<span class="copyright">
    &copy;{{ start_year }}
    {% if current_year != start_year %}
         - {{ current_year }}
    {% endif %}
</span>
{% endraw %}
{% endhighlight %}

## JavaScript

A much shorter (yet less readable and customizable) version of the code below is available from [Update Your Footer](http://updateyourfooter.com/). 

{% highlight js linenos %}
var organization = 'My Organization Inc.';
var startYear = 1900;
var currentYear = new Date().getFullYear();
var notice = '&copy; ';

if ( startYear == currentYear ) {
    notice += startYear;
} else {
    notice += startYear + ' - ' + currentYear;
}

notice += ' ' + organization;

document.write( notice );
{% endhighlight %}

## PHP

{% highlight php linenos %}
<?php

$org_name = 'My Organization Inc.';
$start_year = '1900';
$current_year = date('Y');

if ($start_year == $current_year) {
    $notice = "&copy; $start_year $org_name";
} else {
    $notice = "&copy; $start_year - $current_year $org_name";
}

echo $notice;

?>
{% endhighlight %}

How do you implement dynamic copyright notices in your language? Do you know a better way to implement this? Let me know at [rico@mossesgeld.com](mailto:rico@mossesgeld.com).