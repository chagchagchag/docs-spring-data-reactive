(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{4104:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spring-data-mongodb-reactive/entity",function(){return t(8718)}])},8718:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return s}});var i=t(5893),a=t(2673),d=t(373),r=t(8426);t(9128);var o=t(2643);let s=[{depth:2,value:"Entity",id:"entity"},{depth:2,value:"@Document",id:"document"},{depth:2,value:"@Id",id:"id"},{depth:2,value:"@DBRef",id:"dbref"},{depth:2,value:"@Indexed",id:"indexed"},{depth:2,value:"@CompoundIndex",id:"compoundindex"},{depth:2,value:"@TextIndexed",id:"textindexed"},{depth:2,value:"@HashIndexed",id:"hashindexed"},{depth:2,value:"@PersistenceConstructor",id:"persistenceconstructor"},{depth:2,value:"@Field",id:"field"},{depth:2,value:"@Transient",id:"transient"},{depth:2,value:"@Version",id:"version"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",blockquote:"blockquote"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"entity",children:"Entity"}),"\n",(0,i.jsxs)(n.p,{children:["MongoDB 내의 컬렉션 내에 존재하는 하나의 Document 에 해당하는 객체를 표현하는 클래스를 Entity 라고 부르며, ",(0,i.jsx)(n.code,{children:"@Document"})," 애노테이션을 통해 Entity 를 식별합니다. spring data mongodb reactive 에서는 Document 를 Entity 단위로 식별하기 위해서 필요한 데이터베이스관련 세팅들에 대한 metadata 들을 ",(0,i.jsx)(n.code,{children:"@Id"}),", ",(0,i.jsx)(n.code,{children:"@Field"})," 등과 같은 애노테이션으로 제공해주고 있습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"document",children:"@Document"}),"\n",(0,i.jsxs)(n.p,{children:["클래스 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["Entity 로 식별할 데이터의 단위를 표현한 클래스를  ",(0,i.jsx)(n.code,{children:"@Document"})," 애노테이션을 붙여서 적용합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["collection 명을 별도로 지정 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"id",children:"@Id"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"_id"})," 필드에 대해 적용하는 애노테이션입니다."]}),"\n",(0,i.jsx)(n.h2,{id:"dbref",children:"@DBRef"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"MongoDB 의 DBRef 형태로 저장해야 하는 필드에 사용하는 애노테이션 입니다."}),"\n",(0,i.jsx)(n.h2,{id:"indexed",children:"@Indexed"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"이 애노테이션이 표시된 필드에 대해서 인덱스를 생성합니다. 기본적으로는 자동 생성이 비활성화이며, 별도의 설정이 필요합니다."}),"\n",(0,i.jsx)(n.h2,{id:"compoundindex",children:"@CompoundIndex"}),"\n",(0,i.jsxs)(n.p,{children:["클래스 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["여러 필드로 구성된 복합 인덱스를 적용하고자 할 때 사용하는 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"textindexed",children:"@TextIndexed"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["필드에 text index 를 적용합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"hashindexed",children:"@HashIndexed"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["필드에 hash index 를 적용합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"persistenceconstructor",children:"@PersistenceConstructor"}),"\n",(0,i.jsxs)(n.p,{children:["생성자에 명시하는 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"",children:"Spring Data Object Mapping"})," 문서에서 자세하게 객체 생성규칙, 필드 주입 원칙 등에 대해 정리합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"TODO : 링크 추가 필요"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"field",children:"@Field"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["Entity 로 인식할 클래스 내의 필드에 대해 적용합니다. @Field 가 붙은 필드는 convention 기반이 아닌 Field 에 명시한 name 을 적용해서 인식합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"transient",children:"@Transient"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["Entity 로 인식할 클래스 내의 필드 중 Document 매핑에서 제외할 필드에 대해 @Transient 애노테이션을 적용합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h2,{id:"version",children:"@Version"}),"\n",(0,i.jsxs)(n.p,{children:["필드 레벨의 애노테이션입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["낙관적 락(Optimistic Lock) 을 적용하고자 할 때 사용하는 애노테이션입니다. Entity 가 Update 될 때마다 자동으로 Update 됩니다.",(0,i.jsx)("br",{})]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/spring-data-mongodb-reactive/entity.mdx",route:"/spring-data-mongodb-reactive/entity",timestamp:17116948e5,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive",children:[{kind:"MdxPage",name:"document-bson-bson-codec",route:"/spring-data-mongodb-reactive/document-bson-bson-codec"},{kind:"MdxPage",name:"entity",route:"/spring-data-mongodb-reactive/entity"},{kind:"MdxPage",name:"mongo-collection-functions",route:"/spring-data-mongodb-reactive/mongo-collection-functions"},{kind:"MdxPage",name:"mongodb-features",route:"/spring-data-mongodb-reactive/mongodb-features"},{kind:"MdxPage",name:"mongodb-reactive-streams-driver",route:"/spring-data-mongodb-reactive/mongodb-reactive-streams-driver"},{kind:"MdxPage",name:"mongodb-tools",route:"/spring-data-mongodb-reactive/mongodb-tools"},{kind:"MdxPage",name:"query-methods",route:"/spring-data-mongodb-reactive/query-methods"},{kind:"MdxPage",name:"reactive-mongo-operation",route:"/spring-data-mongodb-reactive/reactive-mongo-operation"},{kind:"MdxPage",name:"reactive-mongo-repository",route:"/spring-data-mongodb-reactive/reactive-mongo-repository"},{kind:"MdxPage",name:"reactive-mongo-template",route:"/spring-data-mongodb-reactive/reactive-mongo-template"},{kind:"MdxPage",name:"spring-data-object-mapping-and-creation",route:"/spring-data-mongodb-reactive/spring-data-object-mapping-and-creation"},{kind:"MdxPage",name:"transactional",route:"/spring-data-mongodb-reactive/transactional"},{kind:"Meta",data:{"mongodb-features":"MongoDB Features","mongodb-tools":"MongoDB 접근 도구들","mongodb-reactive-streams-driver":"MongoDB Reactive Streams Driver","mongo-collection-functions":"MongoCollection 의 다양한 연산들","document-bson-bson-codec":"Document, BSON, BSON Codec",entity:"Entity","spring-data-object-mapping-and-creation":"Spring Data Reactive 의 객채생성 방식과 매핑방식","reactive-mongo-template":"ReactiveMongoTemplate","reactive-mongo-operation":"ReactiveMongoOperation","reactive-mongo-repository":"ReactiveMongoRepository","query-methods":"Query 메서드",transactional:"@Transactional"}}]},{kind:"MdxPage",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive"},{kind:"Folder",name:"spring-data-r2dbc",route:"/spring-data-r2dbc",children:[{kind:"MdxPage",name:"mysql-features",route:"/spring-data-r2dbc/mysql-features"},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc/spring-data-r2dbc"},{kind:"Meta",data:{"mysql-features":"MySQL 특징","spring-data-r2dbc":"Spring Data R2DBC"}}]},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc"},{kind:"Folder",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive",children:[{kind:"MdxPage",name:"known-cache-strategies",route:"/spring-data-redis-reactive/known-cache-strategies"},{kind:"MdxPage",name:"redis-data-structures",route:"/spring-data-redis-reactive/redis-data-structures"},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive/spring-data-redis-reactive"},{kind:"Meta",data:{"redis-data-structures":"레디스 자료구조들","spring-data-redis-reactive":"Spring Data Redis Reactive","known-cache-strategies":"캐싱전략의 종류"}}]},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive"},{kind:"Meta",data:{index:"Introduction","spring-data-mongodb-reactive":"Spring Data MongoDB Reactive","spring-data-r2dbc":"Spring Data R2dbc","spring-data-redis-reactive":"Spring Data Redis Reactive",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Entity",headings:s},pageNextRoute:"/spring-data-mongodb-reactive/entity",nextraLayout:d.ZP,themeConfig:r.Z};n.default=(0,a.j)(c)},8426:function(e,n,t){"use strict";var i=t(5893);t(7294);let a={logo:(0,i.jsx)("span",{children:"Docs Spring Data Reactive"}),project:{link:"https://github.com/chagchagchag/docs-spring-data-reactive"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-data-reactive",footer:{text:"Nextra Docs Template"}};n.Z=a},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=4104)}),_N_E=e.O()}]);