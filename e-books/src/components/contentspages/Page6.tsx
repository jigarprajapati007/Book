import { Typography } from "antd";
import que from "../../assets/content/pg3que.svg";
import { useEffect, useState } from "react";
import { Select } from "antd";
const { Paragraph } = Typography;
export const Page6 = (props: any) => {
  const [in13, setIn13] = useState("");
  const [in131, setIn131] = useState("");
  const [in132, setIn132] = useState("");
  const [in133, setIn133] = useState("");

  useEffect(() => {
    if (props?.currentPage < 5 || props.currentPage > 5) {
      if (in131) {
        props?.handleAnswer(13, in131);
      }
      if (in13) {
        props?.handleAnswer(14, in13);
      }
      if (in132) {
        props?.handleAnswer(15, in132);
      }
      if (in133) {
        props?.handleAnswer(16, in133);
      }
    }
  }, [props?.currentPage]);

 
  return (
    <div>
      <h4 className="pg3-h4" style={{ margin: 0 }}>
        Part 3
      </h4>
      <h2 className="pg3-h2">
        <img src={que} />
        Questions 13 to 16
      </h2>
      <Paragraph className="pg3-p">
        Here are the short interviews with the teens about shopping. Read the
        text below and answer the questions that follow.
      </Paragraph>
      <h2 className="pg6-h1">Teens on Shopping</h2>
      <div className="pg6-teen">
        <div className="pg6-a">
          <h3>A - Ameer, 16 years old</h3>
          <p>
            If you love barbecue ribs, head to Charlie's Grill Restaurant. It's
            perfect for dining with friends, colleagues, or family. Senior
            citizens enjoy a 30% off the price. They offer set lunch or buffet
            dinner six days a week.
          </p>
        </div>
        <hr />
        <div className="pg6-b">
          <h3>B - Celine, 14 years old</h3>
          <p>
            Craving traditional food? Visit International Restaurant,
            specialising in Malaysian, Nyonya, and Indonesian dishes. You can
            choose from à la carte or set lunch and dinner options.
          </p>
        </div>
        <hr />
        <div className="pg6-c">
          <h3>C - Jenny, 17 years old</h3>
          <p>
            Looking for a cosy and private dining experience? Hanoi Restaurant
            is the ideal choice for you and your loved ones. Enjoy their
            signature Phò noodles and Bánh Mi, a Vietnamese sandwich that is
            simply delicious.
          </p>
        </div>
      </div>
      <h3 className="pg6-text">
        Which paragraph <strong>(A - C)</strong> describes the following
        statements on what teenagers think about shopping. Mark your answers on
        the separate answer sheet.
      </h3>
      <div className="pg6-container">
        <div className="pg6-head">
          <h4>Statement</h4>
          <h3>Paragraph</h3>
        </div>

        <div className="pg6-row" id={props?.inutId}>
          <div className="pg6-statement">
            13. I rely on my family to help me avoid impulse buying.
          </div>

          <input
            className="pg6-paragraph-input"
            value={in131}
            onChange={(e) => setIn131(e.target.value)}
          />
        </div>
        <div className="pg6-row">
          <div className="pg6-statement">
            14. I would choose hiking over shopping if given the choice.
          </div>
          <input
            className="pg6-paragraph-input"
            value={in13}
            onChange={(e) => setIn13(e.target.value)}
          />
          {/* <Select
            showSearch
            open={false}
            className="pg6-paragraph-input"
            optionFilterProp="label"
            value={in13}
            searchValue={in13}
            onSearch={(c) => setIn13(c)}
            onClick={() => setIn13("")}
            suffixIcon={false}
          /> */}
        </div>
        <div className="pg6-row">
          <div className="pg6-statement">
            15. I believe nothing beats the physical shopping experience.
          </div>
           <input
            className="pg6-paragraph-input"
            value={in132}
            onChange={(e)=>setIn132(e.target.value)}
          />
          {/* <Select
            showSearch
            open={false}
            className="pg6-paragraph-input"
            optionFilterProp="label"
            value={in132}
            searchValue={in132}
            onSearch={(c) => setIn132(c)}
            onClick={() => setIn132("")}
            suffixIcon={false}
          /> */}
        </div>
        <div className="pg6-row">
          <div className="pg6-statement">
            16. I find that shopping is similar to doing housework.
          </div>
           <input
            className="pg6-paragraph-input"
            value={in133}
            onChange={(e)=>setIn133(e.target.value)}
          />
          {/* <Select
            showSearch
            open={false}
            className="pg6-paragraph-input"
            optionFilterProp="label"
            value={in133}
            searchValue={in133}
            onSearch={(c) => setIn133(c)}
            onClick={() => setIn133("")}
            suffixIcon={false}
          /> */}
        </div>
      </div>
    </div>
  );
};
