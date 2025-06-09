import { Typography, Radio } from "antd";
const { Title, Paragraph, Text } = Typography;

export const Page8 = (props:any) => {
  return (
    <div>
         <div className="">
          {props?.questions?.map((q: any, index: number) => (
            <div
              key={q.id}
              
              style={{ marginTop:10 }}
            >
              <Paragraph className="pg3-pa">
                <Text strong>{q.id}. </Text> {q.text}
              </Paragraph>
              <Radio.Group
                value={props?.answers[q.id]}
                className="pg8-rdio"
                onChange={(e) => {
                  props?.handleChange(q.id, e.target.value);
                  props?.handleAnswer(q.id, e.target.value);
                }}
              >
                {" "}
                {q.options?.map((opt: any) => (
                  <Radio
                    key={opt.value}
                    className="pg3-radio"
                    style={{marginBottom:10}}
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
  )
}
