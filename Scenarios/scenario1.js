//.sdfsdfsdfsd
var outdated = Date.now() > new Date('2019-06-06 9:00'); // 9am on June 6th
var declined = localStorage.getItem('last_invitation_status') === 'declined';

if (outdated || declined)
 return;

var ctx =
 api()
     .invite('invite2')
     .container('container2')
     .survey('p8844038')
     .show();

ctx.events.declineInvite.on(
 function() {
   console.log('decline event');
   localStorage.setItem('last_invitation_status', 'declined');
 });