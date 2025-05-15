import "./App.css"; 

export default function App() { //React 컴포넌트를 내보내는 코드  
  return (
    <div>
      <header className="header">
        <h1>슬기로운 멋사생활</h1>
        <p>한슬기 프로필</p>
      </header>
       
    <nav className="nav">
        <ul>
            <li><a href="#about">자기소개</a></li>
            <li><a href="#features">관심사</a></li>
            <li><a href="#contact">연락하기</a></li>
            <li><a href="https://skulikelion.com" target="_blank">멋사 사이트 바로가기</a></li>
        </ul>
    </nav>

    <main className="main">
        <section id="about" className="section">
            <h2>자기소개</h2>
            <p>안녕하세요. 만나서 반갑습니다 ^~^</p>
            <p>저는 미래융합학부1에 재학중인 25학번 한슬기입니다.</p>
            <p>함께 즐거운 동아리 생활 보내봐요!</p>
            <img className="img1" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMDlfMjYy%2FMDAxNzMzNzIyNzgyMTky.L5-limQHy33dmJljwc92uxcRyplDQne-F3utQzNqQpcg.vZLlps2xW_7r0smtPdlHcsnXv9swLePPyZcZyetWaq4g.JPEG%2FIMG_2816.JPG&type=sc960_832" alt="hello_image">
            </img>
        </section>

        <section id="features" className="section">
            <h2>관심사</h2>
            
            <h3>취미</h3>
            <ul>
                <li>드라마, 영화 보기</li>
                <li>소설책 읽기</li>
                <li>수영</li>
            </ul>
            <img className="img2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjFfMjE2%2FMDAxNjIxNTcyODgxNzQ4.Ielxn5BEEtP1AN7-NpEYAE0aFXQSbTcCTGCrMyvWyJEg.HdWJpaXF1sFVwOW5wPgALnTooLaAR609ta9b10dygYAg.JPEG.xoxo_0717%2FIMG_4155.JPG&type=sc960_832" alt="book_image">
            </img>

            <h4>좋아하는 음식 순위</h4>
            <ol>
                <li>떡볶이</li>
                <li>마라탕</li>
                <li>삼겹살</li>
            </ol>
            <img className="img3" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODEwMjVfODIg%2FMDAxNTQwNDMzMjU0Mjk3.3yVdZ6Td8NkbzHq-CS2b6GZI0vYBvN4QiZ4F544t0Osg.cDkyKs3BjQ8zCNqieBmhGu8Nzs7IvcNUGJxnFinPHJgg.JPEG.tllros2ss%2FKakaoTalk_20181023_184601536.jpg&type=sc960_832" alt="food_image">
            </img>
        </section>

        <section id="contact" className="section">
            <h2>연락하기</h2>
            <p>이메일: chiaki2c@skuniv.ac.kr</p>
            <p>전화번호: 010-7358-4092</p>
        </section>
    </main>

    <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
    </footer>
  </div>
  );
}
