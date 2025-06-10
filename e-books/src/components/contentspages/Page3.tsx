import { Typography, Radio } from "antd";
import que from "../../assets/content/pg3que.svg";
const { Title, Paragraph, Text } = Typography;

interface props {
  handleChange: (qid: string, value: string)=>void;
  questions: { id: number; text: string; options: { value: string; label: string; }[]; }[];
  answers: any;
  handleAnswer: (questionId: number, selectedValue: string) => void;
}
export const Page3 = ({
  handleChange,
  questions,
  answers,
  handleAnswer,
}: props) => {
  return (
    <div style={{ paddingLeft: 10 }}>
      <h4 className="pg3-h4">Part 1</h4>
      <h2 className="pg3-h2">
        <img src={que} />
        Questions 1 to 4
      </h2>
      <Paragraph className="pg3-p">
        Read the text carefully in each question. Choose the best answer A, B or
        C. For each question, mark the correct answer A, B or C.
      </Paragraph>
      <div className="pg3-main">
        <div className="pg3-fst">
          <div className="pg3-q1">
            <Paragraph className="pg3-p1">
              Deforestation is bad for the environment and mankind. Trees
              provide air for us and if they die, we lose air. However, forests
              are being cut down to make room for roads. It destroys natural
              habitats. <br />
            </Paragraph>
            <Text className="txt">#stopdeforestation</Text> <br />
            <Text className="txt">#savetheforests</Text>
          </div>
          <div className="pg3-q2">
            <Title className="pg3-text">Lost!!!</Title>
            <Paragraph className="pg3-p2">
              Our cat, a munchkin, who answers to the name “Cofy” has been
              missing from Taman Cempaka, where we stay since last Thursday!
              <br />
              She is about 18 months old and is easily frightened by dogs,
              teenage boys and cars.
              <br />
              <br />
              If you see her, please call: <br />
              <Text>011 123 4545</Text> <br />
              <br />
              We really miss her!
            </Paragraph>
          </div>
        </div>
        <div className="pg3-snd">
          {questions?.map((q: any, index: number) => (
            <div
              key={q.id}
              className="pg3-ans"
              style={{ marginTop: index > 0 ? 120 : 0 }}
            >
              <Paragraph className="pg3-pa">
                <Text strong>{q.id}. </Text> {q.text}
              </Paragraph>
              <Radio.Group
                value={answers[q.id]}
                className="pg3-radio"
                onChange={(e) => {
                  handleChange(q.id, e.target.value);
                  handleAnswer(q.id, e.target.value);
                }}
              >
                {" "}
                {q.options?.map((opt: any) => (
                  <Radio
                    key={opt.value}
                    className="pg3-radio"
                    value={opt.value}
                  >
                    {opt.value}. {opt.label}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
