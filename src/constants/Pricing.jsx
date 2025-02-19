export const pricingPlans = [
  {
    id: 1,
    planName: 'Basic',
    planCharge: 'Monthly Charge',
    planPrice: 14.99,
    activeFacilities: [
      'Free Setup',
      'Bandwidth Limit 10GB',
      '20 User Connection',
    ],
    deActiveFacilities: [
      'Analytics Report',
      'Public Api Access',
      'Plugins Intregation',
      'Custom Content Managment',
    ],
  },
  {
    id: 2,
    planName: 'Standard',
    planCharge: 'Monthly Charge',
    planPrice: 49.99,
    activeFacilities: [
      'Free Setup',
      'Bandwidth Limit 10GB',
      '20 User Connection',
      'Analytics Report',
      'Public Api Access',
    ],
    deActiveFacilities: ['Plugins Intregation', 'Custom Content Managment'],
  },
  {
    id: 3,
    planName: 'Premium',
    planCharge: 'Monthly Charge',
    planPrice: 89.99,
    activeFacilities: [
      'Free Setup',
      'Bandwidth Limit 10GB',
      '20 User Connection',
      'Analytics Report',
      'Public Api Access',
      'Plugins Intregation',
      'Custom Content Managment',
    ],
    deActiveFacilities: [],
  },
]
