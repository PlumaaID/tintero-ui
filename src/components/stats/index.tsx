import { DollarSign, Sigma, Signature } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Stats = () => (
  <div className="grid auto-rows-min gap-4 md:grid-cols-3">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total Value Locked
        </CardTitle>
        <Sigma className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$7,320,830.89</div>
        <p className="text-xs text-muted-foreground">across all vaults</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$1,200,327.43</div>
        <p className="text-xs text-muted-foreground">
          in paid interest to lenders
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Allocated</CardTitle>
        <Signature className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">across all active loans</p>
      </CardContent>
    </Card>
  </div>
);

export default Stats;
