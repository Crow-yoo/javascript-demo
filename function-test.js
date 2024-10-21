// 1. 함수 선언문

function foo() {
    console.log('foo');
};

foo();

// 2. 함수 표현식

const foo = function () {
    console.log('foo2');
};

foo();

// 3. function 생성자 함수.

const foo = new Function("console.log('foo3')");

// 4. 화살표 함수 표현식.

const foo = () => {
    console.log('foo4');
};

foo();

/*-----------------------------*/

// 1. IIEF (즉시 실행 함수)

(function foo() {
    console.log('foo');
})();

// 2. 재귀 함수

function foo (arg) {
    if(arg === 3) return; // 탈출문, 안 그럴시 무한실행.
    console.log(arg)
    foo(arg + 1);
}

foo(1);

// 3. 중첩 함수

function foo(arg) {
    function bar() {
        console.log(arg);
    }
    bar();
}

foo(1);

// 4. 콜백 함수

function foo(arg) {
    arg();
}

foo(() => {
    console.log(1);
});
