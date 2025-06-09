import { Modal, Radio, Typography } from "antd";
import que from "../../assets/content/pg3que.svg";
const { Paragraph } = Typography;
export const Page5 = (props: any) => {
  return (
    <div className="pg5-con" style={{height:707,overflow:'auto'}}>
      <h4 className="pg3-h4" style={{margin:0}}>Part 2</h4>
      <h2 className="pg3-h2">
        <img src={que} />
        Questions 5 to 12
      </h2>
      <Paragraph className="pg3-p">
        Read the passage carefully and choose the best answer A, B, C, or D to
        fill each blank. For each question, mark your answer on the answer
        sheet.
      </Paragraph>
      <h1 className="pg5-h1">Are Reusable Bags Good for the Environment?</h1>
      {props?.que?.map((item: any, index: number) => {
        return (
          <p className="pg5-p" key={index} style={{marginTop:index==4||index==6?20:0}}>
            <span >{item.text1}</span> <strong>({item.ques})</strong>
            <div
              className="pg5-sp"
              onClick={() => props?.handleBlankClick(item.ques)}
            >
              <input
                type="text"
                style={props?.answers[item.ques]?{
                  background: "#f3fdfc",
                  borderRadius: "4px",
                  border: "1px solid #08d0c2",
                  height: 20,
                  padding: 10,
                  marginBottom: 5,
                }:{textAlign:'center'}}
                value={props?.answers[item.ques]}
                className="pg5-in"
              />
            </div>
            {item.text2}
          </p>
        );
      })}
      <Modal
        title={
          <div className="pg5-dm">
            <p className="pg5-pm">Select Your Answer</p>
            <h4 className="pg5-hm">Question {props?.activeBlank}</h4>
          </div>
        }
        open={props?.visible}
        onCancel={props?.handleCancel}
        footer={false}
        closable={false}
        className="option-model"
        okButtonProps={{ disabled: !props?.selectedOption }}
      >
        <Radio.Group
          onChange={(e) => {
            props?.setSelectedOption(e.target.value);
            props?.handleOk(e.target.value);
            props?.handleAnswer(props.activeBlank, e.target.value);
          }}
          value={props?.selectedOption}
          className="pg5-radio-gp"
        >
          {props?.activeBlank &&
            props?.data[props?.activeBlank].options.map(
              (opt: any, index: number) => (
                <Radio key={index} value={opt} className="pg5-rdio">
                  {String.fromCharCode(65 + index)}. {opt}
                </Radio>
              )
            )}
        </Radio.Group>
      </Modal>
    </div>
  );
};
