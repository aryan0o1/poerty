{
    "status": "ok",
    "count": 2,
    "count_total": 360,
    "pages": 180,
    "posts": [
        {
            "id": 10560,
            "type": "post",
            "slug": "google-fonts-website-gets-a-new-fresh-material-design-look",
            "url": "http://stacktips.com/news/google-fonts-website-gets-a-new-fresh-material-design-look",
            "status": "publish",
            "title": "Google Fonts Website Gets a New Fresh Material Design Look",
            "title_plain": "Google Fonts Website Gets a New Fresh Material Design Look",
            "content": "<div class='shareaholic-canvas' data-app-id='24995492' data-app='share_buttons' data-title='Google Fonts Website Gets a New Fresh Material Design Look' data-link='http://stacktips.com/news/google-fonts-website-gets-a-new-fresh-material-design-look' data-summary='Now Google fonts website interface is refreshed with the fresh new material deign look. With the new design, it makes it easy to search a Typography and choose the right typeface of your choice.'></div>\n<p><span class=\"mks_dropcap_letter\">S</span>ince its first release on 2010, Google fonts has been the first choice for web developers. It offers collections of free web fonts (under Apache License and SIL Open Font License) to use on personal and commercial projects.</p>\n<p>Now Google fonts website interface is refreshed with the fresh new material design look. With the new design, it makes it easy to search a Typography, choose the right typeface of your choice or to preview typeface before using on your project. The old list view layout is now revamped to grid layout.</p>\n<p>Typecast is integrated to the grid layout for better preview purpose. You can now resize, change font weight, size and style right there in the grid. The color fill option in the title allows to change the background color to preview typeface in different contrast background.</p>\n<p>Some of the beautiful font inspirations are curated in Featured section. As usual, you can click on plus button(+) to select and download the fonts to desktop or embed the web fonts into your own website.<img class=\"aligncenter wp-image-10564\" src=\"http://stacktips.com/wp-content/uploads/2016/06/Google-Web-Fonts-Material-Design.png\" alt=\"Google Web Fonts- Material Design\" width=\"601\" height=\"575\" srcset=\"http://stacktips.com/wp-content/uploads/2016/06/Google-Web-Fonts-Material-Design.png 601w, http://stacktips.com/wp-content/uploads/2016/06/Google-Web-Fonts-Material-Design-300x287.png 300w, http://stacktips.com/wp-content/uploads/2016/06/Google-Web-Fonts-Material-Design-300x287@2x.png 600w\" sizes=\"(max-width: 601px) 100vw, 601px\" /></p>\n<p>Visit <strong><a href=\"https://fonts.google.com/\" target=\"_blank\">Google Fonts</a></strong>.</p>\n<p>&nbsp;</p>\n",
            "excerpt": "<p>Now Google fonts website interface is refreshed with the fresh new material deign look. With the new design, it makes it easy to search a Typography and choose the right typeface of your choice.</p>\n",
            "date": "2016-06-15 21:52:27",
            "modified": "2016-06-15 22:04:50",
            
            "comments": [],
            "attachments": [
                {
                    "id": 10563,
                    "url": "http://stacktips.com/wp-content/uploads/2016/06/Google-Fonts-Website-Material-Design.png",
                    "slug": "google-fonts-website-material-design",
                    "title": "Google Fonts Website- Material Design",
                    "description": "Google Fonts Website- Material Design",
                    "caption": "",
                    "parent": 10560,
                    "mime_type": "image/png"
                    
                },
                {
                    "id": 10564,
                    "url": "http://stacktips.com/wp-content/uploads/2016/06/Google-Web-Fonts-Material-Design.png",
                    "slug": "google-web-fonts-material-design",
                    "title": "Google Web Fonts- Material Design",
                    "description": "",
                    "caption": "",
                    "parent": 10560,
                    "mime_type": "image/png"
                    
                }
            ],
            "comment_count": 0,
            "comment_status": "open",
            "thumbnail": "http://stacktips.com/wp-content/uploads/2016/06/Google-Fonts-Website-Material-Design-292x194.png"
            
        },
        {
            "id": 10528,
            "type": "post",
            "slug": "how-to-enable-deep-links-for-app-content-in-android",
            "url": "http://stacktips.com/tutorials/android/how-to-enable-deep-links-for-app-content-in-android",
            "status": "publish",
            "title": "How to Enable Deep Links for App Content in Android",
            "title_plain": "How to Enable Deep Links for App Content in Android",
            "content": "<div class='shareaholic-canvas' data-app-id='24995492' data-app='share_buttons' data-title='How to Enable Deep Links for App Content in Android' data-link='http://stacktips.com/tutorials/android/how-to-enable-deep-links-for-app-content-in-android' data-summary='Enable deep links for App content in Android, you need to fist add intent filters for the relevant activities in your application manifest. The intent filters allow deep linking to the content in any of your activities.'></div>\n<p>Enable deep links for App content in Android, you need to fist add intent filters for the relevant activities in your application manifest. The intent filters allow deep linking to the content in any of your activities.</p>\n<h3>Add Intent Filters for Links</h3>\n<p>For example, a user clicks on a website link <code>http://stacktips.com</code> on browser, that will resolve the link and open the content in installed activity.</p>\n<pre class=\"prettyprint lang-java\">&lt;activity\r\n    android:name=\"com.example.MainActivity\"\r\n    android:label=\"@string/my_app\" &gt;\r\n    &lt;intent-filter android:label=\"@string/my_app\"&gt;\r\n\t\r\n        &lt;action android:name=\"android.intent.action.VIEW\" /&gt;\r\n        &lt;category android:name=\"android.intent.category.DEFAULT\" /&gt;\r\n        &lt;category android:name=\"android.intent.category.BROWSABLE\" /&gt;\r\n\t\t\r\n        &lt;!-- Accepts URIs that begin with \"http://stacktips.com/tutorials” --&gt;\r\n        &lt;data android:scheme=\"http\" android:host=\"stacktips.com\" android:pathPrefix=\"/tutorials\" /&gt;        \r\n    &lt;/intent-filter&gt;\r\n&lt;/activity&gt;\r\n</pre>\n<p>Once the above intent filters are added, Android will be able to route any Intent that has matching URIs to your app at runtime.</p>\n<h3>Read Data from Incoming Intents</h3>\n<p>Once Android system starts the routed activity through an intent filter. You can get the data bundle from Intent to determine what you which activity or fragment to render. Call the <code>getData()</code> and <code>getAction()</code> methods to retrieve the data and action associated with the incoming Intent. You can call these methods at any time during the lifecycle of the activity, but you should generally do so during early callbacks such as <code>onCreate()</code> or <code>onStart()</code>.</p>\n<p>The following code snippet shows how to retrieve data from an Intent</p>\n<pre class=\"prettyprint lang-java\">@Override\r\npublic void onCreate(Bundle savedInstanceState) {\r\n    super.onCreate(savedInstanceState);\r\n    setContentView(R.layout.main);\r\n\r\n    Intent intent = getIntent();\r\n    String action = intent.getAction();\r\n    Uri data = intent.getData();\r\n}\r\n</pre>\n<h3>Test Your Deep Links</h3>\n<p>You can use the Android Debug Bridge with the activity manager tool to test that the intent filter URIs you specified for deep linking resolve to the correct app activity. You can run the adb command against a device or an emulator.</p>\n<p>The following command tries to view a target app activity that is associated with the specified URI.</p>\n<pre class=\"prettyprint lang-java\">$ adb shell am start -W -a android.intent.action.VIEW -d http://stacktips.com/tutorials/android com.example\r\n</pre>\n",
            "excerpt": "<p>Enable deep links for App content in Android, you need to fist add intent filters for the relevant activities in your application manifest. The intent filters allow deep linking to the content in any of your activities.</p>\n",
            "date": "2016-06-14 01:28:48",
            "modified": "2016-06-14 01:28:48",
            
            "tags": [],
            
            
            "attachments": [
                {
                    "id": 10563,
                    "url": "http://stacktips.com/wp-content/uploads/2016/06/Google-Fonts-Website-Material-Design.png",
                    "slug": "google-fonts-website-material-design",
                    "title": "Google Fonts Website- Material Design",
                    "description": "Google Fonts Website- Material Design",
                    "caption": "",
                    "parent": 10560,
                    "mime_type": "image/png"
                    
                },
                {
                    "id": 10564,
                    "url": "http://stacktips.com/wp-content/uploads/2016/06/Google-Web-Fonts-Material-Design.png",
                    "slug": "google-web-fonts-material-design",
                    "title": "Google Web Fonts- Material Design",
                    "description": "",
                    "caption": "",
                    "parent": 10560,
                    "mime_type": "image/png"
                    
                }
                ],
            "comment_count": 2,
            "comment_status": "open"
            
            
        }
    ]
}
