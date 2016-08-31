export default {

  'TestRec': {
    text: 'You should get tested for HIV.',
    findTestingCenter: true,
    setReminders: true,
    orderHomeKit: true,
  },

  'ReferCare': {
    text: 'You should talk to a doctor or other healthcare provider about HIV treatment.',
    findTestingCenter: true,
    setReminders: false,
    orderHomeKit: false,
  },

  'FollowupRec': {
    text: 'An HIV test is recommended every three months for many guys, but some guys might want or need to get tested more frequently. Talk to your doctor or other healthcare provider if you have questions about how frequently you should get tested, or whether you need another HIV test now.',
    findTestingCenter: true,
    setReminders: true,
    orderHomeKit: false,
  },

  'ContactDoc': {
    text: 'You said you are seeing a doctor or other healthcare provider for HIV treatment. That’s great.\nYou should contact your doctor or other healthcare provider if you have any questions about HIV treatment or about your health in general.',
    findTestingCenter: false,
    setReminders: false,
    orderHomeKit: false,
  },

}
