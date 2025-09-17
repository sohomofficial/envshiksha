import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Privacy Policy
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground text-lg">
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
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                  When you create an account on our gamified sustainability learning platform, 
                  we collect information such as your name, email address, school affiliation, 
                  grade level, and profile preferences.
                </p>
              </div>

              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Learning Data
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                  We collect data about your interactions with our platform, including quiz 
                  responses, challenge completions, badges earned, points accumulated, 
                  time spent on activities, and progress.
                </p>
              </div>

              <div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Technical Information
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
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
              <ul className="space-y-2 text-muted-foreground leading-7">
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
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                We comply with FERPA and COPPA. We never sell or rent student data. 
                All information is used only for educational purposes.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                  For Students Under 13
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  We require parental consent before collecting personal information 
                  from students under 13. Parents may review or delete their child’s info 
                  by contacting us.
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
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                We use encryption, secure servers, and audits to protect your data. 
                However, no method of transmission over the internet is 100% secure.
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
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-7">
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
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground mb-4">
                If you have questions about this Privacy Policy, contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg text-sm">
                <p>
                  <strong>Email:</strong> privacy@sustainabilitylearning.com<br />
                  <strong>Address:</strong> [Your Company Address]<br />
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}