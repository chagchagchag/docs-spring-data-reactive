(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{6035:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spring-data-r2dbc/example-mysql-docker-container",function(){return r(6180)}])},6180:function(e,n,r){"use strict";r.r(n),r.d(n,{__toc:function(){return c}});var s=r(5893),a=r(2673),t=r(373),i=r(8426);r(9128);var o=r(2643);let c=[{depth:2,value:"예제 용도의 MySQL Docker Container",id:"예제-용도의-mysql-docker-container"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",span:"span"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"예제-용도의-mysql-docker-container",children:"예제 용도의 MySQL Docker Container"}),"\n",(0,s.jsxs)(n.p,{children:["이번 문서 작업에서 사용하는 예제에서 사용하는 MySQL 도커 컨테이너를 정의한 docker-compose 는 아래와 같습니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{"data-language":"yaml","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"yaml","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"version"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'3.7'"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"services"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"example-mysql"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"image"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"mysql:5.7.39-debian"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"restart"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"always"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"#    command: --lower_case_table_names=1"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"container_name"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"example-mysql"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"hostname"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"example-mysql"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"ports"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"23306:3306"'})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"environment"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MYSQL_USER=user"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MYSQL_USER_HOST=%"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MYSQL_PASSWORD=test1357"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MYSQL_DATABASE=example"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MYSQL_ROOT_HOST=%"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"MYSQL_ROOT_PASSWORD=test1357"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"TZ=UTC"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"command"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"--character-set-server=utf8mb4"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"--collation-server=utf8mb4_unicode_ci"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"volumes"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"./init/:/docker-entrypoint-initdb.d/"})]})]})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"구동은 아래와 같이 실행해주세요"}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"docker-compose"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"up"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-d"})]})})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"종료는 아래와 같이 실행해주세요."}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"docker-compose"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"down"})]})})}),"\n",(0,s.jsxs)(n.p,{children:["또는 Docker Desktop 에서 Stop & Delete 를 누르셔도 됩니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("br",{})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/spring-data-r2dbc/example-mysql-docker-container.mdx",route:"/spring-data-r2dbc/example-mysql-docker-container",timestamp:1711972623e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive",children:[{kind:"MdxPage",name:"aggregation-pipeline",route:"/spring-data-mongodb-reactive/aggregation-pipeline"},{kind:"MdxPage",name:"document-bson-bson-codec",route:"/spring-data-mongodb-reactive/document-bson-bson-codec"},{kind:"MdxPage",name:"entity",route:"/spring-data-mongodb-reactive/entity"},{kind:"MdxPage",name:"mongo-collection-functions",route:"/spring-data-mongodb-reactive/mongo-collection-functions"},{kind:"MdxPage",name:"mongodb-features",route:"/spring-data-mongodb-reactive/mongodb-features"},{kind:"MdxPage",name:"mongodb-reactive-streams-driver",route:"/spring-data-mongodb-reactive/mongodb-reactive-streams-driver"},{kind:"MdxPage",name:"mongodb-tools",route:"/spring-data-mongodb-reactive/mongodb-tools"},{kind:"MdxPage",name:"query-methods",route:"/spring-data-mongodb-reactive/query-methods"},{kind:"MdxPage",name:"reactive-mongo-operation",route:"/spring-data-mongodb-reactive/reactive-mongo-operation"},{kind:"MdxPage",name:"reactive-mongo-repository",route:"/spring-data-mongodb-reactive/reactive-mongo-repository"},{kind:"MdxPage",name:"reactive-mongo-template",route:"/spring-data-mongodb-reactive/reactive-mongo-template"},{kind:"MdxPage",name:"spring-data-object-mapping-and-creation",route:"/spring-data-mongodb-reactive/spring-data-object-mapping-and-creation"},{kind:"MdxPage",name:"transactional-transactional-operator",route:"/spring-data-mongodb-reactive/transactional-transactional-operator"},{kind:"Meta",data:{"mongodb-features":"MongoDB Features","mongodb-tools":"MongoDB 접근 도구들","mongodb-reactive-streams-driver":"MongoDB Reactive Streams Driver","mongo-collection-functions":"MongoCollection 의 다양한 연산들","document-bson-bson-codec":"Document, BSON, BSON Codec",entity:"Entity","spring-data-object-mapping-and-creation":"Spring Data Reactive 의 객채생성 방식과 매핑방식","reactive-mongo-template":"ReactiveMongoTemplate","reactive-mongo-operation":"ReactiveMongoOperation","reactive-mongo-repository":"ReactiveMongoRepository","query-methods":"Query 메서드","aggregation-pipeline":"Aggregation Pipeline","transactional-transactional-operator":"@Transactional, TransactionalOperator"}}]},{kind:"MdxPage",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive"},{kind:"Folder",name:"spring-data-r2dbc",route:"/spring-data-r2dbc",children:[{kind:"MdxPage",name:"entity-mysql-type-mapping",route:"/spring-data-r2dbc/entity-mysql-type-mapping"},{kind:"MdxPage",name:"example-mysql-docker-container",route:"/spring-data-r2dbc/example-mysql-docker-container"},{kind:"MdxPage",name:"jdbc-jpa-vs-r2dbc",route:"/spring-data-r2dbc/jdbc-jpa-vs-r2dbc"},{kind:"MdxPage",name:"mysql-features",route:"/spring-data-r2dbc/mysql-features"},{kind:"MdxPage",name:"query-methods",route:"/spring-data-r2dbc/query-methods"},{kind:"MdxPage",name:"r2dbc-drivers-r2dbc-spi",route:"/spring-data-r2dbc/r2dbc-drivers-r2dbc-spi"},{kind:"MdxPage",name:"r2dbc-entity-template-r2dbc-entity-operations",route:"/spring-data-r2dbc/r2dbc-entity-template-r2dbc-entity-operations"},{kind:"MdxPage",name:"r2dbc-h2-settings",route:"/spring-data-r2dbc/r2dbc-h2-settings"},{kind:"MdxPage",name:"r2dbc-repository",route:"/spring-data-r2dbc/r2dbc-repository"},{kind:"MdxPage",name:"simple-r2dbc-code",route:"/spring-data-r2dbc/simple-r2dbc-code"},{kind:"MdxPage",name:"spring-data-object-mapping-and-creation",route:"/spring-data-r2dbc/spring-data-object-mapping-and-creation"},{kind:"MdxPage",name:"transactional-transactional-operator",route:"/spring-data-r2dbc/transactional-transactional-operator"},{kind:"Meta",data:{"mysql-features":"MySQL 특징","jdbc-jpa-vs-r2dbc":"JDBC, JPA 와의 차이점","r2dbc-drivers-r2dbc-spi":"R2DBC 드라이버, R2DBC SPI, Connection 설정","r2dbc-h2-setting":"R2DBC 에서의 h2 설정","simple-r2dbc-code":"R2DBC 기반 Raw 레벨 코드, Transaction","entity-mysql-type-mapping":"Entity, MySQL 타입 매핑","spring-data-object-mapping-and-creation":"Spring Data Reactive 의 객체생성 방식과 필드 매핑방식","r2dbc-repository":"R2dbcRepository","query-methods":"Query Methods","transactional-transactional-operator":"@Transactional, TransactionalOperator","r2dbc-entity-template-r2dbc-entity-operations":"R2dbcEntityTemplate, R2dbcEntityOperations, FluentR2dbcOperations","example-mysql-docker-container":"예제 용도의 MySQL Docker Container","r2dbc-h2-settings":"R2dbc H2 Settings"}}]},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc"},{kind:"Folder",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive",children:[{kind:"MdxPage",name:"known-cache-strategies",route:"/spring-data-redis-reactive/known-cache-strategies"},{kind:"MdxPage",name:"luttuce-examples",route:"/spring-data-redis-reactive/luttuce-examples"},{kind:"MdxPage",name:"redis-connector",route:"/spring-data-redis-reactive/redis-connector"},{kind:"MdxPage",name:"redis-data-structures",route:"/spring-data-redis-reactive/redis-data-structures"},{kind:"MdxPage",name:"redis-replication-sentinel-cluster",route:"/spring-data-redis-reactive/redis-replication-sentinel-cluster"},{kind:"MdxPage",name:"spring-data-redis-reactive-redis-operations",route:"/spring-data-redis-reactive/spring-data-redis-reactive-redis-operations"},{kind:"Meta",data:{"redis-replication-sentinel-cluster":"Redis Replication,Sentinel, Cluster","redis-connector":"Redis Connector (Lettuce, Jedis)","redis-data-structures":"레디스 자료구조들","luttuce-examples":"luttuce 기반 예제 코드들","spring-data-redis-reactive-redis-operations":"Spring Data Redis Reactive, RedisOperations","known-cache-strategies":"캐싱전략의 종류"}}]},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive"},{kind:"Meta",data:{index:"Introduction","spring-data-r2dbc":"Spring Data R2dbc","spring-data-mongodb-reactive":"Spring Data MongoDB Reactive","spring-data-redis-reactive":"Spring Data Redis Reactive",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Example Mysql Docker Container",headings:c},pageNextRoute:"/spring-data-r2dbc/example-mysql-docker-container",nextraLayout:t.ZP,themeConfig:i.Z};n.default=(0,a.j)(d)},8426:function(e,n,r){"use strict";var s=r(5893);r(7294);let a={logo:(0,s.jsx)("span",{children:"Docs Spring Data Reactive"}),project:{link:"https://github.com/chagchagchag/docs-spring-data-reactive"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-data-reactive",footer:{text:"Nextra Docs Template"}};n.Z=a},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=6035)}),_N_E=e.O()}]);