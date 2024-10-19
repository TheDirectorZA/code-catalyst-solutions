import React from 'react';
import './FAQ.scss';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does CodeCatalyst Solutions offer?',
      answer:
        'We offer a range of services including cloud solutions, custom software development, and DevOps consultancy.'
    },
    {
      question: 'How do I contact your team for support?',
      answer: 'You can contact us via the form on our contact page or email us directly at support@codecatalyst.com.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work across various industries, including finance, healthcare, and retail, delivering tailored solutions for each sector.'
    },
    {
      question: 'Do you provide ongoing maintenance for developed software?',
      answer:
        'Yes, we offer ongoing maintenance and support services to ensure your software continues to function optimally after deployment.'
    }
  ];

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
