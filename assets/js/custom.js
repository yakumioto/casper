/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */
/*
var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
hljs.initHighlightingOnLoad();

var disqus = {
  load : function disqus(){
      var disqus_shortname = 'mashiros';
      if (typeof DISQUS !== 'object') {
        (function () {
            var s = document.createElement('script'); s.async = true;
            s.type = 'text/javascript';
            s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
        }());
        $('.disqus-notice').remove(); ///加载后移除按钮
      }
  }
}
// hljs.initHighlightingOnLoad();
//
// $("#disqus_button").click(function(){
//     var d = document,
//         s = d.createElement('script');
//     s.src = '//mashiros.disqus.com/embed.js';
//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
//     $("#disqus_button").hide();
// });
