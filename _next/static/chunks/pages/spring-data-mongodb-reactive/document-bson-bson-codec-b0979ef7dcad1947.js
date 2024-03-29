(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6973:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spring-data-mongodb-reactive/document-bson-bson-codec",function(){return s(4686)}])},4686:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return l}});var i=s(5893),o=s(2673),r=s(373),c=s(8426);s(9128);var d=s(2643);let l=[{depth:2,value:"Document, BSON, BSON Codec",id:"document-bson-bson-codec"},{depth:2,value:"참고자료",id:"참고자료"},{depth:2,value:"Document",id:"document"},{depth:2,value:"BSON",id:"bson"},{depth:2,value:"BSON Codec",id:"bson-codec"},{depth:3,value:"MongoClientSettings.DEFAULT_CODEC_REGISTRY",id:"mongoclientsettingsdefault_codec_registry"},{depth:4,value:"Java 타입 코덱 프로바이더",id:"java-타입-코덱-프로바이더"},{depth:4,value:"BSON 타입 코덱 프로바이더",id:"bson-타입-코덱-프로바이더"},{depth:2,value:"예제",id:"예제"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",p:"p",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",code:"code",pre:"pre",span:"span",h4:"h4"},(0,d.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"document-bson-bson-codec",children:"Document, BSON, BSON Codec"}),"\n",(0,i.jsx)(n.h2,{id:"참고자료",children:"참고자료"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/bson-types/",children:"MongoDB Docs - BSON Types"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"mongodb.github.io/mongo-java-driver"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mongodb.github.io/mongo-java-driver/5.0/apidocs/bson/org/bson/codecs/configuration/CodecProvider.html",children:"CodecProvider"})}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"document",children:"Document"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"bson",children:"BSON"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["참고 : ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/bson-types/",children:"MongoDB Docs - BSON Types"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["아래 내용은 ",(0,i.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/reference/bson-types/",children:"MongoDB Docs - BSON Types"})," 의 내용 중 Java 자료형과, Bson 라이브러리에 존재하는 타입들에 대해서만 정리한 내용입니다. (DBPointer, Undefined 등의 타입들은 제외했습니다.)"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"BSON Type"}),(0,i.jsx)(n.th,{children:"Number"}),(0,i.jsx)(n.th,{children:"Java Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Double"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Double, Float"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Character, String, Enum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Binary Data"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"Binary (bson 라이브러리 지원 타입), byte[]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ObjectId"}),(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"ObjectId (bson 라이브러리 지원 타입)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"Boolean, AtomicBoolean"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"Date, Instant, LocalDate, LocalDateTime, LocalTime"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Null"}),(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Regular Expression"}),(0,i.jsx)(n.td,{children:"11"}),(0,i.jsx)(n.td,{children:"Pattern"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"JavaScript"}),(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"Code (bson 라이브러리 지원 타입)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"32-bit integer"}),(0,i.jsx)(n.td,{children:"16"}),(0,i.jsx)(n.td,{children:"Integer, Byte, Short, AtomicInteger"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Timestamp"}),(0,i.jsx)(n.td,{children:"17"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"64-bit integer"}),(0,i.jsx)(n.td,{children:"18"}),(0,i.jsx)(n.td,{children:"Long, AtomicLong"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Decimal128"}),(0,i.jsx)(n.td,{children:"19"}),(0,i.jsx)(n.td,{children:"Decimal128 (bson 라이브러리 지원 타입), BigDecimal"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Min Key"}),(0,i.jsx)(n.td,{children:"-1"}),(0,i.jsx)(n.td,{children:"MinKey (bson 라이브러리 지원 타입)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Max Key"}),(0,i.jsx)(n.td,{children:"127"}),(0,i.jsx)(n.td,{children:"MaxKey (bson 라이브러리 지원 타입)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"bson-codec",children:"BSON Codec"}),"\n",(0,i.jsx)(n.h3,{id:"mongoclientsettingsdefault_codec_registry",children:"MongoClientSettings.DEFAULT_CODEC_REGISTRY"}),"\n",(0,i.jsxs)(n.p,{children:["MongoClientSettings 클래스 내에서는 기본적으로 많이 사용되는 Codec 들의 Registry 를 CodecRegistry 타입의 ",(0,i.jsx)(n.code,{children:"DEFAULT_CODEC_REGISTRY"})," 라는 필드를 통해 제공합니다."]}),"\n",(0,i.jsx)(n.p,{children:"Java 타입 관련 코덱 프로바이더들"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ValueCodecProvider, IterableCodecProvider, MapCodecProvider, Jsr310CodecProvider, JsonObjectCodecProvider, JsonObjectCodecProvider, EnumCodecProvider, Jep395RecordCodecProvider, KotlinCodecProvider, CollectionCodecProvider"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Bson 타입관련 코덱 프로바이더들"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DBRefCodecProvider,  DBObjectCodecProvider, DocumentCodecProvider, CollectionCodecProvider, GeoJsonCodecProvider, GridFSFileCodecProvider, BsonCodecProvider, ExpressionCodecProvider"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{"data-language":"java","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"java","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"Immutable"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"public"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"final"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"MongoClientSettings"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"private"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"static"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"final"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"CodecRegistry"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" DEFAULT_CODEC_REGISTRY "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"fromProviders(asList("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" ValueCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" BsonValueCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" DBRefCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" DBObjectCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" DocumentCodecProvider("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" DocumentToDBRefTransformer())"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" CollectionCodecProvider("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" DocumentToDBRefTransformer())"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" IterableCodecProvider("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" DocumentToDBRefTransformer())"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" MapCodecProvider("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" DocumentToDBRefTransformer())"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" GeoJsonCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" GridFSFileCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" Jsr310CodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" JsonObjectCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" BsonCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" EnumCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" ExpressionCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" Jep395RecordCodecProvider()"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"                    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:" KotlinCodecProvider()))"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"원래는 위의 코드에 List 내에 대입되는 Provider 객체들을 코드에서 선언한 순서대로 설명을 작성하려 했지만, Java 타입과 BSON 타입 설명이 섞이기 시작하면서 어지러워보여서 Java 타입 프로바이더와 BSON 타입 코덱 프로바이더를 따로 나눠서 정리합니다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h4,{id:"java-타입-코덱-프로바이더",children:"Java 타입 코덱 프로바이더"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ValueCodecProvider (Java)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Java 타입으로 encode/decode 를 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Java 에서 제공하는 클래스"}),"\n",(0,i.jsx)(n.li,{children:"encode : Java 에 존재하는 타입 → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["IterableCodecProvider (Java)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Iterable 타입으로 encode/decode 를 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → List"}),"\n",(0,i.jsx)(n.li,{children:"encode : List → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["MapCodecProvider (Java)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Map 타입으로 encode/decode 를 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Map"}),"\n",(0,i.jsx)(n.li,{children:"encode : Map → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Jsr310CodecProvider (Java)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Java 의 Instant, LocalDate, LocalDateTime 등 Date, Time 등의 시간 관련 타입들을 encode/decode 하기 위한 Codec 객체에 대한 프로바이더 입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → LocalDate, LocalDateTime"}),"\n",(0,i.jsx)(n.li,{children:"encode : LocalDate, LocalDateTime → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EnumCodecProvider (Java)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enum 타입으로 encode/decode 를 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Enum"}),"\n",(0,i.jsx)(n.li,{children:"encode : Enum → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Jep395RecordCodecProvider : (Java)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Java 의 Record 타입으로 encode/decode 를 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Record"}),"\n",(0,i.jsx)(n.li,{children:"encode : Record → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["KotlinCodecProvider : (Java, Kotlin)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kotlin 타입으로 encode/decode 를 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Kotlin"}),"\n",(0,i.jsx)(n.li,{children:"encode : Kotlin → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["CollectionCodecProvider","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Java 의 Collection 인터페이스 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"CollectionCodecProvider 는 interface 이기에, Java 의 Collection 타입 중 Map, Iterable 에 해당하는 것이 없는 등의 경우에 Collection 구현체 → BSON, BSON → Collection 구현체로 변환하는 코드를 직접 작성해야 할 때 사용합니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Collection 타입 (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : Collection 타입 (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h4,{id:"bson-타입-코덱-프로바이더",children:"BSON 타입 코덱 프로바이더"}),"\n",(0,i.jsx)(n.p,{children:"주로 mongodb-driver 에서 구현해둔 프로바이더 들입니다. 드라이버 계층에서 mongodb 에서 가져온 bson 데이터를 BSON 라이브러리에서 지원하는 BSON 타입으로 변환하는데에 사용됩니다. 응용 계층 프로그래머가 직접 접근할 일은 드뭅니다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JsonObjectCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 JsonObject 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → JsonObject (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : JsonObject (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DBRefCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 DBRef 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → DBRef (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : DBRef (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DBObjectCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 DBObject 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → DBObject (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : DBObject (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DocumentCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 Document 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Document (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : Document (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"GeoJsonCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 GeoJson 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → GeoJson (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : GeoJson (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"GridFSFileCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 GridFSFile 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → GridFSFile (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : GridFSFile (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"BsonCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 Bson 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Bson (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : Bson (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ExpressionCodecProvider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BSON 라이브러리 내의 Expression 타입으로 encode/decode 하기 위한 Codec 객체에 대한 프로바이더입니다."}),"\n",(0,i.jsx)(n.li,{children:"decode : BSON 데이터 → Expression (BSON 라이브러리 내의 타입)"}),"\n",(0,i.jsx)(n.li,{children:"encode : Expression (BSON 라이브러리 내의 타입) → BSON 데이터"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"예제",children:"예제"})]})}let t={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/spring-data-mongodb-reactive/document-bson-bson-codec.mdx",route:"/spring-data-mongodb-reactive/document-bson-bson-codec",timestamp:1711673036e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive",children:[{kind:"MdxPage",name:"document-bson-bson-codec",route:"/spring-data-mongodb-reactive/document-bson-bson-codec"},{kind:"MdxPage",name:"mongo-collection-functions",route:"/spring-data-mongodb-reactive/mongo-collection-functions"},{kind:"MdxPage",name:"mongodb-features",route:"/spring-data-mongodb-reactive/mongodb-features"},{kind:"MdxPage",name:"mongodb-reactive-streams-driver",route:"/spring-data-mongodb-reactive/mongodb-reactive-streams-driver"},{kind:"MdxPage",name:"mongodb-tools",route:"/spring-data-mongodb-reactive/mongodb-tools"},{kind:"MdxPage",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive/spring-data-mongodb-reactive"},{kind:"Meta",data:{"mongodb-features":"MongoDB Features","mongodb-tools":"MongoDB 접근 도구들","mongodb-reactive-streams-driver":"MongoDB Reactive Streams Driver","mongo-collection-functions":"MongoCollection 의 다양한 연산들","document-bson-bson-codec":"Document, BSON, BSON Codec","spring-data-mongodb-reactive":"Spring Data MongoDB Reactive"}}]},{kind:"MdxPage",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive"},{kind:"Folder",name:"spring-data-r2dbc",route:"/spring-data-r2dbc",children:[{kind:"MdxPage",name:"mysql-features",route:"/spring-data-r2dbc/mysql-features"},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc/spring-data-r2dbc"},{kind:"Meta",data:{"mysql-features":"MySQL 특징","spring-data-r2dbc":"Spring Data R2DBC"}}]},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc"},{kind:"Folder",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive",children:[{kind:"MdxPage",name:"known-cache-strategies",route:"/spring-data-redis-reactive/known-cache-strategies"},{kind:"MdxPage",name:"redis-data-structures",route:"/spring-data-redis-reactive/redis-data-structures"},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive/spring-data-redis-reactive"},{kind:"Meta",data:{"redis-data-structures":"레디스 자료구조들","spring-data-redis-reactive":"Spring Data Redis Reactive","known-cache-strategies":"캐싱전략의 종류"}}]},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive"},{kind:"Meta",data:{index:"Introduction","spring-data-mongodb-reactive":"Spring Data MongoDB Reactive","spring-data-r2dbc":"Spring Data R2dbc","spring-data-redis-reactive":"Spring Data Redis Reactive",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Document Bson Bson Codec",headings:l},pageNextRoute:"/spring-data-mongodb-reactive/document-bson-bson-codec",nextraLayout:r.ZP,themeConfig:c.Z};n.default=(0,o.j)(t)},8426:function(e,n,s){"use strict";var i=s(5893);s(7294);let o={logo:(0,i.jsx)("span",{children:"Docs Spring Data Reactive"}),project:{link:"https://github.com/chagchagchag/docs-spring-data-reactive"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-data-reactive",footer:{text:"Nextra Docs Template"}};n.Z=o},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=6973)}),_N_E=e.O()}]);