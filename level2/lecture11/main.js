document.querySelector('.navbar-toggler').addEventListener('click', function () {
            document.querySelector('.list-group').classList.toggle('show');
        })

        $('#login').on('click', function () {
            $('.black-bg').addClass('show-modal')
        })
        $('.btn-danger').on('click', function () {
            $('.black-bg').removeClass('show-modal')
        })

        $('form').on('submit', function (e) {
            var 아이디값 = document.getElementById('email').value;
            var 비번값 = document.getElementById('password').value;

            if (아이디값 == '') {
                alert('아이디를 입력하세요.');
                e.preventDefault();
            }
            else if (/\S+@\S+.\S+/.test(아이디값) == false) {
                alert('이메일 형식이 아닙니다.')
                e.preventDefault();
            }
            else if (비번값 == '') {
                alert('비밀번호를 입력하세요.');
                e.preventDefault();
            }
            else if (비번값.length < 6) {
                alert('비밀번호는 6자 이상이어야 합니다.');
                e.preventDefault();
            }
            //과제 - 폼 전송 시 유저가 입력한 비번에 영어 대문자가 적어도 1개 있는지 검사 없으면 alert()띄우기
            else if (/[A-Z]/.test(비번값) == false) {
                alert('대문자가 적어도 1개 들어가야 합니다.')
                e.preventDefault()
            }
        });


        var countn = 0;
        $('.badge').on('click', function () {
            countn = countn + 1;
            console.log(countn);
            if (countn % 2 == 1) {
                $('.badge').html('Light Mode');
                $('body').addClass('dark');
            } else {
                $('.badge').html('Dark mode');
                $('body').removeClass('dark');
            }
        });

        