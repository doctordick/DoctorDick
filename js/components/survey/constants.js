const hiv = {
  0: {
    question: "I am a man over 18 years of age who has sex with men. I have no current symptoms of a sexually transmitted disease, HIV infection, or any other illness, including rash, sores on skin or in mouth, anal, or genital area, fever, chills, discharge from penis, pain with urination, rectal pain or discharge. Also, I am not worried about having had a high-risk HIV exposure within the past 72 hours.",
    answers: [{
      text: 'AGREE',
      next: 1
    }, {
      text: 'DISAGREE',
      next: 'disclaimer' 
    }, {
      text: 'WHAT\'S HIGH-RISK EXPOSURE?',
      next: 'hiv-info'
    }]
  },
  1: {
    question: "Have you ever had an HIV test?",
    answers: [{
      text: 'YES',
      next: 2
    }, {
      text: 'NO',
      done: 'testRec'
    }, {
      text: 'NOT SURE',
      done: 'testRec'
    }]
  },
  2: {
    question: "What was the result of your last test?",
    answers: [{
      text: 'NEGATIVE (NO HIV)',
      next: 3
    }, {
      text: 'POSITIVE (HIV)',
      next: 4
    }, {
      text: 'NOT SURE',
      done: 'testRec'
    }]
  },
  3: {
    question: "When was your last HIV test?",
    answers: [{
      text: 'LESS THAN 3 MONTHS AGO',
      done: 'followupRec'
    }, {
      text: 'MORE THAN 3 MONTHS AGO',
      done: 'testRec'
    }, {
      text: 'NOT SURE',
      done: 'testRec'
    }]
  },
  4: {
    question: "Are you seeing a doctor for HIV?",
    previous: 2,
    answers: [{
      text: 'YES',
      done: 'contactDoc'
    }, {
      text: 'NO',
      done: 'referCare'
    }]
  },
}

export default hiv
