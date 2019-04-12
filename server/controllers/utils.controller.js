var nodeMailer = require('nodemailer')

exports.mail = (id, status, values) => {
    console.log("In Mail", id)
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'lekya.sheral05@gmail.com',
            pass: 'ryandee05'
        }
    });
    let mailOptions = { };
    if (status == 'profile_verfication_request') {
        mailOptions = {
            from: '"TPO BVRIT Hyderabad" <xxxxx@bvrithyderabad.edu.in>', // sender address
        
        to :id+'@bvrithyderabad.edu.in',
    subject : 'Placement Portal:Registrated Successfully.',
        html :  'You have successfully submitted your Form. You will be notified once your profile is verified. Please contact your placement co-ordinator if it takes more than 1-2 working days.',
        };
    }else if(status == 'initial_verification') {
        mailOptions = {
            from: '"TPO BVRIT Hyderabad" <xxxxx@bvrithyderabad.edu.in>', // sender address
        
        to :id+'@bvrithyderabad.edu.in',
    subject : 'Placement Portal: Verified Profile',
        html :  'Your profile is successfully verfiied. Now you will have access to the portal to apply for job posts. If you still have problem in accessing the profile please contact your placement co-ordinator.',
        };
    } else if(status == 'profile_update'){
        mailOptions = {
            from: '"TPO BVRIT Hyderabad" <xxxxx@bvrithyderabad.edu.in>', // sender address
        
        to :id+'@bvrithyderabad.edu.in',
    subject : 'Placement Portal: Profile Updated',
        html :  'Your profile is successfully updated. Please contact your placement co-ordinator if it takes more than 1-2 working days.',
        };
    }else if(status == 'event_registered'){
        mailOptions = {
            from: '"TPO BVRIT Hyderabad" <xxxxx@bvrithyderabad.edu.in>', // sender address
        
        to :id+'@bvrithyderabad.edu.in',
    subject : 'Placement Portal: Registered for a Event',
        html :  'You have sucessfully registered for a event',
        };
    }else if (status == 'profile_update_request') {
        mailOptions = {
            from: '"TPO BVRIT Hyderabad" <xxxxx@bvrithyderabad.edu.in>', // sender address
        
        to :id+'@bvrithyderabad.edu.in',
    subject : 'Placement Portal:Registrated Successfully.',
        html :  'You have requested for profile update submitted your Form. You will be notified once your profile updates are verified. Please contact your placement co-ordinator if it takes more than 1-2 working days.',
        };
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            // res.render('index');
        });
    }
  