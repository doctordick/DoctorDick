const prep = {
  0: {
    question: 'Do you have HIV?',
    answers: [
      {
        text: 'YES',
        done: 'stopOne'
      },
      {
        text: 'NO',
        next: 1
      },
      {
        text: 'NOT SURE',
        next: 1
      }
    ]
  },
  1: {
    question: 'Have you had sex with one or more guys in the past 6 months?',
    answers: [
      {
        text: 'YES',
        next: 2
      },
      {
        text: 'NO',
        done: 'stopTwo'
      },
      {
        text: 'NOT SURE',
        next: 2
      }
    ]
  },
  2: {
    question: 'Are you in a monogamous relationship with another HIV-negative guy?',
    answers: [
      {
        text: 'YES',
        done: 'stopThree'
      },
      {
        text: 'NO',
        next: 3
      },
      {
        text: 'NOT SURE',
        next: 3
      }
    ]
  },
  3: {
    question: 'Have you topped or bottomed without a condom in the past 6 months?',
    answers: [
      {
        text: 'YES',
        done: 'stopFour'
      },
      {
        text: 'NO',
        next: 4
      },
      {
        text: 'NOT SURE',
        done: 'stopFour'
      }
    ]
  },
  4: {
    question: 'Have you had an STD in the past 6 months?',
    answers: [
      {
        text: 'YES',
        done: 'stopFour'
      },
      {
        text: 'NO',
        next: 5
      },
      {
        text: 'NOT SURE',
        done: 'stopFour'
      }
    ]
  },
  5: {
    question: 'Are you in a relationship with a guy who’s HIV-positive?',
    answers: [
      {
        text: 'YES',
        done: 'stopFour'
      },
      {
        text: 'NO',
        done: 'stopFive'
      },
      {
        text: 'NOT SURE',
        done: 'stopFour'
      }
    ]
  },

}

export default prep
