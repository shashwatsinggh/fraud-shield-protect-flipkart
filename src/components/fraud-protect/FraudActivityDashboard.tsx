
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Star, Eye, RotateCcw, Lock, Info, CreditCard, MapPin, UserCheck, CheckSquare, TrendingUp } from "lucide-react";
import { useState, useMemo } from "react";

interface FraudActivityDashboardProps {
  isPremium: boolean;
}

const FraudActivityDashboard = ({ isPremium }: FraudActivityDashboardProps) => {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [filterType, setFilterType] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Generate 100+ fraud activities with varied data
  const generateActivities = () => {
    const types = [
      { id: "order-verification", name: "Order Verification", icon: Shield, count: 15 },
      { id: "fake-reviews", name: "Fake Reviews", icon: Star, count: 18 },
      { id: "doorstep-verification", name: "Doorstep Verification", icon: Eye, count: 12 },
      { id: "return-fraud", name: "Return Fraud", icon: RotateCcw, count: 10 },
      { id: "part-payment", name: "Part Payment", icon: CreditCard, count: 8 },
      { id: "spf-payout", name: "SPF Payout", icon: TrendingUp, count: 6 },
      { id: "pincode-block", name: "Pincode Block", icon: MapPin, count: 5 },
      { id: "field-executive", name: "Field Executive", icon: UserCheck, count: 4 },
      { id: "smartcheck", name: "SmartCheck", icon: CheckSquare, count: 9 }
    ];

    const activities = [];
    let id = 1;
    
    types.forEach(type => {
      for (let i = 0; i < type.count; i++) {
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        
        activities.push({
          id: id++,
          type: type.name,
          typeId: type.id,
          action: getActionByType(type.id, i),
          listingId: `FL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
          date: date.toISOString().split('T')[0],
          time: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
          reason: getReasonByType(type.id, i),
          impact: getImpactByType(type.id, i),
          icon: type.icon,
          details: getDetailsByType(type.id, i)
        });
      }
    });

    return activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const getActionByType = (type: string, index: number) => {
    const actions = {
      "order-verification": ["High-risk order auto-verified", "Suspicious payment pattern flagged", "Multiple failed attempts blocked"],
      "fake-reviews": ["Fake review removed", "Rating manipulation detected", "Competitor sabotage blocked"],
      "doorstep-verification": ["OBD verification completed", "Customer identity verified", "Product condition confirmed"],
      "return-fraud": ["Return fraud prevented", "Damaged product claim rejected", "Serial number mismatch detected"],
      "part-payment": ["Part payment order processed", "COD fraud prevented", "Payment verification completed"],
      "spf-payout": ["Enhanced SPF claim approved", "Seller protection activated", "Claim amount increased"],
      "pincode-block": ["High-risk pincode blocked", "Delivery location restricted", "Fraud-prone area identified"],
      "field-executive": ["Delivery executive changed", "Pickup agent reassigned", "Service quality improved"],
      "smartcheck": ["Custom return checklist applied", "Brand verification completed", "Serial ID confirmed"]
    };
    return actions[type][index % actions[type].length];
  };

  const getReasonByType = (type: string, index: number) => {
    const reasons = {
      "order-verification": ["Suspicious payment pattern with multiple failed attempts from same device", "High-value order from new customer with inconsistent address", "Payment method linked to known fraudulent activities"],
      "fake-reviews": ["Review posted from same IP as competitor with content manipulation detected", "Rating pattern inconsistent with purchase history and product category", "Multiple reviews from single device with similar writing style"],
      "doorstep-verification": ["High-value order in fraud-prone area requiring identity verification", "Customer requested OBD due to previous delivery issues in the locality", "Product category has high return rates requiring verification"],
      "return-fraud": ["Customer attempted to return damaged product claiming it as defective with prior damage visible", "Serial number mismatch between delivered and returned product detected", "Return request timing suspicious with no usage evidence provided"],
      "part-payment": ["Customer opted for part payment to reduce fraud risk on high-value electronics", "COD amount exceeded threshold requiring partial advance payment", "Payment method verification required for expensive item purchase"],
      "spf-payout": ["Seller qualified for enhanced protection due to premium subscription benefits", "Claim amount increased under premium SPF ceiling policy", "Additional coverage provided for high-risk category products"],
      "pincode-block": ["Area identified as high-risk based on historical fraud data and delivery failures", "Multiple fraud incidents reported from this location in recent weeks", "Delivery partner marked location as unsafe for high-value deliveries"],
      "field-executive": ["Seller requested change due to delivery quality issues and customer complaints", "Previous executive had multiple failed delivery attempts", "Service improvement initiative to enhance customer satisfaction"],
      "smartcheck": ["Custom checklist verification revealed brand authenticity issues", "Serial ID verification prevented counterfeit product return", "Logo and branding checks confirmed product genuineness"]
    };
    return reasons[type][index % reasons[type].length];
  };

  const getImpactByType = (type: string, index: number) => {
    const impacts = {
      "order-verification": ["Prevented ₹4,560 fraud loss", "Saved ₹8,200 potential chargeback", "Avoided ₹12,300 fake order"],
      "fake-reviews": ["Protected brand reputation", "Prevented rating drop", "Maintained 4.2★ average"],
      "doorstep-verification": ["Confirmed ₹15,600 order", "Prevented return fraud", "Ensured customer satisfaction"],
      "return-fraud": ["Saved ₹6,800 inventory loss", "Prevented ₹3,200 refund", "Protected ₹9,100 revenue"],
      "part-payment": ["Reduced COD risk by 60%", "Secured ₹18,500 payment", "Prevented fraud attempt"],
      "spf-payout": ["Enhanced claim by ₹5,000", "Premium benefit applied", "Higher protection activated"],
      "pincode-block": ["Prevented 12 risky deliveries", "Saved ₹45,000 potential loss", "Reduced RTO by 25%"],
      "field-executive": ["Improved delivery success 85%", "Enhanced customer rating", "Reduced complaints by 40%"],
      "smartcheck": ["Prevented counterfeit return", "Saved ₹7,500 inventory", "Protected brand integrity"]
    };
    return impacts[type][index % impacts[type].length];
  };

  const getDetailsByType = (type: string, index: number) => {
    return {
      productName: ["Nike Air Max", "Samsung Galaxy", "Apple iPhone", "Zara Jacket", "Sony Headphones"][index % 5],
      customerLocation: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Pune"][index % 5],
      orderValue: Math.floor(Math.random() * 20000) + 1000,
      riskScore: Math.floor(Math.random() * 100),
      gmvImpact: Math.floor(Math.random() * 15000) + 2000,
      rtoReduction: Math.floor(Math.random() * 30) + 10,
      rvpImpact: Math.floor(Math.random() * 20) + 5
    };
  };

  const activities = useMemo(() => generateActivities(), []);

  const filteredActivities = activities.filter(activity => {
    const matchesType = filterType === "all" || activity.typeId === filterType;
    const matchesDateRange = (!startDate || activity.date >= startDate) && (!endDate || activity.date <= endDate);
    return matchesType && matchesDateRange;
  });

  if (!isPremium) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Fraud Protection Activity
            <Lock className="w-4 h-4 text-gray-400" />
          </CardTitle>
          <CardDescription>
            Detailed activity logs available with Premium subscription
          </CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Fraud Protection Activity
        </CardTitle>
        <CardDescription>
          Comprehensive log of all fraud prevention actions taken ({activities.length} total incidents)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[240px]">
                <SelectValue placeholder="Filter by protection type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Protection Types</SelectItem>
                <SelectItem value="order-verification">Order Verification</SelectItem>
                <SelectItem value="fake-reviews">Fake Reviews</SelectItem>
                <SelectItem value="doorstep-verification">Doorstep Verification</SelectItem>
                <SelectItem value="return-fraud">Return Fraud</SelectItem>
                <SelectItem value="part-payment">Part Payment</SelectItem>
                <SelectItem value="spf-payout">SPF Payout</SelectItem>
                <SelectItem value="pincode-block">Pincode Block</SelectItem>
                <SelectItem value="field-executive">Field Executive</SelectItem>
                <SelectItem value="smartcheck">SmartCheck</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Input
                type="date"
                placeholder="Start date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full sm:w-auto"
              />
              <Input
                type="date"
                placeholder="End date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Activities Table */}
          <ScrollArea className="h-[600px] w-full border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Action Type</TableHead>
                  <TableHead>Listing</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredActivities.map((activity) => (
                  <TableRow key={activity.id} className="hover:bg-gray-50">
                    <TableCell className="text-sm">
                      <div>
                        <div>{activity.date}</div>
                        <div className="text-gray-500 text-xs">{activity.time}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <activity.icon className="w-4 h-4 text-blue-600" />
                        <div>
                          <div className="text-sm font-medium">{activity.type}</div>
                          <div className="text-xs text-gray-500">{activity.action}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{activity.listingId}</TableCell>
                    <TableCell className="max-w-xs">
                      <div className="text-sm text-gray-600 truncate" title={activity.reason}>
                        {activity.reason.substring(0, 50)}...
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {activity.impact}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Info className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <activity.icon className="w-5 h-5 text-blue-600" />
                              {activity.action}
                            </DialogTitle>
                            <DialogDescription>
                              Incident Details - {activity.date} at {activity.time}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2">Incident Information</h4>
                                <div className="space-y-1 text-sm">
                                  <p><span className="font-medium">Listing ID:</span> {activity.listingId}</p>
                                  <p><span className="font-medium">Product:</span> {activity.details.productName}</p>
                                  <p><span className="font-medium">Location:</span> {activity.details.customerLocation}</p>
                                  <p><span className="font-medium">Order Value:</span> ₹{activity.details.orderValue.toLocaleString()}</p>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Impact Analysis</h4>
                                <div className="space-y-1 text-sm">
                                  <p><span className="font-medium">Risk Score:</span> {activity.details.riskScore}/100</p>
                                  <p><span className="font-medium">GMV Impact:</span> ₹{activity.details.gmvImpact.toLocaleString()}</p>
                                  <p><span className="font-medium">RTO Reduction:</span> {activity.details.rtoReduction}%</p>
                                  <p><span className="font-medium">RVP Impact:</span> {activity.details.rvpImpact}%</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Detailed Reason:</h4>
                              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                                {activity.reason}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Business Impact:</h4>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{activity.impact}</Badge>
                                <span className="text-sm text-green-600">
                                  Protected revenue and brand reputation
                                </span>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>

          <div className="text-center text-sm text-gray-500">
            Showing {filteredActivities.length} of {activities.length} incidents
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FraudActivityDashboard;
