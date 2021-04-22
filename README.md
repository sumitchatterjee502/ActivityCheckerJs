# ActivityCheckerJs
<p>In the spirit of open source software development, I always encourages community code contribution.
This library will help you for user activity checker using javascript</p>
<p>Suppose you need if any user is inactive of surtain a time and then you need your application sould  go to session out then you can use this library</p>
<p>If you avoid to open multiple tab for same url then you can use it</p>

# Installation
<p>No Dependency required</p>
<p>Does not need any jQuery library</p>
<p>Only Add this library into your project</p>

# Features 
<p>If need to check user inactivity on current page then add this funtion into your script </p>
<p>It only check any user movement like (keypress, mousemove, or touch screen move) </p>
<p>ACTIVITYCHECKER.init("5000") use for timemiliseconds when page is redirect</p>
<p>ACTIVITYCHECKER.init("url") use redirect url where page will be redirect after given the time </p>
<p>
<pre>
<script>
    ACTIVITYCHECKER.init("5000", "your redirect url")
</script>
</pre>
</p>
<p>If need to avoid duplicate tabs are open into the browser for same url then you should use below function on your project</p>
<p>
<pre>
<script>
    ACTIVITYCHECKER.tabOpen();
    ACTIVITYCHECKER.tabDuplicate();
</script>
</pre>
</p>
