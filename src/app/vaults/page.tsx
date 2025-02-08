"use client";
import { Card } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Stats from "~/components/stats";
import {
  BriefcaseBusiness,
  Coins,
  DollarSign,
  Handshake,
  PaintBucket,
  SquareStack,
} from "lucide-react";
import vaults from "~/lib/vaults";
import { useMemo } from "react";
import VaultRow from "./_components/vault-row";

export default function Vaults() {
  const vaultValues = useMemo(() => Array.from(vaults.values()), []);

  return (
    <>
      <Stats />
      <div className="mx-2 my-4">
        <h2 className="text-2xl font-bold">Deposit on a vault</h2>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center">
                  <Coins className="w-4 h-4 mr-2" />
                  Asset
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <PaintBucket className="w-4 h-4 mr-2" />
                  Provider
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Total Assets
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <BriefcaseBusiness className="w-4 h-4 mr-2" /> Managers
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <Handshake className="w-4 h-4 mr-2" /> Delegates
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <SquareStack className="w-4 h-4 mr-2" /> Actions
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vaultValues.map((vault) => (
              <VaultRow vault={vault} key={vault.provider} />
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
