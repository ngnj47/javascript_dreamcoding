// 문자열 타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

//특수 문자 출력하는 법
string = '"안녕!"';
console.log(string);
string = "'안녕!'";
console.log(string);

string = '안녕!\n엘리야!\t\t내 이름은\\\u09AC';
console.log(string);

/**
 * \n 엔터
 * \t 탭
 * \u 유니코드
 * 이스케이프 표현(특수문자 입력할 수 있는 모드로 진입)
 */

//템플릿 리터럴 (Template Literal) ``백팃 : 변수, 계산식 등 중간에 섞거나 띄어쓰기 등 자유자재로 쓰면서 긴 장문장을 표현할 때 편하게 쓸 수 있음
let id = '서윤';
let greetings = "'안녕!, " + id + "🖐\n즐거운 하루 보내요!'";
console.log(greetings);

greetins = `'안녕!, ${id}🖐
 즐거운 하루 보내요!`;
console.log(greetings);

//${} 변수 또는 표현식도 충분히 넣을 수 있음
//MDN String https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
