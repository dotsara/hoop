# hoop
Working on a touch UI (suggestion from @kennymeyers)

## notes

I dug up this non-jQuery `document.ready` function, but _then_ I realized I don't really need it on this little project. So instead, I'll save it! :mortar_board:

```javascript

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function (){
  console.log("hello! we are ready!");
});
```

Source: http://youmightnotneedjquery.com/#ready