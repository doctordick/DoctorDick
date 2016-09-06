export default {

  'testRec': {
    text: 'You should get tested for HIV.',
    findTestingCenter: true,
    setReminders: true,
    orderHomeKit: true,
  },

  'referCare': {
    text: 'You should see a doctor or other healthcare provider about HIV treatment.',
    findTestingCenter: true,
    setReminders: false,
    orderHomeKit: false,
  },

  'followupRec': {
    text: 'An HIV test is recommended every three months for many guys, but some guys might want or need to get tested more frequently. Talk to your doctor or other healthcare provider if you have questions about how frequently you should get tested, or whether you need another HIV test now.',
    findTestingCenter: true,
    setReminders: true,
    orderHomeKit: false,
  },

  'contactDoc': {
    text: 'You should keep seeing your doctor for HIV care.\nOr use the HIV care locator service to find other HIV doctors.',
    findTestingCenter: false,
    setReminders: false,
    orderHomeKit: false,
  },

}
