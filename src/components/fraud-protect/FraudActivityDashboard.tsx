
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Star, Eye, RotateCcw, Lock, Info } from "lucide-react";
import { useState } from "react";

interface FraudActivityDashboardProps {
  isPremium: boolean;
}

const FraudActivityDashboard = ({ isPremium }: FraudActivityDashboardProps) => {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);

  const activities = [
    {
      id: 1,
      type: "Order Verification",
      action: "Auto-verified high-risk order",
      orderId: "FK-789123456",
      amount: "₹4,560",
      time: "2 hours ago",
      reason: isPremium ? "Suspicious payment pattern detected with multiple failed attempts" : "---",
      icon: Shield,
      status: "Verified"
    },
    {
      id: 2,
      type: "Review Takedown",
      action: "Fake review removed",
      orderId: "RV-456789123",
      amount: "Rating protected",
      time: "5 hours ago",
      reason: isPremium ? "Review posted from same IP as competitor, content manipulation detected" : "---",
      icon: Star,
      status: "Removed"
    },
    {
      id: 3,
      type: "Return Fraud",
      action: "SmartCheck prevented return",
      orderId: "FK-123456789",
      amount: "₹2,340",
      time: "1 day ago",
      reason: isPremium ? "Customer attempted to return damaged product as defective, images showed prior damage" : "---",
      icon: RotateCcw,
      status: "Prevented"
    },
    {
      id: 4,
      type: "OBD Verification",
      action: "Doorstep verification completed",
      orderId: "FK-987654321",
      amount: "₹1,200",
      time: "2 days ago",
      reason: isPremium ? "High-value order in fraud-prone area, customer verified identity and product condition" : "---",
      icon: Eye,
      status: "Verified"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Fraud Protection Activity
          {!isPremium && <Lock className="w-4 h-4 text-gray-400" />}
        </CardTitle>
        <CardDescription>
          {isPremium 
            ? "Latest fraud prevention actions taken on your behalf"
            : "Detailed activity logs available with Premium subscription"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isPremium ? (
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <activity.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{activity.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{activity.action}</TableCell>
                    <TableCell className="font-mono text-sm">{activity.orderId}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{activity.amount}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">{activity.time}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Info className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{activity.action}</DialogTitle>
                            <DialogDescription>
                              Order ID: {activity.orderId}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Reason for Action:</h4>
                              <p className="text-sm text-gray-600">{activity.reason}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{activity.status}</Badge>
                              <span className="text-sm text-gray-500">{activity.time}</span>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <Lock className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold mb-2">Detailed Activity Logs</h3>
            <p className="mb-4">View detailed fraud prevention actions and reasons with Premium</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">Premium features include:</p>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Detailed reason for each action</li>
                <li>• Real-time activity monitoring</li>
                <li>• Downloadable reports</li>
                <li>• Historical data analysis</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FraudActivityDashboard;
