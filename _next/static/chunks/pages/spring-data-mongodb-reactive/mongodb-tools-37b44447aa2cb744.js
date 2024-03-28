(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[439],{7259:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spring-data-mongodb-reactive/mongodb-tools",function(){return s(9296)}])},9296:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c},default:function(){return h}});var o=s(5893),a=s(2673),r=s(373),i=s(8426);s(9128);var l=s(2643),t={src:"/docs-spring-data-reactive/_next/static/media/instance.d16e8545.png",height:1539,width:1669,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAZUlEQVR42lWMQQ4CMQwD8/+HIoQ4oNImcex2KUJIu2Mfx7bIjB2ApKRicFdhmQmgqvoYVfB8RTqqWcNoyHfh3945XG6JJ1lrreOK7QeSc65jXTD/EqS2dd5ZZKJKmj9R0nC/Pe4f9gikCwhFjFAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7};let c=[{depth:2,value:"MongoDB 접근 도구들",id:"mongodb-접근-도구들"},{depth:2,value:"MongoDB 클라우드 인스턴스",id:"mongodb-클라우드-인스턴스"},{depth:2,value:"MongoDB docker",id:"mongodb-docker"},{depth:3,value:"single broker",id:"single-broker"},{depth:3,value:"multi broker",id:"multi-broker"},{depth:2,value:"MongoDB compass",id:"mongodb-compass"},{depth:2,value:"MongoDB Data Explorer",id:"mongodb-data-explorer"},{depth:2,value:"mongoose",id:"mongoose"},{depth:2,value:"MongoDB Shell",id:"mongodb-shell"},{depth:3,value:"설치 & 환경변수 등록",id:"설치--환경변수-등록"},{depth:3,value:"Database 선택, 접근",id:"database-선택-접근"},{depth:3,value:"Collection",id:"collection"},{depth:2,value:"EOF",id:"eof"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",a:"a",img:"img",h3:"h3",pre:"pre",code:"code",span:"span",blockquote:"blockquote",ul:"ul",li:"li"},(0,l.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"mongodb-접근-도구들",children:"MongoDB 접근 도구들"}),"\n",(0,o.jsx)(n.h2,{id:"mongodb-클라우드-인스턴스",children:"MongoDB 클라우드 인스턴스"}),"\n",(0,o.jsxs)(n.p,{children:["문서 작성을 위한 용도로 사용하는 MongoDB는 ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/ko-kr/atlas",children:"Atlas MongoDB"})," 를 사용했습니다. 개발PC가 점점 노후화 되어서 팬 소음도 너무 크고 가끔은 컴퓨터가 터질것 같아 선택하게 되었습니다. 데이터베이스 등급은 무료 인스턴스를 선택했습니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{placeholder:"blur",src:t})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"mongodb-docker",children:"MongoDB docker"}),"\n",(0,o.jsxs)(n.p,{children:["로컬에서만 실행하시거나, testcontainers 를 사용중이시라면, docker-compose 파일을 만들어두고 이것을 읽어들이는게 제일 편하고 빠릅니다. 이런 이유로 이번 문서에서는 docker-compose 파일도 추가해둡니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h3,{id:"single-broker",children:"single broker"}),"\n",(0,o.jsx)(n.p,{children:"브로커 1기만 갖춰진 docker-compose 파일입니다."}),"\n",(0,o.jsx)(n.pre,{"data-language":"yaml","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"yaml","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"version"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'3.8'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"services"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"mongo"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"image"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"mongo:6.0.5"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"ports"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"27017:27017"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"environment"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"MONGO_INITDB_DATABASE"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"foobar"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"MONGO_INITDB_ROOT_USERNAME"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"root"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"MONGO_INITDB_ROOT_PASSWORD"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1111"})]})]})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h3,{id:"multi-broker",children:"multi broker"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"TODO : 추가예정입니다. 현재 개발 PC가 도커 구동시마다 팬 소음이 너무 커져서 문서작업을 되도록 뒤로 미루고 있습니다."}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"mongodb-compass",children:"MongoDB compass"}),"\n",(0,o.jsx)(n.p,{children:"Mongodb Compass"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"windows :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://downloads.mongodb.com/compass/mongodb-compass-1.42.3-win32-x64.msi",children:"https://downloads.mongodb.com/compass/mongodb-compass-1.42.3-win32-x64.msi"})}),"\n",(0,o.jsxs)(n.li,{children:["접속 URL : ",(0,o.jsx)(n.code,{children:"mongodb+srv://유저명:<password>@[서버주소]/"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"macos :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://downloads.mongodb.com/compass/mongodb-compass-1.42.3-darwin-arm64.dmg",children:"https://downloads.mongodb.com/compass/mongodb-compass-1.42.3-darwin-arm64.dmg"})}),"\n",(0,o.jsxs)(n.li,{children:["접속 URL : ",(0,o.jsx)(n.code,{children:"mongodb+srv://유저명:<password>@[서버주소]/"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"mongodb-data-explorer",children:"MongoDB Data Explorer"}),"\n",(0,o.jsx)(n.p,{children:"설치한 Atlas 인스턴스는 Compass 로도 접속할 수 있겠지만, 브라우저에서 사용가능한 Mongodb Data Explorer 로도 접속가능합니다."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://cloud.mongodb.com",children:"https://cloud.mongodb.com"})}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"mongoose",children:"mongoose"}),"\n",(0,o.jsx)(n.p,{children:"몽구스를 이용한 스키마 모델링 방법도 있습니다."}),"\n",(0,o.jsx)(n.p,{children:"설치"}),"\n",(0,o.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,o.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"mongooose"})]})})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["TODO : Mongoose 사용법에 대해서는 시간이 되는대로 정리하겠습니다.",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"mongodb-shell",children:"MongoDB Shell"}),"\n",(0,o.jsx)(n.h3,{id:"설치--환경변수-등록",children:"설치 & 환경변수 등록"}),"\n",(0,o.jsx)(n.p,{children:"windows"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://downloads.mongodb.com/compass/mongosh-2.0.0-x64.msi",children:"https://downloads.mongodb.com/compass/mongosh-2.0.0-x64.msi"})," 다운로드 & 설치"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:'mongosh "mongodb+srv://[접속주소]" --apiVersion 1 --username [유저명]'})}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"macos"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"brew isntall mongosh"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:'mongosh "mongodb+srv://[접속주소]" --apiVersion 1 --username [유저명]'})}),"\n",(0,o.jsxs)(n.li,{children:["brew install 이 아닌 Manually Install 을 원하신다면 ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/mongodb-shell/install/",children:"Install Mongosh"})," → Procedure → macOS 를 선택해주세요. 그리고 사용가능한 바이너리를 확인하시려면  ",(0,o.jsxs)(n.a,{href:"https://www.mongodb.com/docs/mongodb-shell/install/#std-label-macos-install-archive",children:["Install from ",(0,o.jsx)(n.code,{children:".zip"})," File."]})," 을 확인해주세요."]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:["MS윈도우즈 사용자의 경우 다운로드 받은 mongosh 파일을 Path 에 추가시킨 후 터미널에서 접근 가능합니다. MacOS 사용자의 경우에도 brew 로 설치하기보다는 별도로 다운로드 받은 디렉터리를 추가하고 싶다면 별도로 바이너리를 다운받으신후 Path 에 추가해주시면 됩니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.p,{children:["제 경우에는 MacOS 를 사용할 때에는 ",(0,o.jsx)(n.code,{children:"~/username/workspace/bin"})," 같은 디렉터리에 바이너리를 모아두었었는데, Manually Install 방식이 친절하게 제공되면 Manually Install 로 설치 후에 필요 없어지면 바이너리와 이와 관련된 디렉터리를 지워버리는 방식으로 개발 PC를 관리해왔는데, 가능한 경우에 한해서 이 방식으로 설치를 했었습니다. 가끔은 불편하더라도 나중에 관리가 깔끔하게 되려면 오히려 이런 방식이 더 편할 것 같기도 합니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h3,{id:"database-선택-접근",children:"Database 선택, 접근"}),"\n",(0,o.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"### 데이터베이스 선택"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"use"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" [데이터베이스명]"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"### 현재 사용중인 데이터베이스 확인"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"db"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"### 서버 내의 데이터베이스 리스트"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"### 최소 한개의 Document 를 가진 DB만 출력됩니다."})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"show"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"dbs"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"### 컬렉션에 Document insert"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"db.[컬렉션명].insertOne("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{k:v, "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"...}"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"### db 내에 도큐먼트 조회"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"db.[데이터베이스명].find"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"### 데이터베이스 drop"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"### 현재 선택한 데이터베이스를 drop"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"db.dropDatabase()"})})]})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h3,{id:"collection",children:"Collection"}),"\n",(0,o.jsxs)(n.p,{children:["Collection 에 대한 자세한 옵션들(clusteredIndex, timeseries 옵션 등등)에 대한 설명은 ",(0,o.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/method/db.createCollection/",children:"MongoDB Manual/db.createCollection()"})," 을 참고해주시기 바랍니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"## Collection 생성"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"db.createCollection(컬렉션"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"명"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"## 생성된 컬렉션 들 조회"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"show"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"collections"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"## 컬렉션 내의 모든 document 리스트들 조회"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"db.book.find"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"## 컬렉션 DROP"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"db.book.drop()"})})]})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"eof",children:"EOF"}),"\n",(0,o.jsxs)(n.p,{children:["이번 문서에서는 접근환경에 대해서만 간단하게 정리했습니다. 추후에 시간이 된다면, MongoDB에서 지원하는 조회쿼리, aggregation 쿼리나, Date 형식의 데이터들, 인덱싱 개념들 등을 정리해두도록 하겠습니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)("br",{})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/spring-data-mongodb-reactive/mongodb-tools.mdx",route:"/spring-data-mongodb-reactive/mongodb-tools",timestamp:1711499911e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive",children:[{kind:"MdxPage",name:"mongo-collection-document-bson-bson-codec",route:"/spring-data-mongodb-reactive/mongo-collection-document-bson-bson-codec"},{kind:"MdxPage",name:"mongodb-features",route:"/spring-data-mongodb-reactive/mongodb-features"},{kind:"MdxPage",name:"mongodb-reactive-streams-driver",route:"/spring-data-mongodb-reactive/mongodb-reactive-streams-driver"},{kind:"MdxPage",name:"mongodb-tools",route:"/spring-data-mongodb-reactive/mongodb-tools"},{kind:"MdxPage",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive/spring-data-mongodb-reactive"},{kind:"Meta",data:{"mongodb-features":"MongoDB Features","mongodb-tools":"MongoDB 접근 도구들","mongodb-reactive-streams-driver":"MongoDB Reactive Streams Driver","mongo-collection-document-bson-bson-codec":"MongoClient, Document, BSON, BSON Codec","spring-data-mongodb-reactive":"Spring Data MongoDB Reactive"}}]},{kind:"MdxPage",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive"},{kind:"Folder",name:"spring-data-r2dbc",route:"/spring-data-r2dbc",children:[{kind:"MdxPage",name:"mysql-features",route:"/spring-data-r2dbc/mysql-features"},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc/spring-data-r2dbc"},{kind:"Meta",data:{"mysql-features":"MySQL 특징","spring-data-r2dbc":"Spring Data R2DBC"}}]},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc"},{kind:"Folder",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive",children:[{kind:"MdxPage",name:"known-cache-strategies",route:"/spring-data-redis-reactive/known-cache-strategies"},{kind:"MdxPage",name:"redis-data-structures",route:"/spring-data-redis-reactive/redis-data-structures"},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive/spring-data-redis-reactive"},{kind:"Meta",data:{"redis-data-structures":"레디스 자료구조들","spring-data-redis-reactive":"Spring Data Redis Reactive","known-cache-strategies":"캐싱전략의 종류"}}]},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive"},{kind:"Meta",data:{index:"Introduction","spring-data-mongodb-reactive":"Spring Data MongoDB Reactive","spring-data-r2dbc":"Spring Data R2dbc","spring-data-redis-reactive":"Spring Data Redis Reactive",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Mongodb Tools",headings:c},pageNextRoute:"/spring-data-mongodb-reactive/mongodb-tools",nextraLayout:r.ZP,themeConfig:i.Z};var h=(0,a.j)(d)},8426:function(e,n,s){"use strict";var o=s(5893);s(7294);let a={logo:(0,o.jsx)("span",{children:"Docs Spring Data Reactive"}),project:{link:"https://github.com/chagchagchag/docs-spring-data-reactive"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-data-reactive",footer:{text:"Nextra Docs Template"}};n.Z=a},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=7259)}),_N_E=e.O()}]);