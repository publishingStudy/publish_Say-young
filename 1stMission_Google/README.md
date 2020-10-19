## 🔥1주차🔥 구글 홈 화면 제작

#### (1) 상단 네비게이션 바
    ```
    <div class="nav_bar">
        <div class = "nav_menu">
            <a href="https://mail.google.com">Gmail</a>
        </div>

        <div class = "nav_menu">
            <a href="https://www.google.co.kr/imghp?hl=ko&tab=wi&ogbl">이미지</a>
        </div>

        <div class = "nav_Icon"></div>
        <input id = "login" type="submit" value="로그인" onclick="location.href= 'https://accounts.google.com'">
    </div>
    ```

1. 메뉴 아이콘에 2개의 이미지를 활용해 마우스를 올리면 더 짙은 색의 이미지가 보이도록 함.
> 이미지 말고 svg 활용하는 방법도 시도해보자.


</br>

#### (2) 로고, 검색창, 하단 버튼
    ```
    <div class = "google">
        <div>
            <img id = "logo" src ="logo.png">
        </div>
            
        <div>
            <input id="input" type="text">
        </div>

        <div class = "box">
            <input id="button" type="submit" value="Google 검색">
            <input id="button" type="submit" value="I'm Feeling Lucky">
        </div>
    </div>
    ```

1. logo 이미지로 넣음. 글씨로 직접 span 처리하는 것도 시도해볼 것.
2. 검색창 안에 아이콘 삽입 해보기(아까 들었는데 아이콘이랑 검색 영역 안 겹치게 하려면 padding을 주면 된다더라!)
3. 하단 버튼 눌렀을 때 테두리 진해지는 것 완성해보기
4. 반응형(?) 세로 중앙 정렬 align-items:center가 지금 안 먹힘. 피드백 받고 다시 적용해보기.