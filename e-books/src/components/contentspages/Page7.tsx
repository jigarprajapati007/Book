import { Typography } from "antd";
import que from "../../assets/content/pg3que.svg";
const { Paragraph } = Typography;
export const Page7 = () => {
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
      <h1 className="pg5-h1">Are Reusable Bags Good for the Environment?</h1>
      <p className="pg7-p">
        Darren Bell is a well-known person and has had three best-sellers. I met him to find out what his secret was. He writes in such a natural and friendly style. I wasn't surprised when he told me he had been writing stories from a very young age. I’ve always enjoyed writing; I used to write short stories when I was at school and really enjoyed the opportunity to be creative.
      </p>
      <p className="pg7-p">
        When I asked how his family and friends reacted to his creative writing, he explained that it was largely thanks to their encouraging comments that he had chosen a career as a writer. He said his teachers and parents always supported him to write and to enter competitions. He won his first writing competition at school when he was just 7 years old. ‘My story was printed in the local newspaper, it was really exciting and my Mum still has a copy of the paper somewhere.’
      </p>
      <p className="pg7-p">
        ‘Did you ever feel very different from your school friends?’ I asked him. ‘Not at all,' he said. ‘We did all the normal things like watch football together and go out on our bikes. The only difference was that I would be more likely to have a notebook in my bag and might sometimes write ideas down. ‘It didn’t feel strange and no one ever said anything about it – my friends were used to that.’
      </p>
      <p className="pg7-p">
        I asked how his love for writing developed as he got older and how he found his particular way of writing. He explained that when he went to university, he got involved in writing for the university newspaper. He told me he wrote all sorts of different articles but at the end of the day after trying all sorts of different writing types, he decided to write fiction than serious articles about news events. ‘I like being creative and I feel more comfortable expressing my own ideas and images than writing about things that are real.’ He explained this further by saying that when you write about true facts you have to explain everything and get things right but when he was writing his own stories, he felt like he could write about anything he liked. 
      </p>
    </div>
  )
}
