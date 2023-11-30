import { Resend } from 'resend';

const resend = new Resend('re_MsuBRZ6Y_8YoazmjSJmoYTYErNbuHdWyq');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'bartosz.ogorek21@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});