(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[342],{2020:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spring-data-redis-reactive/redis-data-structures",function(){return i(3289)}])},3289:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return c}});var s=i(5893),r=i(2673),d=i(373),t=i(8426);i(9128);var a=i(2643);let c=[{depth:2,value:"레디스 자료구조들",id:"레디스-자료구조들"},{depth:2,value:"String 자료구조",id:"string-자료구조"},{depth:3,value:"e.g. set",id:"eg-set"},{depth:3,value:"e.g. get",id:"eg-get"},{depth:2,value:"List 자료구조",id:"list-자료구조"},{depth:3,value:"LRANGE",id:"lrange"},{depth:3,value:"LPUSH",id:"lpush"},{depth:3,value:"RPUSH",id:"rpush"},{depth:3,value:"LPOP",id:"lpop"},{depth:3,value:"RPOP",id:"rpop"},{depth:3,value:"LLEN",id:"llen"},{depth:3,value:"LPOS",id:"lpos"},{depth:2,value:"SET 자료구조",id:"set-자료구조"},{depth:3,value:"SMEMBERS",id:"smembers"},{depth:3,value:"SADD",id:"sadd"},{depth:3,value:"SISMEMBER",id:"sismember"},{depth:3,value:"SCARD",id:"scard"},{depth:3,value:"SREM",id:"srem"},{depth:2,value:"Sorted Set",id:"sorted-set"},{depth:3,value:"ZRANGE",id:"zrange"},{depth:3,value:"ZADD",id:"zadd"},{depth:3,value:"ZCARD",id:"zcard"},{depth:3,value:"ZPOPMIN",id:"zpopmin"},{depth:3,value:"ZPOPMAX",id:"zpopmax"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",ul:"ul",li:"li",p:"p",a:"a",code:"code",h3:"h3",pre:"pre",span:"span"},(0,a.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"레디스-자료구조들",children:"레디스 자료구조들"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"String"}),"\n",(0,s.jsx)(n.li,{children:"LIST"}),"\n",(0,s.jsx)(n.li,{children:"SET"}),"\n",(0,s.jsx)(n.li,{children:"Sorted Set"}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["SortedSet",(0,s.jsx)("br",{}),"\r\n정렬된 Set 자료구조입니다.",(0,s.jsx)("br",{}),"\r\n잘 알려진 MergeSort 나 개선된 QuickSort 등을 통해 내부적으로 정렬을 수행하는데 보통 O(Nlog(M)) 또는 O(log(N)) 이 소요되는 경우가 많습니다.",(0,s.jsx)("br",{}),"\r\n예를 들면, 주식 종목 검색이나 주식 종목 초성검색을 구현할 때 Sorted Set을 사용합니다.",(0,s.jsx)("br",{}),"\r\n혹시라도 주식 종목검색, 초성검색 예제가 궁금하다면 ",(0,s.jsx)(n.a,{href:"https://github.com/chagchagchag/stock-cells-kr",children:"여기"}),"를 참고하시면 될 것 같습니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["List, Set",(0,s.jsx)("br",{}),"\r\nList 의 LPUSH, LPOP, RPUSH, RPOP 을 적절하게 활용해서 작업 대기열을 구성할 수도 있습니다. 요청의 고유값을 식별하기 위해서는 Set 에 요청 ID 를 기록해두는 방식을 사용합니다.",(0,s.jsx)("br",{}),"\r\n최근 트렌드는 가급적 작업 대기열 등은 Kafka,Kafka Streams 또는 RabbitMQ를 사용하는 추세입니다. 하지만 팀내 인력상황, 마감기한 및 여러가지 운영 요소로 인해 큰 비용이 필요하지 않을 경우 간단하게 레디스 기반으로 작업 대기열을 구성하는 경우도 많습니다.",(0,s.jsx)("br",{}),"\r\n이 경우, Redis 서버가 다운될 경우 작업 대기열의 데이터들 모두 유실될 수 있다는 점에 착안해서 예외 처리등을 명확히 해둬야 합니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["String",(0,s.jsx)("br",{}),"\r\n특정 값을 저장하는 용도로 사용합니다. 단순 문자열을 저장할 수도 있겠지만 구분자(",(0,s.jsx)(n.code,{children:"DELIMITER"}),")를 기반으로 여러가지 요청 식별자를 조합해서 어떤 요청이 있었는지를 기반으로 조회가 가능하도록 저장하는 경우도 많습니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"string-자료구조",children:"String 자료구조"}),"\n",(0,s.jsxs)(n.p,{children:["단순한 문자열 데이터 형식",(0,s.jsx)("br",{}),"\r\n주요 연산으로는 set, get 이 있습니다.",(0,s.jsx)("br",{}),"\r\nset, get 은 시간복잡도가 각각 O(1) 입니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h3,{id:"eg-set",children:"e.g. set"}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",filename:"redis-cli",hasCopyCode:!0,children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"set"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"coupon:1"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Apple 50% Discount Event"'})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"OK"})})]})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"eg-get",children:"e.g. get"}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",filename:"redis-cli",hasCopyCode:!0,children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"get"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"coupon:1"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:'"Apple 50% Discount Event"'})})]})}),"\n",(0,s.jsxs)(n.p,{children:["이렇게 생성한 자료구조는 del 명령어로 삭제 가능합니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h2,{id:"list-자료구조",children:"List 자료구조"}),"\n",(0,s.jsxs)(n.p,{children:["리스트와 같은 선형자료 구조",(0,s.jsx)("br",{}),"\r\nLPUSH 로 리스트의 제일 왼쪽(head)에 데이터를 추가할 수도 있고 RPUSH 로 리스트의 제일 오른쪽(tail)에 데이터를 추가할 수 있습니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h3,{id:"lrange",children:"LRANGE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/lrange/",children:"redis.io/commands - LRANGE"})}),"\n",(0,s.jsx)(n.li,{children:"LIST 내의 지정된 범위에 해당하는 요소들을 반환합니다."}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(S+N) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:"S는 시작 Offset 의 Head/Tail 로부터의 거리 (distance)를 의미합니다."}),"\n",(0,s.jsx)(n.li,{children:"N은 지정된 Range 내에 속한 요소들의 개수를 의미합니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"LRANGE key start stop"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"lpush",children:"LPUSH"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/lpush/",children:"redis.io/commands - LPUSH"})}),"\n",(0,s.jsx)(n.li,{children:"리스트의 제일 왼쪽(head)에 데이터를 추가하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(1) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"LPUSH key element [element ...]"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"rpush",children:"RPUSH"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/rpush/",children:"redis.io/commands - RPUSH"})}),"\n",(0,s.jsx)(n.li,{children:"리스트의 제일 오른쪽(tail)에 데이터를 추가하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(1) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"RPUSH key element [element ...]"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"lpop",children:"LPOP"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/lpop/",children:"redis.io/commands - LPOP"})}),"\n",(0,s.jsx)(n.li,{children:"리스트의 첫 번째 요소(Head)를 지운 후 리턴하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(N) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"LPOP key [count]"})}),"\n",(0,s.jsxs)(n.li,{children:["리스트의 첫 번째로부터 몇 번째 요소를 지울지를 지정해서 지울 수도 있는데 이 경우 ",(0,s.jsx)(n.code,{children:"LPOP key 3"})," 과 같은 명령을 내리면 제일 처음 요소로부터 3개의 요소를 POP 하게 됩니다."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"rpop",children:"RPOP"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/rpop/",children:"redis.io/commands - RPOP"})}),"\n",(0,s.jsx)(n.li,{children:"리스트의 제일 마지막 요소(Tail)을 지운 후 리턴하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(N) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"RPOP key [count]"})}),"\n",(0,s.jsxs)(n.li,{children:["리스트의 마지막으로부터 몇 번째 요소를 지울지를 지정해서 지울 수도 있는데 이 경우 ",(0,s.jsx)(n.code,{children:"LPOP key 3"})," 과 같은 명령을 내리면 맨끝에서 3개의 요소를 POP 하게 됩니다."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"llen",children:"LLEN"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/llen/",children:"redis.io/commands - LLEN"})}),"\n",(0,s.jsx)(n.li,{children:"현재 리스트의 사이즈를 리턴합니다."}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(1) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"LLEN key"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"lpos",children:"LPOS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/lpos/",children:"redis.io/commands - LPOS"})}),"\n",(0,s.jsx)(n.li,{children:"리스트 내에서 일치하는 요소를 찾는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(N) 에 해당하는 연산입니다. 만약 MAXLEN 을 명시해서 호출하면 상수 시간 내에 수행됩니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"LPOS key element [RANK rank] [COUNT num-matches] [MAXLEN len]"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"set-자료구조",children:"SET 자료구조"}),"\n",(0,s.jsxs)(n.p,{children:["어느 언어에서든 제공되는 Set 개념에 해당하는 자료구조입니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h3,{id:"smembers",children:"SMEMBERS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/smembers/",children:"redis.io/commands - SMEMBERS"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 Set 에 저장된 모든 요소들을 반환합니다."]}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(N) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SMEMBERS key"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"sadd",children:"SADD"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/sadd/",children:"redis.io/commands - SADD"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 Set 에 요소를 추가합니다. 이때 요소 하나만 지정할 수도 있고 요소 여러개를 지정해서 여러개의 요소를 한번에 추가할 수 도 있습니다."]}),"\n",(0,s.jsx)(n.li,{children:"요소 하나를 추가할 때는 시간복잡도 O(1) 에 해당하는 연산입니다. 만약 요소 K 개를 하나의 명령어로 추가할 경우에는 O(K) 의 시간복잡도를 가집니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SADD key member [member ...]"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"sismember",children:"SISMEMBER"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/sismember/",children:"redis.io/commands - SISMEMBER"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 Set 에 ",(0,s.jsx)(n.code,{children:"member"})," 에 해당하는 요소가 존재하는지 검사합니다. 존재한다면 ",(0,s.jsx)(n.code,{children:"1"}),"을, 존재하지 않는다면 ",(0,s.jsx)(n.code,{children:"0"})," 을 리턴합니다."]}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(1) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SISMEMBER key member"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"scard",children:"SCARD"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/scard/",children:"redis.io/commands - SCARD"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 Set의 사이즈(Cardinality, 요소의 갯수)를 리턴합니다."]}),"\n",(0,s.jsx)(n.li,{children:"시간복잡도 O(1) 에 해당하는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SCARD key"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"srem",children:"SREM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/srem/",children:"redis.io/commands - SREM"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 Set 내에서 인자값으로 전달받은 ",(0,s.jsx)(n.code,{children:"member"}),"를 삭제하는 연산입니다. 지우고자 하는 요소가 여러개라면 지루려는 요소들을 모두 인자값으로 전달해주면 됩니다."]}),"\n",(0,s.jsx)(n.li,{children:"지워야하는 요소수가 K개일 경우 시간복잡도 O(K) 가 소요되는 연산입니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SREM key member [member ...]"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"sorted-set",children:"Sorted Set"}),"\n",(0,s.jsxs)(n.p,{children:["스코어를 기반으로 순서를 지정해서 정렬된 상태로 저장하는 문자열 컬렉션입니다.",(0,s.jsx)("br",{}),"\r\nSet 자료구조이므로 중복을 허용하지 않습니다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h3,{id:"zrange",children:"ZRANGE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/zrange/",children:"redis.io/commands - ZRANGE"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 SortedSet 에서 cli 에 명시한 Range 에 해당하는 요소들을 리턴하는 연산입니다."]}),"\n",(0,s.jsxs)(n.li,{children:["O(log(N)+M) 의 시간복잡도가 소요됩니다. ",(0,s.jsx)(n.code,{children:"N"})," 은 정렬된 집합의 요소 수를 의미하며, ",(0,s.jsx)(n.code,{children:"M"})," 은 반환된 요소 수를 의미합니다."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ZRANGE key start stop [BYSCORE | BYLEX] [REV] [LIMIT offset count] [WITHSCORES]"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"zadd",children:"ZADD"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/zadd/",children:"redis.io/commands - ZADD"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 SortedSet 에 score 와 함께 요소들을 저장합니다. score 를 기반으로 정렬되며, score가 같은 요소는 문자열 정렬을 통해 오름차순 정렬되어 저장됩니다."]}),"\n",(0,s.jsxs)(n.li,{children:["O(log(N)) 의 시간복잡도가 소요됩니다. ",(0,s.jsx)(n.code,{children:"N"})," 은 정렬된 집합의 요소 수를 의미합니다."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ZADD key [NX | XX] [GT | LT] [CH] [INCR] score member [score member ...]"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["e.g. ",(0,s.jsx)(n.code,{children:'redis> ZADD myzset 1 "one"'})]}),"\n",(0,s.jsxs)(n.li,{children:["e.g. ",(0,s.jsx)(n.code,{children:'redis> ZADD myzset 2 "two" 3 "three"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"zcard",children:"ZCARD"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/zcard/",children:"redis.io/commands - ZCARD"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 SortedSet 의 사이즈(Cardinality, 요소의 개수)를 리턴합니다."]}),"\n",(0,s.jsx)(n.li,{children:"O(1) 의 시간복잡도가 소요됩니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ZCARD key"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"zpopmin",children:"ZPOPMIN"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/zpopmin/",children:"redis.io/commands - ZPOPMIN"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 SortedSet 에서 ",(0,s.jsx)(n.code,{children:"score"})," 가 가장 낮은 순으로 요소들 제거한 후 제거한 요소들을 리턴합니다."]}),"\n",(0,s.jsx)(n.li,{children:"O(log(N)*M) 의 시간복잡도가 소요됩니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ZPOPMIN key [count]"})}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h3,{id:"zpopmax",children:"ZPOPMAX"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/commands/zpopmax/",children:"redis.io/commands - ZPOPMAX"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," 에 해당하는 SortedSet 에서 ",(0,s.jsx)(n.code,{children:"score"})," 가 가장 높은 요소들을 제거한 후 제거한 요소들을 리턴합니다."]}),"\n",(0,s.jsx)(n.li,{children:"O(log(N)*M) 의 시간복잡도가 소요됩니다."}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ZPOPMAX key [count]"})}),"\n"]}),"\n",(0,s.jsx)("br",{})]})}let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/spring-data-redis-reactive/redis-data-structures.mdx",route:"/spring-data-redis-reactive/redis-data-structures",timestamp:1711496294e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive",children:[{kind:"MdxPage",name:"document-bson-bson-codec",route:"/spring-data-mongodb-reactive/document-bson-bson-codec"},{kind:"MdxPage",name:"entity",route:"/spring-data-mongodb-reactive/entity"},{kind:"MdxPage",name:"mongo-collection-functions",route:"/spring-data-mongodb-reactive/mongo-collection-functions"},{kind:"MdxPage",name:"mongodb-features",route:"/spring-data-mongodb-reactive/mongodb-features"},{kind:"MdxPage",name:"mongodb-reactive-streams-driver",route:"/spring-data-mongodb-reactive/mongodb-reactive-streams-driver"},{kind:"MdxPage",name:"mongodb-tools",route:"/spring-data-mongodb-reactive/mongodb-tools"},{kind:"MdxPage",name:"reactive-mongo-operation",route:"/spring-data-mongodb-reactive/reactive-mongo-operation"},{kind:"MdxPage",name:"reactive-mongo-repository",route:"/spring-data-mongodb-reactive/reactive-mongo-repository"},{kind:"MdxPage",name:"reactive-mongo-template",route:"/spring-data-mongodb-reactive/reactive-mongo-template"},{kind:"MdxPage",name:"spring-data-object-mapping-and-creation",route:"/spring-data-mongodb-reactive/spring-data-object-mapping-and-creation"},{kind:"Meta",data:{"mongodb-features":"MongoDB Features","mongodb-tools":"MongoDB 접근 도구들","mongodb-reactive-streams-driver":"MongoDB Reactive Streams Driver","mongo-collection-functions":"MongoCollection 의 다양한 연산들","document-bson-bson-codec":"Document, BSON, BSON Codec",entity:"Entity","spring-data-object-mapping-and-creation":"Spring Data Reactive 의 객채생성 방식과 매핑방식","reactive-mongo-template":"ReactiveMongoTemplate","reactive-mongo-operation":"ReactiveMongoOperation","reactive-mongo-repository":"ReactiveMongoRepository"}}]},{kind:"MdxPage",name:"spring-data-mongodb-reactive",route:"/spring-data-mongodb-reactive"},{kind:"Folder",name:"spring-data-r2dbc",route:"/spring-data-r2dbc",children:[{kind:"MdxPage",name:"mysql-features",route:"/spring-data-r2dbc/mysql-features"},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc/spring-data-r2dbc"},{kind:"Meta",data:{"mysql-features":"MySQL 특징","spring-data-r2dbc":"Spring Data R2DBC"}}]},{kind:"MdxPage",name:"spring-data-r2dbc",route:"/spring-data-r2dbc"},{kind:"Folder",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive",children:[{kind:"MdxPage",name:"known-cache-strategies",route:"/spring-data-redis-reactive/known-cache-strategies"},{kind:"MdxPage",name:"redis-data-structures",route:"/spring-data-redis-reactive/redis-data-structures"},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive/spring-data-redis-reactive"},{kind:"Meta",data:{"redis-data-structures":"레디스 자료구조들","spring-data-redis-reactive":"Spring Data Redis Reactive","known-cache-strategies":"캐싱전략의 종류"}}]},{kind:"MdxPage",name:"spring-data-redis-reactive",route:"/spring-data-redis-reactive"},{kind:"Meta",data:{index:"Introduction","spring-data-mongodb-reactive":"Spring Data MongoDB Reactive","spring-data-r2dbc":"Spring Data R2dbc","spring-data-redis-reactive":"Spring Data Redis Reactive",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Redis Data Structures",headings:c},pageNextRoute:"/spring-data-redis-reactive/redis-data-structures",nextraLayout:d.ZP,themeConfig:t.Z};n.default=(0,r.j)(l)},8426:function(e,n,i){"use strict";var s=i(5893);i(7294);let r={logo:(0,s.jsx)("span",{children:"Docs Spring Data Reactive"}),project:{link:"https://github.com/chagchagchag/docs-spring-data-reactive"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-data-reactive",footer:{text:"Nextra Docs Template"}};n.Z=r},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=2020)}),_N_E=e.O()}]);