import { Typography, Radio } from "antd";
const { Title, Paragraph, Text } = Typography;
interface props {
  handleChange: any;
  questions: any;
  answers: any;
  handleAnswer:any;
}
export const Page4 = ({ handleChange, questions, answers, handleAnswer }: props) => {
  return (
    <div className="pg4">
      <div className="pg3-main">
        <div className="pg3-fst">
          <div className="pg3-q1">
            <h2 className="pg4-h">BODY SHAMING IS A CRIME</h2>
            <p className="pg4-p">The effects include:</p>
            <div className="pg4-list">
            <li>stress and emotional conflict</li>
            <li> loss of self-confidence</li>
            <li>depression </li>
            <li>unhealthy eating habits </li>
            <li>unhealthy eating habits</li>
            </div>
          </div>
          <div className="pg3-q2">
            <Title className="pg4-text">Video Games Are Good For You</Title>
            <Paragraph className="pg4-p2">
             Recently, researchers have found that playing video games can help improve both our body and mind. It increases a variety of brain functions, including decisionmaking. People who play action-based games make decisions 25 per cent faster than others. There is also evidence that playing games can help with psychological problems by reducing symptoms of depression more than traditional treatment
            </Paragraph>
          </div>
        </div>
        <div className="pg3-snd">
          {questions?.map((q: any, index: number) => (
            <div
              key={q.id}
              className="pg3-ans"
              style={{ marginTop: index > 0 ? 10 : 0 }}
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
                    className="pg4-radio"
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
