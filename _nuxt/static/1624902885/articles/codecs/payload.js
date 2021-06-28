__NUXT_JSONP__("/articles/codecs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{article:{slug:"codecs",description:"Proprietary multimedia formats, such as MP3 files and DVD decoders, aren't included by default. To enable playback of these media, please see this document.\n",title:y,keywords:["Support","multimedia","format","proprietary","restricted","extras","mp3","dvd","dvi","aac","wma","System76"],facebookImage:"\u002F_nuxt\u002Fimages\u002Fcodecs-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Fcodecs-twitterImage.jpg",hidden:false,section:"media",toc:[{id:z,depth:u,text:A},{id:B,depth:u,text:C},{id:D,depth:u,text:"Setup DVD Playback (optional)"},{id:E,depth:u,text:F},{id:G,depth:2,text:H}],body:{type:"root",children:[{type:a,tag:"h1",props:{id:"watch-videos-and-play-music-mp3-dvd-etc"},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#watch-videos-and-play-music-mp3-dvd-etc",tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:y}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Proprietary multimedia formats, such as MP3 files and DVD decoders, aren't included by default. To enable playback of these medias, please follow the instructions below."}]},{type:b,value:c},{type:a,tag:v,props:{id:z},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#open-a-terminal",tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:A}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Press the Super Key "},{type:a,tag:f,props:{},children:[{type:a,tag:"font-awesome-icon",props:{":icon":"['fab', 'ubuntu']"},children:[]}]},{type:b,value:", and type the word "},{type:a,tag:I,props:{},children:[{type:b,value:"terminal"}]},{type:b,value:", then press "},{type:a,tag:f,props:{},children:[{type:b,value:m}]},{type:b,value:".  A "},{type:a,tag:w,props:{},children:[{type:b,value:"Terminal"}]},{type:b,value:" window should open up."}]},{type:b,value:c},{type:a,tag:v,props:{id:B},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#install-packages",tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:C}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Ubuntu and Pop!_OS both have a package available which will install all available proprietary media codecs. Because of legal restrictions, this package cannot be installed automatically, but if you live in a territory where it is legal to do so, you can copy and paste the following line, followed by "},{type:a,tag:f,props:{},children:[{type:b,value:m}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q],style:r},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[s]},children:[{type:a,tag:d,props:{style:t},children:[{type:b,value:"sudo apt install -y ubuntu-restricted-extras\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If it is not legal for you to do so, or if you only want the minimum required codecs, you may do so manually. Please note that packages listed with \"bad\" in the names below are not harmful to your system, they are listed as \"bad\" in the system software repositories due to the non-free (as in libre) nature of the code within the packages."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Copy and paste the following line for Ubuntu\u002FPop 18.04, followed by "},{type:a,tag:f,props:{},children:[{type:b,value:m}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q],style:r},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[s]},children:[{type:a,tag:d,props:{style:t},children:[{type:b,value:"sudo apt install -y gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly libavcodec-extra gstreamer1.0-libav gstreamer1.0-fluendo-mp3 chromium-codecs-ffmpeg-extra libdvd-pkg\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Copy and paste the following line for Ubuntu\u002FPop 18.10 and up, followed by "},{type:a,tag:f,props:{},children:[{type:b,value:m}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q],style:r},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[s]},children:[{type:a,tag:d,props:{style:t},children:[{type:b,value:"sudo apt install -y gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-plugins-good libavcodec-extra gstreamer1.0-libav chromium-codecs-ffmpeg-extra libdvd-pkg\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"To paste into the terminal, use the \"Edit\" Menu, or press "},{type:a,tag:f,props:{},children:[{type:b,value:"Ctrl"}]},{type:b,value:J},{type:a,tag:f,props:{},children:[{type:b,value:"Shift"}]},{type:b,value:J},{type:a,tag:f,props:{},children:[{type:b,value:"V"}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"You may be prompted for your "},{type:a,tag:l,props:{},children:[{type:b,value:"[sudo] password"}]},{type:b,value:". If so, type in your regular login\u002Fuser password, then press "},{type:a,tag:f,props:{},children:[{type:b,value:m}]},{type:b,value:" again. You should see several lines of output in the terminal. The command may take a few minutes to complete."}]},{type:b,value:c},{type:a,tag:v,props:{id:D},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#setup-dvd-playback-smalloptionalsmall",tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:"Setup DVD Playback "},{type:a,tag:"small",props:{},children:[{type:a,tag:I,props:{},children:[{type:b,value:"(optional)"}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Once you see the command above has finished, enter in the following command to enable DVD playback:"}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q],style:r},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[s]},children:[{type:a,tag:d,props:{style:t},children:[{type:b,value:"sudo dpkg-reconfigure libdvd-pkg\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:v,props:{id:E},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#restart-your-computer",tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"After enabling codec support, it's recommended to restart your computer."}]},{type:b,value:c},{type:a,tag:"h2",props:{id:G},children:[{type:a,tag:g,props:{ariaHidden:h,href:"#useful-programs",tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:H}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The program "},{type:a,tag:w,props:{},children:[{type:b,value:"VLC"}]},{type:b,value:" is a excellent media player with support for DVDs, CDs, and most formats of media files.  It can be installed with the the "},{type:a,tag:w,props:{},children:[{type:b,value:"Pop!_Shop"}]},{type:b,value:" in Pop!_OS, in the "},{type:a,tag:w,props:{},children:[{type:b,value:"Software Center"}]},{type:b,value:" in Ubuntu, or with this command:"}]},{type:b,value:c},{type:a,tag:n,props:{className:[o]},children:[{type:a,tag:p,props:{className:[q],style:r},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[s]},children:[{type:a,tag:d,props:{style:t},children:[{type:b,value:"sudo apt install vlc\n"}]}]}]}]}]}]},dir:"\u002F",path:"\u002Fcodecs",extension:".md",createdAt:K,updatedAt:K,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002F302818f89cff63c9e5a871d8cfa90767510da50d",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("element","text","\n","span","p","kbd","a","true",-1,"icon","icon-link","code","Enter","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","line","color: var(--code-0F)",3,"h3","u",":","Watch Videos and Play Music (MP3, DVD, etc.)","open-a-terminal","Open A Terminal","install-packages","Install Packages","setup-dvd-playback-smalloptionalsmall","restart-your-computer","Restart Your Computer","useful-programs","Useful Programs","em","+","2021-06-28T17:53:41.304Z")));