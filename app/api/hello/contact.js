import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      querytype,
      firstName,
      lastName,
      phone,
      company,
      jobTitle,
      email,
      employeesRange,
      feedback,
      usage,
    } = req.body;

    // Construct the email body
    const messageBody = `
      Query Type: ${querytype}
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Job Title: ${jobTitle}
      Employees Range: ${employeesRange}
      Feedback: ${feedback}
      Usage: ${usage}
    `;

    // Email options
    const msg = {
      to: 'your-email@example.com', // Change to your recipient
      from: 'your-email@example.com', // Change to your verified sender
      subject: 'Contact Form Message',
      text: messageBody,
    };

    try {
      await sendgrid.send(msg);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
