import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");

type Data = {
  message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try{
        if (req.method === "POST") {

            let transporter = nodemailer.createTransport({
                host: process.env.SMTP_DOMAIN,
                port: 465,
                secure: true,
                auth: {
                    user: process.env.SMTP_USERNAME,
                    pass: process.env.SMTP_PASSWORD
                }
            });

            const email_data = JSON.parse(req.body);
    
            let mailOptions = {
                to: process.env.SMTP_RECIPIENT,
                subject: 'Online Impact Website Form Submission',
                text: email_data.text,
                html: email_data.html
            };
    
            transporter.sendMail(mailOptions, (e:any, i:any) => {
                if (e) {
                    console.error(e);
                    res.status(500).json({message: e});
                } else {
                    res.status(201).end();
                }
            });
    
        } else {
            res.status(404).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}
