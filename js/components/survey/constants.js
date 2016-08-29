const hiv = {
  0: {
    question: "Have you ever had an HIV test?",
    answers: [{
      text: 'Yes',
      next: 1
    }, {
      text: 'No',
      done: 'testRec'
    }, {
      text: 'Not sure',
      done: 'testRec'
    }]
  },
  1: {
    question: "What was the result of your last test?",
    answers: [{
      text: 'Negative (no HIV)',
      next: 2
    }, {
      text: 'Positive (HIV)',
      next: 3
    }, {
      text: 'Not sure or don\'t remember',
      done: 'testRec'
    }]
  },
  2: {
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
  3: {
    question: "Are you seeing a doctor for HIV?",
    previous: 1,
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