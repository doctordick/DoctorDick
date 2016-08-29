const hivTestingSurvey = [

  {
    id: 1,
    question: ' I am a man over 18 years of age who has sex with men. I have no current symptoms of a sexually transmitted disease, HIV infection, or any other illness, including rash, sores on skin or in mouth, anal, or genital area, fever, chills, discharge from penis, pain with urination, rectal pain or discharge. Also, I am not worried about having had a high-risk HIV exposure within the past 72 hours.',
    options: [
      {
        option: 'agree',
        nextStep: 2
      },
      {
        option: 'disagree',
        nextStep: null
      },
      {
        option: 'define high-risk exposure',
        nextStep: null
      }
    ]
  },

  {
    id: 2,
    question: 'Have you ever had an HIV test?',
    options: [
      {
        option: 'yes' ,
        nextStep: 3
      }, 
      {
        option: 'no',
        nextStep: null,
        recMessage: 'You said you had never had an HIV test. Since you have never had an HIV test, you should get tested for HIV.',
        recOptions: [
          'care-locator',
          'home-hiv-test',
          'reminders',
          'hiv-info'
        ]
      }, 
      {
        option: 'not sure',
        nextStep: null,
        recMessage: 'You said you are not sure whether you have had an HIV test. Since you are not sure whether you have had an HIV test, you should get tested for HIV.',
        recOptions: [
          'care-locator',
          'home-hiv-test',
          'reminders',
          'hiv-info'
        ]
      }, 
    ]
  },

  {
    id: 3,
    question: 'You said you had an HIV test in the past. What was the result of your most recent HIV test?',
    options: [
      {
        option: 'negative (the test said I didn’t have HIV)',
        nextStep: 4
      }, 
      {
        option: 'positive (the test said I have HIV)',
        nextStep: 5
      },
      {
        option: 'not sure (I can’t remember or don’t know what the test said)',
        nextStep: null
      }
    ]
  },

  {
    id: 4,
    question: 'You said your most recent HIV test was negative, meaning that you don’t have HIV. When was your last test?',
    options: [
      {
        option: 'less than 3 months' ,
        nextStep: null,
        recMessage: 'You said your most recent HIV test, which showed you didn’t have HIV, was within the past three months. An HIV test is recommended every three months for many guys, but some guys might want or need to get tested more frequently. Talk to your doctor or other healthcare provider if you have questions about how frequently you should get tested, or whether you need another HIV test now.',
        recOptions: [
          'reminders',
          'care-locator',
          'home-hiv-test',
          'hiv-info'
        ]
      },
      {
        option: 'more than 3 months',
        nextStep: null,
        recMessage: 'You said your most recent HIV test, which showed you didn’t have HIV, was more than three months ago.   An HIV test is recommended every three months for many guys, so it looks like you’re due for another HIV test.',
        recOptions: [
          'care-locator',
          'home-hiv-test',
          'reminders',
          'hiv-info'
        ]
      },
      {
        option: 'not sure',
        nextStep: null,
        recMessage: 'You said you weren’t sure or don’t remember when your last HIV test, which showed you didn’t have HIV, was.   An HIV test is recommended every three months for many guys. If you can’t remember when your last test was, you should get tested again. ',
        recOptions: [
          'care-locator',
          'home-hiv-test',
          'reminders',
          'hiv-info'
        ]
      }
    ]
  },

  {
    id: 5,
    question: 'You said your most recent HIV test was positive, meaning that you have HIV. Are you seeing a doctor or other healthcare provider for HIV treatment?',
    options: [
      {
        option: 'yes',
        nextStep: null,
        recMessage: 'You said you are seeing a doctor or other healthcare provider for HIV treatment. That’s great.',
        recOptions: [
          'hiv-info'
        ]
      },
      {
        option: 'no',
        nextStep: null,
        recMessage: 'You said you are not seeing a doctor or other healthcare provider for HIV treatment. You should talk to a doctor or other healthcare provider about HIV treatment.',
        recOptions: [
          'care-locator',
          'hiv-info'
        ]
      }
    ]
  }
];

const responses = {
  yesNoNotSure: ['Yes', 'No', 'Not Sure'],
  negPosNotSure: ['Negative', 'Positive', 'Not Sure'],
  timeFrames: ['Less Than 3 Months', 'More Than 3 Months', 'Not Sure']
}

export default hivTestingSurvey
