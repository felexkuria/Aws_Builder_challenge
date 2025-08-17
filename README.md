# Felex Kuria Irungu - Personal Profile Website

A static personal profile website built for the AWS Builder Challenge, showcasing my skills as an AWS Certified Cloud Practitioner and Electrical Technician.

## Features

- **Responsive Design**: Mobile, tablet, and desktop friendly.
- **Dark/Light Theme**: Toggle and save preference.
- **Mobile Navigation**: Collapsible menu for small screens.
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation.
- **Performance**: Minimal dependencies, optimized assets.
- **AWS Ready**: Designed for deployment on AWS S3 + CloudFront.

## Deployment on AWS

### Prerequisites
- AWS account
- AWS CLI configured

### Steps

1. **Upload to S3**
   ```bash
   aws s3 sync . s3://your-bucket-name --delete --exclude ".git/*" --exclude "README.md"
Configure S3 for Static Hosting

Enable static website hosting in S3 bucket properties.
Set index.html as the index document.



Set Up CloudFront

Create a CloudFront distribution with your S3 bucket as the origin.
Enable HTTPS and set up a custom domain if desired.



Enable HTTPS

Request a certificate in AWS Certificate Manager (ACM).
Attach the certificate to your CloudFront distribution.



Invalidate Cache (if updating)
 Copyaws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"


Security Notes

Restrict S3 bucket permissions; use CloudFront Origin Access Identity (OAI).
Enable AWS WAF for additional protection.
Always use HTTPS.

Local Development

Open index.html in your browser.
No server or build tools required.

License
MIT
 Copy---

## Key Enhancements

- **Personalized Content**: Your name, photo, background, skills, work experience, education, and certifications are all featured.
- **AWS Branding**: AWS icons and certification badges.
- **Professional Design**: Clean, modern, and easy to navigate.
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard support.
- **Performance**: No external dependencies except Tailwind CDN and Google Fonts.

**To use:**
1. Replace the placeholder image with your photo.
2. Deploy to AWS S3 + CloudFront as described in the README.
