import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-gray-custom/10">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Typography variant="h1" className="mb-6">Privacy Policy</Typography>
          <Typography variant="body" className="text-text-secondary mb-6">
            Your privacy is important to us. This policy explains what information we collect and how we use it.
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="h3" className="mb-2">Information We Collect</Typography>
              <Typography variant="body" className="text-text-secondary">
                We may collect personal information you provide, such as your name, email, phone, and company.
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">How We Use Information</Typography>
              <Typography variant="body" className="text-text-secondary">
                We use your information to respond to inquiries, provide services, and improve our website.
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">Contact Us</Typography>
              <Typography variant="body" className="text-text-secondary">
                If you have any questions about this policy, contact us at hello@rallybusinessadvisors.com.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
