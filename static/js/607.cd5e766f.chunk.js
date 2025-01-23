"use strict";(self.webpackChunkportfolio_3=self.webpackChunkportfolio_3||[]).push([[607],{7607:function(e,t,i){i.r(t),i.d(t,{About:function(){return A}});var o=i(8735),r=i(3046),a=i(2504),s=i(3880),n=i(1413),c=i(5987),l=i(184),d=["title"],p=["title"],u=function(e){var t=e.title,i=(0,c.Z)(e,d);return(0,l.jsx)(o.X6,(0,n.Z)((0,n.Z)({fontSize:"2xl",fontWeight:"bold"},i),{},{"data-aos":"fade-down",children:t}))},h=function(e){var t=e.title,i=(0,c.Z)(e,p);return(0,l.jsx)(o.xv,(0,n.Z)((0,n.Z)({fontWeight:"semibold",fontSize:"lg"},i),{},{"data-aos":"fade-down",children:t}))},g=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{title:"Blog"}),(0,l.jsx)("br",{}),s.rH.about.blog.map((function(e){return(0,l.jsx)(o.xu,{py:"2",children:(0,l.jsx)(o.rU,{href:e.link,target:"_blank",variant:"link",children:e.title})},e.id)}))]})},m=i(9439),f=i(2791),b=i(6332),x=i(3433),j=function(e){var t=e.expanded,i=e.id,r=e.idx,s=e.title,n=e.subTitle,c=e.date,d=e.content,p=e.onChange,u=(0,f.useMemo)((function(){return t.includes(r)}),[t,r]),g=(0,f.useState)(!1),j=(0,m.Z)(g,2),y=j[0],k=j[1],v=(0,f.useMemo)((function(){return d.length>1&&!u||!u&&y}),[y,u,d]);return(0,f.useEffect)((function(){var e,t="first-point-".concat(i),o=document.getElementById(t);o&&(o.scrollWidth>=(null===(e=o.parentElement)||void 0===e?void 0:e.scrollWidth)?k(!0):k(!1))}),[i]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(b.KF,{as:o.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,l.jsx)(h,{title:s,fontWeight:"semibold"}),(0,l.jsx)(o.xv,{"data-aos":"fade",children:n}),(0,l.jsx)(o.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:c}),(0,l.jsxs)(o.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[u?(0,l.jsx)(o.QI,{listStylePosition:"outside",pl:"1",children:(0,l.jsx)(o.xv,{as:"li",isTruncated:!t.includes(r),children:d[0]})}):(0,l.jsx)(o.xv,{id:"first-point-".concat(i),isTruncated:!t.includes(r),children:d[0]}),v&&(0,l.jsx)(a.zx,{flexShrink:0,id:"see-more-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:function(){if(t.includes(r)){var e=t.filter((function(e){return e!==r}));p(e)}else p([].concat((0,x.Z)(t),[r]))},children:"See more"})]})]}),(0,l.jsxs)(b.Hk,{p:"0",pl:"1",children:[(0,l.jsx)(o.QI,{listStylePosition:"outside",children:d.slice(1).map((function(e,t){return(0,l.jsx)(o.xv,{as:"li",children:e},"".concat(s,"-cont-").concat(t))}))}),t.includes(r)&&(0,l.jsx)(o.kC,{justifyContent:"flex-end",children:(0,l.jsx)(a.zx,{id:"see-less-".concat(i),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:function(){var e=t.filter((function(e){return e!==r}));p(e)},children:"See less"})})]})]})},y=function(){var e=(0,f.useState)([]),t=(0,m.Z)(e,2),i=t[0],o=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{title:"Education"}),(0,l.jsx)("br",{}),(0,l.jsx)(b.UQ,{pt:"2",allowMultiple:!0,index:i,id:"education",children:s.rH.about.educations.map((function(e,t){return(0,l.jsx)(b.Qd,{p:"0",border:"0",mb:"4",children:(0,l.jsx)(j,{title:e.school,subTitle:e.degree,date:e.duration,content:e.content,id:e.id,idx:t,onChange:o,expanded:i})},"panel-".concat(e.school,"-").concat(e.degree))}))})]})},k=function(){var e=(0,f.useState)([]),t=(0,m.Z)(e,2),i=t[0],o=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{title:"Experiences"}),(0,l.jsx)("br",{}),(0,l.jsx)(b.UQ,{pt:"2",allowMultiple:!0,index:i,children:s.rH.about.experiences.map((function(e,t){return(0,l.jsx)(b.Qd,{p:"0",border:"0",mb:"4",children:(0,l.jsx)(j,{id:e.id,title:e.company,subTitle:e.position,date:e.duration,content:e.description,idx:t,onChange:o,expanded:i})},"panel-".concat(e.company))}))})]})},v=i(3362),S=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u,{title:"Skills",pb:"2"}),(0,l.jsx)("br",{}),s.rH.about.skills.map((function(e){return(0,l.jsxs)(o.xu,{p:"0",mb:"4",children:[(0,l.jsx)(h,{title:e.title}),(0,l.jsx)(v.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))}))]})},w=i(6355),A=function(){var e=(0,s.r0)(s.nl.About);return(0,l.jsxs)(o.xu,{children:[(0,l.jsxs)(o.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:[(0,l.jsx)(o.xu,{flex:"0.35","data-aos":"fade-up",children:(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{type:"image/webp",srcSet:s.rH.common.mainPicture}),(0,l.jsx)("source",{type:"image/jpeg",srcSet:s.rH.common.mainPictureJPG}),(0,l.jsx)(r.Ee,{borderRadius:"xl",src:s.rH.common.mainPicture,w:"100%",alt:"profile image"})]})}),(0,l.jsxs)(o.xu,{flex:"0.85",children:[(0,l.jsx)(o.X6,{"data-aos":"fade-down",children:s.rH.common.name}),(0,l.jsxs)(o.kC,{alignItems:"center",children:[(0,l.jsx)(o.xv,{fontWeight:"bold",opacity:"0.5","data-aos":"fade","data-aos-delay":"200",children:s.rH.common.pronunciation}),(0,l.jsx)(a.zx,{size:"xs","aria-label":"pronunciation button",as:a.hU,variant:"icon",fontSize:"md",icon:(0,l.jsx)(w.rxG,{}),onClick:function(){new Audio(s.rH.common.audioFile).play()},"data-aos":"fade","data-aos-delay":"400"})]}),(0,l.jsx)(o.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:(0,l.jsx)(s.VY,{fontSize:"lg",children:e.about})})]})]}),(0,l.jsxs)(o.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,l.jsx)(o.xu,{flex:"0.6",flexShrink:0,overflow:"hidden",children:(0,l.jsx)(y,{})}),(0,l.jsx)(o.xu,{flex:"0.6",overflow:"hidden",children:(0,l.jsx)(k,{})})]}),(0,l.jsx)(o.xu,{pt:"16",children:(0,l.jsx)(S,{})}),(0,l.jsx)(o.xu,{pt:"16",children:(0,l.jsx)(g,{})})]})}},3880:function(e,t,i){i.d(t,{VY:function(){return D},nl:function(){return r},rH:function(){return P},r0:function(){return Z}});var o,r,a=i(5987),s=i(1413),n=i(9439),c=i(4942),l=i(2791),d=i(8735),p=i(1265),u=JSON.parse('{"name":"Harsh Korat","logoType":{"mobile":"HK","desktop":"Harsh Korat"},"mainPicture":"/portfolio-harsh/assets/HK.webp","mainPictureJPG":"/portfolio-harsh/assets/HK.jpeg","pronunciation":"/haarsh ko-rat/","audioFile":"/portfolio-harsh/assets/name-pro.mp3","cssVarPrefix":"hp","email":"koratharsh31@gmail.com","linkedin":"https://www.linkedin.com/in/harsh-korat-419759168/","github":"https://github.com/hrishikeshpaul","resume":"https://docs.google.com/viewer?url=https://docs.google.com/document/d/1s3G7PiPHlK3Ett_W-WUU01GQnsggiLrWZB3IiMAgBEk/export?format=pdf","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/harsh-korat-419759168/"},{"type":"github","link":"https://github.com/harshkorat"},{"type":"mail","link":"mailto:koratharsh31@gmail.com"}]}'),h=JSON.parse('{"headline":"Hello, I\'m Harsh Korat.","picture":"/portfolio-harsh/assets/landing/face.webp","jpg":"/portfolio-harsh/assets/landing/face.jpeg"}'),g=JSON.parse('[{"id":"featured-project-trackcta","title":"trackCTA","year":"Dec 2021 - Present","location":"Chicago","demo":"https://www.trackcta.com/","github":"https://github.com/hrishikeshpaul/trackcta","tags":["React","TypeScript","NodeJS","Web Sockets","i18n","Google Maps","GCP","CI/CD","Shell"],"description":"An internationalized web app to track and predict Chicago Transit Authority (CTA) busses and trains.","image":"/portfolio-harsh/assets/featured-projects/trackcta.webp","jpg":"/portfolio-harsh/assets/featured-projects/trackcta.jpeg"},{"id":"featured-project-asctb-reporter","title":"ASCT+B Reporter","year":"Jun 2020 - Jun 2021","location":"Indiana University","demo":"https://hubmapconsortium.github.io/ccf-asct-reporter/","github":"https://github.com/hrishikeshpaul/ccf-asct-reporter","tags":["Angular 11","TypeScript","NodeJS","NGXS","Vega","TravisCI","Open Source"],"description":"A collaboration with the NIH to build visualization tool to envision large biomedical datasets for researchers, doctors and experts.","readMore":"https://hrishikeshpaul.medium.com/asct-b-reporter-a-visualization-tool-d4dd29de97d8","image":"/portfolio-harsh/assets/featured-projects/asctb.webp","jpg":"/portfolio-harsh/assets/featured-projects/asctb.jpeg"},{"id":"featured-project-scrapbook","title":"Scrapbook","year":"Jan 2021 - May 2021","location":"Indiana University","tags":["Angular 11","Flask","Node","Python","TypeScript","Docker","Docker Hub","Jenkins","Kubernetes","GKE","GCP"],"demo":"http://34.69.102.109/","github":"https://github.com/hrishikeshpaul/scrapbook","description":"A micro-service architecture based web application that enables users to upload, share and manage images.","readMore":"https://hrishikeshpaul.medium.com/scrapbook-a-micro-service-based-photo-sharing-application-3a8760681af6","image":"/portfolio-harsh/assets/featured-projects/scrapbook.webp","jpg":"/portfolio-harsh/assets/featured-projects/scrapbook.jpeg"},{"id":"featured-project-measure-ux","location":"Indiana University","title":"Measuring User Experience","year":"Sep 2020 - Dec 2020","tags":["UX Research","User Journey","Experience Mapping","Surveys","Interviews","Adobe XD"],"description":"A project to quantify user experiences demonstrated by measuring the user experience of uploading a photo on Instagram.","readMore":"https://hrishikeshpaul.medium.com/measuring-user-experience-an-instagram-case-study-89bfb78f2c6b","image":"/portfolio-harsh/assets/featured-projects/measure-ux.webp","jpg":"/portfolio-harsh/assets/featured-projects/measure-ux.jpeg"}]'),m=JSON.parse('[{"id":"other-project-post","title":"Part of Speech Tagger","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/post","demo":"https://hrishikeshpaul.github.io/post/","tags":["Python","Vue","Flask","Artificial Intelligence","Language Processing"],"description":"Post is a simple algorithm that was developed to tag a word in a sentence corresponding to its part of speech. The algorithm makes of a probabilistic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling.","image":"/portfolio-harsh/assets/other-projects/post.webp","jpg":"/portfolio-harsh/assets/other-projects/post.jpeg"},{"id":"other-project-noq","title":"NoQ Job Portal","year":"Aug 2019 - Dec 2019","github":"https://github.com/hrishikeshpaul/noq","demo":"http://noq-client.herokuapp.com/login","tags":["Vue","NodeJS","JavaScript","MongoDB","Heroku","Agile","Sockets","JIRA"],"description":"NoQ is a tool which allows for both employers and students to skip the hassle seen in modern day career fairs, while effectively pairing up students with employees based on various factors.","readMore":"https://hrishikeshpaul.medium.com/noq-a-job-portal-for-college-career-fairs-9996bbb37a1c","image":"/portfolio-harsh/assets/other-projects/noq.webp","jpg":"/portfolio-harsh/assets/other-projects/noq.jpeg"},{"id":"other-project-bank-compare","title":"Experience Design Anaysis","year":"Aug 2019 - Dec 2019","tags":["UX Design","Analysis","Adobe XD","Mockups"],"description":"This project demonstrates how the selection of colors, fonts, shapes, languages, layout and other styles can lead to drastically different user experiences, by comparing landing pages of 3 bank websites built from scratch.","readMore":"https://drive.google.com/file/d/1GY2WmRZgvBgFx6OlAMcAj8_DQVmS5VBw/view","image":"/portfolio-harsh/assets/other-projects/bank.webp","jpg":"/portfolio-harsh/assets/other-projects/bank.jpeg"},{"id":"other-project-bunder","title":"Bunder","year":"Jan 2020 - Apr 2020","tags":["Surveying","User Interviews","Ideation","Analysis","Product Planning"],"description":"An MVP Proposal - Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them.","readMore":"https://drive.google.com/file/d/1sj9wL7uEokNpk6VUu3nsiPHf3TZeu4lT/view?usp=sharing","image":"/portfolio-harsh/assets/other-projects/bunder.webp","jpg":"/portfolio-harsh/assets/other-projects/bunder.jpeg"},{"id":"other-project-suicide-analyzer","title":"Suicide Analyzer","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO.","github":"https://github.com/hrishikeshpaul/whodata","image":"/portfolio-harsh/assets/other-projects/suicide-analyzer.webp","jpg":"/portfolio-harsh/assets/other-projects/suicide-analyzer.jpeg"},{"id":"other-project-nutricare","title":"Nutricare","tags":["AngularJS","JavaScript","Express","NodeJS","Leaflet","Heroku","Python","Pandas"],"description":"A web app for patients to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects for a particular problem statement.","readMore":"https://angel.co/projects/576300-nutricare","image":"/portfolio-harsh/assets/other-projects/nutricare.webp","jpg":"/portfolio-harsh/assets/other-projects/nutricare.jpeg"}]'),f=JSON.parse('{"educations":[{"id":"edu-1","school":"Indiana University","degree":"Master of Science in Computer Science","duration":"Aug 2019 - May 2021","content":["GPA: 4/4","Courses: Software Engineering, Distributed Systems, Operating Systems, Advanced Algorithms, Experience Design"]},{"id":"edu-2","school":"Manipal University","degree":"Bachelors in Computer Engineering","duration":"Aug 2015 - Jul 2019","content":["GPA: 8/10","Courses: Data Structures, OOP, Algorithms, Software Engineering, Computer Networks, Artificial Intelligence"]}],"experiences":[{"id":"exp-1","company":"Reputation","position":"Software Engineer (Frontend)","duration":"Jun 2020 - Jun 2021","description":["Revamping the current report generation framework using React, that aggregates data from 30 modules to support an interactive cartesian system.\u200b","Integrated user activity data from BigQuery into a custom tailored dashboard available to 10000+ clients.","Spearheaded the work on multiple reports for 5 priority clients to provide additional functionalities."]},{"id":"exp-2","company":"CNS (NIH), Indiana University","position":"Software Engineer","duration":"Jun 2020 - Jun 2021","description":["Developed state of the art visualization tools for researchers and doctors to envision large biological datasets using \u200bAngular 11\u200b, Node & Vega.\u200b","Devised an algorithm to compute statistics that highlight anomalies in the data and displayed them on an intuitive interface.","Created detailed UX flows, experience maps, wire-frames and conducted interviews across various biological consortia to enhance user experience."]},{"id":"exp-3","company":"Skylark Drones","position":"Software Engineer Intern","duration":"Jan 2019 - Jun 2019","description":["Developed a web app for mission planning, control and execution using Vue & Flask, thereby improving onside project performance by 22%.\u200b","Designed an icon set for various functionalities using \u200bIllustrator\u200b, which improved usability by 20%."]}],"skills":[{"title":"Programming","tools":["TypeScript","JavaScript","Python","C/C++","Java","NoSQL","SQL","Shell","React Native","Vega (D3.js)"]},{"title":"Web","tools":["React","Angular 11","Vue","NodeJS","Flask","Redux","NGXS","HTML/CSS","OAuth","i18n"]},{"title":"Databases","tools":["MongoDB","Redis","MySQL","Firebase"]},{"title":"OS & Tools","tools":["MacOS","Linux","Git","Agile (Scrum)","MVC","Jenkins","Heroku","Docker","Kubernetes"]},{"title":"Design & Research","tools":["Surveys","Interviews","User Research","Design Strategy","Experience Mapping","Adobe XD","Illustrator"]}],"blog":[{"id":"blog-1","title":"A beginner\'s guide to github","link":"https://hrishikeshpaul12.medium.com/a-beginners-guide-to-github-a811e662a777"},{"id":"blog-2","title":"User Experience Design \u2013 A little more than just design","link":"https://hrishikeshpaul12.medium.com/user-experience-design-a-little-more-than-just-design-afdb941aeb5"}]}'),b=i(7034),x=i(7838),j=i(184),y=["children"],k=["node"],v=["node"],S=["node"],w=["ordered"],A=["node"],C=["ordered"],P={common:u,landing:h,featuredProjects:g,otherProjects:m,about:f};!function(e){e.Landing="landing",e.About="about"}(r||(r={}));var J=(o={},(0,c.Z)(o,r.Landing,b),(0,c.Z)(o,r.About,x),o),Z=function(e){var t=(0,l.useState)({landing:"",about:""}),i=(0,n.Z)(t,2),o=i[0],r=i[1];return(0,l.useEffect)((function(){fetch(J[e]).then((function(e){return e.text()})).then((function(t){return r((function(i){return(0,s.Z)((0,s.Z)({},i),{},(0,c.Z)({},e,t))}))}))}),[e]),o},D=function(e){var t=e.children,i=(0,a.Z)(e,y);return(0,j.jsx)(d.Kq,{spacing:"4",children:(0,j.jsx)(p.D,{components:{p:function(e){e.node;var t=(0,a.Z)(e,k);return(0,j.jsx)(d.xv,(0,s.Z)((0,s.Z)({},i),t))},a:function(e){e.node;var t=(0,a.Z)(e,v);return(0,j.jsx)(d.rU,(0,s.Z)({href:t.href,target:"_blank",color:"primary.200"},t))},ul:function(e){e.node;var t=(0,a.Z)(e,S),i=(t.ordered,(0,a.Z)(t,w));return(0,j.jsx)(d.QI,(0,s.Z)((0,s.Z)({},i),{},{"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"}))},li:function(e){e.node;var t=(0,a.Z)(e,A),i=(t.ordered,(0,a.Z)(t,C));return(0,j.jsx)("li",(0,s.Z)({"data-aos":"flip-up","data-aos-delay":100*t.index+400},i))}},children:t})})}},3362:function(e,t,i){i.d(t,{$:function(){return a}});var o=i(8735),r=i(184),a=function(e){var t=e.id,i=e.tags,a=e.size,s=void 0===a?"sm":a;return(0,r.jsx)(o.kC,{py:"2",wrap:"wrap",gap:"4",children:i.map((function(e,i){return(0,r.jsx)(o.xu,{"data-aos":"flip-left","data-aos-delay":50*i,children:(0,r.jsx)(o.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:s,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))}))})}},7838:function(e,t,i){e.exports=i.p+"static/media/about.bca52125f60debfccafc.md"},7034:function(e,t,i){e.exports=i.p+"static/media/landing.afd86d4b591a8f8f648f.md"}}]);
//# sourceMappingURL=607.cd5e766f.chunk.js.map