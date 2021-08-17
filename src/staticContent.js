let panelTab,
  dashboard,
  cloudServer,
  dedicatedServer,
  dedicatedOrder,
  cloudOrder,
  dedicatedTable,
  cloudTable,
  account,
  support,
  header,
  cloudLocation,
  cloudModel,
  cloudSize;

panelTab = {
  top: ['Dashboard', 'Cloud server', 'Dedicated server'],
  bottom: ['Account', 'Support'],
};

dashboard = {
  welcomeM: 'Welcome to the control panel',
  promotion: {
    title: 'Stay tuned!',
    content:
      'keep an aye on the dashboard and the email to get to know our latest promotions',
  },

  renewal: {
    title: 'Pending renewal',
    content:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, congue sodales.',
  },

  notification: {
    title: 'Notification',
    content:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis sociis metus eros ornare laoreet vestibulum ut, tempus dui curabitur dis congue sodales.',
  },
};

cloudServer = {
  title: 'Cloud servers',
  noServer: 'You are just one click away from starting your first project',
};

dedicatedServer = {
  title: 'Dedicated servers',
  noServer: 'You are just one click away from starting your first project',
};

dedicatedOrder = {
  title: 'Dedicated server order',
  labelT: 'Label',
  locationT: 'Select location',
  modelT: 'Select model',
  diskT: 'Select disk',
  systemT: 'Select operating system',
  byeText: `Press the "Create Server" button after verifying that all the fields are correct. You can remove this server whenever you want, so don't worry!`,
};

cloudLocation = [
  { country: 'germany', serverNumber: 3 },
  { country: 'London', serverNumber: 3 },
  { country: 'Russia', serverNumber: 1 },
  { country: 'Canada', serverNumber: 3 },
  { country: 'Singapur', serverNumber: 3 },
  { country: 'Sweden', serverNumber: 1 },
  { country: 'india', serverNumber: 1 },
];

cloudModel = [
  {
    gMemory: '1 GB',
    processors: 1,
    memory: '25 GB',
    memoryType: 'SSD Disk',
    memorySpeed: '1000 GB',
    os: 'server OS1',
  },
  {
    gMemory: '2 GB',
    processors: 1,
    memory: '50 GB',
    memoryType: 'SSD Disk',
    memorySpeed: '2000 GB',
    os: 'server OS2',
  },
  {
    gMemory: '3 GB',
    processors: 1,
    memory: '75 GB',
    memoryType: 'SSD Disk',
    memorySpeed: '3000 GB',
    os: 'server OS3',
  },
  {
    gMemory: '4 GB',
    processors: 1,
    memory: '100 GB',
    memoryType: 'SSD Disk',
    memorySpeed: '4000 GB',
    os: 'server OS4',
  },
  {
    gMemory: '5 GB',
    processors: 1,
    memory: '25 GB',
    memoryType: 'SSD Disk',
    memorySpeed: '1000 GB',
    os: 'server OS1',
  },
];

cloudSize = [
  {
    size: 100,
    cost: 50,
  },
  {
    size: 150,
    cost: 100,
  },
  {
    size: 200,
    cost: 150,
  },
  {
    size: 500,
    cost: 200,
  },
];

cloudOrder = {
  title: 'Cloud server order',
  labelT: 'Label',
  locationT: 'Select location',
  modelT: 'Select model',
  diskT: 'Select disk',
  systemT: 'Select operating system',
  byeText: `Press the "Create Server" button after verifying that all the fields are correct. You can remove this server whenever you want, so don't worry!`,
};

account = {
  title: 'Account',
};

header = {
  name: 'Sergio',
};

support = {
  title: 'Support',
};

dedicatedTable = [
  // {
  //   label: 'label 1',
  //   system: 'linux001',
  //   price: '150$',
  //   location: 'Spain',
  //   status: true,
  // },
  // {
  //   label: 'label 2',
  //   system: 'linux002',
  //   price: '250$',
  //   location: 'Sweden',
  //   status: false,
  // },
  // {
  //   label: 'label 3',
  //   system: 'linux003',
  //   price: '410$',
  //   location: 'Russia',
  //   status: true,
  // },
  // {
  //   label: 'label 4',
  //   system: 'linux004',
  //   price: '160$',
  //   location: 'India',
  //   status: true,
  // },
];

cloudTable = [
  // {
  //   label: 'label 1',
  //   system: 'linux001',
  //   price: '150$',
  //   location: 'Spain',
  //   status: true,
  // },
  // {
  //   label: 'label 2',
  //   system: 'linux002',
  //   price: '250$',
  //   location: 'Sweden',
  //   status: false,
  // },
  // {
  //   label: 'label 3',
  //   system: 'linux003',
  //   price: '410$',
  //   location: 'Russia',
  //   status: true,
  // },
  // {
  //   label: 'label 4',
  //   system: 'linux004',
  //   price: '160$',
  //   location: 'India',
  //   status: true,
  // },
];

const content = {
  panelTab: panelTab,
  dashboard: dashboard,
  cloudServer: cloudServer,
  dedicatedServer: dedicatedServer,
  cloudOrder: cloudOrder,
  dedicatedOrder: dedicatedOrder,
  dedicatedTable: dedicatedTable,
  cloudTable: cloudTable,
  account: account,
  support: support,
  header: header,
  cloudLocation: cloudLocation,
  cloudModel: cloudModel,
  cloudSize: cloudSize,
};

export default content;
