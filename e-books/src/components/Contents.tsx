import { SetStateAction, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import left from "../assets/content/left.svg";
import right from "../assets/content/right.svg";
import { Footer } from "./Footer";
import { PageHeader } from "./common/PageHeader";
import { Page1 } from "./contentspages/Page1";
import { PageFooter } from "./common/PageFooter";
import { Page2 } from "./contentspages/Page2";
import { Page3 } from "./contentspages/Page3";
import { Page4 } from "./contentspages/Page4";
import { Page5 } from "./contentspages/Page5";
import { Page6 } from "./contentspages/Page6";
import { Page7 } from "./contentspages/Page7";
import { Page8 } from "./contentspages/Page8";
import "../styles/content.css";
import { Page9 } from "./contentspages/Page9";

const questions = {
  page1: [
    {
      id: 1,
      text: "The main message of this note is trees",
      options: [
        { value: "A", label: "are being chopped to build roads." },
        { value: "B", label: "ruin where animals and plants live." },
        { value: "C", label: "should be saved from being destroyed." },
      ],
    },
    {
      id: 2,
      text: "The notice says that the cat",
      options: [
        { value: "A", label: "is afraid of small boys and dogs." },
        { value: "B", label: "went missing from their housing area" },
        { value: "C", label: "will answer when you call her ‘munchkin’." },
      ],
    },
  ],
  page2: [
    {
      id: 3,
      text: "The purpose of this poster is to",
      options: [
        {
          value: "A",
          label: "increase understanding on how to overcome body shaming.",
        },
        {
          value: "B",
          label:
            "educate the public about the harmful effects of body shaming.",
        },
        {
          value: "C",
          label: "inform the public about different factors of body shaming.",
        },
      ],
    },
    {
      id: 4,
      text: "Which of the following is true?",
      options: [
        { value: "A", label: "Games can help cure depression" },
        {
          value: "B",
          label: "Video games can help a person make better decisions",
        },
        {
          value: "C",
          label: "Playing video games helps a person to make quick decisions",
        },
      ],
    },
  ],
  page3: [
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
  ],
  page4: [
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
  ],
  page5: [
    {
      id: 17,
      text: "In paragraph 1, the interviewer was not surprised that Darren had been writing since a young age because he",
      options: [
        { value: "A", label: "are being chopped to build roads." },
        { value: "B", label: "ruin where animals and plants live." },
        { value: "C", label: "should be saved from being destroyed." },
        { value: "D", label: "produces best-seller storie" },
      ],
    },
    {
      id: 18,
      text: "How did he feel when he won his first writing competition?",
      options: [
        { value: "A", label: "is afraid of small boys and dogs." },
        { value: "B", label: "went missing from their housing area" },
        { value: "C", label: "will answer when you call her ‘munchkin’." },
        { value: "D", label: "produces best-seller storie" },
      ],
    },
    {
      id: 19,
      text: "The phrase my friends were used to that, refers to Darren",
      options: [
        { value: "A", label: "are being chopped to build roads." },
        { value: "B", label: "ruin where animals and plants live." },
        { value: "C", label: "should be saved from being destroyed." },
        { value: "D", label: "produces best-seller storie" },
      ],
    },
    {
      id: 20,
      text: "In paragraph 4, Darren says he prefers writing creative fiction to writing about real news events because he",
      options: [
        { value: "A", label: "is afraid of small boys and dogs." },
        { value: "B", label: "went missing from their housing area" },
        { value: "C", label: "will answer when you call her ‘munchkin’." },
        { value: "D", label: "produces best-seller storie" },
      ],
    },
  ],
};
const data = {
  5: {
    options: ["is", "are", "was", "were"],
  },
  6: {
    options: ["main", "bad", "only", "huge"],
  },
  7: {
    options: ["Up", "Down", "At", "huge"],
  },
  8: {
    options: ["Doing", "Not", "Always", "huge"],
  },
  9: {
    options: ["are", "is", "we", "us"],
  },
  10: {
    options: ["extreme", "is", "we", "us"],
  },
  11: {
    options: ["ego", "is", "we", "us"],
  },
  12: {
    options: ["of", "for", "we", "us"],
  },
};

const que = [
  {
    text1: "Canvas bags and tote bags",
    text2: "alternatives to single-use plastic.",
    ques: 5,
  },

  {
    text1: "Single-use plastic bags are the",
    text2: "reason for global pollution crisis",
    ques: 6,
  },
  {
    text1:
      "and a threat on our path to an eco-friendly lifestyle. According to The World Counts, we use 5 trillion plastic bags per year. That breaks",
    text2: "to 160,000",
    ques: 7,
  },
  {
    text1:
      "plastic bags per second and over 700 a year per person. It’s been estimated that 300 million plastic bags end up in the Atlantic Ocean every year. That is why many countries are ",
    text2: "reusable bags for the planet.",
    ques: 8,
  },
  {
    text1:
      "But, are reusable bags good for the environment? It depends! Reusable bags can be used over and over and are the obvious solution simply",
    text2: "they",
    ques: 9,
  },
  {
    text1:
      "create less waste in the long run. However, different types of bags will have a different impact sustainably depending on the raw materials, manufacturing, use and reuse, and the final",
    text2: "of a product.",
    ques: 10,
  },
  {
    text1: "According to UNEP, “depending on their",
    text2: " reusable bags might have",
    ques: 11,
  },
  {
    text1:
      "to be broken down in an expensive recycling process to separate the different materials. Consequently, in many cases, reusable bags are not recycled.” That means that despite the",
    text2:
      " intentions, millions of reusable bags, designed to replace the need for conventional plastic shopping bags, will also end up in landfills.",
    ques: 12,
  },
];
export const Contents = () => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages] = useState(6);
  const [answers, setAnswers] = useState({});
  const [attempts, setAttempts] = useState({});
  const [secondsRemaining] = useState(4 * 60 + 50);
  const [visible, setVisible] = useState(false);
  const [activeBlank, setActiveBlank] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState({});
  const [answerspg5, setAnswerspg5] = useState<any>({});

  const handleBlankClick = (blankId: number) => {
    setActiveBlank(blankId);
    setSelectedOption(answerspg5[blankId] || null);
    setVisible(true);
  };

  const handleOk = (option: number) => {
    if (option && activeBlank !== null) {
      setAnswerspg5((prev: {}) => ({
        ...prev,
        [activeBlank]: option,
      }));
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const allQuestions = [
    ...questions.page1,
    ...questions.page2,
    ...questions.page3,
    ...questions.page4,
    ...questions.page5,
  ];

  const handleChange = (qid: string, value: string) => {
    setAnswers({ ...answers, [qid]: value });
  };
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const handleFlip = (e: { data: SetStateAction<number> }) => {
    setCurrentPage(e.data);
  };
  const handleAnswer = (questionId: number, selectedValue: string) => {
    setAttempts((prev) => ({
      ...prev,
      [questionId]: selectedValue,
    }));
  };
  const attemptedCount = Object.keys(attempts).length;
  const pages = [
    <>
      <Page1 />
      <PageFooter title={""} />
    </>,
    <Page2 />,
    <>
      <Page3
        handleChange={handleChange}
        questions={questions?.page1}
        answers={answers}
        handleAnswer={handleAnswer}
      />
      <PageFooter title={"Page 1"} />
    </>,
    <>
      <Page4
        handleChange={handleChange}
        questions={questions.page2}
        answers={answers}
        handleAnswer={handleAnswer}
      />
      <PageFooter title={"Page 2"} />
    </>,
    <>
      <Page5
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        visible={visible}
        activeBlank={activeBlank}
        answers={answerspg5}
        que={que}
        data={data}
        handleBlankClick={handleBlankClick}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleAnswer={handleAnswer}
      />
      <PageFooter title={"Page 3"} />
    </>,
    <>
      <Page6 handleAnswer={handleAnswer} currentPage={currentPage} />
      <PageFooter title={"Page 4"} />
    </>,
    <>
      <Page7 />
      <PageFooter title={"Page 5"} />
    </>,
    <>
      <Page8
        handleChange={handleChange}
        questions={questions?.page5}
        answers={answers}
        handleAnswer={handleAnswer}
      />
      <PageFooter title={"Page 6"} />
    </>,
    <>
      <Page1 />
      <PageFooter title={""} />
    </>,
    <Page9 attemptedCount={attemptedCount} allQuestions={allQuestions} />,
  ];

  return (
    <>
      <div className="main-div">
        {
          //@ts-ignore

          <HTMLFlipBook
            style={{ margin: "auto" }}
            width={650}
            height={832}
            size="fixed"
            startPage={1}
            showCover={false}
            mobileScrollSupport={true}
            ref={bookRef}
            useMouseEvents={false}
            onFlip={handleFlip}
            clickEventForward={false}
            maxShadowOpacity={0.5}
            disableFlipByClick={true}
            swipeDistance={10}
            usePortrait={true}
          >
            {pages.map((content, index) => (
              <div key={index} className="page">
                <PageHeader />
                {content}
              </div>
            ))}
          </HTMLFlipBook>
        }

        <Row justify="center">
          <Col className="col-div">
            {currentPage > 0 && (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={left}
                className="btn-left"
                onClick={() => bookRef.current.pageFlip().flipPrev()}
              />
            )}

            {currentPage < totalPages - 1 && (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={right}
                className="btn-right"
                onClick={() => bookRef.current.pageFlip().flipNext()}
              />
            )}
          </Col>
        </Row>
      </div>
      {currentPage < 7 && (
        <Footer
          currentPage={currentPage}
          totalPages={totalPages}
          minutes={minutes}
          seconds={seconds}
          bookRef={bookRef}
          attemptedCount={attemptedCount}
          allQuestions={allQuestions}
        />
      )}
    </>
  );
};
