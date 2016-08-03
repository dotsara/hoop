Notes
=====

## 03-August-2016

*Working on adding `touch` events…*

Okay, without jQuery, the page weighs `22Kb` according to Chrome's Network inspector. :tada:

I'm going to add jQuery and jQuery UI to try out [touchpunch](http://touchpunch.furf.com)   

  ```javascript
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  <script src="javascript/jquery.ui.touch-punch.min.js"></script>
  ```

_Update_: okay, with the above the page is 64Kb, almost triple! Yikes, but still _relatively_? small? We'll see if it stays.
