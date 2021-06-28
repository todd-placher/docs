__NUXT_JSONP__("/articles/containers", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{article:{slug:"containers",description:"How to setup and use LXC\u002FLXD\n",title:x,keywords:["Support","Pop","Ubuntu","LXC","LXD"],facebookImage:"\u002F_nuxt\u002Fimages\u002Fcontainers-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Fcontainers-twitterImage.jpg",hidden:false,section:v,toc:[{id:v,depth:s,text:y},{id:z,depth:s,text:A},{id:B,depth:s,text:C},{id:D,depth:s,text:E},{id:F,depth:s,text:G}],body:{type:"root",children:[{type:a,tag:"h1",props:{id:"containers-on-linux"},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#containers-on-linux",tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:x}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Sometimes an older version of a library or libraries for an application is needed for development. It is faster and easier to use LXC\u002FLXD to setup a Container of that release and work in that Container."}]},{type:b,value:d},{type:a,tag:t,props:{id:v},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#software",tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:y}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"First open a terminal like so:"}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Pop!_OS : "},{type:a,tag:u,props:{},children:[{type:a,tag:"font-awesome-icon",props:{":icon":"['fab', 'pop-os']"},children:[]}]},{type:b,value:" + "},{type:a,tag:u,props:{},children:[{type:b,value:H}]}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Ubuntu : "},{type:a,tag:u,props:{},children:[{type:b,value:"CTRL"}]},{type:b,value:I},{type:a,tag:u,props:{},children:[{type:b,value:"ALT"}]},{type:b,value:I},{type:a,tag:u,props:{},children:[{type:b,value:H}]}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Install the software with this command in the terminal."}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"sudo apt install lxd lxd-client"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:t,props:{id:z},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#setup",tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:A}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Tell LXD what storage and network is needed with this command:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"sudo lxd init"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:t,props:{id:B},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#create-a-container",tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:C}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Now create our first container with this command:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"lxc launch ubuntu:16.04 first"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"This will create a container based on Ubuntu 16.04 with the name 'first'."}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"List and confirm that the container was created with this command:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"lxc list"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"The container can be stopped with this command:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"lxc stop first"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Or the container can be deleted:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"lxc delete first"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:t,props:{id:D},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#enter-the-container",tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:E}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Enter the container with this command:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:J}]},{type:a,tag:c,props:{style:w},children:[{type:b,value:K}]},{type:a,tag:c,props:{style:g},children:[{type:b,value:" first -- \u002Fbin\u002Fbash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"Or just one command can be issued without entering the container:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:J}]},{type:a,tag:c,props:{style:w},children:[{type:b,value:K}]},{type:a,tag:c,props:{style:g},children:[{type:b,value:" first -- apt update"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:t,props:{id:F},children:[{type:a,tag:n,props:{ariaHidden:o,href:"#sharing-files",tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:G}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"For pushing a file to the container:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"lxc file push filename first\u002Ftmp\u002F"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:f,props:{},children:[{type:b,value:"For pulling a file from the container:"}]},{type:b,value:d},{type:a,tag:h,props:{className:[i]},children:[{type:a,tag:j,props:{className:[k],style:l},children:[{type:a,tag:m,props:{},children:[{type:a,tag:c,props:{className:[e]},children:[{type:a,tag:c,props:{style:g},children:[{type:b,value:"lxc file pull first\u002Ftmp\u002Ffilename "}]},{type:a,tag:c,props:{style:w},children:[{type:b,value:"."}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[e]},children:[]}]}]}]}]},dir:"\u002F",path:"\u002Fcontainers",extension:".md",createdAt:L,updatedAt:L,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002F302818f89cff63c9e5a871d8cfa90767510da50d",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("element","text","span","\n","line","p","color: var(--code-0F)","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","code","a","true",-1,"icon","icon-link",3,"h3","kbd","software","color: var(--code-0C)","Containers on Linux","Software","setup","Setup","create-a-container","Create a container","enter-the-container","Enter the container","sharing-files","Sharing files","T","+","lxc ","exec","2021-06-28T17:53:41.304Z")));