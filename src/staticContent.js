const panelTab,
dashboard,
cloudServer,
dedicatedServer,
dedicatedOrder,
cloudOrder,
dedicatedTable,
cloudTable,
account,
support,
header, ;


panelTab = {
  top: ['Dashboard', 'cloud server', 'dedicated server'],
  bottom: ['account', 'support'],
};

dashboard = {
  welcomeM: 'Welcome to the control panel',
  notifT: 'notification',
  pendingT: 'pending renewal',
};

cloudServer = {
  title: 'Cloud servers',
  noServerM: 'You are just one click away from starting your first project',
};

dedicatedServer = {
  title: 'dedicated servers',
  noServerM: 'You are just one click away from starting your first project',
};

dedicatedOrder = {
  title: 'Dedicated server order',
  labelT: 'label',
  locationT: 'Select location',
  modelT: 'Select model',
  diskT: 'Select disk',
  systemT: 'Select operating system',
  byeText: `Press the "Create Server" button after verifying that all the fields are correct. You can remove this server whenever you want, so don't worry!`,
};

cloudOrder = {
  title: 'Dedicated server order',
  labelT: 'label',
  locationT: 'Select location',
  modelT: 'Select model',
  diskT: 'Select disk',
  systemT: 'Select operating system',
  byeText: `Press the "Create Server" button after verifying that all the fields are correct. You can remove this server whenever you want, so don't worry!`,
};

account ={
    title: 'Account',
};

header ={
    name: 'Sergio',
};

support ={
    title: 'Support',
};

dedicatedTable = [{
    label: 'label 1',
    system: 'linux001',
    price:'150$',
    location: 'Spain',
    status: true
},
{
    label: 'label 2',
    system: 'linux002',
    price:'250$',
    location: 'Sweden',
    status: false
},
{
    label: 'label 3',
    system: 'linux003',
    price:'410$',
    location: 'Russia',
    status: true
},
{
    label: 'label 4',
    system: 'linux004',
    price:'160$',
    location: 'India',
    status: true
}];

cloudTable = [{
    label: 'label 1',
    system: 'linux001',
    price:'150$',
    location: 'Spain',
    status: true
},
{
    label: 'label 2',
    system: 'linux002',
    price:'250$',
    location: 'Sweden',
    status: false
},
{
    label: 'label 3',
    system: 'linux003',
    price:'410$',
    location: 'Russia',
    status: true
},
{
    label: 'label 4',
    system: 'linux004',
    price:'160$',
    location: 'India',
    status: true
}];


const content = {
    panelTab: panelTab,
    dashboard: dashboard,
    cloudServer: cloudServer,
    dedicatedServer: dedicatedServer,
    cloudOrder: cloudOrder,
    dedicatedOrder:dedicatedOrder,
    dedicatedTable: dedicatedTable,
    cloudTable: cloudTable,
    account: account,
    support: support,
    header: header,
}


export  default content;