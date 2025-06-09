import { Button, Table } from "antd";
import cir from "../../assets/content/pg9circle.svg";
export const Page9 = (props: any) => {
  const dataSource = [
    {
      key: "1",
      q: "1",
      scr: "1",
      fq: "6",
      fscr: "1 ",
    },
    {
      key: "2",
      q: "2",
      scr: "1",
      fq: "7",
      fscr: "1",
    },
    {
      key: "3",
      q: "3",
      scr: "1",
      fq: "8",
      fscr: "0",
    },
    {
      key: "4",
      q: "4",
      scr: "1",
      fq: "9",
      fscr: "0",
    },
    {
      key: "5",
      q: "5",
      scr: "1",
      fq: "10",
      fscr: "0",
    },
  ];

  const columns = [
    {
      title: "Question",
      dataIndex: "q",
      key: "q",
      align: "center",
    },
    {
      title: "Score",
      dataIndex: "scr",
      key: "scr",
      align: "center",
    },
    {
      title: "Question",
      dataIndex: "fq",
      key: "fq",
      align: "center",
    },
    {
      title: "Score",
      dataIndex: "fscr",
      key: "fscr",
      align: "center",
    },
  ];
  return (
    <div>
      <div className="pg2">
        <h4 className="pg9-h4">Your Score</h4>
        <div className="pg2-fst">
          <img src={cir} alt="" />
          <p style={{ marginTop: -11 }}>
            <span className="out-pg9">{props?.attemptedCount}</span>
            <span className="main-pg9">/{props?.allQuestions?.length}</span>
          </p>
        </div>
      </div>
      <hr className="hr-ft" />
      <div className="pg9-dv">
        <h2 className="pg9-h">Answered - {props?.attemptedCount}</h2>
        <h2 className="pg9-h">
          Not Attempted - {props?.allQuestions?.length - props?.attemptedCount}
        </h2>
        <h2 className="pg9-h">Time taken - 4:50 Min</h2>
      </div>
      <hr className="hr-ft" style={{ marginTop: 10 }} />
      <div>
        <Table
          className="custom-tablep99"
          pagination={false}
          dataSource={dataSource}
          columns={columns as any}
        />
      </div>
      <h2 className="h2-ft" style={{ marginTop: 100 }}>
        Check your Assessment & Solution Below
      </h2>
      <div className="btn-set">
        <Button className="submit" style={{ width: 237, height: 40 }}>
          Review Assessment
        </Button>
      </div>
    </div>
  );
};
