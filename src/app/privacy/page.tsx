import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg leading-7 [&:not(:first-child)]:mt-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Information We Collect
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Personal Information
                </h3>
                <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                  When you create an account on our gamified sustainability learning platform, we
                  collect information such as your name, email address, school affiliation, grade
                  level, and profile preferences.
                </p>
              </div>

              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Learning Data</h3>
                <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                  We collect data about your interactions with our platform, including quiz
                  responses, challenge completions, badges earned, points accumulated, time spent on
                  activities, and progress.
                </p>
              </div>

              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Technical Information
                </h3>
                <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                  We automatically collect technical information such as IP address, browser type,
                  device info, operating system, and usage patterns.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                How We Use Your Information
              </h2>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 leading-7">
                <li>Provide personalized sustainability learning experiences</li>
                <li>Award badges, points, and achievements for milestones</li>
                <li>Send educational notifications and updates</li>
                <li>Improve content and functionality with analytics</li>
                <li>Ensure security and prevent misuse</li>
              </ul>
            </CardContent>
          </Card>

          {/* Student Privacy Protection */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Student Privacy Protection
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                We comply with FERPA and COPPA. We never sell or rent student data. All information
                is used only for educational purposes.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                  For Students Under 13
                </h3>
                <p className="text-muted-foreground text-sm leading-7">
                  We require parental consent before collecting personal information from students
                  under 13. Parents may review or delete their child’s info by contacting us.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Data Security
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                We use encryption, secure servers, and audits to protect your data. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Your Rights
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
                You have the right to:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-7">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Contact Us
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-7 [&:not(:first-child)]:mt-6">
                If you have questions about this Privacy Policy, contact us:
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm">
                <p>
                  <strong>Email:</strong> privacy@sustainabilitylearning.com
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
