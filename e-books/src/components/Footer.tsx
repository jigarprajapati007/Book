import { Button, Modal, Table } from "antd";
import prev from "../assets/footer/prev.svg";
import next from "../assets/footer/next.svg";
import { Spin } from "antd";
import loader from "../assets/footer/loader.svg";
import { useState } from "react";
import Countdown from "react-countdown";
interface props {
  currentPage: number;
  totalPages: number;
  minutes: number;
  seconds: number;
  bookRef: any;
  attemptedCount: number;
  allQuestions: any;
}
export const Footer = ({
  currentPage,
  totalPages,
  seconds,
  minutes,
  bookRef,
  attemptedCount,
  allQuestions,
}: props) => {
  const [open, setOpen] = useState(false);
  const total = allQuestions?.length;
  const attempted = attemptedCount; // green
  const handleCancel = () => {
    setOpen((open) => !open);
  };
  const dataSource = [
    {
      key: "1",
      sub: "English",
      ans: attempted,
      na: total - attempted,
    },
  ];

  const columns = [
    {
      title: "Subject",
      dataIndex: "sub",
      key: "sub",
    },
    {
      title: "Answered",
      dataIndex: "ans",
      key: "ans",
    },
    {
      title: "Not Attempted",
      dataIndex: "na",
      key: "na",
    },
  ];
  const endTime = Date.now() + 5 * 60 * 1000;
  return (
    <div className="footer">
      {currentPage > 0 && (
        <Button
          className="prev"
          onClick={() => bookRef.current.pageFlip().flipPrev()}
        >
          <img src={prev} />
          Previous Page
        </Button>
      )}
      <div className="progress-container">
        <div className="time-box">
          <Spin indicator={<img className="custom-spin" src={loader} />} />
          <span className="time-h4">
            <Countdown
              date={endTime}
              renderer={({ minutes, seconds, completed }) => {
                if (completed) {
                  return <span>Time's up!</span>;
                } else {
                  return (
                    <span>
                      {minutes}:{seconds.toString().padStart(2, "0")}
                    </span>
                  );
                }
              }}
            /> &nbsp;
            Minutes Remain
          </span>
        </div>

        <div className="bar-box">
          <div className="segmented-bar">
            {Array.from({ length: total }).map((_, i) => {
              let colorClass = "";
              if (i <= attempted) colorClass = "green";
              return <div key={i} className={`segment ${colorClass}`} />;
            })}
          </div>
        </div>

        <div className="status-box">
          <span>
            {Math.floor((attempted / total) * 100)}% Completed • {attempted} of{" "}
            {total} Attempted
          </span>
        </div>
      </div>
      {currentPage < totalPages - 1 ? (
        <Button
          className="next"
          onClick={() => bookRef.current.pageFlip().flipNext()}
        >
          <img src={next} />
          Next Page
        </Button>
      ) : (
        <Button className="submit" onClick={handleCancel}>
          Submit Assessment
        </Button>
      )}
      <Modal
        title={false}
        open={open}
        onCancel={handleCancel}
        footer={false}
        closable={false}
        className="foot-modal custom-table"
      >
        <h3 className="h3-ft">Assessment Summary</h3>
        <Table pagination={false} dataSource={dataSource} columns={columns} />
        <hr className="hr-ft" />
        <h2 className="h2-ft">Do you want to submit Assessment ?</h2>
        <div className="btn-set">
          <Button className="back" onClick={handleCancel}>
            Back
          </Button>
          <Button
            className="submit"
            onClick={() => {
              bookRef.current.pageFlip().flipNext();
              handleCancel();
            }}
          >
            Continue
          </Button>
        </div>
      </Modal>
    </div>
  );
};
