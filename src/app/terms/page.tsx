import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground text-lg leading-7 [&:not(:first-child)]:mt-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Acceptance of Terms
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                By accessing and using our gamified sustainability learning platform, you accept and
                agree to be bound by the terms and provision of this agreement. If you do not agree,
                please do not use this service. This platform is designed for educational purposes
                to help students learn about sustainability through interactive challenges and
                gamified experiences.
              </p>
            </CardContent>
          </Card>

          {/* Educational Use */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Educational Use
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                This platform is intended for educational use by students, teachers, and
                institutions. All content, including sustainability challenges, quizzes, educational
                materials, and gamification elements, supports learning objectives related to
                environmental science and sustainability.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
                  Appropriate Use
                </h4>
                <p className="text-muted-foreground text-sm leading-7">
                  Users must engage respectfully and educationally. Inappropriate behavior,
                  cheating, or misuse of the gamification system may result in account suspension or
                  termination.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts and Responsibilities */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                User Accounts and Responsibilities
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Account Creation
                </h3>
                <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                  To access features, you must create an account with accurate information. Students
                  under 13 require parental consent. You are responsible for account confidentiality
                  and all activity under it.
                </p>
              </div>
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Academic Integrity
                </h3>
                <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                  Users must complete challenges honestly. Sharing answers, creating multiple
                  accounts, or manipulating the point system violates these terms and the platform’s
                  educational value.
                </p>
              </div>
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Content Contributions
                </h3>
                <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                  If you contribute content (projects, posts, etc.), you grant us a license to use
                  it within the educational context of our platform. Contributions must be original
                  or properly attributed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gamification and Rewards */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Gamification and Rewards
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                Our platform uses points, badges, leaderboards, and achievements to encourage
                learning. These have no monetary value and serve educational motivation only.
              </p>
              <ul className="text-muted-foreground space-y-2 leading-7">
                <li>Points and badges are earned through legitimate completion of activities</li>
                <li>Leaderboards promote healthy competition with educational focus</li>
                <li>Achievements recognize learning milestones</li>
                <li>We may adjust/reset gamification elements to maintain fair play</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Intellectual Property
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                All educational content (text, graphics, software, curriculum) is our property or
                licensed, protected by copyright and IP laws. Use is permitted for educational
                purposes only.
              </p>
            </CardContent>
          </Card>

          {/* Platform Availability */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Platform Availability
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                We aim for continuous availability but cannot guarantee uptime. Temporary suspension
                may occur for maintenance, updates, or technical issues. We are not liable for
                disruption.
              </p>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Privacy and Data Protection
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                Your privacy is important. Please review our Privacy Policy to understand how data
                is collected, used, and protected. We comply with educational privacy laws and
                safeguard student information.
              </p>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Prohibited Activities
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                The following are strictly prohibited:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-7">
                <li>Hacking, disrupting, or compromising platform security</li>
                <li>Sharing inappropriate or non-educational content</li>
                <li>Bullying, harassment, or misconduct with users</li>
                <li>Cheating or unauthorized collaboration</li>
                <li>Commercial use without authorization</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Limitation of Liability
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                While we aim for accuracy, we provide no guarantees on completeness or reliability.
                Liability is limited to the extent allowed by law. We are not responsible for
                outcomes based on platform content.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Changes to Terms
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                We may modify these terms anytime. Updates will appear on this page. Continued use
                after updates means acceptance. For significant changes, additional notice will be
                given.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Contact Information
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-7 [&:not(:first-child)]:mt-6">
                For questions about these Terms & Conditions, contact us:
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                <p>
                  <strong>Email:</strong> support@sustainabilitylearning.com
                  <br />
                  <strong>Legal:</strong> legal@sustainabilitylearning.com
                  <br />
                  <strong>Address:</strong> [Your Company Address]
                  <br />
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
