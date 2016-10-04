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
    question: 'Do you have more than one sex partner?',
    answers: [
      {
        text: 'YES',
        next: 5
      },
      {
        text: 'NO',
        next: 3
      },
      {
        text: 'NOT SURE',
        next: 5
      }
    ]
  },

  3: {
    question: 'Does your one sex partner only have sex with you?',
    answers: [
      {
        text: 'YES',
        next: 4
      },
      {
        text: 'NO',
        next: 5
      },
      {
        text: 'NOT SURE',
        next: 5
      }
    ]
  },

  4: {
    question: 'Is your one sex partner HIV-positive?',
    answers: [
      {
        text: 'YES',
        next: 5
      },
      {
        text: 'NO',
        done: 'stopThree'
      },
      {
        text: 'NOT SURE',
        next: 5
      }
    ]
  },


  5: {
    question: 'Have you topped or bottomed without a condom in the past 6 months?',
    answers: [
      {
        text: 'YES',
        done: 'stopFour'
      },
      {
        text: 'NO',
        next: 6
      },
      {
        text: 'NOT SURE',
        done: 'stopFour'
      }
    ]
  },
  6: {
    question: 'Have you had an STD in the past 6 months?',
    answers: [
      {
        text: 'YES',
        done: 'stopFour'
      },
      {
        text: 'NO',
        next: 7
      },
      {
        text: 'NOT SURE',
        done: 'stopFour'
      }
    ]
  },
  7: {
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
