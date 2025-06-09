import logo from "../../assets/content/pageLogo.svg";
export const Page1 = () => {
  return (
    <div>
      <h4 className="frm-h4">Form 5</h4>
      <h1 className="ass-h1">English Assessment</h1>
      <h3 className="powerd">Powered by</h3>
      <img className="pg1-logo" src={logo} alt="" />
      <div className="inst">
        <h4>Instructions</h4>
        <div className="inst-part">
          <div className="fst">
            <p>
              1. Kertas soalan ini mengandungi lima bahagian: Part 1, Part 2,
              Part 3, Part 4 dan Part 5.
            </p>
            <p>2. Jawab semua soalan.</p>
            <p>
              3. Jawab setiap soalan dengan menghitamkan ruang yang betul untuk
              soalan 1 sehingga 36 dan menulis jawapan untuk soalan 37 sehingga
              40 di halaman 14.
            </p>
          </div>
          <div className="snd">
            <p>
              1. This question paper consists of five sections: Part 1, Part 2,
              Part 3, Part 4 and Part 5.
            </p>
            <p>2. Answer all questions</p>
            <p>
              3. Answer each question by blackening the correct space for
              questions 1 until 36 and writing the answers for questions 37
              until 40 on
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
