
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Crown, Calendar, CreditCard, FileText } from "lucide-react";

interface SubscriptionManagementProps {
  isPremium: boolean;
}

const SubscriptionManagement = ({ isPremium }: SubscriptionManagementProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Subscription Management</h3>
        <p className="text-gray-600">Manage your Fraud Protect subscription and billing</p>
      </div>

      {/* Current Plan */}
      <Card className="border-2 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  Premium Plan
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </CardTitle>
                <CardDescription>Advanced fraud protection with full control</CardDescription>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">₹2,999</div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-medium">Next Billing</p>
                <p className="text-gray-500">March 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-medium">Payment Method</p>
                <p className="text-gray-500">•••• 4242</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-medium">Plan Started</p>
                <p className="text-gray-500">Feb 15, 2024</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Auto-renewal</span>
              <Switch defaultChecked />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Update Payment</Button>
              <Button variant="outline" size="sm">Download Invoice</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Current Usage</CardTitle>
          <CardDescription>Your Premium feature usage this quarter</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>PIN Blacklist</span>
                <span className="font-medium">7/10 used</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>COD Rules</span>
                <span className="font-medium">1/1 used</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>FE Changes</span>
                <span className="font-medium">1/2 used</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Your recent subscription payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Feb 15, 2024", amount: "₹2,999", status: "Paid", invoice: "INV-001" },
              { date: "Jan 15, 2024", amount: "₹2,999", status: "Paid", invoice: "INV-002" },
              { date: "Dec 15, 2023", amount: "₹2,999", status: "Paid", invoice: "INV-003" }
            ].map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{payment.date}</p>
                  <p className="text-xs text-gray-500">{payment.invoice}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{payment.amount}</p>
                  <Badge variant="default" className="text-xs">
                    {payment.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm" className="ml-2">
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Plan Actions */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Plan Actions</CardTitle>
          <CardDescription>Manage your subscription</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full">
            Pause Subscription
          </Button>
          <Button variant="destructive" className="w-full">
            Cancel Subscription
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Cancellation takes effect at the end of your current billing period
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionManagement;
