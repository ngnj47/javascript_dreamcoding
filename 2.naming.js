// 주석을 달면 됨
/** 주석이 됨
 * 다음줄로 자동으로 넘어감
 */

/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z,), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) 두번째 단어 대문자
 * 한국어 X
 * 예약어 X(키워드)
 * 숫자로 시작 X
 * 특수문자 X (_, $ 두가지는 예외)
 * 이모지 X
 * 여러개의 변수를 1, 2, 3 숫자로 구분X -> 최대한 의미있게, 구체적으로
 */

let apple;
let redApple;

//나쁜 예제
let number = 20;

//좋은 예제
let myAge = 20;

//나쁜 예제
let audio1;
let audio2;

//좋은 예제(구체적 변수 기재)
let backgroundAudio;
let windAudio;

//꿀팁 ! (그룹핑을 해놓으면 좋음)
let audioBackground;
let audioWind;

audioBackground;

//MDN 좋은 변수 나쁜 변수 참고 but, 1,2 는 제외
