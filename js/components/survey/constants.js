const hiv = {
  0: {
    question: "I am a man over 18 years of age who has sex with men. I have no current symptoms of a sexually transmitted disease, HIV infection, or any other illness, including rash, sores on skin or in mouth, anal, or genital area, fever, chills, discharge from penis, pain with urination, rectal pain or discharge. Also, I am not worried about having had a high-risk HIV exposure within the past 72 hours.",
    answers: [{
      text: 'Agree',
      next: 1
    }, {
      text: 'Disagree',
      next: 'disclaimer' 
    }, {
      text: 'What\'s High-Risk Exposure?',
      next: 'hiv-info'
    }]
  },
  1: {
    question: "Have you ever had an HIV test?",
    answers: [{
      text: 'Yes',
      next: 2
    }, {
      text: 'No',
      done: 'testRec'
    }, {
      text: 'Not sure',
      done: 'testRec'
    }]
  },
  2: {
    question: "What was the result of your last test?",
    answers: [{
      text: 'Negative (no HIV)',
      next: 3
    }, {
      text: 'Positive (HIV)',
      next: 4
    }, {
      text: 'Not sure or don\'t remember',
      done: 'testRec'
    }]
  },
  3: {
    question: "When was your last HIV test?",
    answers: [{
      text: 'Less than 3 months ago',
      done: 'followupRec'
    }, {
      text: 'More than 3 months ago',
      done: 'testRec'
    }, {
      text: 'Not sure or don\'t remember',
      done: 'testRec'
    }]
  },
  4: {
    question: "Are you seeing a doctor for HIV?",
    previous: 2,
    answers: [{
      text: 'Yes',
      done: 'contactDoc'
    }, {
      text: 'No',
      done: 'referCare'
    }]
  },
}

export default hiv
