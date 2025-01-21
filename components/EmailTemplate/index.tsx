// components/EmailTemplate/index.tsx
import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  subject,
  phone,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>
    <h1 style={{ color: '#333' }}>Message Received</h1>
    <p><strong>Name:</strong> {fullName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);
