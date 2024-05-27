import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object
    let transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com', // Replace with your SMTP host
      port: 587, // Replace with your SMTP port
      secure: false, // Use true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password
      },
    });

    // Email options
    let mailOptions = {
      from: `"${name}" <${email}>`, // Sender address
      to: 'your-email@example.com', // List of recipients
      subject: 'Contact Form Message', // Subject line
      text: message, // Plain text body
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
