type FAQProps = {
  question: string;
  answer: string;
};

function FAQ({ question, answer }: FAQProps) {
  return (
    <div className="mb-4">
      <div className="p-3 bg-secondary rounded-top">
        <h5 className="text-light text-uppercase m-0">{question}</h5>
      </div>
      <div className="p-3 bg-light rounded-bottom border-start border-primary border-4">
        <p className="text-secondary m-0">{answer}</p>
      </div>
    </div>
  );
}

export default FAQ;
